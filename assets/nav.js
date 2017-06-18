(function () {

	'use strict';

	var expanded, ul, toggle;

	ul = document.querySelector( 'nav ul' );

	// TODO fastclick on mobile
	toggle = document.querySelector( '#nav-toggle' );

	if ( toggle.addEventListener ) {
		toggle.addEventListener( 'click', handleClick );
	} else {
		toggle.onclick = handleClick;
	}

	function handleClick () {
		expanded = !expanded;
		ul.style.height = expanded ? 'auto' : '0';
	}

}());
