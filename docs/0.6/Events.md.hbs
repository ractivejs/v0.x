---
title: Events
---
Like many libraries, Ractive implements the [publish/subscribe](http://addyosmani.com/blog/understanding-the-publishsubscribe-pattern-for-greater-javascript-scalability/) mechanism to allow you to trigger behaviour at certain points.

There are four types of events - [standard events](#standard), [proxy events](#proxy), [custom events](#custom), and [method events](#method). The first three use the same interface - {{{createLink 'ractive.on()'}}}:

```js
ractive = new Ractive({
  el: myContainer,
  template: myTemplate
});

ractive.on( 'teardown', function () {
  alert( 'Bye!' );
});
```

In all cases, event handlers will be called with `ractive` as `this`.

## <a name="standard"></a>Standard events

Standard events are those emitted by all Ractive instances:

###change

Fired whenever any data changes inside of a Ractive instance. To observe only on specific keypaths see {{{createLink 'Observers'}}}.

### teardown

Fired whenever {{{createLink 'ractive.teardown()'}}} is called. No arguments.


## <a name="proxy"></a>Proxy events

Proxy events are a convenient way of handling user interaction. Instead of doing `someElement.addEventListener( eventName, handler )` or `$( someSelector ).on( eventName, handler )`, you can write the name of a *proxy event* right into your template:

```html
<button on-click='activate'>Activate!</button>
<button on-click='deactivate'>Deactivate!</button>
```

```js
ractive = new Ractive({
  el: myContainer,
  template: myTemplate
});

ractive.on({
  activate: function ( event ) {
    // do something
  },
  deactivate: function ( event ) {
    // do something
  }
});
```

This way we don't have to bother traversing the DOM or storing references to elements and handlers. We also don't need to worry about removing event handlers when we detach chunks of the DOM - Ractive takes care of it.

Proxy event handlers receive an `event` argument. This isn't the same as the `event` argument you'd receive in a traditional handler (i.e. bound with `node.addEventListener` or `$(node).on()` etc), but an object with five properties:

* `node` - the relevant element
* `original` - the underlying DOM event (useful for `event.original.preventDefault()` etc)
* `keypath` - the keypath of the current context
* `context` - the value of `ractive.get(event.keypath)`
* `index` - a map of index references

The first two properties are self-explanatory, but the last three can bear explanation.

The `keypath` of the current `context` is useful if the event handler is being attached in an element that is nested within one or more sections. For instance:

```html
\{{#user}}
  \{{#contactPoints:i}}
     \{{#phone}}<button on-click="call">Call</button>\{{/}}
  \{{/}}
\{{/}}
```

```js
{
  user: {
    contactPoints: [
      { phone: { number: '8675309' } },
      { email: 'joe@college.edu' },
      { phone: { number: '011899988199911972523' } }
    ]
  }
}
```

Here, there will be two buttons rendered that will trigger the same `call` proxy event. If the first button is clicked, the keypath of the event object will be `user.contactPoints.0.phone`. If the second button is clicked, the keypath of the event object will be `user.contactPoints.1.phone`.

`context` is simply the value that resides at the `keypath`.

Since there is an index reference, `i`, set in an iteration section, the `index` property of the event object will be `{ i: 0 }` for the first button and `{ i: 1 }` for the second. If there are no index references, `index` will be undefined.

Because of the way proxy events work, they more or less eliminate the need for event delegation.

Any standard DOM event that an element supports can be used (e.g. `on-mouseover='highlight'`, `on-touchstart='dragstart'`, `on-blur='submit'`, `on-error='loadFallbackImage'`, and so on), as can non-standard {{{createLink 'event plugins'}}} such as `on-tap`.

Multiple events may be proxied to the same Ractive event by nameing them individually or stacking them within an `on-` attribute.

```html
<div on-mouseover="mouse" on-mouseout="mouse" on-mousemove="mouse" />
```
is equivalent to
```html
<div on-mouseover-mouseout-mousemove="mouse" />
```

#### Arguments

You can pass additional arguments to event handlers using expressions. The general form for doing so is `eventName:\{{expression}},...`. Additional arguments are passed to event handler functions after the event object.

```html
\{{#buttons:i}}
  <button on-click="test:\{{i}},\{{"foo"}}">Button \{{i}}</button>
\{{/}}
```

```js
ractive.on('test', function(event, i, foo) {
  // event is the event object
  // i is whatever the value of \{{i}} is where the event is bound
  // foo is the string 'foo'
});
```


*TODO - chained proxy events*

## Reserved Event Names

In order for Ractive to provide a level of notification that is desirable there are 4 reserved event names.
You may listen for these names as you would with normal events however these events will not contain the typical structure of an event that you'd exepect.

> ### change
> the change event is fired when any data changes from the template and the callback is called with a single argument that is the reference to the part of the data object that was updated.

> ### update
> the update event is fired when any data promatically changes and the callback is called with a single argument that is the new data object that was updated.

> ### reset
> the reset event is fired when the Ractive instance is reset from the `reset` function, the callback is called with an empty object

> ### teardown
> the teardown event is fired when the Ractive instance is destroyed from the `teardown` function, the callback is called with no arguments

## <a name="custom"></a>Custom events

You can easily create events of your own with {{{createLink 'ractive.fire()'}}}. This is most useful in the context of subclasses created with {{{createLink 'Ractive.extend()'}}}.

In this example, we respond to the user clicking on an item by firing a `selected` event with the item data as the first (and only) argument:

```html
<div class='catalogue'>
  \{{#items:i}}
    <div on-tap='select' data-index='\{{i}}'>
      \{{>content}}
    </div>
  \{{/items}}
</div>
```

```js
var Catalogue = Ractive.extend({
  template: catalogueTemplate,
  partials: { content: contentPartial }, // pretend we made one
  init: function ( options ) {
    var self = this, items = options.items;

    this.on( 'select', function ( event ) {
      var index = event.node.getAttribute( 'data-index' );
      self.fire( 'selected', items[ index ] );
    });
  }
});
```


## <a name="method"></a>Method events

In addition to naming a proxy event and passing arguments to it in a proxy event attribute, you may also specify a method on the Ractive instance to call using a slightly different syntax that looks like a method call. This is a more general method of handling events and can also be used to emulate proxy events as described above.

For example:
```html
\{{ counter }}
<button on-click="add('counter', 1)">Add</button>
<button on-click="subtract('counter', 1)">Subtract</button>
```

Since Ractive instances already have {{{createLink 'ractive.add()'}}} and {{{createLink 'ractive.subtract()'}}} methods, they can be used in event attributes directly instead of setting up a proxy event and adding a handler with {{{createLink 'ractive.on()'}}}.

There is also an implicit `event` variable available that is the same as the event instance that is passed to plain proxy events. Using this, you can simulate a proxy event using {{{createLink 'ractive.fire()'}}}.

```html
<button on-click="fire(event, 'proxy-event-name', someContextRef)">Go!</button>
```

```js
ractive.on('proxy-event-name', function(event, ref) {
  // event is the usual event object
  // ref is whatever someContextRef is from the template
});
```

