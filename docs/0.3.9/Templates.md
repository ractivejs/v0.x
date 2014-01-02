[Home](ractive-js-documentation) > [[Glossary]] > [[Templates]]

In Ractive, templates (until they get [parsed](ractive-parse), at least) are just snippets of HTML, with a few differences. A template should be *well-formed* - Ractive's parser is not quite as forgiving as the HTML parsers found in browsers (though it does allow things like implicitly closed elements).

Strictly speaking, a Ractive template is not valid HTML (for one thing, 'valid HTML' describes an entire document, and we're only dealing with snippets), but *it doesn't matter*, even if you're the kind of obsessive who can't stand a single error in the [W3C validator](http://validator.w3.org/), because it all comes out as lovely standards-compliant DOM.

For reference, however, the differences between Ractive templates and HTML are listed on this page.

## Mustaches

The most obvious difference is that Ractive templates contain [[mustaches]] to facilitate data binding.

## Proxy event directives

Elements in a Ractive template can have [proxy events](events#proxy-events), which look like attributes but don't get rendered to the DOM as attributes (they are intercepted, and used as event binding instructions instead):

```html
<button proxy-click='activate'>Activate!</button>
```

## Transitions

Another item in the set of things-that-look-like-attributes-but-aren't, [[transitions]] allow you to specify how elements should behave when they first get introduced to the DOM and when they get removed from it later:

```html
<div intro='fadeIn'>This element will fade in gradually when it renders</div>
```