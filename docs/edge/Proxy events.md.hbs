---
title: 'Proxy events'
---

*See also: {{{createLink 'method calls' 'method calls from templates'}}}*

Ractive has a concept of *proxy events*, which translate a user *action* (e.g. a mouseclick) defined via an {{{createLink 'event directives' 'event directive'}}} into an *intention* (e.g. 'select this option'). This allows you to handle user interaction in a readable, declarative fashion, without resorting to peppering your markup with class names to use as 'hooks' (which must then be kept consistent between your markup and your JavaScript code).

As with all events in Ractive, you subscribe with {{{createLink 'ractive.on()'}}} (also see {{{createLink 'publish-subscribe'}}}). Proxy events declare the handler name of the event that will be fired, along with any optional arguments:

```js
ractive = new Ractive({
  el: 'body',
  template: '<button on-click="activate">click me!</button>'
});

ractive.on( 'activate', function ( event ) {
  alert( 'Activating!' );
});
```

In this example, it is `activate` (and not `click`!) that is the name of the handler event that will be fired for any registered handlers created via {{{createLink 'ractive.on()'}}}.

## Event arguments

### The `event` object

The first argument to a proxy event handler is always a Ractive `event` object. It contains various properties:

* `event.name` - the name of the event, in this case 'activate'
* `event.node` - the DOM node in question
* `event.component` - the component that raised the event, only present on {{{createLink 'event bubbling' 'bubbled events'}}}
* `event.original` - the original DOM event, if available

The event is also a context object with a number of context-relative methods. See {{{createLink 'Ractive.getNodeInfo()' 'node info helpers' 'helpers'}}} for more details.

The event object is also available in event handlers using `this.event`, see {{{createLink 'publish-subscribe' 'publish-subscribe' 'accessing-the-event-object'}}} for more details.

### Cancelling DOM events

If you return `false` from a proxy event handler, ractive will automatically call both `preventDefault()` and `stopPropagation()` on the original DOM event.

Note that returning `false` has a dual purpose of both cancelling further bubbling up the view hierarchy {{{createLink 'Event bubbling' 'event bubbling'}}} __as well as__ cancelling the DOM Event if the event was DOM-based.

If you only want to cancel the DOM event, you can call the appropriate methods directly on `event.original` or `this.event.original`, which are both references to the current DOM event object.


## Reserved event names

Note: the built-in {{{createLink 'lifecycle events'}}} are **reserved**, which means you can't use their names as proxy events.
