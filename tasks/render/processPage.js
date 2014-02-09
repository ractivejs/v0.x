module.exports = function processPage ( page, version, name, homePath ) {
	var slugify = require( './slugify' ),
		preprocessMarkdown = require( './preprocessMarkdown' ),
		postprocess = require( './postprocess' );

	return {
		version: version,
		name: name,
		slug: slugify( name ),
		html: postprocess( require( 'marked' )( preprocessMarkdown( page, homePath ) ) ),
		editurl: 'https://github.com/RactiveJS/docs.ractivejs.org/edit/master/docs/0.3.9/' + name + '.md'
	};
};