module.exports = {
	shared: {
		files: [{
			expand: true,
			cwd: 'shared/assets',
			src: '**/*',
			dest: 'build/assets'
		}]
	},
	root: {
		files: [{
			expand: true,
			cwd: 'root/',
			src: '**/*',
			dest: 'build/'
		}]
	},
	snippets: {
		files: [{
			expand: true,
			cwd: 'shared/js/snippets',
			src: '**/*',
			dest: 'build/assets'
		}]
	}
};
