/* 
 * Random Child (0.1)
 * by Mike Branski (www.leftrightdesigns.com)
 * mikebranski@gmail.com
 *
 * Copyright (c) 2008 Mike Branski (www.leftrightdesigns.com)
 * Licensed under GPL (www.leftrightdesigns.com/library/jquery/randomchild/gpl.txt)
 *
 * NOTE: This script requires jQuery to work.  Download jQuery at www.jquery.com
 *
 */

jQuery.fn.randomChild = function(settings) {
	return this.each(function(){
		var c = $(this).children().length;
		var r = Math.ceil(Math.random() * c);
		$(this).children().hide().parent().children(':nth-child(' + r + ')').show();
	});
};