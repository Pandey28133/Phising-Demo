$(document).ready(function()
{
	var popup;
	var popup_help;
	$(".pop").live("click", function(event){
		event.preventDefault();
		if (popup != undefined) {
			popup.close();
		}
		popup = window.open($(this).attr("href"), 'popupWindow', 'width=538,height=552,toolbar=yes, menubar=yes, titlebar=yes, location=yes, scrollbars=yes, resizable=yes');
	});
	
	$(".pophelp").live("click", function(event){
		event.preventDefault();
		if (popup_help != undefined) {
			popup_help.close();
		}
		popup_help = window.open($(this).attr("href"), 'helpWindow', 'width=538,height=552,resizable=yes,location=yes,scrollbars=yes');
	});
});