module.exports = {
	shared: {
		files: [{
			expand: true,
			cwd: 'shared/assets',
			src: '**/*',
			dest: 'build/assets'
		}]
	},
	assets: {
		files: [{
			expand: true,
			cwd: 'src/assets',
			src: '**/*',
			dest: 'build/assets'
		}]
	}
};
