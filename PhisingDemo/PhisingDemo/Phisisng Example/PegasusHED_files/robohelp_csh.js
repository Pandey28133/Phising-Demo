var gbNav6=false;var gbNav61=false;var gbNav4=false;var gbIE4=false;var gbIE=false;var gbIE5=false;var gbIE55=false;var gAgent=navigator.userAgent.toLowerCase();var gbMac=(gAgent.indexOf("mac")!=-1);var gbSunOS=(gAgent.indexOf("sunos")!=-1);var gbOpera=(gAgent.indexOf("opera")!=-1);var HH_DISPLAY_TOPIC=0;var HH_DISPLAY_TOC=1;var HH_DISPLAY_INDEX=2;var HH_DISPLAY_SEARCH=3;var HH_HELP_CONTEXT=15;var gVersion=navigator.appVersion.toLowerCase();var gnVerMajor=parseInt(gVersion);var gnVerMinor=parseFloat(gVersion);gbIE=(navigator.appName.indexOf("Microsoft")!=-1);if(gnVerMajor>=4){if(navigator.appName=="Netscape"){gbNav4=true;if(gnVerMajor>=5){gbNav6=true}}gbIE4=(navigator.appName.indexOf("Microsoft")!=-1)}if(gbNav6){document.gnPageWidth=innerWidth;document.gnPageHeight=innerHeight;var nPos=gAgent.indexOf("netscape");if(nPos!=-1){var nVersion=parseFloat(gAgent.substring(nPos+10));if(nVersion>=6.1){gbNav61=true}}}else{if(gbIE4){var nPos=gAgent.indexOf("msie");if(nPos!=-1){var nVersion=parseFloat(gAgent.substring(nPos+5));if(nVersion>=5){gbIE5=true}if(nVersion>=5.5){gbIE55=true}}}}function RH_ShowHelp(b,g,f,c){var e=g;var a="";var d=g.indexOf(">");if(d!=-1){e=g.substring(0,d);a=g.substring(d+1)}if(isServerBased(e)){RH_ShowWebHelp_Server(b,e,a,f,c)}else{RH_ShowWebHelp(b,e,a,f,c)}}function RH_ShowWebHelp_Server(b,e,a,d,c){ShowWebHelp_Server(e,a,d,c)}function RH_ShowWebHelp(b,e,a,d,c){ShowWebHelp(e,a,d,c)}function ShowWebHelp_Server(e,c,d,b){var f="";if(d==HH_HELP_CONTEXT){if(e.indexOf("?")==-1){f=e+"?ctxid="+b}else{f=e+"&ctxid="+b}}else{if(e.indexOf("?")==-1){f=e+"?ctxid=0"}else{f=e+"&ctxid=0"}}if(c){f+=">"+c}if(gbIE4){f+="&cmd=newwnd&rtype=iefrm";loadData(f)}else{if(gbNav4){f+="&cmd=newwnd&rtype=nswnd";var a="left="+(screen.width-500)+",top=0,height=400px,width=500px,resizable=1";window.open(f,"__webCshStub",a)}else{var a="left="+screen.width+",top="+screen.height+",width=100,height=100";if(gbIE5){window.open("about:blank","__webCshStub",a)}window.open(f,"__webCshStub")}}}function ShowWebHelp(e,c,d,b){var f="";if(d==HH_DISPLAY_TOPIC){f=e+"#<id=0"}if(d==HH_HELP_CONTEXT){if(gbNav4){if(e.indexOf("?")==-1){f=e+"?ctxid="+b}else{f=e+"&ctxid="+b}}else{f=e+"#<id="+b}}else{if(d==HH_DISPLAY_INDEX){f=e+"#<cmd=idx"}else{if(d==HH_DISPLAY_SEARCH){f=e+"#<cmd=fts"}else{if(d==HH_DISPLAY_TOC){f=e+"#<cmd=toc"}}}}if(c){if(gbNav4){f+=">"+c}else{f+=">>wnd="+c}}if(f){if(gbIE4){loadData(f)}else{if(gbNav4){var a="left="+(screen.width-500)+",top=0,height=400px,width=500px,resizable=1";window.open(f,"__webCshStub",a)}else{var a="left="+screen.width+",top="+screen.height+",width=100,height=100";if(gbIE5){window.open("about:blank","__webCshStub",a)}window.open(f,"__webCshStub")}}}}function isServerBased(c){if(c.length>0){var a=c.lastIndexOf(".");if(a!=-1&&c.length>=a+4){var b=c.substring(a,a+4);if(b.toLowerCase()==".htm"){return false}}}return true}function getElement(a){if(document.getElementById){return document.getElementById(a)}else{if(document.all){return document.all(a)}}return null}function loadData(c){if(!getElement("dataDiv")){if(!insertDataDiv()){gsFileName=c;return}}var b="";if(gbMac){b+='<iframe name="__WebHelpCshStub" src="'+c+'"></iframe>'}else{b+='<iframe name="__WebHelpCshStub" style="visibility:hidden;width:0;height:0" src="'+c+'"></iframe>'}var a=getElement("dataDiv");if(a){if(gbNav6){if(a.getElementsByTagName&&a.getElementsByTagName("iFrame").length>0){a.getElementsByTagName("iFrame")[0].src=c}else{a.innerHTML=b}}else{a.innerHTML=b}}}function insertDataDiv(){var a="";if(gbMac){a+='<div id=dataDiv style="display:none;"></div>'}else{a+='<div id=dataDiv style="visibility:hidden"></div>'}document.body.insertAdjacentHTML("beforeEnd",a);return true}function OpenCustomHelp(c){var b;var a="toolbar=no,statusbar=no,resizable=1,addressbar=no,left="+(screen.width*50/100)+", width="+(screen.width*47/100)+",top="+(screen.height*5/100)+",height="+(screen.height*65/100)+", scrollbars=yes";b=window.open(app+"/Common/frmCustomHelpUrl.aspx?isInstructor="+c,"CustomHelp",a)}function OpenFlareHelp(a){window.open(a)};