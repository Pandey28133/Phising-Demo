
if (typeof langModal == 'undefined') {
    this.langModal = {};
}

if (langModal.main) {throw new Error('namespace collision: langModal.main');}

langModal.main = {

    submitDlg: function() {
    	var target = $('.openAsModal').attr('target');
		var request = $('.openAsModal').attr('request');
		$('#modalContainer').hide();
		var pathname = window.location.href;
		var params = window.location.search;
		var lt = $('[name="lt"]').val();
		
		$("#lang").val($('#langSelector').val());
		$("#queryparams").val(params);
		$("#queryparams").val();
		
		if( $('#path').val() == 'signin') {
			$("#changeLanguageForm").submit();
			/*
			$.post( 'changeLanguageSubmission',
					{ 'queryparams': $('#queryparams').val(), 'lang': $("#lang").val(), 'path': $('#path').val() },
					function( data) {
						var search = window.location.href;
						var match = search.match( 'lang=([a-z0-9-]+)');
						
						if( match) {
							search = search.replace(match[0], 'x');
						}
						
						// must add the flow location to the params
						var ltmatch = search.match( 'lt=([a-z0-9]+)');
						if( lt) {
							if( ltmatch) {
								search = search.replace( ltmatch[0], 'lt='+lt);
							}
							else {
								search += '&lt=' + lt;
							}
						}
						
						window.location.href = search;
					}
			);
			*/
		}
		else {
			$("#changeLanguageForm").submit();
		}
    }
}
