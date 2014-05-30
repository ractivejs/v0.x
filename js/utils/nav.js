define([

], function (

) {

	'use strict';

	var expanded, ul;

	ul = document.querySelector( 'nav ul' );

	// TODO fastclick on mobile
	document.querySelector( '#nav-toggle' ).addEventListener( 'click', function () {
		expanded = !expanded;
		ul.style.height = expanded ? 'auto' : '0';
	});

});
