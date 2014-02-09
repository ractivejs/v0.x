module.exports = function slugify ( str ) {
	if ( !str ) {
		return '';
	}
	return str.toLowerCase()
		.replace( /[^a-z]/g, '-' )
		.replace( /-{2,}/g, '-' )
		.replace( /^-/, '' )
		.replace( /-$/, '' );
};