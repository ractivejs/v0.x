var path = require( 'path' );

module.exports = function ( grunt ) {
	var reverseMapping = grunt.editLinkReverseMapping; // TODO is there a less hacktacular way?

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
				cwd: 'docs',
				src : ['**/*.hbs'],
				dest: 'build',
				rename: rename,
			}]
		}
	};

	function rename (dest, src) {
		var split, version, slug;

		split = src.split( '/' );
		version = split[0];
		slug = slugify( split[1].replace( '.md.hbs', '' ) );

		var result = path.join( dest, version, slug );

		reverseMapping[ result + '.html' ] = src;
		return result;
	}
};

function slugify ( filename ) {
	return filename.toLowerCase()
		.replace( /[^a-z]/g, '-' )
		.replace( /-{2,}/g, '-' )
		.replace( /^-/, '' )
		.replace( /-$/, '' );
}
