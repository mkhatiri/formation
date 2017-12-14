$(document).ready(function() { 
    var hash = window.location.hash;
	//(!hash) ? hideAllExcept('#' + $('#toggleThis').attr('id')) : hideAllExcept(window.location.hash); 
    $('ul#columnistlist a').click(function() { 
        var href = $(this).attr('href'); 
        hideAllExcept(href);
        return false;
    }); 
	$('#toggleThis').randomChild();
}); 

function hideAllExcept(el) {
    $('#toggleThis div').hide(); 
    $(el).show(); 
    $('#columnistlist a').removeClass('active'); 
    $('#columnistlist a[href="' + el + '"]').addClass('active'); 
};

jQuery.fn.randomChild = function(settings) {
	return this.each(function(){
		var c = $(this).children().length;
		var r = Math.ceil(Math.random() * c);
		$(this).children().hide().parent().children(':nth-child(' + r + ')').show();
	});
};