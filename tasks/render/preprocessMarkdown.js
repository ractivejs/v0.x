module.exports = function preprocessMarkdown ( markdown, homePath ) {

	var slugify = require( './slugify' );

	// breadcrumbs
	markdown = markdown.replace( /^(.+)$/m, function ( match, breadcrumbs ) {
		return '<div class="breadcrumbs">' + breadcrumbs.replace( / > /g, ' &raquo; ' ) + '</div>';
	});

	// specially treat [[Home]] link
	markdown = markdown.replace( /\[\[Home\]\]/g, '[Home](' + homePath + ')' );

	// turn [[My link]] into [My link](my-link)
	markdown = markdown.replace( /\[\[([^\]]+)\]\]/g, function ( match, link ) {
		return '[' + link + '](' + slugify( link ) + ')';
	});

	// process github-style code blocks
	markdown = markdown.replace( /```([a-z]+)?\n([\s\S]+?)\n```/g, function ( match, language, content ) {
		content = content
			.replace( /\t/g, '  ' )
			.replace( /</g, '&lt;' )
			.replace( />/g, '&gt;' );

		return '<pre' + ( language ? ' class="prettyprint lang-' + language + '"' : '' ) + '>' + content + '</pre>';
	});

	return markdown;
};