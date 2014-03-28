[[Home]] > [[Tips]] > [[Using Ractive with Browserify]]

[Browserify](http://browserify.org/) is a way of using [node-style](http://nodejs.org/) requires in the browser, bundling your scripts into a single file for efficient deployment.

You can use Ractive.js alongside Browserify using [Ractify](https://npmjs.org/package/ractify) by [marcello3d](https://github.com/marcello3d) (thanks!). Visit the [Ractify repository](https://github.com/marcello3d/node-ractify) for downloads and documentation.

There's also [Browserify-shim](https://github.com/thlorenz/browserify-shim) which 'Makes CommonJS incompatible files browserifyable'. Until everything is on npm and node-requirable ; ) you'll probably have a few libs, not just Ractive, you want shimmed.

package.json
```javascript
  "browserify-shim": {
    "./js/vendor/Ractive.js": "Ractive"
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },
```

your code
```javascript
var Ractive = require('./vendor/Ractive');
var ractive = new Ractive({...});
```

  
