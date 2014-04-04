module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'build', [
		'clean',
		'spelunk',
		'render',
		'sass',
		'copy'
	]);

};
