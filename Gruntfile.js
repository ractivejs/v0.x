module.exports = function ( grunt ) {

	'use strict';

	grunt.initConfig({

		latest: '0.3.9',

		watch: {
			sass: {
				files: 'scss/**/*.scss',
				tasks: [ 'sass' ]
			},

			templates: {
				files: 'templates/**/*',
				tasks: 'render'
			},

			docs: {
				files: 'docs/**/*',
				tasks: [ 'dir2json', 'render' ]
			}
		},

		sass: {
			main: {
				src: 'scss/main.scss',
				dest: 'build/min.css'
			},
			options: {
				style: 'compressed'
			}
		},

		clean: {
			files: [ 'build/', 'tmp/' ]
		},

		dir2json: {
			posts: {
				root: 'docs',
				dest: 'tmp/docs.json'
			}
		},

		copy: {
			root: {
				files: [{
					expand: true,
					cwd: 'root',
					src: '**/*',
					dest: 'build'
				}]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-dir2json' );


	grunt.registerTask( 'render', function () {

		var Ractive, docs, version, versionedDocs, pageName, slug, page, pages, slugs;

		Ractive = require( 'ractive' );

		docs = grunt.file.readJSON( 'tmp/docs.json' );

		// render index page
		render('index', {}, null, 'index');

		for ( version in docs ) {
			versionedDocs = docs[ version ];
			pages = [];
			slugs = {};

			for ( pageName in versionedDocs ) {
				if ( pageName.charAt( 0 ) !== '_' ) {
					page = processPage( versionedDocs[ pageName ], version, pageName );
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
			render('version-index', { home: versionedDocs._home }, version, 'index');

			// render page list
			render('pages', { pages: pages }, version, 'pages');
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
			var cache, template, rendered;
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


	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'clean',
		'dir2json',
		'render',
		'sass',
		'copy'
	]);

};

function processPage ( page, version, name ) {
	var markdown;

	return {
		version: version,
		name: name,
		slug: slugify( name ),
		html: postprocess( require( 'marked' )( preprocessMarkdown( page ) ) )
	};
}

function preprocessMarkdown ( markdown ) {

	// breadcrumbs
	markdown = markdown.replace( /^(.+)$/m, function ( match, breadcrumbs ) {
		return '<div class="breadcrumbs">' + breadcrumbs.replace( / > /g, ' &raquo; ' ) + '</div>';
	});

	// turn [[My link]] into [My link](my-link)
	markdown = markdown.replace( /\[\[([^\]]+)\]\]/g, function ( match, link ) {
		return '[' + link + '](' + slugify( link ) + ')';
	});

	// process github-style code blocks
	markdown = markdown.replace( /```([a-z]+)?\n([\s\S]+?)\n```/g, function ( match, language, content ) {
		content = content
			.replace( /\t/g, '  ' )
			.replace( /</g, '&lt;' )
			.replace( />/g, '&gt;' );

		return '<pre' + ( language ? ' class="prettyprint lang-' + language + '"' : '' ) + '>' + content + '</pre>';
	});

	return markdown;
}

function postprocess ( html ) {
	return html.replace( / - /g, ' &ndash; ' );
}

function slugify ( str ) {
	if ( !str ) {
		return '';
	}
	return str.toLowerCase()
		.replace( /[^a-z]/g, '-' )
		.replace( /-{2,}/g, '-' )
		.replace( /^-/, '' )
		.replace( /-$/, '' );
}