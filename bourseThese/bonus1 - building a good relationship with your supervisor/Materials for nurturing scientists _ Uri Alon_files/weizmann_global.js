(function ($) {

Drupal.behaviors.initColorboxGlobalStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
    	var colorbox_ver = parseFloat(Drupal.settings.colorbox_version);
    	if(typeof colorbox_ver !== undefined && colorbox_ver >= 1.6) {
	    	var contentAttr = $('#cboxLoadedContent', context).attr('tabindex');
	    	if (typeof contentAttr !== undefined && contentAttr !== false) {
	    		$('#cboxLoadedContent', context).attr('tabindex', 1);
	    	}
	    	var closeAttr = $('#cboxClose', context).attr('tabindex');
	    	if (typeof closeAttr !== undefined && closeAttr !== false) {
	    		$('#cboxClose', context).attr('tabindex', 2);
	    	}
    	}
    });
  }
};

})(jQuery);
