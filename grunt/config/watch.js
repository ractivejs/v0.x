module.exports = {
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
};
