$(document).ready(function() {
	$('.openAsModal').bind('click', 
    	function(event, ui){
            $("#modalContainer").show();
    		// Load the modal content
    		$('#modalContent').load($(this).attr('href') + '&nocache=' + (new Date()).getTime(), 
                                    function(){
                                        $('.closeModal').bind('click', 
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
                                        });
            });
            
            event.preventDefault();
			
			// Set all form elements and anchors not in the modal to tabindex -1
			// Allows for keyboard tabbing to only work in the modal
			$("#content input").attr("tabindex", "-1");
			$("#content select").attr("tabindex", "-1");
			$("#content button").attr("tabindex", "-1");
			$("#content a").attr("tabindex", "-1");
			$("#footer a").attr("tabindex", "-1");
    });
});
