var objLogoutWindow;var timerObj;var Apppath="";var dblMinutes;var IsPreferencePage=0;function ele(a){return window.document.getElementById(a)}function parentEle(a){return window.rtUXWindow().document.getElementById(a)}function CheckAlternateView(){try{if(((window.location.href.search(/viewid=2/i)!=-1)||pageViewMode.PageView==pageViewMode.enumPageViewMode.EmbeddedView)&&((cdtFramework.DeliveryType==cdtFramework.enumDeliveryType.CCNG)||(cdtFramework.DeliveryType==cdtFramework.enumDeliveryType.LMS))){return true}else{return false}}catch(a){return false}}function CheckIntegratedCourses(){try{if((cdtFramework.DeliveryType==cdtFramework.enumDeliveryType.CCNG)||(cdtFramework.DeliveryType==cdtFramework.enumDeliveryType.LMS)){return true}else{return false}}catch(a){return false}}function CheckIfMMNDPreferencePage(){if(IsPreferencePage===1){return true}else{return false}}function PegasusUXCloseImageBtnCss(){$(document).ready(function(){var a=typeof(IsDpUserType)=="undefined"?"0":IsDpUserType;if(a=="False"||a=="0"){return}if(typeof(Apppath)=="undefined"||Apppath==""){Apppath=getApplicationRootPath()}if($("a.icn_Close").hasClass("icn_Close")){$("a.icn_Close").css("background","url("+Apppath+"/images/Sprites/Icon_SpriteUX.png)");$("a.icn_Close").css("height","24px");$("a.icn_Close").css("width","24px")}else{if($("span").hasClass("cssHeaderClose")){$("span.cssHeaderClose").css("background","url("+Apppath+"/images/Sprites/Icon_SpriteUX.png)");$(".cssHeaderClose").css("margin-top","3px");$(".cssHeaherRight").css("padding-right","3px")}else{if($("#imgCancel").length>0){$("#imgCancel").attr("src",Apppath+"/images/Sprites/Icon_SpriteUX.png");$("#imgCancel").css("margin-top","3px");$("#imgCancel").css("padding-right","3px")}}}})}function ConfirmUpdate(c){var e=false;if(typeof(top)=="object"){if(top.document.getElementById("InlineText")){e=true}for(var a=0;a<top.frames.length;a++){if(top.frames[a].document.getElementById("InlineText")){e=true}}if((top.rtUXWindow().document.getElementsByTagName("var").length>0)||(top.rtUXWindow().document.body.getAttribute("IgnoreSession"))){e=true}}if(e==false){if(Apppath!=""){checkHandlerBeforePopup()}else{CheckForHTMLEditor()}}}function getApplicationRootPath(){var a="";if(a==""){if(typeof apppath!="undefined"){if(apppath!=""){a=apppath}}else{if(typeof appPath!="undefined"){if(appPath!=""){a=appPath}}else{if(typeof Apppath!="undefined"){if(Apppath!=""){a=Apppath}}else{if(typeof AppPath!="undefined"){if(AppPath!=""){a=AppPath}}}}}}return a}function checkHandlerBeforePopup(){if($("#divlogoutcontainer").length<1){if(typeof Apppath=="undefined"||Apppath==""){Apppath=getApplicationRootPath()}var a;if(document.location.toString().indexOf("https")!=-1){a=Apppath+"/Common/Idealsession2.PCTP"}else{a=Apppath+"/Common/Idealsession.PCTP"}$.ajax({url:a,dataType:"json",cache:false,async:false,success:Callback_AJAXCall,error:Callback_onError})}}function Callback_onError(e,a,c){if(typeof Apppath=="undefined"||Apppath==""){Apppath=getApplicationRootPath()}window.location.href=Apppath+"/frmLogOut.aspx?s=3&logout=1"}function Callback_AJAXCall(c){var a=(window.location!=window.rtUXWindow().location)?true:false;if(!a){if(typeof Apppath=="undefined"||Apppath==""){Apppath=getApplicationRootPath()}var e;if(document.location.toString().indexOf("https")!=-1){e=Apppath+"/Common/frmsecure.aspx?requestedpage=1"}else{e=Apppath+"/Common/frmlogoutconfirmation.aspx"}if(c==0){if(typeof objHeartbeat1!="undefined"){objHeartbeat1.stop()}if(typeof objHeartbeat2!="undefined"){objHeartbeat2.stop()}OpenLogoutPopUp(e,true,(screen.height*15/100),(screen.width*37/100),(screen.width*30/100),(screen.height*40/100))}else{if(c==-1){if(typeof Apppath=="undefined"||Apppath==""){Apppath=getApplicationRootPath()}window.location.href=Apppath+"/frmLogOut.aspx?s=3&logout=1"}else{setTimeout("checkHandlerBeforePopup();",(c*1000))}}}}function ResumeHB(){if(typeof objHeartbeat1!="undefined"){objHeartbeat1.start()}if(typeof objHeartbeat2!="undefined"){objHeartbeat2.start()}}function SetTimer(){window.setTimeout("checkHandlerBeforePopup()",dblMinutes)}function endSession(){}function CloseAllChildWindows(h){var e=window;var c="";var g=new Array();g[0]=e;try{while(e.opener!=undefined){e=e.opener;if(e.opener!=undefined){g.push(e)}}for(var a=0;a<g.length;a++){c=g[a];if(navigator.userAgent.split(";")[1].split(" ")[2]=="7.0"){c.open("","_self","")}else{c.opener=self}if(c.opener!=undefined){c.close()}}e.rtUXWindow().location.href=h+"/Modules/MyPegasus/ReleaseLicenseController.aspx?mode=11"}catch(f){objLogger.LogAll(objLogger.Error,f)}}function funRedirectToMyClassPage(a){window.location.href=a+"/Modules/MyPegasus/ReleaseLicenseController.aspx?mode=11"}function CheckForHTMLEditor(){var h=false;try{if(top.opener&&top.document.getElementById("InlineText")){if(top.opener.rtUXWindow().document.getElementsByTagName("var").length==0){var a=top.opener.rtUXWindow().document.createElement("var");a.innerHTML="true";top.opener.rtUXWindow().document.appendChild(a)}}}catch(f){objLogger.LogAll(objLogger.Error,"Top.opener is undefined",f)}if(typeof(top)=="object"){for(var c=0;c<top.frames.length;c++){try{if(top.frames.location.href.indexOf("frmViewStudentSubmission.aspx")!=-1){h=true}else{if(top.frames[c].document.getElementById("InlineText")){h=true}}}catch(g){}}}if(h==false){timerObj=window.setTimeout("ConfirmUpdate('0')",dblMinutes)}}function ResetTimer(){if(timerObj!=undefined){window.clearTimeout(timerObj)}timerObj=window.setTimeout("ConfirmUpdate('0')",dblMinutes)}function InitTimerVals(a,c){dblMinutes=a;Apppath=c}function CloseWindow(){try{if(!objWin.Closed){objWin.close()}}catch(a){}}function getposOffsetTop(a){var e=a.offsetTop;var c=a.offsetParent;while(c!=null){e=e+c.offsetTop;c=c.offsetParent}event.cancelBubble=true;return e}function disableDropDownControls(f,c,j){if(ele(f)!=null){if(c=="Course Content"){var e=ele(f).options;var a=0;var h=ele(f).offsetWidth;var g=ele(f).offsetHeight;ele(j).style.display="block";ele(f).style.display="none";for(a=0;a<e.length;a++){if(e[a].selected){ele(j).value=e[a].text;ele(j).style.width=parseInt(ele(f).style.width)+"px";ele(j).style.height=g+"px";break}}}else{ele(j).style.display="none";ele(f).style.display="block"}}}var PegasusUXDropDown={init:function(){var f,h=Array(),e,g,i="",j=Array();f=$("select[UXDropDown]");for(var c=0;c<f.length;c++){if(!$(f[c]).hasClass("ux_drdSelect")){g=f[c].getElementsByTagName("option");if(g.length>0&&g[0].childNodes[0]){i=g[0].childNodes[0].nodeValue}else{i="&nbsp;"}e=document.createTextNode(i);for(b=0;b<g.length;b++){$(g[b]).html("&nbsp;"+g[b].innerHTML);if(g[b].selected==true){e=document.createTextNode($(g[b]).text())}}h[c]=document.createElement("span");h[c].className="ux_select";h[c].id="select"+f[c].id;h[c].appendChild(e);if($.trim($(f[c]).attr("UXDropDown"))!=""){$(f[c]).width($(f[c]).attr("UXDropDown"));$(h[c]).width($(f[c]).attr("UXDropDown"))}else{$(f[c]).width($(f[c]).width()+5);$(h[c]).width($(f[c]).width()+3)}f[c].className="ux_drdSelect";f[c].parentNode.insertBefore(h[c],f[c]);$(f[c].parentNode).children(".cf_select").hide();j[f[c].id]=f[c].onchange;if(!f[c].getAttribute("disabled")){f[c].onchange=j[f[c].id]==null?PegasusUXDropDown.choose:function(k){PegasusUXDropDown.choose();j[event.srcElement.id]()}}else{f[c].previousSibling.className=f[c].previousSibling.className+=" cf_disabled"}}}f=$("a[UXDropDownBtn]");for(c=0;c<f.length;c++){f[c].className="";if($(f[c]).children()[0]){$(f[c]).children()[0].className=""}h[c]=document.createElement("span");h[c].className="ux_selectBtn";if($(f[c]).attr("UXDropDownBtn")!=""){$(f[c]).width($(f[c]).attr("UXDropDownBtn"));$(h[c]).width($(f[c]).attr("UXDropDownBtn")-5)}else{$(f[c]).width($(f[c]).width()+10);$(h[c]).width($(f[c]).width()-5)}f[c].parentNode.appendChild(h[c]);h[c].appendChild(f[c])}},choose:function(){option=event.srcElement.getElementsByTagName("option");for(d=0;d<option.length;d++){if(option[d].selected==true){document.getElementById("select"+event.srcElement.id).childNodes[0].nodeValue=$(option[d]).text();break}}}};function searchFunction(a){var c=window.location.href.substr(window.location.href.lastIndexOf("/")+1);if(c.substr(0,c.lastIndexOf("."))=="frmCourseSearch"){disableDropDownControls("ddlAssessmentName",a.title,"txtSearchActivity");disableDropDownControls("ddlobjectType",a.title,"txtObjectType");disableDropDownControls("ddlObjFormat",a.title,"txtObjFormat")}}var str;function DropDownWindow(l){if(navigator.appName=="Microsoft Internet Explorer"){if(navigator.appVersion.indexOf("MSIE 6.0")!="-1"){searchFunction(l)}}if((navigator.appName=="Microsoft Internet Explorer")||(navigator.userAgent.toLowerCase().indexOf("safari")>-1)){for(var g=0;g<=rtUXWindow().window.document.getElementById("divTable1").parentElement.parentElement.children.length-1;g++){if(rtUXWindow().window.document.getElementById("divTable1").parentElement.parentElement.children[g].children[1].innerText!=""){rtUXWindow().window.document.getElementById("divTable1").parentElement.parentElement.children[g].children[1].style.display="inline"}}}else{var j=l.id.substring(0,l.id.lastIndexOf("_")+1);var c=j.substring(6,j.lastIndexOf("_")+1);var a=getChildIndex(l.id);for(var g=0;g<=parentEle("divTable1").parentNode.parentNode.cells.length-1;g++){parentEle("divTable1").parentNode.parentNode.cells[g].lastChild.style.display="none";if(g==a){parentEle("divTable1").parentNode.parentNode.cells[g].lastChild.style.display="inline"}if(navigator.userAgent.indexOf("Mac")=="-1"){parentEle("divTable1").parentNode.parentNode.cells[g].lastChild.style.position="absolute"}parentEle("tab1").style.width="203px"}}try{if(navigator.appName=="Microsoft Internet Explorer"){parentEle("tab1").style.width="160px"}else{parentEle("tab1").style.width="200px"}ele(str+"divTable").style.display="none"}catch(k){}str=l.id.substring(0,l.id.lastIndexOf("_")+1);var h=ele(str+"divTable");var f=parseInt(getposOffsetTop(l))+24;h.style.top=f+"px";h.style.left=l.offsetParent.offsetLeft+"px";ele(str+"divTable").style.display="block";if(parentEle("cmbCharacterSet")){parentEle("cmbCharacterSet").style.display="block";ele(str+"divTable").style.display="block";parentEle("tab1").style.display="block"}}function getChildIndex(a){var h=a.substring(0,6);var e=0;var i;if(ele(h+"_navlist")){i=ele(h+"_navlist")}else{i=ele(h+"navlist")}var c;var g=i.cells.length+i.cells.length;for(c=1;c<g;c++){if(i.childNodes[c].childNodes[3]!="undefined"){var f=i.childNodes[c].childNodes[3].id;if(f==a){return e}}c=c+1;e=e+1}return 0}function SubNavigationsUrls(c,a,f,e){switch(c){case 2:switch(a){case 12:if(ele("hdnAssetLinkID")){return"/Modules/TeachingPlan/TeachingPlanUX.aspx?From=CC&intLinkID="+ele("hdnAssetLinkID").value+"&RightAssetID="+ele("hdnLinkParentId").value+"&intCLRootID="+ele("hdnAssetLinkID").value}else{return"/Modules/TeachingPlan/TeachingPlanUX.aspx?From=CC"}break;case 13:return"/Modules/TeachingPlan/TeachingPlanUX.aspx?From=LO";break;case 14:if(parentEle("hdnAssetLinkID")){return"/Modules/TeachingPlan/CoursePreviewUX.aspx?From=CC&intLinkID="+parentEle("hdnAssetLinkID").value+"&RightAssetID="+parentEle("hdnLinkParentId").value}else{return"/Modules/TeachingPlan/CoursePreviewUX.aspx?From=CC"}break;case 15:return"/Modules/TeachingPlan/Calendar/AssignContentUX.aspx?From=ACM";break;case 16:if(f=="1"&&e=="2"){return"/Modules/MediaLibrary/MLDefaultUX.aspx?From=MediaLib"}else{return"/Modules/MediaLibrary/StuSearchMedialinkUX.aspx?From=MediaLib"}break;case 17:return"/Modules/QuestionLibrary/QuestionLibraryUX.aspx?mode=0";break;case 18:return"/Modules/QuestionLibrary/QuestionLibraryUX.aspx?mode=1";break;case 30:return"/Modules/TeachingPlan/Calendar/OrganizeCalenderUX.aspx?From=IOC";break;case 31:return"/Modules/TeachingPlan/TeachingPlanUX.aspx?From=IPS";break;case 33:return"/Modules/SkillStandardIntegration/AlignContentsToSkillUX.aspx?From=MS";break;case 34:return"/Modules/SkillStandardIntegration/AlignContentsToSkillUX.aspx?From=MQS";break}break;case 4:switch(a){case 19:return"/Modules/Gradebook/GBDefaultUX.aspx?SubTab=1&PrefMode=1";break;case 20:return"/Modules/Gradebook/GBRoasterDefaultUX.aspx?PrefMode=3";break;case 11:return"/Modules/Reports/RptDefaultUX.aspx?PrefMode=4";break;case 27:return"/Modules/Gradebook/GBCustomViewUX.aspx?PrefMode=5";break}break;case 5:switch(a){case 21:return"/Modules/CourseMail/CourseMailDefaultUX.aspx?toForm=CM";break;case 22:return"/Modules/CourseAnnouncement/InstAnnouncementListUX.aspx?toForm=CA";break}break;case 8:switch(a){case 23:return"/Modules/TeachingPlan/CoursePreviewUX.aspx?From=VAC";break;case 24:return"/Modules/TeachingPlan/CoursePreviewUX.aspx?From=SCC";break;case 25:return"/Modules/LearningObjectives/LearningObjectiveViewUX.aspx?From=LO";break;case 26:return"/Modules/MediaLibrary/StuSearchMedialinkUX.aspx?From=MediaLib";break;case 32:return"/Modules/TeachingPlan/CoursePreviewUX.aspx?From=SPS";break}break;case 9:switch(a){case 28:return"/Modules/Gradebook/GBDefaultUX.aspx?SubTab=1&PrefMode=1";break;case 29:return"/Modules/Gradebook/GBCustomViewUX.aspx?PrefMode=5";break}break}}function CCSubNavigation(c,a,f,e){ele(str+"divTable").style.display="none";window.location.href=Apppath+SubNavigationsUrls(c,a,f,e)}function DropDownBgColor(a){a.className="DropDownMainCss2"}function DropDownBgColor1(a){a.className="DropDownMainCss3"}function HideCourseBrowser(){if(window.location.pathname.indexOf("TeachingPlanUX.aspx")!=-1||window.location.pathname.indexOf("QuestionLibraryUX.aspx")!=-1){HideDivCourseBrowser()}}function ValidateUserAndSession(e){try{var a;a=syncValidateUserAndSession();if(a!="error"){if(a=="True"){window.IsDuplicateLogin=1;window.open(Apppath+"/Common/ShowMessage.aspx?alert=1&ResID=9551&fn=ForceLogOut&IsDupLogin=1","","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*30/100)+", width="+(screen.width*30/100)+", top="+(screen.height*40/100)+",height="+(screen.height*10/100)+", scrollbars=no");return false}}}catch(c){}}function ForceLogOut(){location.href=Apppath+"/frmlogout.aspx?IsSessionDiffer=1&logout=1"}function showOnTab(a){if(a.className!="selectedmenuItem"){a.className="currentmenuItem"}}function showOffTab(a){if(a.className!="selectedmenuItem"){a.className="menuItem"}}function showSubOnTab(a){if(a.className!="selectSubMenuItem"){a.className="currentSubMenuItem"}}function showSubOffTab(a){if(a.className!="selectSubMenuItem"){a.className="subMenuItem"}}function showSubDivOnTab(a){if(a.className!="divSelectSubMenuItem"){a.className="divCurrentSubMenuItem"}}function showSubDivOffTab(a){if(a.className!="divSelectSubMenuItem"){a.className="divSubMenuItem"}}var BrowserDetect={init:function(){this.browser=this.searchString(this.dataBrowser);this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion);this.OS=this.searchString(this.dataOS)},searchString:function(f){for(var a=0;a<f.length;a++){var c=f[a].string;var e=f[a].prop;this.versionSearchString=f[a].versionSearch||f[a].identity;if(c){if(c.indexOf(f[a].subString)!=-1){return f[a].identity}}else{if(e){return f[a].identity}}}},searchVersion:function(c){var a=c.indexOf(this.versionSearchString);if(a==-1){return}return parseFloat(c.substring(a+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};BrowserDetect.init();function DetectBrowserDetails(a,c){var e=false;switch(BrowserDetect.browser){case"Explorer":if((BrowserDetect.version>10)||(BrowserDetect.version<7)){e=false}else{e=true}break;case"Firefox":e=true;break;case"Chrome":e=true;break;case"Mozilla":e=true;break;case"Safari":if(BrowserDetect.OS=="Mac"||navigator.platform.toString()=="iPad"){e=true}else{e=false}break;default:e=false}if(e==false&&c=="1"){MessageForInvalidBrowser()}else{if(e==false&&c=="0"){location.href=a+"/frmlogout.aspx?IsInvalidBrowser=1"}}}function Hidesubmenu(){if(rtUXWindow().document.getElementById("divSubMenus")){rtUXWindow().document.getElementById("divSubMenus").style.display="none"}}function ValidatePBActive(){if($("input[id$='hdnValidateId']").val()=="1"){objwin=window.open(strShowMessage+"alert=3&ResID=IDS_TRACKER_VALIDATETRACKABLEITEM1","nm","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*30/100)+", width="+(screen.width*37/100)+",top="+(screen.height*40/100)+",height="+(screen.height*15/100)+", scrollbars=no");$("input[id$='hdnValidateId']").val("0");event.returnValue=false;return false}}function syncValidateUserAndSession(){var a;$.ajax({type:"POST",url:Apppath+"/Services/MenuServices/MenuService.asmx/ValidateUserAndSession",data:"{}",async:false,dataType:"json",contentType:"application/json; charset=utf-8",error:function(f,c,e){a="error"},success:function(e,c){if(c=="success"){a=e.d}}});return a}var nsBrowser=nsBrowser||{};nsBrowser.BrowserVersion=function(a){this.version=a};var pageUI=pageUI||{};pageUI.Parent=function(){this.parentWindow="";try{if((window.parent)&&(window.parent.$Pegasus)){this.parentWindow=window.parent}else{this.parentWindow=window}}catch(a){this.parentWindow=window}};var Pegasus=Pegasus||{};Pegasus.Role={None:0,CoursespaceAdmin:1,WorkspaceAdmin:2,Instructor:3,Student:4,PublisherAdmin:5,SystemAdmin:6,ProgramAdmin:7,TeachingAssistant:8};function rtUXWindow(){if(typeof pageParent=="undefined"){pageParent=new pageUI.Parent()}if(pageParent.parentWindow.location.href.indexOf(".aspx")<0){return window}else{return pageParent.parentWindow}}var GlobalUXCMenu;function PegasusUXCMenu(){$(document).ready(function(){CMenuForUX()});if(typeof AppPath=="undefined"||AppPath==""){AppPath=Apppath}}pageUI.UXParent=function(){this.parentWindow="";try{if((window.parent)&&(window.parent.LMS||window.parent.$Pegasus)){this.parentWindow=window.parent}else{this.parentWindow=window}}catch(a){this.parentWindow=window}};var UXpageParent=new pageUI.UXParent();function BindToHideDropIcon(){$("body").click(function(c){if(c.target.className.indexOf("grey_down_arrow")==-1){var a=window.rtUXWindow().$("img[src$='c_menu.gif']");a.attr("src",AppPath+"/images/general_sprite.png");if(a){a.css("border","0px");a.css("background-color","transparent");a.addClass("grey_down_arrow dd_cursor");a.css("margin-left","0px")}}})}function CMenuForUX(){GlobalUXCMenu=true;var c;if($("[UXCMenu]").length>0){$("[UXCMenu]").attr("class","dd_options");$("[UXCMenu]").next().css("display","none");$("[UXCMenu]").prev().css("display","none");$("[UXCMenu]").find("a").attr("class","dd_option")}else{if(rtUXWindow().$("[UXCMenu]").length>0){rtUXWindow().$("[UXCMenu]").attr("class","dd_options");rtUXWindow().$("[UXCMenu]").next().css("display","none");rtUXWindow().$("[UXCMenu]").prev().css("display","none");rtUXWindow().$("[UXCMenu]").find("a").attr("class","dd_option");if(rtUXWindow().$("img[src$='c_menu.gif']").length>0){c=rtUXWindow().$("img[src$='c_menu.gif']");c.attr("src",AppPath+"/images/general_sprite.png");c.addClass("grey_down_arrow dd_cursor");c.css("margin-left","0px");var a;c.click(function(f){a=c;c.css("border","1px solid #DDD");c.css("border-bottom-width","0px");c.css("background-color","#fff")});rtUXWindow().BindToHideDropIcon()}}}if($("img[src*='drop']").length>0&&$("img[src*='drop']").parent().attr("class")!="webeditor_dropdown"){c=$("img[src*='drop']");c.attr("src",AppPath+"/images/general_sprite.png");c.removeAttr("title");c.attr("class","grey_down_arrow dd_cursor")}if($("img[title='Options']").length>0){c=$("img[title='Options']").attr("class");$("."+c).attr("src",AppPath+"/images/general_sprite.png");$("."+c).removeAttr("title");$("."+c).attr("class","grey_down_arrow dd_cursor")}if($("td[title='Options']").length>0){c=$("td[title='Options']").find("img[src*='spacer']").attr("class");$("."+c).attr("src",AppPath+"/images/general_sprite.png");$("."+c).attr("class","grey_down_arrow dd_cursor")}if($("td[id*='tdContext_']").length>0){c=$("td[id*='tdContext_']");$(c).css("background-color","transparent");$(c).find("img[class='CV_DownImg CV_imgMore']").attr("src",AppPath+"/images/spacer.gif");$(c).find("img[class='CV_DownImg CV_imgMore']").removeAttr("title");$("td[title='Options'][id*='tdContext_']").attr("title1","Options");$(c).removeAttr("title");$(c).find("img[class='CV_DownImg CV_imgMore']").attr("class","grey_down_arrow dd_cursor")}}function SetCMenuPosition(a,c){$(a).find("img[class='grey_down_arrow dd_cursor']").css({border:"1px solid #DDD","border-bottom-width":"0px","background-color":"#fff"});if($(a).position().left>$("#"+c).width()){$("#"+c).css("left",$(a).find("img[class='grey_down_arrow dd_cursor']").position().left+$(a).find("img[class='grey_down_arrow dd_cursor']").outerWidth()+10)}$("#"+c).css("top",$(a).find("img[class='grey_down_arrow dd_cursor']").position().top+$(a).find("img[class='grey_down_arrow dd_cursor']").height()-4)}var frmCurriculum="Curriculum",frmClasses="Classes";function SetUXDdWidth(g){var c,f,e;var a=g.eleObject.find("li");if(g.from==frmCurriculum){f=36;e="234px"}else{f=44;e="285px"}a.each(function(){if($.trim($(this).text()).length>f){c=true;return false}});if(c){g.eleObject.css("width","515px")}else{g.eleObject.css("width",e)}if(g.from==frmCurriculum){if(c){a.css("width","505px")}else{a.css("width","224px")}}}var VideoChatStatus={Invited:1,Accepted:2,Declined:3};function getVideoChatDetails(){var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/GetAVChatInvitedUserDetails",contentType:"application/json; charset=utf-8",dataType:"json",success:SuccessGetAVChatInvitedUserDetails,error:checkError})}function SuccessGetAVChatInvitedUserDetails(e){if(e.d!="null"&&e.d.length>0){var c=$.parseJSON(e.d);if(c.Status==VideoChatStatus.Invited){var f="<span class='UserNameBold'>"+c.LastName+", "+c.FirstName+"</span>";var a=c.WaitInterval;RTDMessagePayload="";window.open(Apppath+"/Common/ShowMessage.aspx?fn=OpenVideoChatAssessment(VideoChatStatus.Accepted)&nfn=updateVideoChatUserStatus(VideoChatStatus.Declined)&cfn=ExtendInvitePopUpTimeInterval()&alert=11&ResID=IDS_INVITE_VIDEOCHAT&interval="+a+"&pn="+f,"inviteWindow","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*30/100)+", width="+(screen.width*37/100)+",top="+(screen.height*40/100)+",height="+(screen.height*16/100)+", scrollbars=no");return false}}}var result;function GetVideoChatPartipantDetails(){var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/GetAVChatParticipantDetails",contentType:"application/json; charset=utf-8",dataType:"json",async:false,success:SuccessVideoChatPartipantDetails,error:checkError})}function SuccessVideoChatPartipantDetails(a){if(a.d!="null"&&$.parseJSON(a.d).length>0){result=$.parseJSON(a.d)[0]}}function OpenVideoChatAssessment(a,c){updateVideoChatUserStatus(a,c);if(result.InstructorPassword==""){OpenAssessmentStartup()}else{OpenProctorPasswordPopup()}return false}function OpenProctorPasswordPopup(){var c=result.AssetLinkID;var a="toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*35/100)+", width="+(screen.width*35/100)+", top="+(screen.height*30/100)+",height="+(screen.height*17/100)+", scrollbars=no";Url=AppPath+"/Modules/TeachingPlan/frmProctorPassword.aspx?from=AVchat&LinkAssetId="+c;window.open(GetHostPath()+Url,"AvchatProctor",a)}function OpenAssessmentStartup(){var f=result.AVChatSessions.AssessmentID;var c=result.AssetLinkID;var e=result.LeftAssetID;var h=result.ParentAssetID;var g=result.AVChatSessions.SessionID;var a="toolbar=no,statusbar=yes,resizable=1,addressbar=no,left="+(screen.width*10/100)+", width="+(screen.width*75/100)+", top="+(screen.height*5/100)+",height="+(screen.height*80/100)+",scrollbars=yes";Url=AppPath+"/Modules/AssessmentTool/Presentation/frmAssessmentStartup.aspx?from=INV&P1="+f+"&intLinkParentID="+e+"&intParentAssetId="+h+"&Page=0&msg=b&intLinkFolderID="+e+"&AssetLinkID="+c+"&AVChatSessionID="+g;window.open(GetHostPath()+Url,"frmClientSideTest",a)}function updateVideoChatUserStatus(c,e){if(typeof inviateTokBoxPopUp!="undefined"){clearInterval(inviateTokBoxPopUp)}RemoveTokBoxWaitIntervalSession();GetVideoChatPartipantDetails();var f="{'avChatStatusDTO' : {'status':'"+c+"','chatSessionId':'"+result.AVChatSessions.ChatSessionID+"','sessionId':'"+result.AVChatSessions.SessionID+"','userId':'"+result.UserID+"','publisherId':'"+result.AVChatSessions.PublisherId+"','userNotificationId':'"+e+"'}}";var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/updateVideoChatUserStatus",contentType:"application/json; charset=utf-8",dataType:"json",data:f,async:false,error:checkError})}var RTDMessagePayload;function ExtendInvitePopUpTimeInterval(c){var e={messagePayload:RTDMessagePayload,userNotificationId:c};var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/SetTokBoxWaitTimeIntervalSession",contentType:"application/json; charset=utf-8",data:JSON.stringify(e),dataType:"json",success:ResetInvitePopUpWithWaitInterval,async:false,error:checkError})}function ResetInvitePopUpWithWaitInterval(a){if(a.d!="null"){var c=a.d.setTimeInterval;if(typeof inviateTokBoxPopUp!="undefined"){clearInterval(inviateTokBoxPopUp)}if(RTDMessagePayload==undefined||RTDMessagePayload==""){inviateTokBoxPopUp=setInterval(function(){getVideoChatDetails()},parseInt(c))}else{inviateTokBoxPopUp=setInterval(function(){ShowInvitation(RTDMessagePayload,a.d.userNotificationId)},parseInt(c))}}}function RemoveTokBoxWaitIntervalSession(){var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/RemoveTokBoxWaitTimeIntervalSession",contentType:"application/json; charset=utf-8",async:false,error:checkError})}payload={TypeEvent:0,SmsUserId:1,ChatSessionID:2,FirstName:3,LastName:4};function PopUpInvitation(a){var c=1;if(a.type=="all"){if(GetPassedEnumDataFromMessage(a.payload.data,payload.TypeEvent)==c){ShowInvitation(a.payload.data,a.payload.userNotificationId)}}}function GetPassedEnumDataFromMessage(i,a){try{var h=i.split(",");var g=h[a].split(":");return g[1].trim()}catch(f){var e=f+i;var c=4;LogException(c,e)}}function GetRemindMeIntervals(){var c;var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/GetWaitIntervalInMinutes",contentType:"application/json; charset=utf-8",dataType:"json",success:function(e){if(e.hasOwnProperty("d")){c=e.d}else{c=e}},async:false,error:checkError});return c}function ShowInvitation(f,e){RTDMessagePayload=f;var c="<span class='UserNameBold'>"+GetPassedEnumDataFromMessage(f,payload.LastName)+", "+GetPassedEnumDataFromMessage(f,payload.FirstName)+"</span>";var g=$Pegasus.JSFW.getURIencodeValue(c);var a=GetRemindMeIntervals();window.open(Apppath+"/Common/ShowMessage.aspx?fn=OpenVideoChatAssessment(VideoChatStatus.Accepted,'"+e+"')&nfn=updateVideoChatUserStatus(VideoChatStatus.Declined,'"+e+"')&cfn=ExtendInvitePopUpTimeInterval('"+e+"')&alert=11&ResID=IDS_INVITE_VIDEOCHAT&interval="+a+"&pn="+g,"inviteWindow","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*30/100)+", width="+(screen.width*37/100)+",top="+(screen.height*40/100)+",height="+(screen.height*16/100)+", scrollbars=no");return false}function GetStudentUnreadNotification(){if(typeof inviateTokBoxPopUp!="undefined"){clearInterval(inviateTokBoxPopUp)}var a=$.ajax({type:"POST",url:Apppath+"/AVChat/Services/AVChatService.asmx/GetStudentUnreadNotification",contentType:"application/json; charset=utf-8",dataType:"json",success:ShowStudentMissedNotification,async:false,error:checkError})}function ShowStudentMissedNotification(a){if(a.d!="null"){var c=a.d;ShowInvitation(c.payload.message,c.id)}}function OpenEnabledProcotorAssessment(){GetVideoChatPartipantDetails();OpenAssessmentStartup()}function GetHostPath(){var c=$Pegasus.JSFW.URLUtil.getProtocol()+"//";var a=c+window.location.hostname;return a}function LogException(g,e,c){var f={loggertype:g,log:e};try{jQuery.ajax({url:c+"/AVChat/Services/AVChatService.asmx/Logger",type:"POST",data:JSON.stringify(f),dataType:"json",contentType:"application/json",success:function(h){return $.parseJSON(h.d)}})}catch(a){}}function IsPopupBlocked(){var a=window.open(getApplicationRootPath()+"/Common/ShowMessage.aspx");if(!a){return true}else{a.close();return false}}function OpenPrivacyPolicy(){var a="resizable=yes,scrollbars=yes,left="+(screen.width*20/100)+", width="+(screen.width*60/100)+", top="+(screen.height*20/100)+",height="+(screen.height*60/100);window.open(privacyLink,"popup",a)};