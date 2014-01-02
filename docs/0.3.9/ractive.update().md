[Home](ractive-js-documentation) > [[API reference]] > [[ractive.update()]]

If data has been modified without using [[ractive.set()]], [[ractive.animate()]], or array mutator methods if [[array modification]] is enabled - in other words, you've done `foo.bar = 'baz'` instead of `ractive.set('foo.bar', 'baz')` - then `ractive.update()` causes any affected mustaches to re-render, and any affected [[observers]] to be notified.

If no `keypath` is specified, all mustaches and observers will be checked.


> ### ractive.update( keypath[, complete ])
> > #### **keypath** *`String`*
> > The keypath to treat as 'dirty'. Any mustaches or observers that depend (directly or indirectly) on this keypath will be checked to see if they need to re-render
> > #### complete *`Function`*
> > A function that will be called, with `ractive` as `this`, when any [[transitions]] triggered by the update have completed


> ### ractive.update([ complete ])
> > #### complete *`Function`*
> > A function that will be called, with `ractive` as `this`, when any [[transitions]] triggered by the update have completed