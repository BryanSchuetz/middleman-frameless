#= require 'respond.min.js'
WebFontConfig = {
	google: { families: [ 'Arvo:400,700:latin', 'Vollkorn:400italic,400,700:latin' ] }
	};
	(function() {
	  var wf = document.createElement('script');
	  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	  wf.type = 'text/javascript';
	  wf.async = 'true';
	  var s = document.getElementsByTagName('script')[0];
	  s.parentNode.insertBefore(wf, s);
})(); 
