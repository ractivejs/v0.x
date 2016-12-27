---
title: 'Lifecycle events'
---

Every Ractive instance has a *lifecycle* - it is created, then rendered, and eventually may be changed and 'torn down'. You can subscribe to these *lifecycle events* using {{{createLink 'ractive.on()'}}}:


```js
ractive = new Ractive({
  el: 'body',
  template: myTemplate
});

ractive.on( 'teardown', function () {
  alert( 'Bye!' );
});
```

You can also add handlers as {{{createLink 'Options' 'initialisation options'}}}:

```js
ractive = new Ractive({
  el: 'body',
  template: myTemplate,
  onteardown: function () {
    alert( 'Bye!' );
  }
});
```

The full list of lifecycle events is as follows:

| Name            | Event is fired...
| --------------- | --------------
| `attachchild`   | ...when the instance is attached to a parent with {{{createLink 'ractive.attachChild()'}}}
| `construct`     | ...as soon as `new Ractive(...)` happens, before any setup work takes place
| `config`        | ...once all configuration options have been processed
| `detachchild`   | ...when the instance is detached from a parent with {{{createLink 'ractive.detachChild()'}}}
| `init`          | ...when the instance is ready to be rendered
| `render`        | ...each time the instance is rendered (normally only once)
| `complete`      | ...after `render`, once any intro {{{createLink 'transitions'}}} have completed
| `change`        | ...when data changes
| `update`        | ...after `ractive.update()` is called
| `unrender`      | ...each time the instance is unrendered
| `teardown`      | ...each time the instance is destroyed (after `unrender`, if the teardown is responsible for triggering the unrender)
| `destruct`      | ...after `teardown`, once any outro {{{createLink 'transitions'}}} have completed
| `insert`        | ...each time `ractive.insert()` is called
| `detach`        | ...each time `ractive.detach()` is called (note: `ractive.insert()` calls `ractive.detach()`)

<br>
Lifecycle events receive their source Ractive instance as their _last_ argument. Aside from that, most events have no other arguments, except for the following, which have an argument _before_ the source instance:

* `construct` supplies the actual initialisation options provided to the instance constructor
* `change` supplies a change object with each change keypath as a property and the new change value as the value of that property

## Reserved event names

Note: the built-in lifecycle events are **reserved**, which means you can't use their names as {{{createLink 'proxy events'}}}.
