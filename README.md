docs.ractivejs.org
==================

The documentation for [Ractive.js](http://ractivejs.org).


Building
--------

```
# clone the repo
$ git clone https://github.com/RactiveJS/docs.ractivejs.org.git
$ cd docs.ractivejs.org

# install dev dependencies (grunt and friends)
$ npm install

# start building
$ grunt
```

Running `grunt` will build the site and rebuild when docs changes. You need to use a local webserver to preview in your web browser. One easy option is to use [http-server](https://www.npmjs.org/package/http-server) (installable via `npm install -g http-server`). You need to run it from the `/build` directory and explicitly include `html` as the default extension (add `-s` for silent mode):

```sh
docs.ractive.org/build>python -m SimpleHTTPServer
```
Open `localhost` on the port specified (usually `8080`), and it should redirect to `localhost:8080/latest/get-started`. Refresh to pick up changes made in docs.

Contributing
------------

If you see something wrong, out of date, or missing from this documentation, please [raise an issue on GitHub](https://github.com/RactiveJS/docs.ractivejs.org/issues) or - even better - submit a pull request. Your fellow Ractive users will thank you!

In lieu of formal contribution guidelines, take care to follow the existing structure and conventions. Send pull requests to the `master` branch, not `gh-pages` (which is a snapshot of the `build` folder in `master`).


Questions?
----------

Contact [@RactiveJS](http://twitter.com/RactiveJS) on Twitter.
