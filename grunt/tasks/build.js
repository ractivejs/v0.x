module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'build', [
		'clean',
		'render',
		'sass',
		'copy'
	]);

};
