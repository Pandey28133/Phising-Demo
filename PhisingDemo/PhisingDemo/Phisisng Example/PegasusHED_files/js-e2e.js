
(function() {

	// DOMReady Library
	var _DomReady={};!function(e){function t(){if(!r&&(r=!0,l)){for(var e=0;e<l.length;e++)l[e].call(window,[]);l=[]}}function n(e){var t=window.onload;window.onload="function"!=typeof window.onload?e:function(){t&&t(),e()}}function o(){if(!d){if(d=!0,document.addEventListener&&!i.opera&&document.addEventListener("DOMContentLoaded",t,!1),i.msie&&window==top&&function(){if(!r){try{document.documentElement.doScroll("left")}catch(e){return void setTimeout(arguments.callee,0)}t()}}(),i.opera&&document.addEventListener("DOMContentLoaded",function(){if(!r){for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].disabled)return void setTimeout(arguments.callee,0);t()}},!1),i.safari){var e;!function(){if(!r){if("loaded"!=document.readyState&&"complete"!=document.readyState)return void setTimeout(arguments.callee,0);if(void 0===e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++)"stylesheet"==n[o].getAttribute("rel")&&e++;var a=document.getElementsByTagName("style");e+=a.length}return document.styleSheets.length!=e?void setTimeout(arguments.callee,0):void t()}}()}n(t)}}var a=navigator.userAgent.toLowerCase(),i={version:(a.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(a),opera:/opera/.test(a),msie:/msie/.test(a)&&!/opera/.test(a),mozilla:/mozilla/.test(a)&&!/(compatible|webkit)/.test(a)},d=!1,r=!1,l=[];e.ready=function(e){o(),r?e.call(window,[]):l.push(function(){return e.call(window,[])})},o()}(_DomReady);

	// JSON Object if it doesn't exist (e.g. IE 6 and below)
	var _JSON = window.JSON ? window.JSON : ({parse:function(sJSON){return eval("("+sJSON+")")},stringify:function(){var r=Object.prototype.toString,t=Array.isArray||function(t){return"[object Array]"===r.call(t)},n={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},e=function(r){return n[r]||"\\u"+(r.charCodeAt(0)+65536).toString(16).substr(1)},o=/[\\"\u0000-\u001F\u2028\u2029]/g;return function i(n){if(null==n)return"null";if("number"==typeof n)return isFinite(n)?n.toString():"null";if("boolean"==typeof n)return n.toString();if("object"==typeof n){if("function"==typeof n.toJSON)return i(n.toJSON());if(t(n)){for(var u="[",f=0;f<n.length;f++)u+=(f?", ":"")+i(n[f]);return u+"]"}if("[object Object]"===r.call(n)){var a=[];for(var c in n)n.hasOwnProperty(c)&&a.push(i(c)+": "+i(n[c]));return"{"+a.join(", ")+"}"}}return'"'+n.toString().replace(o,e)+'"'}}()});

	// CSS Needed to Style Comms
	var CSS = (_e2e_comms && _e2e_comms.overrideStyles) ? _e2e_comms.overrideStyles : '.e2e-reset{animation:none!important;animation-delay:0!important;animation-direction:normal!important;animation-duration:0!important;animation-fill-mode:none!important;animation-iteration-count:1!important;animation-name:none!important;animation-play-state:running!important;animation-timing-function:ease!important;backface-visibility:visible!important;background:0!important;background-clip:border-box!important;background-origin:padding-box!important;background-position-x:0!important;background-position-y:0!important;background-size:auto auto!important;border:0!important;border-width:medium!important;border-color:inherit!important;border-bottom:0!important;border-bottom-color:inherit!important;border-collapse:separate!important;border-image:none!important;border-left:0!important;border-left-color:inherit!important;border-radius:0!important;border-right:0!important;border-right-color:inherit!important;border-spacing:0!important;border-top:0!important;border-top-color:inherit!important;bottom:auto!important;box-shadow:none!important;box-sizing:content-box!important;caption-side:top!important;clear:none!important;clip:auto!important;color:inherit!important;columns:auto!important;column-count:auto!important;column-fill:balance!important;column-gap:normal!important;column-rule:medium none currentColor!important;column-rule-color:currentColor!important;column-rule-style:none!important;column-rule-width:none!important;column-span:1!important;column-width:auto!important;content:normal!important;counter-increment:none!important;counter-reset:none!important;cursor:auto!important;direction:ltr!important;display:inline!important;empty-cells:show!important;float:none!important;font:400!important;font-family:inherit!important;font-size:medium!important;font-style:normal!important;font-variant:normal!important;font-weight:400!important;height:auto!important;hyphens:none!important;left:auto!important;letter-spacing:normal!important;line-height:normal!important;list-style:disc!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1!important;orphans:0!important;outline:0!important;outline-width:medium!important;overflow:visible!important;overflow-x:visible!important;overflow-y:visible!important;padding:0!important;page-break-after:auto!important;page-break-before:auto!important;page-break-inside:auto!important;perspective:none!important;perspective-origin:50% 50%!important;position:static!important;quotes:"\201C" "\201D" "\2018" "\2019"!important;right:auto!important;tab-size:8!important;table-layout:auto!important;text-align:inherit!important;text-align-last:auto!important;text-decoration:none!important;text-decoration-color:inherit!important;text-decoration-line:none!important;text-decoration-style:solid!important;text-indent:0!important;text-shadow:none!important;text-transform:none!important;top:auto!important;transform:none!important;transform-style:flat!important;transition:none!important;transition-delay:0s!important;transition-duration:0s!important;transition-property:none!important;transition-timing-function:ease!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:visible!important;white-space:normal!important;widows:0!important;width:auto!important;word-spacing:normal!important;z-index:auto!important}.e2e-alert,.e2e-alert-container{display:block!important;position:relative!important}.e2e-alert *{font-family:verdana,helvetica,sans-serif!important}.e2e-alert{font-size:14px!important;line-height:1.4em!important;padding:10px!important;z-index:100!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important;background:#FFFFA8!important;color:#404040!important}.e2e-alert__icon,.e2e-alert__text{-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important}.e2e-alert-link,.e2e-alert-link:active,.e2e-alert-link:focus,.e2e-alert-link:hover,.e2e-alert-link:link,.e2e-alert-link:visited{word-wrap:break-word!important;cursor:pointer!important;font-size:14px!important;text-decoration:none!important;outline:0!important;border-bottom:0!important}.e2e-alert-img{border:0!important}.e2e-alert__icon,.e2e-alert__icon__img,.e2e-alert__support,.e2e-alert__text{display:inline-block!important;vertical-align:top!important}.e2e-alert--error{border-left:8px solid #D40000!important}.e2e-alert--warn{border-left:8px solid #FF6100!important}.e2e-alert--info{background:#D5EEED!important;border-left:8px solid #37ABC8!important}.e2e-alert__icon{width:12%!important;padding-top:4px!important;padding-bottom:5px!important;padding-right:1%!important;vertical-align:top!important;font-size:40px!important;text-align:center!important;box-sizing:border-box!important}.e2e-alert__icon__img{max-width:100%!important;height:auto!important;float:left!important;width:36px!important}.e2e-alert__icon__img--short{margin-bottom:-1px!important}.e2e-alert__text{display:block!important;padding-right:10px!important;padding-bottom:0!important;width:100%!important;box-sizing:border-box!important}.e2e-alert__text.e2e-alert__page--inactive{display:none!important}.e2e-alert__text__subtitle,.e2e-alert__text__title{display:block!important;color:#333!important;font-weight:600!important}.e2e-alert__text__title{font-size:16px!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important}.e2e-alert__text__subtitle{font-size:14px!important;margin-bottom:5px!important}.e2e-alert-heading{display:inline-block!important;width:70%!important;margin:0 0 2px!important}.e2e-alert-timestamp{font-size:12px!important;line-height:15px!important;color:#606060!important;display:inline-block!important;width:100%!important;margin-bottom:5px!important}.e2e-alert__text__text{display:block!important;margin-top:0!important;font-size:14px!important;color:#333!important}.e2e-alert__expandable{display:none!important}.e2e-alert__expandable.active{display:block!important}.e2e-alert__expandable__title{margin-top:15px!important;color:#333!important}.e2e-alert__expandable__text{font-size:14px!important;color:#333!important}.e2e-alert__expandable__link{margin:5px 0 0!important;display:none!important}.e2e-alert__controls,.e2e-alert__expandable__link.active,.e2e-alert__support{display:block!important}.e2e-alert__expandable__link .e2e-alert-link,.e2e-alert__expandable__link .e2e-alert-link:active,.e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert__expandable__link .e2e-alert-link:link,.e2e-alert__expandable__link .e2e-alert-link:visited{color:#364395!important;border-bottom:1px dotted #364395!important}.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:active,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:link,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:visited{color:#364395!important;border-bottom-color:#364395!important}.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert-link:focus,.e2e-alert__controls__close-link:focus,.e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert__expandable__text a:focus,.e2e-alert__link-circle:focus,.e2e-alert__page-changer.active:focus,.e2e-alert__page-changer:focus,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link:focus,.e2e-alert__support__link:focus,.e2e-alert__text__text a:focus{outline:#364395 dotted 1px!important}.e2e-alert__expandable__text a,.e2e-alert__expandable__text a:active,.e2e-alert__expandable__text a:focus,.e2e-alert__expandable__text a:hover,.e2e-alert__expandable__text a:link,.e2e-alert__expandable__text a:visited,.e2e-alert__text__text a,.e2e-alert__text__text a:active,.e2e-alert__text__text a:focus,.e2e-alert__text__text a:hover,.e2e-alert__text__text a:link,.e2e-alert__text__text a:visited{word-wrap:break-word!important;cursor:pointer!important;font-size:14px!important;color:#364395!important;border-bottom:1px dotted #364395!important;text-decoration:none!important}.e2e-alert-link:hover,.e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert__expandable__text a:hover,.e2e-alert__text__text a:hover{border-bottom-style:solid!important}.e2e-alert__support{text-align:center!important;margin:25px 0 10px!important;z-index:0!important}.e2e-alert__support__link,.e2e-alert__support__link:active,.e2e-alert__support__link:focus,.e2e-alert__support__link:hover,.e2e-alert__support__link:link,.e2e-alert__support__link:visited{color:#fff!important;text-decoration:none!important;background:#364395!important;padding:15px 20px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;border-radius:10px!important}.e2e-alert__support__link__text{border-bottom:1px dotted #fff!important;border-bottom:1px dotted rgba(255,255,255,.5)!important;font-size:14px!important}.e2e-alert__support__link__img{vertical-align:middle!important}.e2e-alert__controls{position:absolute!important;right:10px!important;top:10px!important;z-index:1!important}.e2e-alert__controls__close-link{display:none!important}.e2e-alert__pagination{position:absolute!important;bottom:0!important;z-index:110!important;background:0 0!important;display:block!important;width:100%!important;text-align:center!important}.e2e-alert-container--paginated .e2e-alert__page,.e2e-alert-container.e2e-alert-container--non-paginated .e2e-alert__pagination,.e2e-alert__mobile,.e2e-alert__mobile--view{display:none!important}.e2e-alert__pagination.e2e-alert__mobile--view{padding-top:0!important}.e2e-alert__controls__close-link,.e2e-alert__controls__close-link:active,.e2e-alert__controls__close-link:focus,.e2e-alert__controls__close-link:hover,.e2e-alert__controls__close-link:link,.e2e-alert__controls__close-link:visited,.e2e-alert__page-changer.active,.e2e-alert__page-changer.active:active,.e2e-alert__page-changer.active:focus,.e2e-alert__page-changer.active:hover,.e2e-alert__page-changer.active:link,.e2e-alert__page-changer.active:visited,.e2e-alert__pagination__link,.e2e-alert__pagination__link:active,.e2e-alert__pagination__link:focus,.e2e-alert__pagination__link:hover,.e2e-alert__pagination__link:link,.e2e-alert__pagination__link:visited{background:#4A4A4A!important;color:#fff!important;font-weight:600!important;text-decoration:none!important;padding:4px 8px!important;-webkit-border-radius:6px!important;-moz-border-radius:6px!important;border-radius:6px!important}.e2e-alert__page-changer,.e2e-alert__page-changer:active,.e2e-alert__page-changer:focus,.e2e-alert__page-changer:hover,.e2e-alert__page-changer:link,.e2e-alert__page-changer:visited{background:#9a9a9a!important}.e2e-alert__link-circle,.e2e-alert__link-circle:active,.e2e-alert__link-circle:focus,.e2e-alert__link-circle:hover,.e2e-alert__link-circle:link,.e2e-alert__link-circle:visited{margin-left:8px!important;-webkit-border-radius:50%!important;-moz-border-radius:50%!important;border-radius:50%!important;padding:0!important;width:25px!important;height:25px!important;line-height:23px!important;text-align:center!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{text-align:right!important}.e2e-alert-container--paginated .e2e-alert__main-content{margin-bottom:30px!important}.e2e-alert__mobile--view.active,.e2e-alert__mobile.active,.e2e-alert__page.active,.e2e-alert__text--mobile--active{display:block!important}@media screen and (min-width:550px){.e2e-alert{padding:15px 20px!important}.e2e-alert__mobile,.e2e-alert__mobile--view{display:block!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:visited,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{display:none!important}.e2e-alert-heading{width:62%!important}.e2e-alert__text__title{font-size:18px!important}.e2e-alert__page .e2e-alert-heading{width:60%!important}.e2e-alert__icon{padding-right:0!important;padding-bottom:0!important;width:50px!important;text-align:left!important}.e2e-alert__icon__img{float:none!important}.e2e-alert__pagination{right:40px!important;top:0!important;bottom:initial!important;width:auto!important;height:auto!important;text-align:right!important}.e2e-alert.e2e-alert__pagination{padding-top:19px!important}.e2e-alert__controls{right:20px!important;top:16px!important}.e2e-alert__controls__close-link,.e2e-alert__controls__close-link:active,.e2e-alert__controls__close-link:focus,.e2e-alert__controls__close-link:hover,.e2e-alert__controls__close-link:link,.e2e-alert__controls__close-link:visited{display:block!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{margin-top:18px!important}.e2e-alert-container--paginated .e2e-alert__main-content{margin-bottom:0!important}}@media screen and (min-width:900px){.e2e-alert{min-height:123px!important;padding-left:0!important}.e2e-alert.e2e-alert__pagination{min-height:0!important}.e2e-alert__text{position:relative!important}.e2e-alert__icon{position:absolute!important;top:0!important;left:0!important;width:70px!important;text-align:center!important}.e2e-alert__text__title{margin-left:70px!important}.e2e-alert-heading{width:80%!important}.e2e-alert__page .e2e-alert-heading{width:88%!important}.e2e-alert__text{padding:0 20px 0 0!important;width:70%!important}.e2e-alert__shift{position:relative!important;left:70px!important;width:87%!important}.e2e-alert__support{width:265px!important;max-width:28%!important;position:absolute!important;right:20px!important;top:0!important}.e2e-alert__support__link,.e2e-alert__support__link:active,.e2e-alert__support__link:focus,.e2e-alert__support__link:hover,.e2e-alert__support__link:link,.e2e-alert__support__link:visited{margin-top:30px!important;display:block!important;padding-right:11px!important;padding-left:11px!important}}@media screen and (min-width:1020px){.e2e-alert__text{width:72%!important}}@media screen and (min-width:1280px){.e2e-alert__text{width:78%!important}}';
	
	// Month and Weekday names used for date formatting
	var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	// Google Analytics
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','_e2e_ga');

	// Set up custom GA tracker and enforce SSL
	_e2e_ga('create', 'UA-66911913-2', 'auto', {'name': 'e2eTracker'});
	_e2e_ga('e2eTracker.set', 'forceSSL', true);

	// Pages and Products set by the embeded JS tag
	var PAGES = (_e2e_comms && _e2e_comms.pages) ? (_e2e_comms.pages.replace(/ /g,'')).split(',') : [];
	var PRODUCTS = (_e2e_comms && _e2e_comms.products) ? (_e2e_comms.products.replace(/ /g,'')).split(',') : [];

	var BASE_ENDPOINT = (_e2e_comms && _e2e_comms.base_endpoint) ? _e2e_comms.base_endpoint : "e2e-comms-stg.pearson.com";
	var PRODUCT_ENDPOINT = function(product) { return location.protocol+"//"+BASE_ENDPOINT+"/e2ecomms/products/" + product + "/comms.json"; };
	var PRODUCTS_TO_LOAD;

	// Public status fields to check that inline comms have been loaded
	_e2e_comms.status = {};
	_e2e_comms.status.loaded = false;

	// Public methods to add and remove inline comms to the DOM
	_e2e_comms.add = function(parent_elem) {

	  	// Load up the styles before anything else (test to see if styles exist in fnc)
    	addStyles();

    	if (!_e2e_comms.status.loaded) {

    		// Get the comms and add them to the DOM once loaded
    		getComms(function() {_e2e_comms.status.loaded = true; addComms(parent_elem)});

    	} else if (!document.getElementById('e2e-alertContainer')) {

    		// Get the comms and add them to the DOM once loaded
    		addComms(parent_elem);

    	}

	}

	_e2e_comms.remove = function() {

		var commDiv = document.getElementById("e2e-alertContainer");

		if (commDiv) {

			commDiv.parentNode.removeChild(commDiv);

		}

	}

	// Comms and IngoreComms Objects
	var COMMS = [], IGNORE_COMMS = {}, COMMS_SHOWN = [];

	function islocalStorageSupported() {
		try {
			return "localStorage" in window && window["localStorage"] !== null;
		} catch (e) {
			return false;
		}
	}

	function saveIgnoreCommsToLS() {
		try {
			localStorage.setItem('E2E_ignoreComms', _JSON.stringify(IGNORE_COMMS));
		} catch(e) {
			console.log('E2E Comms: LocalStorage (Exception) ' + e);
		}
	}

	function filterAndMaintainIgnoredComms() {
		// If local storage is supported
		if (islocalStorageSupported()) {

			var comm, IGNORE_COMMS_REMOVE;

			// Get the data from local storage
			var ignoreCommsStored = localStorage.getItem('E2E_ignoreComms');

			if (ignoreCommsStored) {

				try {

					// Parse the data into JSON
					IGNORE_COMMS = _JSON.parse(ignoreCommsStored);
					// Duplicate the ignore comms object
					IGNORE_COMMS_REMOVE = _JSON.parse(ignoreCommsStored);

					// Remove any previously closed comms from the comms list
					for (var x = COMMS.length; x--;) {
						comm = COMMS[x];
						// If the comm is ignored and the date published has not changed i.e. no updates to comm do not show
						if (IGNORE_COMMS[comm.id] && IGNORE_COMMS[comm.id].published == comm.published) {
							// Remove from the comms being displayed
							COMMS.splice(x, 1);
							// Clean up the ignore comms remove array
							delete IGNORE_COMMS_REMOVE[comm.id];
						}
					}

					// Maintenance on the remaining INGNORE_COMMS_REMOVE object
					// These comms have been ignored in the past and have not been loaded now
					var ignore_comms_changed = false;

					for (var i in IGNORE_COMMS_REMOVE) {
						comm = IGNORE_COMMS_REMOVE[i];
						// If we have loaded up a product and page which is the same as this comms -> remove from ignore comms
						if (isSubsetOverlap(comm.products, PRODUCTS) && isSubsetOverlap(comm.pages, PAGES)) {
							delete IGNORE_COMMS[i];
							ignore_comms_changed = true;
						}
					}

					// Only save changes to local storage
					if (ignore_comms_changed) saveIgnoreCommsToLS();

				} catch (e) {
					console.log('E2E Comms: Unable to parse closed comms from Local Storage.');
				}
			}
		}

	}

	parseDate = function(dateString) {
		if (!dateString) return new Date();
		var a = dateString.split(/[^0-9]/);
		if (dateString.indexOf('UTC') > -1) {
			return new Date(Date.UTC(a[0], a[1]-1, a[2], a[3], a[4], a[5]));
		}
		return new Date(a[0], a[1]-1, a[2], a[3], a[4], a[5]);
	};

	function closest(elem, selector) {

		var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

		while (elem) {
			if (matchesSelector.bind(elem)(selector)) {
				return elem;
			} else {
				elem = elem.parentElement;
			}
		}
		return false;
	}

	function CommAttributes() {}

	CommAttributes.DISRUPTION = 'disruption';
	CommAttributes.OUTAGE = 'outage';
	CommAttributes.MAINTENANCE = 'maintenance';

	CommAttributes.getNumericStatusLevel = function(statusLevel) {
		switch (statusLevel) {
			case CommAttributes.MAINTENANCE: return 3;
			case CommAttributes.DISRUPTION: return 2;
			case CommAttributes.OUTAGE: return 1;
		}
		return 4;
	};

	CommAttributes.getDisruptionMarkup = function(id, title, subtitle, content, extended, timestamp) { return '<div class="e2e-reset e2e-alert e2e-alert--warn" id="' + id + '"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/gzD/jED/llD/n2D/s4D/vI//xp//z6//2b//7N//9e////8H1OatAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAAEeSURBVHjaxZbZbsMgEEUJYLabhcRO8v9/2sgORYRrCmqlnmeOBmYYBlEhtfNY8U5L8QPSBBQE03KkA8HtKQeLHexBEFTALkGJiglNJvGBQWZ5vlmQMWQ9FbgxoSGQXSkUXJNwRYH6zmdAQUxCREFI2bXoE2Df9UWvgK3mrl9wNADOSTiDhTD45JSEEzK5GGFECGRHTQFS6DFBC4eaJKDGCT8meIExAX8jPLb1j5bAGmL5J8GPCZ4Wbt6EmRZOoyamdmBXQ44Jkl1vXOb4Yr6gIpAGamJyi1Joi9I8HWM80hwJHuL2fHFjAVZsb5bszlOJ+ybcQZ7KFdXXD4o89yQCH0KmfQY+gtpZMmQotuowjY7d0cE++HX41edk+PvzBZN3WoN8sN2eAAAAAElFTkSuQmCC"/></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">' + title + '</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">' + timestamp + '</div><h2 class="e2e-reset e2e-alert__text__subtitle">' + subtitle + '</h2><p class="e2e-reset e2e-alert__text__text">' + content + '</p>' + ((extended) ? CommAttributes.getExtendedContentMarkup(extended) : '') + '</div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"/> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div>'; };
	CommAttributes.getOutageMarkup = function(id, title, subtitle, content, extended, timestamp) { return '<div class="e2e-reset e2e-alert e2e-alert--error" id="' + id + '"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAMFBMVEUAAADUAADUAADUAADUAADUAADUAADUAADUAADUAADUAADUAADXEBDvn5/3z8/////1BYYlAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAADzSURBVHgBtJHRjoAgDAQBEUoX5f//9pJzQ3Ky6tPNY5mJNQ0LKVvDL81yCh+k4viDl7cmGQT2lMSKB2pU/uZ4xLfV3/HKfvcLPijvvirUPl2Zfd1q4+g4RdHPAxfzz6PTH2Mt+jkGC48M6vRvBf1ZVN53+ktBfxbXzW0+3Yp1aPyALtQo8QTiWQx4DIcu5JLOjdZC+NwpQxfaRw4GXWgfFhp0oX20AOhC+0CALrQvAxb0/yP4qbROiAAAAhAE9m9NBGYb3KPgHIkv7c/KH8fR4PBxvL1AVlGFAGNGQcaoVBgr7lUoriyXomvXxe7TwccJz58A8+pVFeeLDcEAAAAASUVORK5CYII="/></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">' + title + '</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">' + timestamp + '</div><h2 class="e2e-reset e2e-alert__text__subtitle">' + subtitle + '</h2><p class="e2e-reset e2e-alert__text__text">' + content + '</p>' + ((extended) ? CommAttributes.getExtendedContentMarkup(extended) : '') + '</div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"/> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div>'; };
	CommAttributes.getMaintenanceMarkup = function(id, title, subtitle, content, extended, timestamp) { return '<div class="e2e-reset e2e-alert e2e-alert--info" id="' + id + '"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img e2e-alert__icon__img--short" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAA3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8hQts9du9JpwNZ2xdmCy92P0OCb1eSo2ue04OrB5e7N6vHa7/Xm9fjz+vz////qYSeMAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAAFMSURBVHgBlZbdkoMgDEYRrSKfrD+rtOb9H3S3dchYG7E5N96cDEkYE8wHtnItXrSusuYCW3u84Wub0x0E3FlI0eCEppD80uMUX376N2S5Hf0aF9Tf+GGa4zwIEXI+P5H+WYOQVSn5IyU/wZUX/isfPnW3kdL/9IFm8y0EouAD2507we/oyYgDTj6AK5jBhIGPqCEwvQIeYH+d+TL8eQB17FPcGsUZyQED+/Sbyq5wXgPFodt8bkBlHCQ6Sjzm8elTSH1qIRHoQMRGa2R/pQN8heY7fwAHKH2YjJ++MUAIEPzQDdM0jR32mIwPCdPq/NY4lQ9nKpWPyliVD2uM1/iefyDRl+efVfiwuyGw0NLfL3y3HzNEQJ/3YfeD7E49lrzfvI3K/ip/+OJ9GPdxXXI+yvy4zy+h+tqv9StLvxT1a1e/2PVPB/3jRP38+QN1QV/Rh33Q7AAAAABJRU5ErkJggg=="/></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">' + title + '</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">' + timestamp + '</div><h2 class="e2e-reset e2e-alert__text__subtitle">' + subtitle + '</h2><p class="e2e-reset e2e-alert__text__text">' + content + '</p>' + ((extended) ? CommAttributes.getExtendedContentMarkup(extended) : '') + '</div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"/> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div>'; };	

	CommAttributes.getExtendedContentMarkup = function(extended) {
		return '<div class="e2e-reset e2e-alert__expandable"><h2 class="e2e-reset e2e-alert__text__subtitle e2e-alert__expandable__title">Details:</h2><p class="e2e-reset e2e-alert__expandable__text">' + extended + '<div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--close active"><a href="javascript:void(0)" role="button" aria-label="Hide full details" title="Hide full details" class="e2e-reset e2e-alert-link">Hide full details</a></div></p></div><div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--open active"><a href="javascript:void(0)" role="button" aria-label="Show full details" title="Show full details" class="e2e-reset e2e-alert-link">Show full details</a></div>';
	};

	CommAttributes.getCommsContainerMarkup = function(comms, commsMarkup) {
		var markup = '<div class="e2e-reset e2e-alert-container e2e-alert-container--' + ((comms.length <= 1) ? 'non-' : '') + 'paginated" id="e2e-alertContainer" tabindex="-1">';
		markup += CommAttributes.getControlMarkup(comms.length);
		return markup + commsMarkup + '</div>';
	};

	CommAttributes.getControlMarkup = function(totalComms) {
		var markup = '<div class="e2e-reset e2e-alert e2e-alert__pagination e2e-alert__mobile--view" tabindex="-1">';
		for (var i = 0; i<totalComms; i++) {
			markup += '<a href="javascript:void(0)" role="button" aria-label="Message ' + (i+1) + '" title="Message ' + (i+1) + '" class="e2e-reset e2e-alert-link e2e-alert__pagination__link e2e-alert__page-changer' + ((i === 0)?' active':'') + '">' + (i+1) + '</a> ';
		}
		return markup + '</div>';
	};

	CommAttributes.getCommContainerMarkup = function(number, commMarkup) {
		return '<div id="e2e-alert-page-' + number + '" class="e2e-reset e2e-alert__page' + ((number==1)?' active':'') + '">' + commMarkup + '</div>';
	};

	function addStyles() {

		// Check for styles already existing
		var existing_styles = document.getElementById('e2e-alertStyles');
		if (existing_styles) return;

		var head = document.head || document.getElementsByTagName('head')[0],
		    style = document.createElement('style');

		style.type = 'text/css';
		style.id = 'e2e-alertStyles';
		if (style.styleSheet) {
		 	style.styleSheet.cssText = CSS;
		} else {
			style.appendChild(document.createTextNode(CSS));
		}

		head.appendChild(style);

	}

	function isForPage(pages, commPages) {

		for (var i in commPages) {
			if (pages.indexOf(commPages[i]) > -1) return true;
		}

		return false;

	}

	function isSubsetOverlap(sup, sub) {

		for (var i in sub) {
			if (sup.indexOf(sub[i]) > -1) return true;
		}

		return false;

	}

	function getLocale(date) {
		var offset = date.getTimezoneOffset(),
			hours = (-offset) / 60,
			sign = offset > 0 ? '' : '+';
		return hours == 0? 'GMT'  : 'GMT' + sign + hours;
	}

	function formatDate(date) {
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;
		var strTime = hours + ':' + minutes + ' ' + ampm;
		return strTime + ' local time on ' + getWeekdayDisplay(date.getDay()) + ', ' + getMonthDisplay(date.getMonth()) + ' ' + date.getDate();
	}

	function getMonthDisplay(month) { return MONTH_NAMES[month]; }
	function getWeekdayDisplay(day) { return WEEKDAY_NAMES[day]; }

	function compareComms(a,b) {
		var dateA = parseDate(a.published),
			dateB = parseDate(b.published);
		if (CommAttributes.getNumericStatusLevel(a.statusLevel) < CommAttributes.getNumericStatusLevel(b.statusLevel))
			return -1;
		if (CommAttributes.getNumericStatusLevel(a.statusLevel) > CommAttributes.getNumericStatusLevel(b.statusLevel))
			return 1;
		if (dateA > dateB)
			return -1;
		if (dateA < dateB)
			return 1;
		return 0;
	}

	function addComms(parent_elem) {

		var comm, commsContainerMarkup, commDiv, commPages;

		// Clean up COMMS_SHOWN
		COMMS_SHOWN = [];

		// Filter out the comms we have previously ignored
		// And remove any previously ignored comms that have not re-appeared
		filterAndMaintainIgnoredComms();

		// No comms to show
		if (!COMMS || COMMS.length === 0) return;

		// Store the markup for the comms
		var commsMarkup = '';
		// Need a separate index counter incase a comm is filtered
		var commIndex = 1;

		// Sort comms based on status level first, then published date
		COMMS.sort(compareComms);

		for (var i = 0; i<COMMS.length; i++) {

			// Get a single comm
			comm = COMMS[i];

			// Pages related to the comm
			commPages = comm.pages.split(',');

			// Check to see if comm is for this page (filters)
			if (isForPage(PAGES, commPages)) {

				// Add comm to IGNORED_COMMS in the event that the user closes the message
				// Action to store on LS is done on close event
				IGNORE_COMMS[comm.id] = {
											"published": comm.published,
											"products": PRODUCTS,
											"pages": PAGES
										};

				// Get the markup for the comm based on status level and pagination
				var markup = getCommMarkup(comm, commIndex);

				// Set the [Time] tags to local time using the published field
				var published = parseDate(comm.published),
					started = parseDate(comm.started);
				markup = markup.replace(new RegExp('\\[Time\\]', 'g'), formatDate(published));
				markup = markup.replace(new RegExp('\\[StartTime\\]', 'g'), formatDate(started));

				// Append the comm markup to other comm markup
				commsMarkup += markup;

				// Add as a shown comm and increment the commIndex on success
				COMMS_SHOWN.push(comm);
				commIndex++;

				// Fire GA event for comm, product and pages
				_e2e_ga('e2eTracker.send', 'event', comm.id, 'view', 'view', {'nonInteraction': 1});
				_e2e_ga('e2eTracker.send', 'event', comm.id, 'product', comm.product, {'nonInteraction': 1});
				_e2e_ga('e2eTracker.send', 'event', comm.id, 'page', PAGES.join(','), {'nonInteraction': 1});
			    _e2e_ga('e2eTracker.send', 'event', comm.id, 'url', window.location.href, {'nonInteraction': 1});
      
			}

		}

		// Add the comms markup to the container
		commsContainerMarkup = CommAttributes.getCommsContainerMarkup(COMMS_SHOWN, commsMarkup);

		// Create the div element and add the markup
		commDiv = document.createElement('div');
		commDiv.innerHTML = commsContainerMarkup;

		if (typeof parent_elem === 'undefined' || !parent_elem || parent_elem == null) {
			document.body.insertBefore(commDiv.firstChild, document.body.firstChild);
		} else {
			parent_elem.insertBefore(commDiv.firstChild, parent_elem.firstChild);
		}

		setUpHandlers();

	}

	function getCommMarkup(comm, number) {

		var markup;

		var timestamp = formatDate(parseDate(comm.published));
		var timestamp_markup = ((comm.started == comm.published) ? 'Posted at ' : 'Updated at ') + timestamp;

		switch (comm.statusLevel) {
			case CommAttributes.MAINTENANCE:
				markup = CommAttributes.getMaintenanceMarkup(comm.id, comm.title, comm.subtitle, comm.content, comm.extended, timestamp_markup);
				break;
			case CommAttributes.DISRUPTION:
				markup = CommAttributes.getDisruptionMarkup(comm.id, comm.title, comm.subtitle, comm.content, comm.extended, timestamp_markup);
				break;
			case CommAttributes.OUTAGE:
				markup = CommAttributes.getOutageMarkup(comm.id, comm.title, comm.subtitle, comm.content, comm.extended, timestamp_markup);
				break;
		}

		return CommAttributes.getCommContainerMarkup(number, markup);

	}

	function commExists(comm) {

		// Check to see if it already exists in the set of comms
	    for (var i = 0; i < COMMS.length; i++) {
	        if (COMMS[i].id == comm.id) return true;
	    }
	    return false;

	}

	function doProductRequest(product, endpoint, cb) {

		// Create a CORS request and check its valid
		var xmlhttp = createCORSRequest('GET', endpoint);
		if (!xmlhttp) throw 'CORS not supported';

		xmlhttp.onload = function() {

			try {

				// No comms for this product JSON request
				if (!this.responseText || this.responseText === '') return;

				var productComms;
				try {

					// Parse JSON into JS object
					productComms = _JSON.parse(this.responseText);

				} catch (e) {

					console.log('E2E Comms: Unable to parse JSON for product '+product);

				}

				if (!productComms) return;

				// Iterate over all comms and add to our global list
				for (var i in productComms.comms) {

					// Get specific comm for product
					var productComm = productComms.comms[i];

					// Add product name to comm
					productComm.product = product;

				    // If the comm doesn't already exist, add to array
				    if (!commExists(productComm)) COMMS.push(productComm);

				}


			} catch (e) {

				console.log('E2E Comms: Unable to get product JSON for '+product);

			} finally {

				// Decrement the number of products that need to be loaded
				// If this is the last product to be loaded, execute the callback
				PRODUCTS_TO_LOAD--;
				if (PRODUCTS_TO_LOAD === 0) cb();

			}

		}

		xmlhttp.onerror = function() {

			// Decrement the number of products that need to be loaded
			// If this is the last product to be loaded, execute the callback
			PRODUCTS_TO_LOAD--;
			if (PRODUCTS_TO_LOAD === 0) cb();

		}

		// Make the CORS call
		xmlhttp.send();

	}

	function getComms(cb) {

		var comm, comm_div;

		// Set the number of products are to be loaded so we handle the callback appropriately
		PRODUCTS_TO_LOAD = PRODUCTS.length;

		for (var i in PRODUCTS) {

			try {

				// Get a product name and endpoint
				var product = PRODUCTS[i].trim();
				var endpoint = PRODUCT_ENDPOINT(product);

				doProductRequest(product, endpoint, cb);

			} catch (err) {

				// Log exception with the E2E Comms prefix
				console.log('E2E Comms: (Exception) '+err);

				// Decrement the number of products that need to be loaded
				// If this is the last product to be loaded, execute the callback
				PRODUCTS_TO_LOAD--;
				if (PRODUCTS_TO_LOAD === 0) cb();

			}

		}

	}

	// Create the XHR object
	function createCORSRequest(method, url) {

		var xhr = new XMLHttpRequest();
		if ('withCredentials' in xhr) {
			// XHR for Chrome/Firefox/Opera/Safari.
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != 'undefined') {
			// XDomainRequest for IE.
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			// CORS not supported.
			xhr = null;
		}
		return xhr;

	}

	function setUpHandlers() {

		var e2eAlertContainer = document.getElementById("e2e-alertContainer");

		/* Add/remove class */
		function addClass(el, classToAdd){
			if (!el.className || !el.className.length) {
				el.className += classToAdd;
			}
			el.className += ' '+classToAdd;
		}

		function removeClass(el, classToRemove){
			// this adds an extra space on LH
			var elClass = el.className;
			while (elClass.indexOf(' '+classToRemove+' ') != -1) {
				elClass = elClass.replace(' '+classToRemove+' ', '');
			}
			while (elClass.indexOf(classToRemove+' ') != -1) {
				elClass = elClass.replace(classToRemove+' ', '');
			}
			while (elClass.indexOf(' '+classToRemove) != -1) {
				elClass = elClass.replace(' '+classToRemove, '');
			}
			while (elClass.indexOf(classToRemove) != -1) {
				elClass = elClass.replace(classToRemove, '');
			}
			el.className = elClass;
		}

		/* Close alert links */
		var e2eAlertCloseLinkList = document.querySelectorAll(".e2e-alert__controls__close-link");
		var addCloseLinkHandlers = function (links) {
			for (var i = 0; i < links.length; i += 1) {
				(function (i) {
					links[i].onclick = function (e) {
						e2eAlertContainer.parentNode.removeChild(e2eAlertContainer); // simple e2eAlertContainer.remove() not supported in ie9
						// Save the latest IGNORE COMMS to Local Storage
						saveIgnoreCommsToLS();
					};
				})(i);
			}
		};
		addCloseLinkHandlers(e2eAlertCloseLinkList);


		/* View and close message on mobile - could combine into one by just changing text inside & checking if target is open or not */
		var e2eMessageMobileLinkViewList = document.querySelectorAll(".e2e-alert__pagination__link--mobile");
		var e2eElementToShowList = document.querySelectorAll(".e2e-alert__mobile--view");
		var addShowViewMobileClickHandlers = function (links) {
			for (var i = 0; i < links.length; i += 1) {
				(function (i) {
					links[i].onclick = function (e) {

						if (e.target.innerHTML && e.target.innerHTML === "View") {
							/* change all links to 'Close' */
							for (i = 0; i < e2eMessageMobileLinkViewList.length; i++) {
								e2eMessageMobileLinkViewList[i].innerHTML = "Close";
							}
							/* show ('View') all elements */
							for (i = 0; i < e2eElementToShowList.length; i++) {
								if (e2eElementToShowList[i].className.indexOf('active') === -1) {
									addClass(e2eElementToShowList[i], "active");
								}
							}
						}
						else if (e.target.innerHTML && e.target.innerHTML === "Close") {
							e.target.innerHTML = "View";
							/* close all mobile-hidden elements */
							for (i = 0; i < e2eElementToShowList.length; i++) {
								removeClass(e2eElementToShowList[i], "active");
							}
						}
					};
				})(i);
			}
		};
		addShowViewMobileClickHandlers(e2eMessageMobileLinkViewList);


		/* Open / close details */
		var e2eExpandableTriggerOpenList = document.querySelectorAll(".e2e-alert__expandable__link--open");
		var addExpandableOpenHandlers = function (triggers) {
			for (var i = 0; i < triggers.length; i += 1) {
				(function (i) {
					var pageNumber = i+1;
					triggers[i].onclick = function (e) {
						/* select only the one that is within current page */
						var baseElement = closest(e.target, '.e2e-alert');
						var e2eExpandableTargetList = baseElement.querySelectorAll(".e2e-alert__expandable");
						var e2eExpandableOpenLinkList = baseElement.querySelectorAll(".e2e-alert__expandable__link--open");

						addClass(e2eExpandableTargetList[0], "active");

						removeClass(e2eExpandableOpenLinkList[0], "active");

					};
				})(i);
			}
		};
		addExpandableOpenHandlers(e2eExpandableTriggerOpenList);


		/* Open / close details */
		var e2eExpandableTriggerCloseList = document.querySelectorAll(".e2e-alert__expandable__link--close");
		var addExpandableCloseHandlers = function (triggers) {
			for (var i = 0; i < triggers.length; i += 1) {
				(function (i) {
					var pageNumber = i+1;
					triggers[i].onclick = function (e) {
						/* select only the one that is within current page */
						var baseElement = closest(e.target, '.e2e-alert');
						var e2eExpandableTargetList = baseElement.querySelectorAll(".e2e-alert__expandable");
						var e2eExpandableOpenLinkList = baseElement.querySelectorAll(".e2e-alert__expandable__link--open");

						removeClass(e2eExpandableTargetList[0], "active");

						addClass(e2eExpandableOpenLinkList[0], "active");

					};
				})(i);
			}
		};
		addExpandableCloseHandlers(e2eExpandableTriggerCloseList);


		/* Pagination */
		var e2eAlertPageChangerLinks = document.querySelectorAll(".e2e-alert__page-changer");
		var add_the_handlers = function (links) {
			for (var i = 0; i < links.length; i += 1) {
				(function (i) {
					links[i].onclick = function (e) {
						/*console.log('e.target ' + e.target);*/
						/*console.log('links[i].innerHTML ' + links[i].innerHTML);*/
						var e2ePageNumber = links[i].innerHTML;
						var e2eTargetPage = document.getElementById("e2e-alert-page-"+e2ePageNumber);

						/*remove active from all pages & pager links*/
						var allPages = document.querySelectorAll(".e2e-alert__page");
						for (var index = 0; index < allPages.length; index+=1) {
							removeClass(allPages[index], 'active');
						}
						for (var index = 0; index < e2eAlertPageChangerLinks.length; index+=1) {
							removeClass(e2eAlertPageChangerLinks[index], 'active');
						}

						/*add class to the right pages*/
						if (e2eTargetPage.className.indexOf("active") !== -1) {
						}
						else {
							addClass(e.target, "active");
							addClass(e2eTargetPage, "active");

							if (links[i].className.indexOf('active') === -1) {
								addClass(links[i], "active");
							}
						}
					};

				})(i);

			}
		};
		add_the_handlers(e2eAlertPageChangerLinks);

		/* GA: Set up handlers for PSS button and link clicks */
		/* ID = comms id and CLASS = 'e2e-pss-link' */
		for (i in COMMS_SHOWN) {
			var pss_links = document.querySelectorAll("#" + (COMMS_SHOWN[i]).id + " a.e2e-pss-link");
			for (j in pss_links) {
				var pss_link = pss_links[j];
				pss_link.e2ecomm = COMMS_SHOWN[i];
				pss_link.onclick = function(event) {
					var comm = this.e2ecomm;
					_e2e_ga('e2eTracker.send', 'event', comm.id, 'pss_click', 'click', {'nonInteraction': 1});
					_e2e_ga('e2eTracker.send', 'event', comm.id, 'pss_product', comm.product, {'nonInteraction': 1});
					_e2e_ga('e2eTracker.send', 'event', comm.id, 'pss_page', PAGES.join(','), {'nonInteraction': 1});
				}
			}
		}

	}

	var readyFnc = function() {
		try {

			// Check if the supress flag exists and/or has been set
			if (typeof _e2e_comms.suppressAutoload === 'undefined' || !_e2e_comms.suppressAutoload) {

			  	// Load up the styles before anything else
		    	addStyles();

			  	// Get the comms and add them to the DOM once loaded
				getComms(function() {_e2e_comms.status.loaded = true; addComms()});

			}

		} catch (e) {

		  	// Log exception with the E2E Comms prefix
		  	console.log('E2E Comms: (Exception) '+err);

		}
	};

	_DomReady.ready(readyFnc);


})();
