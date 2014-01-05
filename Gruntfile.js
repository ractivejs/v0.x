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

		var Ractive, docs, version, versionedDocs, pageName, slug, page, pages, rendered, pageTemplate, slugs, home;

		Ractive = require( 'ractive' );

		docs = grunt.file.readJSON( 'tmp/docs.json' );
		pageTemplate = grunt.file.read( 'templates/page.html' );

		// render index page
		rendered = new Ractive({
			template: grunt.file.read( 'templates/index.html' ),
			data: {

			},
			delimiters: [ '[[', ']]' ],
			tripleDelimiters: [ '[[[', ']]]' ],
			preserveWhitespace: true
		}).toHTML();

		grunt.file.write( 'build/index.html', rendered );

		for ( version in docs ) {
			versionedDocs = docs[ version ];
			pages = [];
			slugs = {};

			home = versionedDocs._home;

			for ( pageName in versionedDocs ) {
				if ( pageName.charAt( 0 ) !== '_' ) {
					page = processPage( versionedDocs[ pageName ], version, pageName, versionedDocs._home );
					pages.push( page );

					if ( slugs[ page.slug ] ) {
						throw new Error( 'You cannot have multiple pages with the same slug (' + page.slug + ')' );
					}
					slugs[ page.slug ] = true;
				}
			}

			pages.reverse();

			// render individual posts
			pages.forEach( function ( page ) {
				var rendered = new Ractive({
					template: pageTemplate,
					data: {
						page: page
					},
					delimiters: [ '[[', ']]' ],
					tripleDelimiters: [ '[[[', ']]]' ],
					preserveWhitespace: true
				}).toHTML();

				grunt.file.write( 'build/' + version + '/' + page.slug + '.html', rendered );

				if ( version === grunt.config( 'latest' ) ) {
					grunt.file.write( 'build/latest/' + page.slug + '.html', rendered );
				}
			});

			// render index
			rendered = new Ractive({
				template: grunt.file.read( 'templates/version-index.html' ),
				data: {
					home: versionedDocs._home
				},
				delimiters: [ '[[', ']]' ],
				tripleDelimiters: [ '[[[', ']]]' ],
				preserveWhitespace: true
			}).toHTML();

			grunt.file.write( 'build/' + version + '/index.html', rendered );

			if ( version === grunt.config( 'latest' ) ) {
				grunt.file.write( 'build/latest/index.html', rendered );
			}

			// render page list
			rendered = new Ractive({
				template: grunt.file.read( 'templates/pages.html' ),
				data: {
					pages: pages
				},
				delimiters: [ '[[', ']]' ],
				tripleDelimiters: [ '[[[', ']]]' ],
				preserveWhitespace: true
			}).toHTML();

			grunt.file.write( 'build/' + version + '/pages.html', rendered );

			if ( version === grunt.config( 'latest' ) ) {
				grunt.file.write( 'build/latest/pages.html', rendered );
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

function processPage ( page, version, name, homePath ) {
	var markdown;

	return {
		version: version,
		name: name,
		slug: slugify( name ),
		html: postprocess( require( 'marked' )( preprocessMarkdown( page, homePath ) ) )
	};
}

function preprocessMarkdown ( markdown, homePath ) {

	// breadcrumbs
	markdown = markdown.replace( /^(.+)$/m, function ( match, breadcrumbs ) {
		return '<div class="breadcrumbs">' + breadcrumbs.replace( / > /g, ' &raquo; ' ) + '</div>';
	});

	// specially treat [[Home]] link
	markdown = markdown.replace( '[[Home]]', '[Home](' + homePath + ')' );

	// turn [[My link]] into [My link](my-link)
	markdown = markdown.replace( /\[\[([^\]]+)\]\]/g, function ( match, link ) {
		return '[' + link + '](' + slugify( link ) + ')';
	});

	// process github-style code blocks
	markdown = markdown.replace( /```([a-z]+)?\n([\s\S]+?)\n```/g, function ( match, language, content ) {
		content = content.replace( /\t/g, '  ' )
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
	return str.toLowerCase().replace( /[^a-z]/g, '-' ).replace( /-{2,}/g, '-' ).replace( /^-/, '' ).replace( /-$/, '' );
}