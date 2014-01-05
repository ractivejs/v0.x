[[Home]] > [[Plugins]] > [[Components]]

In many situations, you want to encapsulate behaviour and markup into a single reusable *component*, which can be dropped in to Ractive applications.

First, you need to **create the component** with [[Ractive.extend()]], which allows you to define a template, initialisation behaviour, default data, and so on. (If you're not familiar with Ractive.extend() you should read that page first.)

```js
var MyWidget = Ractive.extend({
  template: '<div on-click="activate">{{message}}</p>',
  init: function () {
    this.on( 'activate', function () {
      alert( 'Activating!' );
    });
  },
  data: {
    message: 'No message specified, using the default'
  }
});
```

Then, you need to **register the component** by adding it to `Ractive.components`:

```js
Ractive.components.widget = MyWidget;

// or, if you don't want to make it globally available,
// you can use it with only a single Ractive instance
var ractive = new Ractive({
  el: 'body',
  template: mainTemplate,
  components: {
    widget: MyWidget
  }
});
```

Finally, you **use the component** by referring to it within another template:

```html
<div class='application'>
  <h1>I've got a widget</h1>
  <widget message='Click to activate!'/>
</div>
```

Using the 'widget' component like this is more or less equivalent to doing the following:

```js
new MyWidget({
  el: document.querySelector( '.application' ),
  append: true, // so the component doesn't nuke the <h1>
  data: {
    message: 'Click to activate!'
  }
});
```


## Binding

Instead of passing a static message ('Click to activate!') through, we could have passed a dynamic one:

```html
<widget message='{{foo}}'/>
```

In this case, the value of `message` within the component would be bound to the value of `foo` in the parent Ractive instance. When the value of parent-`foo` changes, the value of child-`message` also changes, and vice-versa.


## Events

You can subscribe to events that emanate from a component in the normal way. For example, our widget template contains a `<div>` element with an `on-click="activate"` directive. We're listening for that event inside the MyWidget `init` method, but we can also listen for it like so:

```html
<widget on-activate="doSomething"/>
```
```js
ractive.on( 'doSomething', function () {
  alert( 'Widget activated!' );
});
```

(The same goes for any events that are fired programmatically by the component, rather than as a result of user interaction.)


## Caveat

Components are a stable feature, but still relatively new - certain aspects have yet to be implemented. Pardon the dust! There is a [long-running GitHub issue](https://github.com/RactiveJS/Ractive/issues/74), which may be of interest.