module.exports = function ( grunt ) {
	return {
		options: {
			assets: '/root/assets',
			helpers: ['helpers/*.js'],
			postprocess: function ( content ) {
				return grunt.template.process( content );
			}
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
	};
};

function slugify(dest, src, ref) {
	return dest + '/' + src.replace('.md.hbs','').toLowerCase()
	.replace( /[^a-z]/g, '-' )
	.replace( /-{2,}/g, '-' )
	.replace( /^-/, '' )
	.replace( /-$/, '' );
}
