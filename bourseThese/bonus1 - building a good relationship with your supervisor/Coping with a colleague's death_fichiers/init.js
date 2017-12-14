// http://plugins.jquery.com/project/ScrollTo


function init() {
	Shadowbox.init();
}

$(document).ready(function(){
	$('div.gradlistings dl:even').addClass('alt');
	$('ul.zebra li:even').addClass('alt');
	$('div.jumper h3').append(' <a href="#contenttop" title="Return to the top of the page" class="jumpback">Return to top &#8593;</a>');
	
	
	$('.photo img').load(function() {
		$(this).parent().width($(this).width());
	});

	
});

jQuery(function( $ ){
	$.localScroll.defaults.axis = 'xy';
	// Scroll initially if there's a hash (#something) in the url 
	$.localScroll.hash({
		// target: '#content', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1500
	});
	$.localScroll({
		// target: '#content', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1000,
		hash:true,
		onBefore:function( e, anchor, $target ){
			// The 'this' is the settings object, can be modified
		},
		onAfter:function( anchor, settings ){
			// The 'this' contains the scrolled element (#content)
		}
	});
});


window.onload = init;