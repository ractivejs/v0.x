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
	latest: {
		files: [{
			expand: true,
			cwd: 'build/<%= latest %>/',
			src: '**',
			dest: 'build/latest/'
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
