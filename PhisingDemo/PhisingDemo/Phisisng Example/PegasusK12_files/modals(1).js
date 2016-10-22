
if(window.jQuery){jQuery(function(){
	<!-- Hide/Show More Info Modal - Hide all on load -->
	(function(){ var target = jQuery('div#modalOverlay'); target.hide(0); })();
	})};

if(window.jQuery){jQuery(function(){
	(function(){
		jQuery('.openAsModalOnForgot').bind('click',
			function(event, ui){
				$("#modalContainer").show();	
				// changed from jquery load to explicit ajax load in order
				// to turn caching off
                  $.ajax({
                        url: "noEmailView.html",
                        cache: false,
                        success: function(response) {
                              $("#modalContent").html(response);
                        }
                  });
				// Then bind a close event to all close buttons
				jQuery('.closeModal').bind('click',
					function(event, ui){
						$('#modalContainer').hide();
						event.preventDefault();
			
					// Removes tabindex from all form elements and anchors when the modal is closed
					// Allows for keyboard tabbing to only work as normal in the page
					$("#content input").removeAttr("tabindex");
					$("#content select").removeAttr("tabindex");
					$("#content button").removeAttr("tabindex");
					$("#content a").removeAttr("tabindex");
					$("#footer a").removeAttr("tabindex");
			
					}
				);
			event.preventDefault();
			
			// Set all form elements and anchors not in the modal to tabindex -1
			// Allows for keyboard tabbing to only work in the modal
			$("#content input").attr("tabindex", "-1");
			$("#content select").attr("tabindex", "-1");
			$("#content button").attr("tabindex", "-1");
			$("#content a").attr("tabindex", "-1");
			$("#footer a").attr("tabindex", "-1");
			});
		})();
	})};
