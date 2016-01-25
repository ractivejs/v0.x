var path = require( 'path' );

module.exports = function ( grunt ) {
	var config, reverseMapping;

	config = {
		options: {
			marked: {
				langPrefix: "hljs language-",
				highlight: function ( code, lang ) {
					return require( 'highlight.js' ).highlightAuto( code ).value;
				}},
			assets: '/root/assets',
			helpers: ['helpers/*.js'],
			postprocess: function ( content ) {
				return grunt.template.process( content );
			}
		}
	};

	require( 'fs' ).readdirSync( 'docs' ).forEach( function ( version ) {
		if ( version === '.DS_Store' ) return;

		config[ version ] = {
			options: {
				layout: 'templates/' + version + '/page.hbs',
				partials: 'templates/' + version + '/partials/*.hbs'
			},
			files:[{
				expand: true,
				cwd: 'docs/' + version,
				src : ['*.hbs'],
				dest: 'build/' + version,
				rename: rename,
			}]
		}
	});

	reverseMapping = grunt.editLinkReverseMapping; // TODO is there a less hacktacular way?

	return config;

	function rename (dest, src) {
		var version, slug, result;

		slug = slugify( src.replace( '.md.hbs', '' ) );
		version = dest.replace( 'build/', '' );

		result = path.join( dest, slug );

		reverseMapping[ result + '.html' ] = path.join( version, src );
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
