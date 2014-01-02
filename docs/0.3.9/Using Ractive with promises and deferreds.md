[Home](ractive-js-documentation) > [[Tips]] > [[Using Ractive with promises and deferreds]]

A few operations with Ractive can be asynchronous - the initial render, plus [[ractive.set()]], [[ractive.animate()]], [[ractive.update()]] and [[ractive.teardown()]].

They're asynchronous if they cause one or more [[transitions]] that are themselves asynchronous. In these cases, you often want to execute some code once the operation is complete.

Normally, you achieve this by passing a *callback*, e.g. `ractive.set('foo', bar, doSomething)`. But this can get unwieldy when you're trying to chain lots of operations together in a complex fashion.

Because of these situations, in recent years '[promises](http://promises-aplus.github.io/promises-spec/)' (and deferreds, which are similar) have become increasingly popular. Ractive.js doesn't support promises 'out of the box' because there are so many different implementations, but it's easy to make it work with your promise library of choice.

Visit the [Ractive-promisify repo](https://github.com/RactiveJS/Ractive-promisify) and check out the [examples](http://www.rich-harris.co.uk/Ractive-promisify) to get started.