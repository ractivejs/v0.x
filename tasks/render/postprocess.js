module.exports = function postprocess ( html ) {
	return html.replace( / - /g, ' &ndash; ' );
}