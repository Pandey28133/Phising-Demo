var IDS_INVALID_USERNAME_PASSWORD;function MessageForInvalidBrowser(){document.getElementById("divSpacer").style.visibility="visible";document.getElementById("divMsg").style.visibility="visible";document.getElementById("txtMsg").innerHTML=FFMSG;document.getElementById("divMsg").style.textAlign="left";document.getElementById("btnLogin").style.display="none";document.getElementById("btnLogin").style.cursor="default"}function messageforfirefox(a){if(fso){if(fso==1&&document.getElementById("hdnMessageOn").value=="0"){FFMSG=getLocalizedString("IDS_WEB_LOGIN_YOUR_SESSION");document.getElementById("divSpacer").style.visibility="visible";document.getElementById("divMsg").style.visibility="visible";document.getElementById("txtMsg").innerHTML=FFMSG;document.getElementById("divMsg").style.textAlign="left"}}if(navigator.userAgent.indexOf("Firefox")!=-1&&a==1){document.getElementById("divSpacer").style.visibility="visible";document.getElementById("divMsg").style.visibility="visible";document.getElementById("txtMsg").innerHTML=FFMSG;document.getElementById("divMsg").style.textAlign="left";document.getElementById("btnLogin").disabled=true;document.getElementById("btnLogin").style.cursor="default"}}function validate(){try{if(isAnySpecialChars(event.keyCode)==true){return false}}catch(a){}}function isAnySpecialChars(c){try{var a=",33,34,37,38,39,42,44,47,60,61,62,63,91,92,93,94,123,124,125,64,35,36,40,41,95,45,43,126,96,58,59,";return(a.indexOf(","+c+",")!=-1)}catch(b){}}function setfocus(){if(window.opener){if(window.opener.IsPegasusPage){window.opener.location.href="frmLogin.aspx";window.close()}return}else{if(window.parent.frames.length>0){if(window.parent.IsPegasusPage){window.parent.location.href="frmLogin.aspx"}return}}if(document.Form1.txtLoginName!=undefined){document.Form1.txtLoginName.focus()}}function validateLoginChars(){try{SubnavigationBar.MessageBoard.Clear()}catch(b){}var a;a=document.getElementById(txtUserName).value;pwd=document.getElementById("password").value;if((a.length==0)||(pwd.length==0)&&((a.length>0&&a.length<4)||(pwd.length<4&&pwd.length>0))){return true}else{return true}}function OpenForgotPassword(a){window.open(a,"Forgot","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*35/137)+", width="+(screen.width*57/114)+", top="+(screen.height*40/160)+",height="+((screen.height*65/200)+20)+", scrollbars=1")}function OpenForgotPasswordSynapse(b){validateLoginChars();if(validateLoginChars()==true){var a=document.getElementById(txtUserName).value;window.open(b+"&userName="+a,"Forgot","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*33/100)+", width="+(screen.width*35/100)+", top="+(screen.height*35/100)+",height="+((screen.height*49/100))+", scrollbars=0")}}function LoginCount(a){if(document.getElementById("hdnUserName").value==document.getElementById(txtUserName).value){if(logincount>=2){OpenForgotPasswordSynapse(a);event.returnValue=false}}}function tblLoginwidth(){if(navigator.userAgent.indexOf("Safari")>-1){if(isSynapse==1){ele("tbllogin").style.width="100%";if(/Edge\/12./i.test(navigator.userAgent)){ele("tbllogin").style.width="64%"}}else{ele("tbllogin").style.width="64%"}}else{if(isSynapse==1){if(ele("tblConsent")){ele("tbllogin").className="tblsynapseloginmainConsent";ele("dvLogintop").style.width="87%";ele("tbllogin").style.width="100%"}else{ele("tbllogin").style.width="78%"}}else{ele("tbllogin").style.width="78%"}}if(ele("tdlogin1")!=null&&ele("tdlogin2")!=null&&ele("tdlogin3")!=null){if(navigator.userAgent.indexOf("Safari")>-1){ele("tdlogin1").style.width="26%";ele("tdlogin2").style.width="32%";ele("tdlogin3").style.width="6%"}else{ele("tdlogin1").style.width="40%";ele("tdlogin2").style.width="59%";ele("tdlogin3").style.width="1%"}}}var txtUserName="username";function BodyLoad(){if(isSynapse==0&&isAdmin==0){txtUserName="loginname"}else{txtUserName="username"}DetectBrowserDetails("","1");tblLoginwidth();messageforfirefox(msgForFirefox);if(isSynapse==1){if(document.getElementById(txtUserName)!=null){document.getElementById(txtUserName).focus();document.getElementById(txtUserName).select()}}if((isSynapse==1||isSynapse==0)){if(document.getElementById("chkDiv")!=null&&document.getElementById("lblExample")!=null&&document.getElementById(txtUserName)!=null&&document.getElementById("Password")!=null&&document.getElementById("ChkRemember")!=null){document.getElementById("chkDiv").style.display="";if(isSynapse==1){document.getElementById("lblExample").style.display=""}if(getCookie("uname")!=undefined){document.getElementById(txtUserName).value=getCookie("uname");if(document.getElementById(txtUserName).value!=null){document.getElementById("ChkRemember").checked=true}}else{document.getElementById("Password").value="";if(document.getElementById("Password").value!=""){document.getElementById("Password").focus();document.getElementById("Password").select()}else{if(isSynapse==0){document.getElementById(txtUserName).value=""}document.getElementById(txtUserName).focus();document.getElementById(txtUserName).select()}}}}if(isSynapse==0){setfocus()}return CheckForDuplicateLogin()}function CheckForDuplicateLogin(){if(document.getElementById("hdnShowMsgLogin").value=="true"){document.getElementById("hdnShowMsgLogin").value="false";ObjWindowCC=window.open("frmDupLoginMsg.aspx?alert=1&fn=AllowMeToLogin&ResID=9550&IsDupLogin=1&loginName="+document.getElementById(txtUserName).value,"","toolbar=no,statusbar=no,resizable=0,addressbar=no,left="+(screen.width*30/100)+", width="+(screen.width*32/100)+", top="+(screen.height*40/100)+",height="+(screen.height*10/100)+", scrollbars=no");return false}return true}function AllowMeToLogin(){var a="PegasusNativeAuthenticationHandler.ashx?authCode=duplicate";if(isAdmin==1){a=a+"&mode=admin";if(window.location.href.search(/isnative=1/i)!=-1){a=a+"&isnative=1"}}window.location=a}function setChkSavePwd(){var c;var a="";var b=false;var d=new Date();d.setDate(d.getDate()+365);if(document.getElementById("ChkRemember")!=null){if(document.getElementById("ChkRemember").checked){setCookie("uname",document.getElementById(txtUserName).value,d)}else{deleteCookie("uname","","")}}}function deleteCookie(a,c,b){if(getCookie(a)){document.cookie=a+"="+((c)?";path="+c:"")+((b)?";domain="+b:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT"}}function setCookie(b,c,a){document.cookie=b+"="+escape(c)+((a==null)?"":("; expires="+a.toGMTString()))}function getCookie(a){var b=a+"=";if(document.cookie.length>0){offset=document.cookie.indexOf(b);if(offset!=-1){offset+=b.length;end=document.cookie.indexOf(";",offset);if(end==-1){end=document.cookie.length}return unescape(document.cookie.substring(offset,end))}}}function toenablecontinuebtn(a){if(a.checked==true){a.parentNode.className="dvErrormsg1";a.parentNode.children[0].style.visibility="hidden"}}function toChangePolciytxtColor(a){if(a.checked==true){a.parentNode.parentNode.className="dvErrormsg1";a.parentNode.children[0].style.visibility="hidden";if($("#dvMessageErrorconsent").get(0).innerHTML!==""){document.getElementById("dvMessageErrorconsent").innerHTML=""}}else{a.parentNode.parentNode.className="tdConsentText"}}var objCurrentMenu;var CurrentCM;function fnprivacypolicy(c){var b=(c.pageX)?c.pageX:c.x;var a=(c.pageY)?c.pageY:c.y;objCurrentMenu=document.getElementById("dvPrivacyPolicy");if(navigator.userAgent.indexOf("Firefox")!=-1){objCurrentMenu.style.display="table-row";objCurrentMenu.style.left=b*12/100+"px";objCurrentMenu.style.top=a*62/100+"px";objCurrentMenu.scrollTop=0;CurrentCM=objCurrentMenu;c.stopPropagation();return false}else{objCurrentMenu.style.display="";objCurrentMenu.style.posLeft=screen.width*9.2/100;objCurrentMenu.style.posTop=screen.height*16/100;objCurrentMenu.scrollTop=0;CurrentCM=objCurrentMenu;event.cancelBubble=true;return false}return false}var objCurrentMenu;var CurrentCM;function fntermsofuse(c){var b=(c.pageX)?c.pageX:c.x;var a=(c.pageY)?c.pageY:c.y;objCurrentMenu=document.getElementById("dvTermsOfUse");if(navigator.userAgent.indexOf("Firefox")!=-1){objCurrentMenu.style.display="table-row";objCurrentMenu.style.left=b*12/100+"px";objCurrentMenu.style.top=a*50/100+"px";objCurrentMenu.scrollTop=0;CurrentCM=objCurrentMenu;c.stopPropagation();return false}else{objCurrentMenu.style.display="";objCurrentMenu.style.posLeft=screen.width*9.2/100;objCurrentMenu.style.posTop=screen.height*16/100;objCurrentMenu.scrollTop=0;CurrentCM=objCurrentMenu;event.cancelBubble=true;return false}return false}function fntocheckconsent(){if(document.getElementById("ChkPrivacy").checked==false&&document.getElementById("ChkTermsOfUse").checked==false){document.getElementById("dvMessageErrorconsent").innerHTML=ErrorSubmission;document.getElementById("tdprivacy").className="dvErrormsg";document.getElementById("tdprivacypolicy").className="dvErrormsg";document.getElementById("imgprivacypolicy").style.visibility="visible";document.getElementById("imgtermsuse").style.visibility="visible";return false}else{if(document.getElementById("ChkPrivacy").checked==false){document.getElementById("dvMessageErrorconsent").innerHTML=ErrorSubmission;document.getElementById("tdprivacy").className="dvErrormsg";document.getElementById("imgprivacypolicy").style.visibility="visible";return false}else{if(document.getElementById("ChkTermsOfUse").checked==false){document.getElementById("dvMessageErrorconsent").innerHTML=ErrorSubmission;document.getElementById("tdprivacypolicy").className="dvErrormsg";document.getElementById("imgtermsuse").style.visibility="visible";return false}else{return true}}}}function fnhideprivacypolicy(){document.getElementById("dvPrivacyPolicy").style.display="none";document.getElementById("dvTermsOfUse").style.display="none"}function validatepassword(){var c=document.getElementById("tdlogin2").value;var b=document.getElementById("txtPassword").value;var a=document.getElementById("txtpwdhint").value;if(c==""){document.getElementById("lbhelp").innerHTML=pwdblank;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("newpd").style.color="#E70000";document.getElementById("imgerror").style.visibility="visible";return false}else{document.getElementById("newpd").style.color="black";document.getElementById("imgerror").style.visibility="hidden"}if(b==""){document.getElementById("lbhelp").innerHTML=pwdblank;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("rpwd").style.color="#E70000";document.getElementById("imgerrorretype").style.visibility="visible";return false}else{document.getElementById("rpwd").style.color="black";document.getElementById("imgerrorretype").style.visibility="hidden"}if(c==a||b==a){document.getElementById("lbhelp").innerHTML=pwdhintcontainpwd;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("phid").style.color="#E70000";document.getElementById("imgerrorretypepwdhint").style.visibility="visible";return false}if(c.length>0&&b.length>0){if(checkPassword(c)&&checkPassword(b)){if(b!=c){document.getElementById("lbhelp").innerHTML=pwdmatch;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("newpd").style.color="#E70000";document.getElementById("rpwd").style.color="#E70000";document.getElementById("imgerror").style.visibility="visible";document.getElementById("imgerrorretype").style.visibility="visible";document.getElementById("tdlogin2").focus();document.getElementById("tdlogin2").select();return false}}else{document.getElementById("lbhelp").innerHTML=pwdvalid;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("newpd").style.color="#E70000";document.getElementById("rpwd").style.color="#E70000";document.getElementById("imgerror").style.visibility="visible";document.getElementById("imgerrorretype").style.visibility="visible";document.getElementById("tdlogin2").focus();document.getElementById("tdlogin2").select();return false}}}function checkPassword(a){if((((a.search(/[a-z]+/)>-1)||(a.search(/[A-Z]+/)>-1))&&(a.search(/[ ]+/)==-1)&&((a.search(/[0-9]+/)>-1)||(a.search(/[,.|/'"?<!@#$%^&*~>:;`(){}+=_-]+/)>-1)||(validatePWD(a))))&&(a.length>=8&&a.length<=32)){return true}else{return false}}function ValidateBlankSpace(){var a=",32,";if(a.indexOf(","+event.keyCode+",")!=-1){return false}}function validatePWD(d){var e="";for(var c=0;c<d.length;c++){var f=d.charAt(c);var b=f.charCodeAt("charposition");var a=",91,92,93,";if(a.indexOf(","+b+",")!=-1){return true}}}function ToValidateReTypePWD(e){var d=document.getElementById("tdlogin2").value;var a=document.getElementById("txtPassword").value;var c=document.getElementById("tdlogin2").value.length;var b=document.getElementById("txtPassword").value.length;if(d.charAt(b-1)!=a.charAt(b-1)){document.getElementById("lbhelp").innerHTML=pwdmatch;document.getElementById("lbhelp").style.color="#E70000";document.getElementById("txtPassword").value=a.substring(0,b-1);document.getElementById("newpd").style.color="#E70000";document.getElementById("rpwd").style.color="#E70000";document.getElementById("imgerror").style.visibility="visible";document.getElementById("imgerrorretype").style.visibility="visible";return false}}function getServiceURLandSubmit(){try{if(document.getElementById(txtUserName)!=null&&document.getElementById("password")!=null){var b=$("#"+txtUserName).val();var c;var a;if(isSynapse==1){c=$("#password").val()}else{c="***";a=$("input[id*='hdnLoginMode']").val();if(a===undefined||a===""){a=0}}if(b.length>0&&c.length>0){var f={UserName:b,Password:c,LoginMode:a};$.ajax({type:"POST",url:"frmLogin.aspx/GetServiceURL",data:'{"loginParams":'+JSON.stringify(f)+"}",async:"true",contentType:"application/json; charset=utf-8",dataType:"json",success:onGetServiceURLSuccess,error:onGetServiceURLFailure})}else{onGetServiceURLFailure()}return false}else{return true}}catch(d){return false}}function getNativeServiceURLandSubmit(b){try{if(b===undefined||b===""){onGetNativeServiceURLFailure()}else{onGetNativeServiceURLSuccess(b)}return false}catch(a){return false}}var tempServiceURL=null;function callBack_getHash(a){if(a!=undefined){$("#password").val(a);$("#okurl").val(tempServiceURL);tempServiceURL=null;document.Form1.submit()}}function onGetNativeServiceURLSuccess(a){tempServiceURL=a;var b=new bCrypt;b.ready();b.hashpw($("#password").val(),b.gensalt(10),callBack_getHash);return true}function onGetNativeServiceURLFailure(){SubnavigationBar.MessageBoard.Alert(IDS_INVALID_USERNAME_PASSWORD);document.getElementById("username").value="";document.getElementById("password").value=""}function onGetServiceURLSuccess(b){var a;if(isSynapse==1){a="service"}else{a="okurl";$("#password").val(mHsh.process($("#password").val().toLowerCase()))}if(b.d==""){SubnavigationBar.MessageBoard.Alert(IDS_INVALID_USERNAME_PASSWORD);document.getElementById(txtUserName).value="";document.getElementById("password").value=""}else{document.getElementById(a).value=b.d;document.Form1.submit()}}function onGetServiceURLFailure(){SubnavigationBar.MessageBoard.Alert(IDS_INVALID_USERNAME_PASSWORD);document.getElementById(txtUserName).value="";document.getElementById("password").value=""}function addClickFunction(id){var b=document.getElementById(id);if(b&&typeof(b.click)=="undefined"){b.click=function(){var result=true;if(b.onclick){result=b.onclick()}if(typeof(result)=="undefined"||result){eval(b.getAttribute("href"))}}}}function CICe2eComms(){_e2e_comms.products=BusinessProducts;_e2e_comms.pages="signin";_e2e_comms.locale="en-US";(function(){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=CIC_E2E_DOMAIN_PATH+CIC_E2E_JS_PATH;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})()};