[[Home]] > [[Glossary]] > [[Observers]]

## Like publish/subscribe, but different

A common pattern in modern JavaScript is to make models *observable*, using the traditional [publish/subscribe](http://addyosmani.com/blog/understanding-the-publishsubscribe-pattern-for-greater-javascript-scalability/) mechanism.

For example, you can observe changes to attributes within a Backbone Model like so:

```js
model = Backbone.Model({ myValue: 1 });

model.on( 'change:myValue', function ( model, value, options ) {
  alert( 'myValue changed to ' + value );
});

model.set( 'myValue', 2 ); // alerts 'myValue changed to 2'
```

This works because `Backbone.Model.prototype` inherits from `Backbone.Events`.

Ractive implements pub/sub with [[ractive.on()]], [[ractive.off()]] and [[ractive.fire()]] - see [[Events]] for more info.


## Observing models with nested properties

But the normal pub/sub mechanism won't work for monitoring data changes with Ractive, because our data can contain nested properties. It's no good subscribing to a `change:foo.bar` event, if `foo.bar` can change as a result of `foo` changing.

So instead, we introduce the concept of *observers*.

An observer observes a particular [keypath](Keypaths), and is *notified* when the value of its keypath changes, whether directly or indirectly (because an *upstream* or *downstream* keypath changed). You create one with `ractive.observe()`.

Here's an example:

```js
ractive = new Ractive({
  el: myContainer,
  template: myTemplate,
  data: {
    foo: { bar: 1 }
  }
});

// The observer will be initialised with ( currentValue, undefined ) unless
// we pass a third `options` argument in which `init` is `false`. In other
// words this will alert 'foo.bar changed to 1'
observer = ractive.observe( 'foo.bar', function ( newValue, oldValue, keypath ) {
  alert( keypath + ' changed to ' + newValue );
});

ractive.set( 'foo.bar', 2 ); // alerts 'foo.bar changed to 2'
ractive.get( 'foo' ); // returns { bar: 2 }

ractive.set( 'foo', { bar: 3 }); // alerts 'foo.bar changed to 3'
ractive.get( 'foo.bar' ); // returns 3

observer.cancel();

ractive.set( 'foo.bar', 4 ); // alerts nothing; the observer was cancelled
```

Observers are most useful in the context of [[two‐way binding]].


## A 'gotcha' to be aware of

Observers will be notified whenever the new value is not equal to the old value - *sort of*.

What does 'not equal' mean? Well, with *primitive values* such as strings and numbers, that's easy - they're either identical (in the `===` sense) or they're not.

With objects and arrays (hereafter, just 'objects', since that's what arrays technically are), it's not so straightforward:

```js
a = { one: 1, two: 2, three: 3 };
b = { one: 1, two: 2, three: 3 };

alert( a === b ); // alerts 'false' - they look the same, but they ain't

b = a;
b.four = 4;

alert( a === b ); // alerts 'true'. Hang on, `a` didn't have a 'four' property?
alert( a.four ); // alerts '4'. Oh. Right.
```

So one the one hand, objects which look identical aren't. On the other, you can set a property of an object and have no idea whether doing so resulted in a change.

There are two possible responses to this problem. First, we could do a 'deep clone' of an object whenever we do `ractive.set(keypath, object)`, using an algorithm similar to [jQuery extend](http://api.jquery.com/jQuery.extend/#jQuery-extend-deep-target-object1-objectN). That would mean any references you held to `object` would become irrelevant. It would also mean a whole load of extra computation, and probably some very strange behaviour with cyclical data structures. No thanks.

The second is to sidestep the issue, and simply state that for the purposes of determining whether to notify observers, **no two objects are equal, even when they're identical** (unless they're both `null`, of course - since `typeof null === 'object'` due to a [bug in the language](http://www.2ality.com/2013/10/typeof-null.html)).

This is the safest, sanest behaviour, but it can lead to unexpected behaviour in one situation - accessing properties within an observer:

```js
obj = { a: { b: { c: 1 } } };

ractive = new Ractive({
  el: myContainer,
  template: myTemplate,
  data: { obj: obj }
});

// We observe 'obj.a.b.c' indirectly, and directly
ractive.observe({
  'obj': function ( newObj, oldObj ) {
    alert( 'Indirect observer: changed from ' + oldObj.a.b.c + ' to ' + newObj.a.b.c );
  },
  'obj.a.b.c': function ( newC, oldC ) {
    alert( 'Direct observer: changed from ' + oldC + ' to ' + newC );
  }
});

obj.a.b.c = 2;

// The next line will cause two alerts:
//   'Direct observer: changed from 1 to 2'
//   'Indirect observer: changed from 2 to 2' - because oldObj === newObj
ractive.set( 'obj', obj );
```

This is definitely an edge case, but one that it's worth being aware of.