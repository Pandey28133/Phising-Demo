if (typeof errors == 'undefined') {
    this.errors = {};
}

if (errors.signin) {throw new Error('namespace collision: errors.signin');}

errors.signin = {
    onLoad: function() {
        var h3errors = $('h3.error');
        if( h3errors) {
            // wrap the innerhtml inside an <a> so it can be focused.
            h3errors.wrapInner('<a class="error status h3nowrap" tabindex="-1" href="#"/>')
        }
        
        var errorMsgs = $('a.error').not('.h3nowrap');
        if( errorMsgs) {
            errorMsgs.attr( 'href', '#');
            errorMsgs.attr( 'tabindex', '-1');
            
            errorMsgs.wrap( function() {
               return '<h3 class="error"/>' 
            });
        }
        
        var errorInputs = $('a.error');
        if( errorInputs) {
            errorInputs.first().focus();
        }
    }
}


