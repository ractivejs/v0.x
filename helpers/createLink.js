
var createLink = function(name, text) {
	var slug = slugify(name),
		text = (arguments.length == 2 ? name : text);
	return '<a href="' + slugify(slug) + '">' + text + '</a>';
};

function slugify(name) {
		return name.toLowerCase()
		.replace( /[^a-z]/g, '-' )
		.replace( /-{2,}/g, '-' )
		.replace( /^-/, '' )
		.replace( /-$/, '' );
}

module.exports.createLink = createLink;