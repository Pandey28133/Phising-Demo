var timingTextboxIndex,GlossaryWindow,VerbChartWindow,TutorialWindow,eBookWindow,CustomWindow,CustomWindowOne,activityToolUrl,CharFlag=false,temp=0,ResourceBarConst=1;var strControls="txtHours,txtMinutes,txtEstMinutes,txtEstHours,txtMaxScore,txtHeight,txtWidth,txtTolerenceX,txtTolerenceY,txtWrongAnswerScore,ucPreference_txtMinutes,ucPreference_txtSeconds,txtNoOfRows,txtNoOfColumns,txtMinChoice,txtMaxChoice,txtinCorrect,txtScore,txtinRange,txtScoreCorrect,txtWrongScore,txtNumberOfLines,txtthreshold,txtAssessmentHours,txtAssessmentTiming,txtNoOfQuestions,txtAttemptsallowed,txtBuzzerTime,txtNoQues,txtAllowAttempts,txtMin,txtHour,txtNumOfQuestion,txtDurHH,txtDurMM,txtThreshHoldScore,txtCorrectAnswer,txtRangeMinus,txtRangePlus,txtScore,txtIncr,txtScoreYes,txtScoreNo,txtNumberOfWords,ucPreference_txtMinutes,ucPreference_txtSeconds,txthours,txtmins,txtRandomQnsNo,txtThresholdScore,txtFromHrs,txtFromMins,txtToHrs,txtToMins,txtOtherScore,txtNumberofAssessmentAttemps,txtNumberOfAttemptsperQuestion,txtFromHur,txtToHur,txtURL,txtweight,TxtUrl,txtTofield,txtCCfield,txtBCCfield,fontname,fontsize,txtStartDate,txtEndDate,txtNewVal,txtassmt,txtassessment,_ctl0_ContentHolderArea_txteBook,_ctl0_ContentHolderArea_txtHour,_ctl0_ContentHolderArea_txtMin,txtEstimatedAssessmentHours,txtEstimateAssessmentTiming,txtSecNoOfQues,txtNoofQuestions,txtMaxQuestions,txtMoveToNextSectionAfter,txtqnsincluded1,_ctl0:ContentHolderArea:txtFolderLevelScore,txtUniqueID,txtTerm,_ctl0_ContentHolderArea_textLOThresholdScore,_ctl0_ContentHolderArea_textStudyPlanTVAlertAfterAttempts,_ctl0_ContentHolderArea_TxtGlossary,_ctl0_ContentHolderArea_txtCustomExternal,_ctl0_ContentHolderArea_txtCustomExternalOne,_ctl0_ContentHolderArea_txtHttp,_ctl0_ContentHolderArea_rptCAID__ctl1_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl1_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl2_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl2_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl3_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl3_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl4_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl4_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl5_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl5_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl6_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl6_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl7_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl7_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl8_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl8_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl9_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl9_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl10_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl10_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl11_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl11_txtUrl32x32,_ctl0_ContentHolderArea_rptCAID__ctl12_txtUrl16x16,_ctl0_ContentHolderArea_rptCAID__ctl12_txtUrl32x32,txtCustomIconURLSmall,txtCustomIconURLBig,txtPracticeLesson,_ctl10_Textduedate,txtdHrs,txtdMins,txtFromDate,txtToDate,_ctl0__ctl0_phBody_PageContent_txtHours,_ctl0__ctl0_phBody_PageContent_txtMinutes,link,txtAssetName,txtStartingNum,_ctl0_ContentHolderArea_txtInsCustomExternal,_ctl0_ContentHolderArea_txtInsCustomExternalOne,_ctl0_ContentHolderArea_txtInseBook,_ctl0_ContentHolderArea_txtLearnerLevelIcon,_ctl0_ContentHolderArea_rptCAID__ctl1_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl2_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl3_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl4_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl5_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl6_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl7_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl8_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl9_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl10_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl11_txtUrl174x92,_ctl0_ContentHolderArea_rptCAID__ctl12_txtUrl174x92,CustomIconControl_txtIconUrl16,CustomIconControl_txtIconUrl32,CustomIconControl_txtIconUrl174,txtToolUrl,txtSourceUrl,_ctl0_ContentHolderArea_txtInstructorURL,_ctl0_InnerPageContent_txtFromDate,_ctl0_InnerPageContent_txtToDate,_ctl0_InnerPageContent_txtFromHrs,_ctl0_InnerPageContent_txtFromMins,_ctl0_InnerPageContent_txtToHrs,_ctl0_InnerPageContent_txtToMins,_ctl0_ContentHolderArea_txtWCBrandingURL,txtCutOffPercent,ctl1_txtMin,_ctl1_txtSec,txtScormCode,_ctl1_txtBackGroundGraphic,_ctl1_ucPreference_txtMinutes,_ctl1_ucPreference_txtSeconds, _ctl1_txtMin";var RegExpArray=new Array(/dgdOutCome__ctl\d{1,2}_txtScoreCorrect/,/dgdOutCome__ctl\d{1,2}_txtScoreWrong/,/dgdChoice__ctl\d{1,2}_txtScoreCorrect/,/dgdChoice__ctl\d{1,2}_txtScoreWrong/,/dgdAnswer__ctl\d{1,2}_txtScore/,/dgdChoice__ctl\d{1,2}_txtScore/,/dgdChoice__ctl\d{1,2}_txtScoreCorrect/,/dgdChoice__ctl\d{1,2}_txtScoreWrong/,/dtgOutCome__ctl\d{1,2}_txtScore/,/dgdChoices__ctl\d{1,2}_txtScore/,/dtgOperand__ctl\d{1,2}_txtMin/,/dtgOperand__ctl\d{1,2}_txtMax/,/dtgChoice__ctl\d{1,2}_txtScore/,/dgdChoices__ctl\d{1,2}_txtScore/,/dtgChoice__ctl\d{1,2}_txtScore/,/dtgOperand__ctl\d{1,2}_txtMin/,/dtgOperand__ctl\d{1,2}_txtMax/,/dgdSlider__ctl\d{1,2}_txtScore/,/dgdKeyWords__ctl\d{1,2}_txtScore/,/dtgOperand__ctl\d{1,2}_txtMin/,/dtgOperand__ctl\d{1,2}_txtMax/,/dtgChoice__ctl\d{1,2}_txtCorectScore/,/dtgChoice__ctl\d{1,2}_txtWrongScore/,/dgdBlanks__ctl\d{1,2}_txtScoreCorrect/,/dgdBlanks__ctl\d{1,2}_txtScoreWrong/,/txtTotal\d{1,2}/,/txtKnowledge\d{1,2}/,/txtEasy\d{1,2}/,/txtModerate\d{1,2}/,/txtDifficult\d{1,2}/,/txtComprehension\d{1,2}/,/txtApplication\d{1,2}/,/txtAnalysis\d{1,2}/,/txtSynthesis\d{1,2}/,/txtEvaluation\d{1,2}/,/dtgLines__ctl\d{1,2}_txtScoreCorrect/,/dtgOutcome__ctl\d{1,2}_txtScore/,/dgdOutcome__ctl\d{1,2}_txtScoreCorrect/,/dgdOutcome__ctl\d{1,2}_txtScoreWrong/,/dtgChoice__ctl\d{1,2}_txtCorrectScore/,/dgdKeywords__ctl\d{1,2}_txtScore/,/txtqnsincluded\d{1,2}/,/dtgSetAnswer__ctl\d{1,2}_txtAnswerScore/,/dtgAnswer__ctl\d{1,2}_txtAnswerScore/,/txtTotal\d{1,2}/,/dtgOperand__ctl\d{1,2}_txtEqual/,/txtedit\d{1,12}/,/txteditMS\d{1,2}/,/uc\d{1,2}_txtOrder/);try{rtUXWindow().rtUXWindow().rtUXWindow().txtControl=null;rtUXWindow().rtUXWindow().rtUXWindow().globalCursorPos=0;rtUXWindow().rtUXWindow().rtUXWindow().SelEnd=0;rtUXWindow().rtUXWindow().rtUXWindow().getSelect}catch(ex){}function ele(a){var b=document.getElementById(a);return b}function eletag(a){var b=document.getElementsByTagName(a);return b}function funSetCursorPos(a){rtUXWindow().rtUXWindow().rtUXWindow().txtControl=a;rtUXWindow().rtUXWindow().rtUXWindow().globalCursorPos=a.value.length;rtUXWindow().rtUXWindow().rtUXWindow().SelEnd=a.value.length;get_Selection()}function funGetCursorPos(a,d){try{if(d!=null){if(d.target){a=d.target}else{a=d.srcElement}}rtUXWindow().rtUXWindow().rtUXWindow().txtControl=a;var c=rtUXWindow().rtUXWindow().rtUXWindow().txtControl;if(navigator.appName=="Netscape"){rtUXWindow().rtUXWindow().rtUXWindow().globalCursorPos=c.selectionStart;rtUXWindow().rtUXWindow().rtUXWindow().SelEnd=c.selectionEnd}get_Selection()}catch(b){}}function txtgetCursorPos(a){funGetCursorPos(this,window.event?event:a)}function txtareagetCursorPos(a){funGetCursorPos(this,window.event?event:a)}function insertString(g){try{var d,h=CheckAlternateView();if(h){d=window}else{d=rtUXWindow().rtUXWindow().rtUXWindow()}var e=d.txtControl;if($.browser.msie){if($.browser.version=="9.0"){if(e==null){e=$("#txtEditor")[0]}if(e==null){e=$("[id*='txtWFEssayContent']")[0]}}}if($(e).attr("EnablePalette")=="false"){e=null}if(e!=null&&e.style.display!="none"&&e.style.visibility!="hidden"){if($.browser.msie){if(e!=null&&(e.type=="text"||e.type=="password"||e.type=="textarea")&&e.disabled==false){if(e.createTextRange){d.getSelect.text=g;d.getSelect.select();get_Selection()}}}else{var f=e.value.length;var b=e.maxLength;b=isNaN(b)?f+1:b;if(h&&typeof d.globalCursorPos==="undefined"){window.globalCursorPos=0;window.SelEnd=0}if((b==null||b==0||b==-1||f<b)&&(e.readOnly!=true)&&e.disabled==false){e.focus();if(d.globalCursorPos!=0){var j=e.value.substring(0,d.globalCursorPos),a=e.value.substring(d.SelEnd,e.value.length)}else{var j="",a=e.value.substring(0,e.value.length)}e.value=j+g+a;d.globalCursorPos=parseInt(d.globalCursorPos)+1;d.SelEnd=d.globalCursorPos;e.setSelectionRange(d.SelEnd,d.SelEnd)}}$(e).trigger("onStringInsertionCompleted")}}catch(c){}}function addEvents_NullFunction(objControl){try{if(objControl){with(objControl){onfocus=NullFunction;onmouseup=null;onkeyup=null;onchange=null;onclick=null}}}catch(ex){}}function addEvents_GenericControls(objControl){try{if(objControl){with(objControl){onfocus=FocusedFunction;onmouseup=get_Selection;if(type=="text"){onkeyup=function(e){txtgetCursorPos(e)};onchange=function(e){txtgetCursorPos(e)};onclick=function(e){txtgetCursorPos(e)}}else{if(tagName.toLowerCase()=="textarea"){onkeyup=function(e){txtareagetCursorPos(e)};onchange=function(e){txtareagetCursorPos(e)};onclick=function(e){txtareagetCursorPos(e)}}}}}}catch(ex){}}function addEvents(){try{var b=eletag("INPUT");var h=eletag("TEXTAREA");var a=eletag("IMG");var g=eletag("A");var f,c;for(f=0;f<a.length;f++){a[f].onfocus=NullFunction}for(f=0;f<g.length;f++){if(typeof(g[f].iscapslock)=="undefined"&&g[f].className!="cp_ach2"){g[f].onfocus=NullFunction}}for(f=0;f<b.length;f++){if(b[f].type=="text"||b[f].type=="password"){timingTextboxIndex=strControls.search(b[f].id);if(timingTextboxIndex==-1){for(c=0;c<RegExpArray.length;c++){if((b[f].id).match(RegExpArray[c])==null){b[f].onfocus=FocusedFunction;b[f].onkeyup=function(j){txtgetCursorPos(j)};b[f].onchange=function(j){txtgetCursorPos(j)};b[f].onclick=function(j){txtgetCursorPos(j)};b[f].onmouseup=get_Selection}else{b[f].onfocus=NullFunction;b[f].onchange=null;b[f].onclick=null;b[f].onkeyup=null;b[f].onmouseup=null;break}}}else{b[f].onfocus=NullFunction}}else{b[f].onfocus=NullFunction}}for(f=0;f<h.length;f++){if(h[f].readOnly!=true){h[f].onfocus=FocusedFunction;h[f].onkeyup=function(j){txtareagetCursorPos(j)};h[f].onchange=function(j){txtareagetCursorPos(j)};h[f].onclick=function(j){txtareagetCursorPos(j)};h[f].onmouseup=get_Selection}}var e=eletag("BODY");e[0].onmouseup=BodyOnClickFunction}catch(d){}}function BodyOnClickFunction(c){try{var a,h;if(navigator.appName=="Netscape"){a=c.target.tagName;h=c.target}else{a=event.srcElement.tagName;h=event.srcElement}if(a=="INPUT"||a=="TEXTAREA"){if((h.disabled)||(h.readOnly)){NullFunction()}CharFlag=false}else{var b=h.id,g=b.lastIndexOf("_"),d=b.substring(g+1,g+14);if((d!="tdCharPalette"&&d!="ancPallete")&&typeof(h.getAttribute("iscapslock"))!="string"){var f;if(navigator.appName=="Netscape"){f=window.document.getSelection()}else{f=document.selection.createRange()}if(f.text==""){NullFunction()}}}}catch(e){}}function NullFunction(){if(typeof rtUXWindow().txtControl!="undefined"){if(!CheckAlternateView()){parent.parent.parent.txtControl=null}else{rtUXWindow().rtUXWindow().rtUXWindow().txtControl=null}}}function FocusedFunction(){CharFlag=true;if(event!=null){txtControl=event.srcElement}else{txtControl=this}get_Selection()}function get_Selection(){try{var b;if(CheckAlternateView()){b=window}else{b=rtUXWindow().rtUXWindow().rtUXWindow()}if(navigator.appName=="Netscape"){if(window.getSelection){b.getSelect=window.document.getSelection()}}else{if(document.location.pathname.indexOf("frmStudentPresentation.aspx")!=-1||document.location.pathname.indexOf("frmInstructorPresentation.aspx")!=-1||document.location.pathname.indexOf("frmPeerAssessmentContents.aspx")!=-1||document.location.pathname.indexOf("frmAssessmentTestDetails.aspx")!=-1){if(document.selection.type.toLowerCase()=="none"){return}}if(document.selection){b.getSelect=document.selection.createRange()}}}catch(a){}}function openGlossary(a){var b="";var d=$("[id*='hdnCopyCourseID']");if(d.length>0){b=d.val()}var c="0";if(a==undefined){if(document.getElementById("hdnGlossaryType")){c=document.getElementById("hdnGlossaryType").value}else{if(document.getElementById(assessmentHolderValue+"hdnGlossaryType")){c=document.getElementById(assessmentHolderValue+"hdnGlossaryType").value}}}if(GlossaryWindow){GlossaryWindow.close()}if(a=="1"||c=="1"){GlossaryWindow=window.open(Apppath+"/Modules/MySpanishLab/Ebook.aspx?mode=3&from=presentation&CopyCourseID="+b,"Glossary","width=600,height=550,top=75,left=125,status=yes,scrollbars=yes,resizable=yes")}else{if(a=="2"||c=="2"){var e=appPath+"/Modules/CourseSettings/GlossaryTool/frmGlossaryTool.aspx?EditMode=0&CopyCourseID="+b;OpenGlossaryLightBoxDiv(e,0,"646","940","15%","2")}else{GlossaryWindow=window.open(Apppath+"/Modules/MySpanishLab/GlossaryUX.aspx?CopyCourseID="+b,"Glossary","width=680,height=430,top=175,left=125,status=yes,scrollbars=no,resizable=yes")}}return false}function OpenGlossaryLightBoxDiv(d,b,a,c,f,e){rtUXWindow().$("body").block({message:"<iframe src ='"+d+"' width='100%' allowtransparency='true' height='100%' scrolling='no' frameborder='0'></iframe>",css:{border:0,width:c+"px",height:a+"px",left:($(window).width()-c)/2+"px",top:2+"px",backgroundColor:"transparent"},overlayCSS:{backgroundColor:"#000",opacity:0.2,cursor:"none"}});if(rtUXWindow().$("div[class='blockUI blockMsg blockElement']").get(0)){rtUXWindow().$("div[class='blockUI blockMsg blockElement']")[0].style.top="20px"}return false}function checkBrowserType(){try{var b=getBrowserDetails();if(b.ie){currentType=browserType.ie}else{if(b.mac){currentType=browserType.mac}else{if(b.opera){currentType=browserType.opera}else{if((b.ns4)||(b.ns6)){currentType=browserType.ns}else{currentType=browserType.other}}}}}catch(a){}}function openVerbChart(){var a="";var b=$("[id*='hdnCopyCourseID']");if(b.length>0){a=b.val()}if(VerbChartWindow){VerbChartWindow.close()}VerbChartWindow=window.open(Apppath+"/Modules/MySpanishLab/VerbChartUX.aspx?CopyCourseID="+a,"VerbChart","width=600,height=570,top=75,left=125,status=yes,scrollbars=yes");return false}function openeBook(b){var a="";var g=querySt("from",1);if(g.toLowerCase().indexOf("tsl")>-1){a="&from="+g}else{g=querySt("from",2);if(g.toLowerCase().indexOf("tsl")>-1){a="&from="+g}else{g=querySt("from",3);if(g.toLowerCase().indexOf("tsl")>-1){a="&from="+g}}}var c="";var f="";var d=$("[id*='hdnCopyCourseID']");var e=$("[id*='hdnTslCourseId']");if(d.length>0){c=d.val()}if(e.length>0){f=e.val()}if(eBookWindow){eBookWindow.close()}TutorialWindow=window.open(Apppath+"/Modules/MySpanishLab/Ebook.aspx?mode=1&CEBookId="+b+"&CopyCourseID="+c+"&TSLCourseID="+f+"&from=presentation"+a,"Ebook","width=600,height=550,top=75,left=125,status=yes,scrollbars=yes,resizable=yes");return false}function querySt(e,g){var a="";try{var f="";if(g===1){f=window.opener.document.location.search.substring(1)}else{if(g===2){f=window.location.search.substring(1)}else{if(g===3){f=rtUXWindow().location.search.substring(1)}}}var b=f.split("&");var c="";for(i=0;i<b.length;i++){c=b[i].split("=");if(c[0].toLowerCase()==e){a=c[1];break}}}catch(d){}return a}function openTutorial(){var a="";var b=$("[id*='hdnCopyCourseID']");if(b.length>0){a=b.val()}if(TutorialWindow){TutorialWindow.close()}TutorialWindow=window.open(Apppath+"/Modules/MySpanishLab/Ebook.aspx?mode=2&from=presentation&CopyCourseID="+a,"Tutorial","width=600,height=550,top=75,left=125,status=yes,scrollbars=yes,resizable=yes");TutorialWindow.focus();return false}function openCustomButton(){var a="";var b=$("[id*='hdnCopyCourseID']");if(b.length>0){a=b.val()}if(CustomWindow){CustomWindow.close()}CustomWindow=window.open(Apppath+"/Modules/MySpanishLab/Ebook.aspx?mode=4&from=presentation&CopyCourseID="+a,"Custom","width=600,height=550,top=75,left=125,status=yes,scrollbars=yes,resizable=yes");CustomWindow.focus();return false}function openCustomButtonOne(){var a="";var b=$("[id*='hdnCopyCourseID']");if(b.length>0){a=b.val()}if(CustomWindowOne){CustomWindowOne.close()}CustomWindowOne=window.open(Apppath+"/Modules/MySpanishLab/Ebook.aspx?mode=5&from=presentation&CopyCourseID="+a,"Custom","width=600,height=550,top=75,left=125,status=yes,scrollbars=yes,resizable=yes");CustomWindowOne.focus();return false}function OpenActivityToolUrl(c,b){if(b==="2"){OpenGlossaryLightBoxDiv(c,0,"646","940","15%","2")}else{var a="toolbar=no,maximize=yes,statusbar=no,resizable=1,addressbar=no,titlebar=no,left="+(screen.width*12/100)+", width="+(screen.width*70/100)+", top="+(screen.height*30/100)+",height="+(screen.height*31/100)+", scrollbars=yes";if(activityToolUrl){activityToolUrl.close()}if((c.toLowerCase().indexOf("www")>-1)&&(c.toLowerCase().substr(0,4)!="http")){c="http://"+c.toString()}activityToolUrl=window.open(c,"",a);activityToolUrl.focus();return false}}function closeWindow_RT(a){if(a==undefined){a=false}var b="";var c="";if(TutorialWindow){TutorialWindow.close()}if(eBookWindow){eBookWindow.close()}if(VerbChartWindow){VerbChartWindow.close()}if(GlossaryWindow){GlossaryWindow.close()}if(activityToolUrl){activityToolUrl.close()}if(document.getElementById(assessmentHolderValue+"hdnSelectedDay")){b=document.getElementById(assessmentHolderValue+"hdnSelectedDay").value}if(document.getElementById(assessmentHolderValue+"hdnAssessmentID")){c=document.getElementById(assessmentHolderValue+"hdnAssessmentID").value}try{if(b!=""){if(window.opener){var f=window.opener.document.location.href;if(f.indexOf("frmStudentPresentation.aspx")==-1&&f.indexOf("frmInstructorPresentation.aspx")==-1&&document.getElementById(assessmentHolderValue+"hdnFrom").value!="GB"&&f.indexOf("frmDRTDefault.aspx")==-1&&f.indexOf("frmAdaptiveTest.aspx")==-1){if(PageRefreshedAfterSubmit==1){return}else{f=ReplaceQuerystring(f,"LaunchedAID",c);if(a){rtUXWindow().opener.location.href=selectedDay(f)}}}}}}catch(d){}}function closeDropDownMenu(){try{if((navigator.appName=="Microsoft Internet Explorer")||(navigator.userAgent.toLowerCase().indexOf("safari")>-1)){for(var a=0;a<=rtUXWindow().window.document.getElementById("divTable1").parentElement.parentElement.children.length-1;a++){rtUXWindow().window.document.getElementById("divTable1").parentElement.parentElement.children[a].children[2].style.display="none"}}else{for(var a=0;a<=rtUXWindow().document.getElementById("divTable1").parentNode.parentNode.cells.length-1;a++){rtUXWindow().document.getElementById("divTable1").parentNode.parentNode.cells[a].lastChild.style.display="none"}}}catch(b){}}function hideImgScroll(b){var a;if(b==1){a=document.getElementById("imgbtnContent1")}else{a=document.getElementById("imgbtnContent2")}if(a.style.display==""||a.style.display=="block"){a.style.display="none"}}function showImgScroll(b){var a;if(b==1){a=document.getElementById("imgbtnContent1")}else{a=document.getElementById("imgbtnContent2")}if(a.style.display=="none"){a.style.display=""}}var IsLegendAvail=0;var k;function RTBhideSubNavigationTab(d){var a=0;if(document.getElementById("imgbtnContent")){IsLegendAvail=1}else{IsLegendAvail=0}k=document.getElementsByName("ancSubNavigationTab").length;k=k-IsLegendAvail;k=k-2;for(var b=1;b<=k;b++){if(d==document.getElementsByName("ancSubNavigationTab")[b].innerHTML){a=b}if(a!=0&&a<=5&&b>5){document.getElementsByName("ancSubNavigationTab")[b].parentNode.style.display="none"}else{if(a>5){if(a==k){hideImgScroll(2)}showImgScroll(1);var c;c=b+1;if(c>k){c=1;while(1){document.getElementsByName("ancSubNavigationTab")[c].parentNode.style.display="none";a=a-1;if(a==5){break}else{c=c+1}}}else{document.getElementsByName("ancSubNavigationTab")[c].parentNode.style.display="none"}}}}}function newHideorDisplayTab2(b){showImgScroll(1);var c;c=k-5;for(var a=6;a<=k;a++){if(document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display=="none"){document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display="";if(a==k){hideImgScroll(2)}break}}for(var a=1;a<=c;a++){if(document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display==""){document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display="none";break}}}function newHideorDisplayTab1(b){showImgScroll(2);var c;c=k-5;for(var a=k;a>=6;a--){if(document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display==""){document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display="none";break}}for(var a=c;a>=1;a--){if(document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display=="none"){document.getElementsByName("ancSubNavigationTab")[a].parentNode.style.display="";if(a==1){hideImgScroll(1)}break}}}function sort(c){var a=document.getElementById("chkSelectAll");var b;if(document.getElementById("hdnSortorder").value=="asc"){document.getElementById("hdnSortorder").value="desc";document.getElementById("imag_sort").src=AppPath+"/images/down.gif"}else{document.getElementById("hdnSortorder").value="asc";document.getElementById("imag_sort").src=AppPath+"/images/up.gif"}document.getElementById("hdnSortExp").value="location";a.checked=false;document.frmFileUploadQueue.submit()};