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
				tasks: [ 'spelunk', 'render' ]
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

		spelunk: {
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
	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-clean' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );
	grunt.loadNpmTasks( 'grunt-spelunk' );

	grunt.loadTasks( 'tasks' );

	grunt.registerTask( 'default', [
		'build',
		'watch'
	]);

	grunt.registerTask( 'build', [
		'clean',
		'spelunk',
		'render',
		'sass',
		'copy'
	]);

};