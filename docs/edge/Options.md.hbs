---
title: Initialisation Options
section: APIReference
---

The following is an exhaustive list of initialisation options that you can pass to `new Ractive(options)`, with full descriptions grouped below by category.

Note that any additional options will be added as properties of the instance, so you can create custom methods (e.g. for calling from templates):

```js
var ractive = new Ractive({
  myMethod: function () {
    alert( 'my method was called' );
  }
});

ractive.myMethod(); // triggers the alert
```


| Option                                            | Category                               | Description |
| -----------------------------------------         | -----------                            | -----       |
| [adapt](#adapt)                                   | [data](#data-binding)                  | adaptors to use |
| [adaptors](#adaptors)                             | [data](#data-binding)                  | registry of available adaptors |
| [append](#append)                                 | [placement](#dom-placement)            | how to handle existing content in the dom |
| [complete](#complete)                             | [transitions](#transitions-animations) | fine-tune template placement in the dom |
| [components](#components)                         | [templating](#templating)              | components to include for use by the template |
| [computed](#computed)                             | [data](#data-binding)                  | computed properties to include |
| [csp](#csp)                                       | [parsing](#parsing)                    | output CSP compatible (inline functions for expressions) templates |
| [css](#css)                                       | [templating](#templating)              | component only css to include on render |
| [data](#data)                                     | [data](#data-binding)                  | the data to bind to the template |
| [decorators](#decorators)                         | [templating](#templating)              | decorators to include for use by the template |
| [delimiters](#delimiters)                         | [parsing](#parsing)                    | delimiters to use when parsing the template |
| [easing](#easing)                                 | [transitions](#transitions-animations) | easing functions to use in transitions |
| [el](#el)                                         | [placement](#dom-placement)            | render to this element in the dom (alias for target) |
| [enhance](#enhance)                               | [placement](#dom-placement)            | try to reuse existing DOM on intial render |
| [events](#events)                                 | [templating](#templating)              | events to include for use by the template |
| [interpolators](#interpolators)                   | [transitions](#transitions-animations) | interpolators to use for animating values |
| [isolated](#isolated)                             | [data](#data-binding)                  | prevent components from accessing parent data and registries |
| [lazy](#lazy)                                     | [binding](#data-binding)               | don't bind to every keypress |
| [magic](#magic)                                   | [binding](#data-binding)               | data object getters and setters that update view |
| [modifyArrays](#modifyArrays)                     | [binding](#data-binding)               | array modification methods update the view |
| [nestedTransitions](#nestedTransitions)           | [transitions](#transitions-animations) | allow or prevent transitions in children of transitioning elements |
| [noCssTransform](#noCssTransform)                 | [templating](#templating)              | prevent transformation of component css |
| [noIntro](#noIntro)                               | [transitions](#transitions-animations) | do not apply transitions on render |
| [noOutro](#noOutro)                               | [transitions](#transitions-animations) | do not apply transitions on unrender |
| [observe](#observe)                               | [shortcuts](#shortcuts)                | subscribe observers as the instance is configured |
| [on](#on)                                         | [shortcuts](#shortcuts)                | subscribe event listeners as the instance is created |
| [onchange](#onchange)                             | [lifecycle](#lifecycle-events)         | event fired when data changes
| [oncomplete](#oncomplete)                         | [lifecycle](#lifecycle-events)         | event fired once {{{createLink 'transitions'}}} have completed
| [onconfig](#onconfig)                             | [lifecycle](#lifecycle-events)         | event fired once all configuration options have been processed
| [onconstruct](#onconstruct)                       | [lifecycle](#lifecycle-events)         | event fired immediately after `new Ractive(...)`
| [ondetach](#ondetach)                             | [lifecycle](#lifecycle-events)         | event fired each time `ractive.detach()` is called
| [oninit](#oninit)                                 | [lifecycle](#lifecycle-events)         | event fired when the instance is ready to be rendered
| [oninsert](#oninsert)                             | [lifecycle](#lifecycle-events)         | event fired each time `ractive.insert()` is called
| [onrender](#onrender)                             | [lifecycle](#lifecycle-events)         | event fired each time the instance is rendered
| [onteardown](#onteardown)                         | [lifecycle](#lifecycle-events)         | event fired each time the instance is destroyed
| [onunrender](#onunrender)                         | [lifecycle](#lifecycle-events)         | event fired each time the instance is unrendered
| [onupdate](#onupdate)                             | [lifecycle](#lifecycle-events)         | event fired after `ractive.update()` is called
| [partials](#partials)                             | [templating](#templating)              | partials to include for use by the template |
| [preserveWhitespace](#preserveWhitespace)         | [parsing](#parsing)                    | don't normalize template whitespace |
| [resolveInstanceMembers](#resolveInstanceMembers) | [data](#data-binding)                  | consider ractive methods and properties when resolving refs |
| [sanitize](#sanitize)                             | [parsing](#parsing)                    | remove designated elements and event attributes |
| [staticDelimiters](#staticDelimiters)             | [parsing](#parsing)                    | one-time binding parsing delimiters |
| [staticTripleDelimiters](#staticTripleDelimiters) | [parsing](#parsing)                    | one-time binding non-escaped parsing delimiters  |
| [stripComments](#stripComments)                   | [parsing](#parsing)                    | remove HTML comments from templates |
| [syncComputedChildren](#syncComputedChildren)     | [data](@data-binding)                  | keep computation sources up-to-date when their children change |
| [target](#el)                                     | [placement](#dom-placement)            | render to this element in the dom (alias for el) |
| [template](#template)                             | [templating](#templating)              | specifies the template to use |
| [transitions](#transitions)                       | [transitions](#transitions-animations) | transitions to include for use by the template |
| [transitionsEnabled](#transitionsEnabled)         | [transitions](#transitions-animations) | allow transitions |
| [tripleDelimiters](#tripleDelimiters)             | [parsing](#parsing)                    | non-escaped parsing delimiters |
| [twoway](#twoway)                                 | [binding](#data-binding)               | prevent updates from the view back to the model |
| [warnAboutAmbiguity](#warnAboutAmbiguity)         | [data](#data-binding)                  | issue a warning whenever a reference doesn't resolve in the current context |



## Templating

> <a id="template"></a>
> ### **template** *`String` or (if {{{createLink 'preparsing'}}}) `Array` or `Object`*
> The template to use. If this is a string, it must be valid (if meaningless, until rendered) HTML:
> ```js
> template: '<p>\{{greeting}} world!</p>',
> ```

> Otherwise this must be the output of {{{createLink 'Ractive.parse()'}}}, usually precompiled for use in the browser:
> ```js
> template: parsedTemplates.foo,
> ```

> Or alternatively, you can pass an id selector string like `#myTemplate` - in this case, Ractive will use the contents of a `<script>` tag whose ID is `myTemplate`:
> ```js
> template: '#myTemplate'
> ```
> See the [60 second setup](http://ractivejs.org/60-second-setup) for an example of this.

> Make sure to set `type='text/ractive'` on the `<script>` tag or the browser will try and execute the contents as javascript and you'll get an exception. Some text editors will highlight `type='text/html'` as HTML, which can be useful and the browser will still ignore it for execution.

> If a function, the result of the function can be a string or a pre-parsed template.

> <a id="partials"></a>
> ### partials *`Object`*
> A `key: value` hash of partials that are specific to this instance, where `key` is the name of the partial (as referenced within templates as `\{{>myPartial}}`), and `value` is either a valid template string or the output of {{{createLink 'Ractive.parse()'}}}.
> ```js
> partials: {
>     myPartial: "<p>I'm a partial!<p>"
> }
> ```
> The partial name used in the template can also be used to lookup the partial by ID.  See {{{createLink 'Partials'}}} for more info.

> <a id="components"></a>
> ### components *`Object`*
> A `key: value` hash of components that are specific to this instance, where `key` is the name of the component (as referenced within templates as `<my-component></my-component>`), and `value` is a valid component created by {{{createLink 'Ractive.extend()'}}}.
> ```js
> components: {
>     'my-component': Ractive.extend({
>         template: '#componentTemplate',
>         init: function () {...}
>     })
> }
> ```
> See {{{createLink 'Components'}}} for more info.

> <a id="decorators"></a>
> ### decorators *`Object`*
> A `key: value` hash of decorators that are specific to this instance, where `key` is the name of the decorator (as referenced within templates as `<div decorator="myDecorator"></div>`), and `value` is a is a decorator functions.  See {{{createLink 'Decorators'}}} for more info.
> ```js
> decorators: {
>     'myDecorator': function( node, fire) {...}
> }
> ```

> <a id="events"></a>
> ### events *`Object`*
> A `key: value` hash of {{{createLink 'Writing event plugins' 'event plugins'}}} that are specific to this instance, where `key` is the name of the event (as referenced within templates as `<button on-mycustomevent="fire"></button>`), and `value` is the custom event plugin functions.  See {{{createLink 'Writing event plugins'}}} for more info.
> ```js
> events: {
>     'mycustomevent': function( node, fire) {...}
> }
> ```

> <a id="css"></a>
> ### css *`String`*
> Used on components to specify `css` styles to be inserted into the document.

> <a id="noCssTransform"></a>
> ### noCSSTransform *`Boolean`*
> Defaults to `false`. Prevents component css from being transformed with scoping guids.



## DOM Placement

> <a id="el"></a>
> ### el *or* target * `String` or `HTMLElement` or jQuery-like collection*

> Directives for the element to render to. Use `append` option (see below) to control whether existing content is replaced.

> * `string` id or selector, see {{{createLink 'valid selectors'}}}
> ```js
> el: '#container'
> ```
> * `HTMLElement` DOM element
> ```js
> target: document.body
> ```
> * any `obj` where `obj[0]` is an `HTMLElement`, see {{{createLink 'valid selectors' 'jquery collections' 'jquery-collections'}}}
> ```js
> el: $('#container')
> ```

> <a id="enhance"></a>
> ### enhance *`Boolean`*
> Defaults to `false`. Whether or not to try to reuse the existing DOM in the target element when rendering a.k.a. progressive enhancement. This allows you to serve the fully rendered page and then render the Ractive template at load over the pre-rendered page without completely wiping out the existing content. There are a few limitations surrounding text nodes, but all matching elements will be reused.

> This option cannot be used with `append`.

> To expand on the limitations with text nodes, since HTML does not have a markup representation for individual adjacent text nodes where the DOM does, the loaded DOM will have all text nodes merged when the document loads from the server. Ractive needs individual adjacent text nodes in certain situations like `outer text \{{#if foo}}inner text\{{/if}}`. The `'outer text '` text node is always present, and if `foo` becomes truthy, an additional text node will be inserted next to the `'outer text '` node containing `'inner text'`. It has been suggested that Ractive could also deal with merged text nodes, but that would become quite complex because there are certain scenarios where a text node would have to split and be rejoined as the model changed e.g. `outer text \{{#if foo}}<span>hello</span>\{{/if}} the other side`. In that case, if `foo` is initially falsey, the `'outer text '` and `' the other side'` nodes could be merged into a single node. However, if `foo` became truthy, that node would have to be split into two to place on either side of the `<span>`.

> Additionally, unescaped HTML mustaches (triples) don't play nicely with enhance because there's no easy way to match up the string content to the target DOM nodes. This may be remedied at some point in the future.

> <a id="append"></a>
> ### append *`Boolean` or anchor*

> Defaults to `false`. Controls whether existing content is replace and optionally where to place the rendered content.

> * `false` - rendered content replaces any existing contents of `el`
>     ```html
>     // dom
>     <div id='container'><p>existing content</p></div>
>     ```
>     ```js
>     // options
>     el: '#container',
>     append: false, //default
>     template: '<p>new content</p>'
>     ```
>     ```html
>     // result
>     <div id='container'><p>new content</p></div>
>     ```
> * `true` rendered content is appended to `el`
>     ```html
>     // dom
>     <div id='container'><p>existing content</p></div>
>     ```
>     ```js
>     // options
>     el: '#container',
>     append: true,
>     template: '<p>new content</p>'
>     ```
>     ```html
>     // result
>     <div id='container'><p>existing content</p><p>new content</p></div>
>     ```
> * anchor is any valid option as specified in `el` that resolves to an `HTMLElement`. Rendered content is appended to `el` before anchor, see {{{createLink 'ractive.insert()'}}}
>     ```html
>     // dom
>     <div id='container'><p>red</p><p>blue</p><p>yellow</p></div>
>     ```
>     ```js
>     // options
>     el: '#container',
>     append: document.querySelector('p:nth-child(2)'),
>     template: '<p>green</p>'
>     ```
>     ```html
>     // result
>     <div id='container'><p>red</p><p>green</p><p>blue</p><p>yellow</p></div>
>     ```

## Data & Binding

> <a id="data"></a><a id="data-binding"></a>
> ### data *`Object` or `Function`*
> The data with which to initialise.
> ```js
> // object
> data: { foo: 'bar' }
>
> // function
> data: function() {
>   return { foo: 'bar' };
> }
> ```

> <a id="computed"></a>
> ### computed *`Object`*
> An object that maps to a set of computed values.
> ```js
> computed: {
>     area: '${width} * ${height}'
> }
> ```
> See {{{createLink 'Computed Properties'}}} for more information and examples .

> <a id="magic"></a>
> ### magic *`Boolean`*
> Defaults to `false`. Whether or not to wrap data in ES5 accessors for automatic binding (see {{{createLink 'magic mode'}}}).
> ```js
> var data = { foo: 'bar' };
> new Ractive({ data: data } );
> // will update automagically:
> data.foo = 'fizz'
> ```
> <a id="adapt"></a>
> ### adapt *`Array`*
> Custom wrappers to be used with all or part of the supplied data, see {{{createLink 'Adaptors'}}}. Unlike components or other registries where there is a template-level directive that informs Ractive that plugin is to be used, adaptors are a data-level construct and so you use the `adapt` option to tell Ractive which adaptors are to be used with that instance. If you define the adaptors directly on the instance or component, you do not need to specify them in the `adapt` option.

> Can either be the adaptor itself, or the name of an adaptor registred via `Ractive.adaptors`:
> ```js
> Ractive.adaptors.myAdaptor = MyAdaptor1;
>
> new Ractive({
>    adapt: [ 'myAdaptor', MyAdaptor2 ]
> }
> ```
> <a id="adaptors"></a>
> ### adaptors *`Object`*
> A `key: value` hash of {{{createLink 'Adaptors' 'adaptors'}}} that are specific to this instance. Usually the `adapt` property can directly specify which adaptors
> to use on this instance and the `adaptors` property is used to register an adaptor on components or `Ractive.adaptors`.
> ```js
> adaptors: {
>     myAdaptor: MyAdaptor
> }
> ```
> <a id="modifyArrays"></a>
> ### modifyArrays *`Boolean`*
> Defaults to `false`. Whether or not to modify array mutator methods to enable frictionless data binding with lists (see {{{createLink 'array modification'}}}).
> ```js
> var items = [ 'red', 'blue' ];
> new Ractive({
>     data: data,
>     modifyArrays: true //default
> } );
> // will update automagically:
> items.push( 'green' );
> ```

> <a id="resolveInstanceMembers"></a>
> ### resolveInstanceMembers *`Boolean`*
> Defaults to `true`. Whether or not to consider instance members and properties during reference resolution. This allows un-prefixed calls to methods in event directive when there are no conflicting names e.g. `<button on-click="set('foo', 10)">click me</button>`. Assuming there isn't a `set` reference in the current context stack somewhere, this will behave the same as `<button on-click="@this.set('foo', 10)">click me</button>` when clicked.

> <a id="syncComputedChildren"></a>
> ### syncComputedChildren *`Boolean`*
> Defaults to `false`. Whether or not to update computation sources when copmutation children change. **Warning**: this can be expensive for large or complex data structures.
> ```js
> var ractive = new Ractive({
>     template: `\{{#with ~/filter(.list, 'a')}}<input value="\{{.foo}}">\{{/with}}`,
>     data: {
>       list: [ { foo: 'bar' } ],
>       filter(list, filter) { return list; } // should actually return a filtered list
>     }
> });
> ```
> With this option is enabled, when the user changes the value of the input, each dependency of the computation, in this case `filter` and `list`, will be notified that there may be a change. The result is that any other references to `list.0.foo` will be notified that it has changed.

> <a id="twoway"></a>
> ### twoway *`Boolean`*
> Defaults to `true`. Whether or not two-way data binding is enabled (see {{{createLink 'Two‐way binding'}}}).
> ```js
> var ractive = new Ractive({
>     template: '<input value="\{{foo}}">',
>     data: { foo: 'bar' },
>     twoway: false
> });
> // user types "fizz" into <input>, but data value is not changed:
> console.log( ractive.get( 'foo' ) ); //logs "bar"
> // updates from the model are still pushed to the view
> ractive.set( 'foo', 'fizz' );
> // input now displays "fizz"
> ```
> Also see [static delimiters](#staticDelimiters) for one-time binding

> <a id="lazy"></a>
> ### lazy *`Boolean`*
> Defaults to `false`. If two-way data binding is enabled, whether to only update data based on text inputs on `change` and `blur` events, rather than any event (such as key events) that may result in new data.
> ```js
> var ractive = new Ractive({
>     template: '<input value="\{{foo}}">',
>     data: { foo: 'bar' },
>     lazy: true
> });
>
> // will not fire as user is typing
> ractive.on('change', function(){
> 	  // only happens on exiting <input> or return if submit
> 	  console.log('changed!')
> })
> ```
> <a id="isolated"></a>
> ### isolated *`Boolean`*
> Defaults to `false`. This option is typically only relevant as an extension option for {{{createLink 'Components'}}}. Controls whether the component will look outside itself for data and registry items.

> <a id="warnAboutAmbiguity"></a>
> ### warnAboutAmbiguity *`Boolean`*
> Defaults to `false`. When this and `DEBUG` are enabled, any time a reference fails to resolve in the current context i.e. is ambiguous. Unambiguous references should generally be preferred to ambiguous references because they have better performance and maintenance characteristics.

## Lifecycle events

See the {{{createLink 'lifecycle events' 'main entry for lifecycle events'}}}.

## Transitions & Animations
<a id="transitions-animations"></a>

> <a id="transitions"></a>
> ### transitions *`Object`*
A `key: value` hash of transitions that are specific to this instance. The `key` is referenced within templates using `intro` and `outro` attributes on elements, and `value` is a transition functions, see {{{createLink 'Transitions'}}} for more info.
> ```js
> template: '<p intro="slide" outro="slide">hello world</p>',
> transitions: {
>     slide: function ( t, params ) {...}
> }
> ```

> <a id="transitionsEnabled"></a>
> ### transitionsEnabled *`Boolean`*
> Defaults to `true`. Whether or not transitions are enabled for this instance.

> <a id="nestedTransitions"></a>
> ### noIntro *`Boolean`*
> Defaults to `true`. Whether or not to skip transitions on elements whose parents are also transitioning.
> ```js
> var ractive = new Ractive({
>     template: '\{{#if show}}<h2>Some colors:</h2><ul fade-out>\{{#items}}<li fade-out>\{{.}}</li>\{{/items}}</ul>\{{#if}}',
>	    data: { items: [ 'red', 'blue' ], show: true },
>     transitions: { fade: function ( t, params ) {...} },
>     nestedTransitions: false
> });
>
> // the 'red' item will fade out
> ractive.shift('items');
>
> // if nestedTransitions were true, the 'blue' item would fade out before the h2 and ul would,
> // but since it's false, the li will not fade on its own
> ractive.toggle('show');
> ```

> <a id="noIntro"></a>
> ### noIntro *`Boolean`*
> Defaults to `false`. Whether or not to skip intro transitions on render.
> ```js
> var ractive = new Ractive({
>     template: '<ul>\{{#items}}<li fade-in>\{{.}}</li>\{{/items}}</ul>',
>	    data: { items: [ 'red', 'blue' ] },
>     transitions: { fade: function ( t, params ) {...} },
>     noIntro: true
> });
> // 'red' and 'blue' list items do not fade in on intro
>
> ractive.push('items', 'green');
> // 'green' list item will fade in
> ```

> <a id="noOutro"></a>
> ### noOutro *`Boolean`*
> Defaults to `false`. Whether or not to skip outro transitions on unrender.
> ```js
> var ractive = new Ractive({
>     template: '<ul>\{{#items}}<li fade-out>\{{.}}</li>\{{/items}}</ul>',
>	    data: { items: [ 'red', 'blue' ] },
>     transitions: { fade: function ( t, params ) {...} },
>     noOutro: true
> });
> ractive.unrender();
> // 'red' and 'blue' list items do not fade out
>
> ractive.render()l
> ractive.shift('items');
> // 'red' item will fade out
> ```

> <a id="complete"></a>
> ### complete *`Function`*
> A function that will be called when render is complete (i.e. all intro transitions have finished). If there are no intro transitions, this function will be called as soon as the instance is created)
> ```js
> template: '<p intro="fade">hello</p>',
> transitions: { fade: function ( t, params ) {...} },
> complete: function () {
>     console.log( '<p> has completed fade in!' );
> }
> ```

> <a id="easing"></a>
> ### easing *`Object`*
> A `key: value` hash of easing function. See {{{createLink 'Ractive.easing'}}}

> <a id="interpolators"></a>
> ### interpolators *`Object`*
> A `key: value` hash of interpolators use by {{{createLink 'ractive.animate()'}}}

## Parsing

> <a id="csp"></a>
> ### csp *`Boolean`*
> Defaults to `false`. Whether or not to add inline functions for expressions after parsing. This can effectively eliminate `eval` caused by expressions in templates. It also makes the resulting template no longer JSON compatible, so the template will have to be served via `script` tag.

> <a id="delimiters"></a>
> ### delimiters *`Array` where `[ open, close ]`*
> Defaults to `[ '\{{', '}}' ]`. Used to set what delimiters to use when parsing templates.

> ```
> template: 'hello <%= world %>',
> delimiters: [ '<%=', '%>' ],
> data: { world: 'earth' }
>
> // result:
> hello earth
> ```

> <a id="tripleDelimiters"></a>
> ### tripleDelimiters *`Array` where `[ open, close ]`*
> Defaults to `[ '\{{{', '}}}' ]`. Used to set what triple delimiters to use when parsing templates.

> ```
> template: 'hello @html@',
> tripleDelimiters: [ '@', '@' ],
> data: { html: '<span>world</span>' }
>
> // result:
> hello <span>world</span>
> ```

> <a id="staticDelimiters"></a>
> ### staticDelimiters *`Array` where `[ open, close ]`*
> Defaults to `[ '[[', ']]' ]`. Used to set what static (one-time binding) delimiters to use when parsing templates.

> ```
> var ractive = new Ractive({
>     template: 'hello [[foo]]',
>     staticDelimiters: [ '[[', ']]' ], /default
> 	  data: { foo: 'world' }
> });
> // result: "hello world"
>
> ractive.set( 'foo', 'mars' );
> // still is: "hello world"
> ```

> <a id="staticTripleDelimiters"></a>
> ### staticTripleDelimiters *`Array` where `[ open, close ]`*
> Defaults to `[ '[[[', ']]]' ]`. Used to set what static (one-time binding) triple delimiters to use when parsing templates.

> ```
> var ractive = new Ractive({
>     template: 'hello [[[html]]]',
>     staticTripleDelimiters: [ '[[[', ']]]' ], /default
> 	  data: { html: '<span>world</span>' }
> });
> // result: "hello <span>world</span>"
>
> ractive.set( 'html', '<span>mars</span>' );
> // still is: "hello world"
> ```

> <a id="preserveWhitespace"></a>
> ### preserveWhitespace *`Boolean`*
> Defaults to `false`. Whether or not to preserve whitespace in templates when parsing. (Whitespace in `<pre>` elements is always preserved.)

> ```
> var ractive = new Ractive({
>     template: '<p>hello\n\n  \tworld   </p>',
>     preserveWhitespace: false //default
> });
> console.log( ractive.toHTML() );
> // "<p>hello world</p>"
>
> var ractive = new Ractive({
>     template: '<p>hello\n\n  \tworld   </p>',
>     preserveWhitespace: true
> });
> console.log( ractive.toHTML() );
> // "<p>hello
> //
> //	world   </p>"
> ```
>
> Please note that the browser will still deal with whitespace in the normal fashion.

> <a id="stripComments"></a>
> ### stripComments *`Boolean`*
> Defaults to `true`. Whether or not to remove comments in templates when parsing.
> ```js
> template: '<!-- html comment -->hello world',
> stripComments: false
>
> // result:
> <!-- html comment -->hello world
> ```

> <a id="sanitize"></a>
> ### sanitize *`Boolean` or `Object`*
> Defaults to `false`. If `true`, certain elements will be stripped from templates at parse time - `<applet>`, `<base>`, `<basefont>`, `<body>`, `<frame>`, `<frameset>`, `<head>`, `<html>`, `<isindex>`, `<link>`, `<meta>`, `<noframes>`, `<noscript>`, `<object>`, `<param>`, `<script>`, `<style>` and `<title>` - as will event attributes (e.g. `onclick`).
> ```js
> template: '<p>some content</p><frame>Am I a bad element or just misunderstood?</frame>',
> sanitize: true
>
> // result:
> <p>some content</p>
> ```
> Alternatively, pass in an object with an `elements` property containing an array of blacklisted elements, and an optional `eventAttributes` boolean (`true` means 'disallow event attributes').
> ```js
> template: '<p>some content</p><div onclick="doEvil()">the good stuff</div>',
> sanitize: {
>     elements: [ 'p' ],
>     eventAttributes: true
> }
>
> // result:
> <div>the good stuff</div>
> ```

## Shortcuts
<a id="shortcuts"></a>

> <a id="observe"></a>
> ### observe *`Hash`*
> This is a shortcut for setting up observers as an instance is created. Each key in the object will be passed to {{{createLink 'ractive.observe()'}}} along with the paired function or options object. Keypaths can have spaces to separate additional keypaths and wildcards as with `observe()` keypaths. If the paired value is a function, it is passed as the callback for the observer. If the paired value is an object, it must have a `handler` member that is a function. Any additional keys in a paired object are passed as observer options, so you can specify `deferred: true` and `init: false`. If the options object contains `once: true`, {{{createLink 'ractive.observeOnce()'}}} will be used instead of `ractive.observe()`.
> ```js
> new Ractive({
>   observe: {
>     'multiple keypaths.at.a time.*.with.wildcards': function(newValue, oldValue, keypath, firstPart) { /* do something */ },
>     'other.path': {
>        handler(v) { /* do something */},
>        init: false,
>      }
>   }
> })
> ```
> Observers are subscribed just after the `config` phase of the instance lifecycle.

> <a id="on"></a>
> ### on *`Hash`*
> This is a shortcut for setting up event listeners as an instance is created. Each key in the object will be passed to {{{createLink 'ractive.on()'}}} along with the paired function or options object. Events may be separated by spaces and may have wildcards as with `on()`. If the paired value is a function, it is passed as the callback for the event. If the paired value is an object, it must have a `handler` member that is a function. If `once: true` is included in the object, then {{{createLink 'ractive.once()'}}} will be used instead of `ractive.on()`.
> ```js
> new Ractive({
>   on: {
>     'doSomething *.aThingHappened': function(event, arg1) { /* do something */ },
>     'firstTime': {
>        handler(v) { /* do something */},
>        once: true
>      }
>   }
> })
> ```
> Observers are subscribed just after the `construct` phase of the instance lifecycle, meaning that lifecycle events that occur after `construct` may also have listeners installed from the `on` hash.
