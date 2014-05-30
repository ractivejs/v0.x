module.exports = {
	sass: {
		files: 'scss/**/*.scss',
		tasks: [ 'sass' ]
	},

	templates: {
		files: 'templates/**/*',
		tasks: 'assemble'
	},

	docs: {
		files: 'docs/**/*',
		tasks: ['render','copy']
	}
};
