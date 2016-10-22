$(function() {    
	$("a[href*='logout']").attr('href', function(i, h) {
		// query_string is defined in top.jsp, so that it can be populated by the app
		return h + (h.indexOf('?') != -1 ? "&" + query_string : "?" + query_string);
	}); 
});
 