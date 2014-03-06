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
		assemble: {
			options: {
				assets: '/root/assets',
				helpers: ['helpers/*.js']
			},
			docs: {
				options: {
					layout: 'templates/page.hbs',
					partials: 'templates/partials/*.hbs'
				},
				files:[{
					expand: true,
					flatten: true,
					src : ['docs/0.3.9/*'],
					dest: 'build/latest',
					rename: slugify,
				}]
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
	grunt.loadNpmTasks( 'grunt-newer' );
	grunt.loadNpmTasks( 'assemble' );


	grunt.registerTask( 'default', [
		'build',
		'watch',
	]);

	grunt.registerTask('render', [
		'newer:assemble'
	]);

	grunt.registerTask( 'build', [
		'clean',
		'dir2json',
		'render',
		'sass',
		'copy'
	]);

	function slugify(dest, src, ref) {
		return dest + '/' + src.replace('.md.hbs','').toLowerCase()
		.replace( /[^a-z]/g, '-' )
		.replace( /-{2,}/g, '-' )
		.replace( /^-/, '' )
		.replace( /-$/, '' );
	}

	function createLink() {

	}
};