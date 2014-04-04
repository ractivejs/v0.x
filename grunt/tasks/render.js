module.exports = function ( grunt ) {

	'use strict';

	grunt.registerTask( 'render', [
		'newer:assemble'
	]);

};
