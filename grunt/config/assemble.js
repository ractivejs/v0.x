var path = require( 'path' );
var Prism = require( 'prismjs' );
var marked = require( 'handlebars-helpers/node_modules/marked' );

module.exports = function ( grunt ) {
	var config, reverseMapping;

	config = {
		options: {
			marked: {
				langPrefix: "language-",
				highlight: function ( code, lang ) {
					var prismLang = lookupPrismLang( lang );
					var highlightedCode = Prism.highlight( code, prismLang.lang );
					return highlightedCode;
				}
			},		
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

marked.Renderer.prototype.code = function (code, lang, escaped) {

	var prismLang = lookupPrismLang(lang);

  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      code = out;
    }
  }
  
  var langClass = this.options.langPrefix + prismLang.name;

  return '<pre class="'
	+ langClass
    +'"><code class="'
    + langClass
    + '">'
    + code
    + '\n</code></pre>\n';
};

function lookupPrismLang ( lang ) {
	
	// default to javascript?
	var prismLang = {
		name: 'js',
		lang: ''
	};

	if ( lang === 'html' ) {
		prismLang.lang = Prism.languages.markup;
		prismLang.name = 'markup';

	} else if ( lang == 'xml' ) {
		prismLang.lang = Prism.languages.markup;
		prismLang.name = 'markup';

	} else if ( lang == 'js' || lang == 'javascript' ) {
		prismLang.lang = Prism.languages.javascript;
		prismLang.name = 'js';

	} else if ( lang == 'css' ) {
		prismLang.lang = Prism.languages.css;
		prismLang.name = 'css';

	} else if ( lang == 'sh' ) {
		prismLang.lang = Prism.languages.js;
		prismLang.name = 'bash';

	} else if ( lang == 'svg' ) {
		prismLang.lang = Prism.languages.svg;
		prismLang.name = 'svg';

	} else {
		
	}
	return prismLang;
}
