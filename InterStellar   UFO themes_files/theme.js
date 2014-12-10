//<![CDATA[  
jQuery(document).ready(function() {


jQuery('#loglink').toggle(
	function () {jQuery('.amform').animate({opacity:'toggle', top:'48px'},200);},
	function () {jQuery('.amform').animate({opacity:'toggle', top:'0px'}, 200);}
);


// buy/download button
	jQuery(".download").click(function(e){
		e.preventDefault();
		jQuery("#overlay, #buy").fadeIn(300);
	});
	
	// overlay
		jQuery("#overlay").click(function(e){
			//e.preventDefault();
			jQuery("#overlay, #buy").fadeOut(300);
		});
		
		// GET NAME EMAIL AND PROVIDE THEME DOWNLOAD LINK
		var firstname = jQuery("#free_theme_first_name").val();
		var lastname = jQuery("#free_theme_last_name").val();
		var email = jQuery("#free_theme_email").val();
		var link = jQuery("#free_theme_link").val();
		
		jQuery("#free_theme_submit").click(function(){ 
		
			
			jQuery.ajax({  
		  		type: 'POST',  
		  		url: ufo.ajaxurl,  
		  		data: {  
		  			action: 'ufo_send_email',
					firstname:  jQuery("#free_theme_first_name").val(), 
					lastname:  jQuery("#free_theme_last_name").val(),
		  			email: jQuery("#free_theme_email").val(),
					link: jQuery("#free_theme_link").val(),
					title: jQuery("#free_theme_title").val()
		  
		  		},  
		  		success: function(data){
					//jQuery("#buy input[type='button']").val('Thank you');
					//jQuery('.form-field').toggle();
					jQuery("#overlay, #buy").fadeOut(500);
					jQuery("#free_theme_first_name").val('');
					jQuery("#free_theme_last_name").val('');
					jQuery("#free_theme_email").val('');
					//window.location = "http://www.ufothemes.com/free-themes/hyperspace/HyperSpace.zip"; 
		  		},  
		  		error: function(MLHttpRequest, textStatus, errorThrown){  
		  			alert(errorThrown);  
		  		}  
		  });  
	});	
	
	
	
	var $theme_features = jQuery("#features-wrap .feature-item-half");  

	if (!($theme_features.length == 0)) {
		$theme_features.each(function (index, domEle) {
		// domEle == this
		if ((index+1)%2 == 0) jQuery(domEle).addClass("last").after("<div class='clear'></div>");
		});
	}
	
	//sticky footer
	/*jQuery(document).ready(function() {
	  var bodyHeight = jQuery("#page-wrap").height();
	  var vwptHeight = jQuery(window).height();
	  if (vwptHeight > bodyHeight) {
	    jQuery("#footer-wrap").css("position","absolute").css("bottom",0);
	  }
	}); */

	jQuery('#buy-button').click(function(e){
		jQuery('#license-options').fadeToggle('fast');
	});
}); 
//]]>