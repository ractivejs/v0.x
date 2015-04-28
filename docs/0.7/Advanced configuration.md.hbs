---
title: Advanced Configuration
---
In addition to supplying static values for configurations options, some of the Ractive options
can be specified using a function that will resolve when the ractive instance is instantiated,
and re-evaluated upon {{{createLink 'ractive.reset()'}}}.

An option function may be supplied to either {{{createLink 'Ractive.extend()'}}} or {{{createLink 'new Ractive()'}}}.

Inside an option function, `this` refers to the ractive instance being instantiated.
Bear in mind that the ractive instance is in the process of being configured, so not all options
are necessarily configured yet, and functional methods like `observe` or `set` should not be called.

## Template

The template can be specified using the return value of an option function:

```js
new Ractive({
  template: function () {
    return this.get( 'foo' ) ? '<p>hello world</p>' : '<div>yes, we have no foo</div>';
  },
  data: { foo: true }
});
```
The return value can be any of the valid template options: a preparsed template,
a string that will be parsed as a template, or a string starting with `#` that refers to an element id from which
the template should be retrieved.

In general, these should be sufficient for most use cases. However, if you need to dissect templates or extract
partials dynamically, the template option function also receives an argument
with a helper parser object `p` that offers the following methods:

> ### p.fromId( id )
> Retrieves the template from the DOM `<script>` tag specified by `id`. Leading `#` is optional. Make sure to set `type='text/ractive'` on the `<script>` tag or the browser will try and execute the contents as javascript and you'll get an exception.

> ### p.isParsed( template )
> Test whether the supplied instance has already been parsed

> ### p.parse( template [, parseOptions ] )
> Parses the template via {{{createLink 'Ractive.parse()' }}}. If no `parseOptions` specified, defaults to those
> of the current instance. Full Ractive runtime must be loaded.

During a {{{createLink 'ractive.reset()' }}} operation, an option function for a template will be re-evaluated
and _if_ the return value changes the ractive instance will be re-rendered.

## Partials

The value for a named partial can also be specified using a function:

```js
new Ractive({
  template: '<div>\{{>dynamicPartial}}</div>',
  partials: {
    dynamicPartial: function () {
      return this.get( 'foo' ) ? '<p>hello world</p>' : '<div>yes, we have no foo</div>';
    }
  }
});
```

Partial option functions also receive the helper parser `p` as the second argument. This is useful in
partials as you cannot return an element id from a partial function and must use `p.fromId` to return
the template content of an element.

Partial functions also cannot directly return the string token of a registered partial. Instead,
return the value from the ractive instance:

```js
partials: {
  dynamicPartial: function () {
    // assuming this.get( 'partial' ) is the string token of a registered partial:
    return this.partials[ this.get( 'partial' ) ];
  }
}
```

## Components

A component value can be specified using an option function. The return value can either be
a component constructor or (unlike partials) the string token of a registered component:

```js
Ractive.components.Foo = Ractive.extend({...});
Ractive.components.Bar = Ractive.extend({...});

new Ractive({
  template: '<div><dynamicComponent/></div>',
  components: {
    dynamicComponent: function () {
      return this.get( 'foo' ) ? 'Foo' : 'Bar';
    }
  }
});
```

## Data

The return values of `data` functions are 'rolled up' like so:

```js
var A = Ractive.extend({
  data: function () {
    return {
      foo: 1,
      bar: 2
    }
  }
});

var B = A.extend({
  data: function () {
    return {
      bar: 3, // because B extends A, this overrides the previous value
      baz: 4
    }
  }
});

var ractive = new B({
  data: {
    baz: 5 // instance data overrides component default data
  }
});

console.log( ractive.get() ); // { foo: 1, bar: 3, baz: 5 }
```

Note: the `data` option passed to `Ractive.extend` can be an object rather than a function, but this
is discouraged as it can cause mutability-related bugs:

```js
var BuggyComponent = Ractive.extend({
  data: {
    user: { name: 'Alice' }
  }
});

var ractive1 = new BuggyComponent();
var ractive2 = new BuggyComponent();

ractive1.set( 'user.name', 'Bob' );
console.log( ractive2.get( 'user.name' ) ); // Bob, not Alice!
```

Ractive will print a warning to the console if this happens, suggesting that you use a function instead.


### Asynchronous Data

A data option function can be a handy way to fetch asynchronous data _and_ supply initial synchronous values:

```js
var SelfLoadingComponent = Ractive.extend({
  template: '...',
  data: function () {
    var instance = this;
    
    // we have to wait until *after* the instance has been
    // initialised, otherwise this will fail!
    setTimeout( function () {
      var url = 'http://api.example.com/records/' + instance.get( 'id' ) + '.json';
      
      // here we're using window.fetch - coming soon to a browser near you.
      // see https://github.com/github/fetch for more info
      fetch( url )
        .then( function ( response ) {
          return response.json();
        })
        .then( function ( record ) {
          instance.set({
            loaded: true,
            record: record
          });
        });
    });
  
    // until the AJAX request succeeds, this is
    // what the component will show
    return {
      loaded: false,
      record: null
    };
  }
});

var ractive = new SelfLoadingComponent({
  el: '...',
  data: {
    id: '123xyz'
  }
});
```
