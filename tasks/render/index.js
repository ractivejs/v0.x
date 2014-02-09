module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'render', function () {

		var Ractive, docs, version, versionedDocs, pageName, slug, page, pages, slugs;

		Ractive = require( 'ractive' );

		docs = grunt.file.readJSON( 'tmp/docs.json' );

		// render index page
		render( 'index', {}, null, 'index' );

		for ( version in docs ) {
			versionedDocs = docs[ version ];
			pages = [];
			slugs = {};

			for ( pageName in versionedDocs ) {
				if ( pageName.charAt( 0 ) !== '_' ) {
					page = require( './processPage' )( versionedDocs[ pageName ], version, pageName, versionedDocs._home );
					pages.push( page );

					if ( slugs[ page.slug ] ) {
						throw new Error( 'You cannot have multiple pages with the same slug (' + page.slug + ')' );
					}
					slugs[ page.slug ] = true;
				}
			}

			pages.reverse();

			// render individual posts
			pages.forEach( renderPage.bind( null, version ) );

			// render index
			render( 'version-index', { home: versionedDocs._home }, version, 'index' );

			// render page list
			render( 'pages', { pages: pages }, version, 'pages' );
		}

		function renderPage ( version, page ) {
			render( 'page', { page: page }, version, page.slug );
		}

		function writeFile ( version, fileName, content ) {
			var path = [ 'build' ];
			if ( version ) {
				path.push( version );
			}
			path.push( fileName + '.html' );
			grunt.file.write( path.join( '/' ), content );
		}

		function render ( templateName, data, version, fileName ) {
			var cache, template, rendered, logMessage;

			logMessage = [ "Rendering " ];
			if ( version ) {
				logMessage.push( version + "/" );
			}
			logMessage = logMessage.concat( fileName + ".html", " as [ ", templateName, " ]" );
			console.log( logMessage.join( '' ) );


			cache = render.cache || ( render.cache = {} );
			template = cache[ templateName ] ||
				( cache[ templateName ] = grunt.file.read( 'templates/' + templateName + '.html' ) );
			rendered = new Ractive({
				template: template,
				data: data,
				delimiters: [ '[[', ']]' ],
				tripleDelimiters: [ '[[[', ']]]' ],
				preserveWhitespace: true
			}).toHTML();

			writeFile( version, fileName, rendered );
			if ( version === grunt.config( 'latest' ) ) {
				writeFile( 'latest', fileName, rendered );
			}
		}

	});

};