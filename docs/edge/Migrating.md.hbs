---
title: 'Migrating to Edge'
---

Many of these migration notes are cribbed from the [CHANGELOG](https://github.com/ractivejs/ractive/blob/dev/CHANGELOG.md). While we strive to minimise breaking changes, and to highlight the ones we do introduce, if you discover an undocumented breaking change please edit this page.

## Migrating from 0.8.x

0.9 is a much more evolutionary change from 0.8. The biggest breaking changes are that there is no longer a legacy version supplied, so you must bring your own polyfills, and deprecations have been removed. When 0.9 is released, there will likely be a packaged polyfills script distributed with Ractive to make assembling the necessary polyfills easier.

### What's new

#### Stable

`target` is now an alias for `el` when creating a Ractive instance.

You can now use spread expressions with array and object literals in expressions in addition to method calls. Object spreads will require `Object.assign` to be available.

There is a new lifecycle hook, `destruct` that fires after teardown is complete and any related transitions have completed.

Lifecycle events now receive the source Ractive instance as their last argument.

You can now use context-relative `observe` and `observeOnce` from event and node info objects.

You can now access decorator objects from event and node info objects using `obj.decorators.name`, where name is the decorator name as specified in the template e.g. `foo` in `<div as-foo />`.

#### Unstable (pending feedback to stabilize in 0.10)

You can now create cross-instance links by passing an options object with a target instance e.g. `this.link('source.path', 'dest.path', { ractive: sourceInstance })`. This covers many of the cases handled by the `ractive-ractive` adaptor in a considerably more efficient manner.

There is now an API to manage embedding external instances i.e. out-of-template components. You can use `ractive.attachChild(otherRactive, { options })` and `ractive.detachChild(otherRactive)` to create a component relationship between two instances. There is a new anchor construct `<#anchorName />` that behaves mostly like a regular inline component except that it won't create its own Ractive instance. You can target an anchor when attaching a child by giving an anchor name as an option e.g. `ractive.attachChild(otherRactive, { target: 'anchorName' })`. Attached children need not be components, so you can attach a plain Ractive instance e.g. `const foo = new Ractive({ ... }); ractive.attachChild(foo);`.

`\{{yield}}` can now be used with any partial, not just inlines, and it may also use an expression to look up the target partial. It basically behaves as a regular partial with a special context. `\{{yield}}` can also specify aliases, so that yielding is useful inside an iterative section. `\{{yield partialName with foo as bar}}` and `\{{yield with foo as bar}}` will make `foo` from the component context available to the `partialName` partial as `bar`.

You can specify that child keypaths of computations should trigger updates on the computation's dependencies, which _should_ have the effect of keeping the models involved in the computation in sync with changes to the computed models. The flag to enable this behavior at instance creation is `syncComputedChildren: true`. With that flag set, children of computations are available for two-way binding and mutation from event or `getNodeInfo` objects using relative keypaths.

`@.foo` has been introduced as shorthand for `@this.foo`. This mirrors the data shorthand `.foo` for `this.foo`.

You can now pop contexts using `^^/` in the same way that you can pop keypaths with `../`.

Special keypaths that resolve to Ractive instances now resolve using the proper model rather than a computation, so they now stay in sync.

There is now a special key `data` on special keypaths that resolve to Ractive instances that resolves to the instance's root model. This allows things like `@.root.data.foo` to keep the root instance `foo` reference in sync throughout the component tree.

There is a new Ractive-private shared store, `@shared`. This is roughly the same as `@global`, but it is not susceptible to interference from the global scope.

There is a new option, `resolveInstanceMembers`, which defaults to `true`, and when enabled, it adds the instance scope `@this` to the end of the reference resolution process. This means that as long as there are no conflicting members in the context hierarchy, things like `<button on-click="set('foo', 'bar')">yep</button>` work as expected. Note that the resolved function will only be bound to the instance if it contains a `this` reference, which can be a little strange if you're debugging.

There is a new option, `warnAboutAmbiguity`, which defaults to `false`, and when set, it will issue a warning any time a reference fails to resolve at all or fails to resolve to a member in the immediate context.

API methods can now handle things like `ractive.set('~/foo', 'bar')`, mirroring how context methods for `getNodeInfo` and `event`s are handled. Things like `ractive.set('.foo', 'bar')` will now issue a warning and do nothing rather than creating an incorrect keypath (`<empty string>.foo`).

You can now trigger event listeners in the VDOM from event and node info objects e.g. with `<div on-foo="@global.alert('hello')" >` with `ractive.getNodeInfo('div').raise('foo');` will trigger an alert.

There are two new options available for subscribing events and observers when an instance is created using two new options.
* `on` takes a hash of event listeners that will be subscribed just after the `construct` phase of instantiation, meaning that any lifecycle events after `construct` may also have listeners added in the event hash.
* `observe` takes a hash of observers that will be subscribed just after the `config` phase of instantiation.
* Both of these options are additive, so any subscriptions defined in component super classes are applied first in sequence from the root of the component class hierarchy down to the options of the instance being created.
* The hashes can contain keys that could be passed directly to the matching method e.g. `ractive.on( key, ... )` or `ractive.observe( key, ... )`.
* The hashes can contain values that are either a callback function or an object that has a `handler` property that is a callback function. If the object form is used, any additional keys are passed to the method. If a `once` property is supplied and is truthy, then the appropriate single-fire method will be used to subscribe. For instance `observe: { 'foo.* bar': { handler() { ... }, strict: true, once: true, defer: true } }` passed in an options object is equivalent to calling `ractive.observeOnce( 'foo.* bar', function() { ... }, { strict: true, defer: true } )` during the `init` phase of instantiation.

Event listener handles return from `ractive.on( ... )` now have methods to silence and resume the listener. The existing `cancel()` method now has siblings `isSilenced()`, `silence()`, and `resume()`. When a listener is silenced, it will not call its callback.

Like event listeners, observer listener handles also have methods to silence and resume the listener. While an observer is silenced, it will still track state changes internally, meaning the old value on the next call after being resumed will be the last value it observed, including those observed while it was silenced. It simply won't fire its callback while it is silenced.

You can now stop component outros from firing while a component is being unrendered by specifying `noOutro: true`, which mirrors the behavior of `noIntro`.

You can now specify whether or not transitions should occur if they are on a child element of another transitioning element by using:
* Instance option `nestedTransitions`, which defaults to `true`, meaning that transitions will fire whether they are on elements that are children of other transitioning elements or not.
* The transition option `nested`, which also defaults to `true`.

There's a new `ractive` command distributed with the node module that allows easy pre-parsing of templates and building of components. If you have the module installed locally, see `./node_modules/.bin/ractive` for more details.

### Breaking changes and deprecations

* All deprecations have been removed, including proxy events with args, un-prefixed method events, decorator="...", transition="...", the ractive.data getter, partial comment definitions, and lifecycle methods like `init` and `beforeInit`.

* The template spec is now a bit simpler after the removal of deprecations, and templates parsed with previous versions of Ractive are no longer compatible.

* Partial context (`\{{>foo thisIsTheContext}}`) now only applies inside the partial template, meaning it is no longer equivalent to `\{{#with thisIsTheContext}}\{{>foo}}\{{/with}}`. The with is wrapped around the content of `foo`, so that the context doesn't interfere with the partial expression.

* Any partial may be yielded, so yielding non-inline partials will no longer warn.

* The same partial may be yielded multiple times.

* Events now fire in an initial implicit `this.` namespace. This means that with `this.on( '*.foo', handler )`, `handler` will be called if and component fires a `foo` event or if the `this` instance fires a `foo` event.

* The `noIntro` option now applies to any nested components that are also being rendered, unless they have their own explicit setting.

* Legacy builds removed. Only regular and runtime builds are now available.
	* `Promise` shim required for IE11.
	* `requestAnimationFrame` polyfill required for IE10.
	* es5-shim required for non-ES5 browsers.

* `ractive.nodes` no longer contains elements by id. The same functionality can be handled more safely and conveniently with a decorator.

## Migrating from 0.7.x

### What's new

Ractive's data handling has been completely rewritten to use a full viewmodel hierarchy as opposed to the previous hashmap-like implementation. This has made the code much easier to reason about, and it should also eliminate many data-related bugs. It also has made large swaths of Ractive considerably faster.

Spread arguments (`...arguments`) and `arguments` access is now available for method event handlers. Individual arguments are available using array notation (`arguments[n]`), dot notation (`arguments.0`), or `1`-based dollar vars, like regular expression matches (`$1`, `$2`, etc).

There is now support for linking data to extra keypaths in the model. This is particularly handy for master-detail scenarios where you have a complex list of objects and you want to focus on a single one at a time. A keypath like `'foo.bar.bazzes.0'` can be linked to `'baz'` so that the detail section doesn't have to worry about a non-bindable expressions or copying objects around. Both sides of the link are automatically kept in sync. See {{{createLink 'ractive.link()'}}}.

You can now use ES2015 object literal shorthand in templates e.g. `{ foo }` is equivalent to `{ foo: foo }`.

If you have object keys with `.`s in them, you can now escape them with a `\`. So if you have a `bar` object with a `foo.baz` property, it can be accessed with `bar.foo\.baz`. Keypaths in the template are given as escaped paths so that they can be used directly with Ractive methods. There are also a few new static methods on `Ractive` to deal with escaping, unescaping, splitting, and joining keypaths.

`<textarea>`s now handle HTML content as plain text to match what happens in browsers. They can now also set up two-way binding with a single interpolator as content instead of using the value attribute e.g. `<textarea>\{{someBinding}}</textarea>` is equivalent to `<textarea value="\{{someBinding}}"></textarea>`.

Progressive enhancement is now supported with a few limitations (see {{{createLink 'options' 'enhance' 'enhance'}}}). If you pass `enhance: true` when creating your Ractive instance, it will not discard the contents of its target element and will instead try to reuse elements and nodes as it builds the virtual DOM from its template. This option is incompatible with the `append` option.

The `Object`, `String`, and `Boolean` globals are now accessible from within templates.

You can now set up aliases with context and iterative mustache sections that can be used to clarify templates and avoid issues with object-literal context sections and two-way binding. For context sections, use `\{{#with someExpressionOrRef as alias1, some.deeply.nested[reference].expression as alias2}}...\{{/with}}` to set up as many aliases as you need. For iterative sections, you can alias the context with the iteration (the current item) by using `\{{#each some.list as item}}...\{{/each}}`. Partial contexts also support aliasing, since partial context is just a shortcut for `\{{#with context}}\{{>partial}}\{{/with}}`, as `\{{>somePartial some.path as alias1, some.other[expression](arg1, arg2) as alias2}}`.

There is a new CSP-compatible parsing mode that collects all of the expressions in the template at the end of the parse and stores them as `function`s on the template root. At render-time, any expressions look for a corresponding pre-built function before using `new Function(...)` to create one. Templates parsed in this way are no longer JSON compatible. To enable this mode, pass `csp: true` when pre-parsing your template.

If your environment supports it, you can now use Unicode characters from the Supplementary Multilingual Plane and the Supplemental Idiographic Plane in your templates.

There are two new special references available on your templates for access to the current Ractive instance and your environment's global object. `@this` will resolve to the nearest Ractive instance in the template, which includes components should the template belong to one. `@global` resolves to `window` in most browsers and `global` in Node.js. Both special references are also available outside of the template so that Ractive can be notified of changes outside the template easily.

Keywords can now be used as references, so you can now use `new`, `if`, `while`, etc as references.

Keypaths within components are now adjusted to be relative to the component. If you need to access the path to the data relative to the root instance, you can use the new special reference `@rootpath`.

Partials defined in `<script>` tags can now contain top-level inline partial definitions that will get added to the instance along with the scripte-defined partial.

You can now retrieve the CSS for a Ractive instance with a new `toCSS` method. You can also get the CSS for all instances with a new static Ractive method of the same name.

You can now trigger a transition with `ractive.transition( transition, node, options )`, and `node` can be supplied implicitly from an event handler. Transitions can now return a Promise and `complete` will automatically be called when the promise resolves.

Class and style attributes now get special treatment that keeps them from clobbering external changes. There are also special attribute forms for targeting a single class or inline style at a time using e.g. `style-left="\{{x}}px"` and `class-someClass="\{{someCondition || someOtherCondition}}"`. For the special style form, additional hyphens in the attribute are turned into camel case. For the special class form, the truthiness of the value determines whether or not the class is added to the list.

As `set` will create intermediate objects when setting an undefined keypath, array methods will now swap in an empty array instead of erroring when called with an undefined keypath. Trying to use an array method with a non-array value including `null` will still throw.

Event objects created by event directives and the results of {{{createLink 'Ractive.getNodeInfo()'}}} are now enhanced with a number of contextual helper methods to make interacting with Ractive in template-relative contexts programmatically easier. The old node info object properties are now deprecated, and their functionality has been replaced by the `resolve` and `get` methods.

Transitioning elements will not longer keep unrelated elements from being removed. Transitions now have a safety check that forces them to complete within a short interval from their target duration, which keeps misbehaving transitions and browsers from causing elements to get stuck in the DOM.

`elseif` and `else` blocks no longer include previous blocks' conditions in their own, so expensive computations are no longer repeated and conditions for `elseif` are no longer forced to be an expression. Instead, subordinate blocks connect with their siblings when they render and only show if all prior siblings have falsey conditions.

`merge` can now be called with the same array that exists at the given keypath, and the differences will be computed from the model's cached array members. This allows extensive in-place modification of an array to be handled as a series of splice operations but in a single operation. Note that `merge` may be moved to a `set` option at some pooint in the future.

### Breaking changes and deprecation

* **Templates parsed with previous versions of Ractive are no longer compatible.**

* IE8 is no longer supported.

* Two-way binding is no longer allowed in computed contexts e.g. `\{{#each filter(someList)}}<input value="\{{.prop}}" />\{{/each}}` because changes to the computed child (`filter(someList).0.prop` aren't kept in sync with their source (`someList.?.prop`) as Ractive doesn't know how to reverse the expression. There is an ongoing discussion about how to address this, including an open PR that would put this behavior behind a flag and attempt to keep the sources up to date as the computation children changed.

* Names in partial mustaches have been further relaxed to allow `/`s. They can also now handle relative contexts because partial name expressions no longer support spaces around the `.` delimiters in object paths. `\{{> foo.bar.baz .bat}}` before this change would have parsed as a single expression to get the partial name from `foo.bar.baz.bat`. It will now get the name from `foo.bar.baz` and have a context provided from `.bat`.

* Other elements are no longer allowed within `<option>` elements.

* Integer literals in interpolators are now considered to be integer literal expressions rather than references. They were considered references before so that you could access array members by index within a context. If you need to access an array member within a context section, you can still do so with `\{{this.0}}`.

* The private `_ractive` tracking data added to Ractive controlled DOM nodes has changed significantly. The format of `Ractive.getNodeInfo` objects is still compatible.

* `\{{#with obj}}` will no longer render if `obj` is falsey (https://github.com/ractivejs/ractive/issues/1856)

* Method event calls and proxy events with arguments are now deprecated and being replaced with {{{createLink 'Method calls' 'event expressions' }}}.

* {{{createLink 'events' 'Event objects' }}} now have fairly comprehensive contextual helpers installed on them. The old `keypath`, `key`, `index` properties are deprecated.

* Element directives are now supported inside of conditionals. Part of this change and that of event expressions has changed the template format, and this, compiled templates from previous versions of Ractive are no longer compatible. The template syntax, while evolved, is still compatible with previous versions. Some of the deprecated constructs will be removed in a future version.

* The `intro`, `outro`, and `intro-outro` directives have been deprecated and replaced by named and suffixed directives `${name}[-in][-out]` e.g. `fade-in-out`. Arguments passed to these directives should no longer be wrapped in mustaches, as they are parsed as an array. Dynamism for transitions can be achieved with attribute sections.

* The `decorator` directive has similarly deprecated and replaced by prefixed and named directives `as-${decorator}` e.g. `as-ace-editor`. Arguments passed to these directives should also no longer be wrapped in mustaches, as they are also parsed as an array. Multiple decorators are now supported by simply including multiple directives e.g. `as-registered="'some-id'" as-validated="{ maxLen: 10, match: /^foo/ }"`.

* Accessing expression models via keypath is now deprecated and will be removed in a future version. Expression keypaths can overlap, which can cause unexpected things to happen for the overlapping paths. You can now use context methods on an event or node info object with relative keypaths to interact with expression contexts. For example: `\{{#with some.expression()}}<button on-click="@this.set(@keypath + '.foo', 42)">set .foo to 42</button>\{{/with}}` would become `\{{#with some.expression()}}<button on-click="event.set('.foo', 42)">set .foo to 42</button>\{{/with}}`.

* `modifyArrays` now defaults to `false`. If you modify arrays using splice operations directly, you will need to notify Ractive to sync with the changes afterwards.

## Migrating from 0.6.x

### What's new

Components can now access their parents and containers using an official API.

Binding directives may be set on elements that support two-way binding. These directives override the settings on the Ractive instance for `twoway` and `lazy`.

Single-fire versions of `ractive.on` and `ractive.observe` are now available as `ractive.once` and `ractive.observeOnce`.

Inline partials can now be defined within a new section `\{{#partial partial-name}}...\{{/partial}}`. The old comment syntax is now deprecated and will be removed in a future release.

Inline partials are now scoped to their nearest element. If a partial reference sits in the template below an element with a matching inline partial, the inline partial will be used in the reference. This can be used as a sort of partial inheritance. If an inline partial is defined directly within a component tag or the root of the template, it will be added to the Ractive instance.

Components may now yield to multiple inline partials by supplying the partial name with yield e.g. `\{{yield some-name}}`. Yielding without a name will still result in non-partial content being yielded. Only inline partials may be yielded. Any partials, including inline and inherited, may still be referenced within a component using a plain partial section e.g. `\{{>partial}}`.

Partials can now be reset without resorting to manually un/re-rendering them using a wrapping conditional section. This can be done with the new `resetPartial` {{{ createLink 'Ractive.resetPartial()' 'method' }}} on Ractive instances.

`this.event` is now available to method-call event handlers.

Regular expression literals can now be used in template expressions.

You can now escape mustaches with a '\' if you'd like them to appear in the template.

`ractive.toggle` now works with patterns.

The debug setting is no longer set per-instance. It has been replaced with `Ractive.DEBUG`, which defaults to true. You can set it automatically based on whether or not the your code has been minified with:
```js
Ractive.DEBUG = /unminified/.test(function(){/*unminified*/});
```

### Breaking changes and deprecation

* `twoway` and `lazy` are now reserved attribute names to be used as binding directives.
* Inline partials now belong to their nearest element.
* The comment syntax for inline partials is now deprecated.
* `elseif` is now a reserved identifier.
* `ractive.data` is no longer available. Use `ractive.get()` to get a shallow copy of the data with any component mappings.
* Child data always overrides parent data, whether it is a POJO or not.
* `ractive.debug` has been replaced with the global `Ractive.DEBUG` flag.

## Migrating from 0.5.x

### Lifecycle events

Ractive instances now emit *lifecycle events*. If you use `Ractive.extend(...)` with `init()`, `beforeInit()` or `complete()`, you will need to replace them - they will continue to work, but will be removed in a future version.

`init()` can be replaced with one of the following methods, or you may need to split your code into both methods. Use `onrender()` for code that needs access to the rendered DOM, but is safe being called more than once if you unrender and rerender your ractive instance. Use `oninit()` for code that should run only once or needs to be run regardless of whether the ractive instance is rendered into the DOM.

The `init()` method also no longer recieves an `options` parameter as the ractive instance now inherits _all_ options passed to the constructor. You can still access the options directly using the `onconstruct()` method.

`beforeInit()` and `complete()` can be replaced directly with `onconstruct()` and `oncomplete()` respectively.

See the {{{createLink 'lifecycle events'}}} page for more detail.

### Other Breaking changes

* `new Ractive()` now inherits all options as methods/properties including event hooks. If you have been passing data through custom initialisation options be aware that they will appended to your ractive instance.
* Using other elements besides `<script>` for templates is an now an error. Migrate any templates in non-script elements and include a non-javascript type so the browser does not try to interpret your template:

	```js
		<script id='template' type='text/ractive'>
			Your template goes here
		</script>
	```

* New reserved events cannot be used for proxy event names, i.e. `<p on-click='init'></p>`. These include 'change', 'config', 'construct', 'init', 'render', 'reset', 'teardown', 'unrender', and 'update'. You will need to rename your events.
* Setting uninitialised data on a component will no longer cause it to leak out into the parent scope
* 'Smart updates', via `ractive.merge()` and `ractive.shift()` etc, work across component boundaries. In most cases this is the expected behavior.
* The CSS length interpolator has been removed.


## Migrating from 0.4.x

### Breaking changes

* Errors in observers and evaluators are no longer caught
* Nodes are detached as soon as any outro transitions are complete (if any), rather than when *all* transitions are complete
* (Outdated if you are moving to `0.6.x` or above) The options argument of `init: function(options)` is now strictly what was passed into the constructor, use `this.option` to access configured value.
* `data` with properties on prototype are no longer cloned when accessed. `data` from "baseClass" is no longer deconstructed and copied.
* Options specified on component constructors will not be picked up as defaults. `debug` now on `defaults`, not constructor
* Select bindings follow general browser rules for choosing options. Disabled options have no value.
* Input values are not coerced to numbers, unless input type is `number` or `range`
* `\{{this.foo}}` in templates now means same thing as `\{{.foo}}`
* Rendering to an element already render by Ractive causes that element to be torn down (unless appending).
* Illegal javascript no longer allowed by parser in expressions and will throw
* Parsed template format changed to specify template spec version.
	* Proxy-event representation
	* Non-dynamic (bound) fragments of html are no longer stored as single string
	* See https://github.com/ractivejs/template-spec for current spec.
* Arrays being observed via `array.*` no longer send `item.length` event on mutation changes
* Reserved event names in templates ('change', 'config', 'construct', 'init', 'render', 'reset', 'teardown', 'unrender', 'update') will cause the parser to throw an error
* `\{{else}}` support in both handlebars-style blocks and regular mustache conditional blocks, but is now a restricted keyword that cannot be used as a regular reference
* Child components are created in data order
* Reference expressions resolve left to right and follow same logic as regular mustache references (bind to root, not context, if left-most part is unresolved).
* Improved attribute parsing and handling:
	* character escaping and whitespace handling in attribute directive arguments
	* boolean and empty string attributes
* Computed properties no longer create nested objects with keypath like names, i.e. `page.area: '${width} * ${height}'` creates a property accessible by `\{{page.area}}` but not `\{{#page}}\{{area}}\{{/page}}`
* The element into which the ractive instance was rendered is no longer available as `ractive.el`. See {{{createLink 'ractive.render()'}}} and {{{createLink 'ractive.insert()'}}} for more information on moving ractive instances in the DOM.
