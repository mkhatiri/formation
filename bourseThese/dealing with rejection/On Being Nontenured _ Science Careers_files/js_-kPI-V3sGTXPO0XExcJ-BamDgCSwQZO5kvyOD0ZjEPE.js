jQuery('#tab-options a').click(function(e) {
  jQuery(this).parents().siblings('li').find('.is-active').removeClass('is-active');
  jQuery(this).addClass('is-active');
  var activeTab = jQuery(this).attr('href');
  jQuery(activeTab).addClass('is-active').siblings('.is-active').removeClass('is-active');
  return false;
});

jQuery("#tabform").on('submit', function(e) {
  if ( jQuery("#tabform-keyword").val() === '') {
    e.preventDefault();
    window.location.href = "http://jobs.sciencecareers.org";
  }
});
;
jQuery(document).ready(function() { 
    var hash = window.location.hash;
	//(!hash) ? hideAllExcept('#' + jQuery('#toggleThis').attr('id')) : hideAllExcept(window.location.hash); 
    jQuery('ul#columnistlist a').click(function() { 
        var href = jQuery(this).attr('href'); 
        hideAllExcept(href);
        return false;
    }); 
	jQuery('#toggleThis').randomChild();
}); 

function hideAllExcept(el) {
    jQuery('#toggleThis div').hide(); 
    jQuery(el).show(); 
    jQuery('#columnistlist a').removeClass('active'); 
    jQuery('#columnistlist a[href="' + el + '"]').addClass('active'); 
};

jQuery.fn.randomChild = function(settings) {
	return this.each(function(){
		var c = jQuery(this).children().length;
		var r = Math.ceil(Math.random() * c);
		jQuery(this).children().hide().parent().children(':nth-child(' + r + ')').show();
	});
};
;
