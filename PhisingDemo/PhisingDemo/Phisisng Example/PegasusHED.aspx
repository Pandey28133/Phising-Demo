<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PegasusHED.aspx.cs" Inherits="PhisingDemo.Phisisng_Example.PegasusHED" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0068)https://pegasus5.qa.pegasus.pearsoncmg.com/Pegasus/frmLogin.aspx?s=3 -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US" xml:lang="en-US" class="gr__pegasus5_qa_pegasus_pearsoncmg_com"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<!-- The Following Tags Are Added By PegasusBaseClass (Start)-->
	<link href="./PegasusHED_files/global.css" type="text/css" rel="stylesheet">
	<link href="./PegasusHED_files/pegasusgrid.css" type="text/css" rel="stylesheet">
	<link href="./PegasusHED_files/coursecontent.css" type="text/css" rel="stylesheet">
	<link href="./PegasusHED_files/globaladmin.css" type="text/css" rel="stylesheet">
	<link href="./PegasusHED_files/wlloginpage.css" type="text/css" rel="stylesheet">
	<script async="" src="./PegasusHED_files/analytics.js"></script><script type="text/javascript" async="" src="./PegasusHED_files/js-e2e.js"></script><script async="" src="./PegasusHED_files/analytics.js"></script><script language="javascript" type="text/javascript" src="./PegasusHED_files/basepagescripts.js"></script><style type="text/css"></style>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/jquery.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/json.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/jquery.json-1.3.min.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/jquery.blockui.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/pegasus.jsfw.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/pegasus.validationutil.js"></script>
	<script language="javascript" type="text/javascript" src="./PegasusHED_files/jquery.cookie.js"></script>
	<script language="Javascript" type="text/javascript" src="./PegasusHED_files/robohelp_csh.js"></script>
	<script language="Javascript" type="text/javascript" src="./PegasusHED_files/JSLocalizationHandler.ashx"></script>
	<script language="Javascript" type="text/javascript" src="./PegasusHED_files/commonscript.js"></script>
	<script language="Javascript" type="text/javascript" src="./PegasusHED_files/resourcetoolbar.js"></script>
	<script type="text/javascript" src="./PegasusHED_files/pngfix.js"></script>
	<script type="text/javascript">var strAppPathForResToolbar = "/Pegasus";</script>
	<script language="Javascript" type="text/javascript" src="./PegasusHED_files/base.js"></script>
	<!-- (End) --><title>10:33:53AM TUE JUN 21</title><link href="./PegasusHED_files/logincommon.css" type="text/css" rel="stylesheet">
    <script type="text/javascript" language="javascript" src="./PegasusHED_files/login.js"></script>
 <script type="text/javascript" language="javascript" src="./PegasusHED_files/isaac.js"></script>
 <script type="text/javascript" language="javascript" src="./PegasusHED_files/bcrypt.js"></script>
    <script type="text/javascript" language="javascript" src="./PegasusHED_files/PegasusHED.js"></script>


	<script type="text/javascript">	    var strAppPathForResToolbar = "/Pegasus";</script>
    <script type="text/javascript" language="javascript">
  
        $(document).ready(function () {

            $('#btnClosePrivacy').click(function () { $('#dvPrivacyPolicy').css("display", "none"); event.returnValue = false; return false; });
            $('#btnCloseTerms').click(function () { $('#dvTermsOfUse').css("display", "none"); event.returnValue = false; return false; });            
        });             
    </script>

<link href="./PegasusHED_files/loginhed.css" rel="stylesheet" type="text/css"><style type="text/css" id="e2e-alertStyles">.e2e-reset{animation:none!important;animation-delay:0!important;animation-direction:normal!important;animation-duration:0!important;animation-fill-mode:none!important;animation-iteration-count:1!important;animation-name:none!important;animation-play-state:running!important;animation-timing-function:ease!important;backface-visibility:visible!important;background:0!important;background-clip:border-box!important;background-origin:padding-box!important;background-position-x:0!important;background-position-y:0!important;background-size:auto auto!important;border:0!important;border-width:medium!important;border-color:inherit!important;border-bottom:0!important;border-bottom-color:inherit!important;border-collapse:separate!important;border-image:none!important;border-left:0!important;border-left-color:inherit!important;border-radius:0!important;border-right:0!important;border-right-color:inherit!important;border-spacing:0!important;border-top:0!important;border-top-color:inherit!important;bottom:auto!important;box-shadow:none!important;box-sizing:content-box!important;caption-side:top!important;clear:none!important;clip:auto!important;color:inherit!important;columns:auto!important;column-count:auto!important;column-fill:balance!important;column-gap:normal!important;column-rule:medium none currentColor!important;column-rule-color:currentColor!important;column-rule-style:none!important;column-rule-width:none!important;column-span:1!important;column-width:auto!important;content:normal!important;counter-increment:none!important;counter-reset:none!important;cursor:auto!important;direction:ltr!important;display:inline!important;empty-cells:show!important;float:none!important;font:400!important;font-family:inherit!important;font-size:medium!important;font-style:normal!important;font-variant:normal!important;font-weight:400!important;height:auto!important;hyphens:none!important;left:auto!important;letter-spacing:normal!important;line-height:normal!important;list-style:disc!important;margin:0!important;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:1!important;orphans:0!important;outline:0!important;outline-width:medium!important;overflow:visible!important;overflow-x:visible!important;overflow-y:visible!important;padding:0!important;page-break-after:auto!important;page-break-before:auto!important;page-break-inside:auto!important;perspective:none!important;perspective-origin:50% 50%!important;position:static!important;quotes:"C" "D" "8" "9"!important;right:auto!important;tab-size:8!important;table-layout:auto!important;text-align:inherit!important;text-align-last:auto!important;text-decoration:none!important;text-decoration-color:inherit!important;text-decoration-line:none!important;text-decoration-style:solid!important;text-indent:0!important;text-shadow:none!important;text-transform:none!important;top:auto!important;transform:none!important;transform-style:flat!important;transition:none!important;transition-delay:0s!important;transition-duration:0s!important;transition-property:none!important;transition-timing-function:ease!important;unicode-bidi:normal!important;vertical-align:baseline!important;visibility:visible!important;white-space:normal!important;widows:0!important;width:auto!important;word-spacing:normal!important;z-index:auto!important}.e2e-alert,.e2e-alert-container{display:block!important;position:relative!important}.e2e-alert *{font-family:verdana,helvetica,sans-serif!important}.e2e-alert{font-size:14px!important;line-height:1.4em!important;padding:10px!important;z-index:100!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important;background:#FFFFA8!important;color:#404040!important}.e2e-alert__icon,.e2e-alert__text{-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important}.e2e-alert-link,.e2e-alert-link:active,.e2e-alert-link:focus,.e2e-alert-link:hover,.e2e-alert-link:link,.e2e-alert-link:visited{word-wrap:break-word!important;cursor:pointer!important;font-size:14px!important;text-decoration:none!important;outline:0!important;border-bottom:0!important}.e2e-alert-img{border:0!important}.e2e-alert__icon,.e2e-alert__icon__img,.e2e-alert__support,.e2e-alert__text{display:inline-block!important;vertical-align:top!important}.e2e-alert--error{border-left:8px solid #D40000!important}.e2e-alert--warn{border-left:8px solid #FF6100!important}.e2e-alert--info{background:#D5EEED!important;border-left:8px solid #37ABC8!important}.e2e-alert__icon{width:12%!important;padding-top:4px!important;padding-bottom:5px!important;padding-right:1%!important;vertical-align:top!important;font-size:40px!important;text-align:center!important;box-sizing:border-box!important}.e2e-alert__icon__img{max-width:100%!important;height:auto!important;float:left!important;width:36px!important}.e2e-alert__icon__img--short{margin-bottom:-1px!important}.e2e-alert__text{display:block!important;padding-right:10px!important;padding-bottom:0!important;width:100%!important;box-sizing:border-box!important}.e2e-alert__text.e2e-alert__page--inactive{display:none!important}.e2e-alert__text__subtitle,.e2e-alert__text__title{display:block!important;color:#333!important;font-weight:600!important}.e2e-alert__text__title{font-size:16px!important;-webkit-box-sizing:border-box!important;-moz-box-sizing:border-box!important;box-sizing:border-box!important}.e2e-alert__text__subtitle{font-size:14px!important;margin-bottom:5px!important}.e2e-alert-heading{display:inline-block!important;width:70%!important;margin:0 0 2px!important}.e2e-alert-timestamp{font-size:12px!important;line-height:15px!important;color:#606060!important;display:inline-block!important;width:100%!important;margin-bottom:5px!important}.e2e-alert__text__text{display:block!important;margin-top:0!important;font-size:14px!important;color:#333!important}.e2e-alert__expandable{display:none!important}.e2e-alert__expandable.active{display:block!important}.e2e-alert__expandable__title{margin-top:15px!important;color:#333!important}.e2e-alert__expandable__text{font-size:14px!important;color:#333!important}.e2e-alert__expandable__link{margin:5px 0 0!important;display:none!important}.e2e-alert__controls,.e2e-alert__expandable__link.active,.e2e-alert__support{display:block!important}.e2e-alert__expandable__link .e2e-alert-link,.e2e-alert__expandable__link .e2e-alert-link:active,.e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert__expandable__link .e2e-alert-link:link,.e2e-alert__expandable__link .e2e-alert-link:visited{color:#364395!important;border-bottom:1px dotted #364395!important}.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:active,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:link,.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:visited{color:#364395!important;border-bottom-color:#364395!important}.e2e-alert--info .e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert-link:focus,.e2e-alert__controls__close-link:focus,.e2e-alert__expandable__link .e2e-alert-link:focus,.e2e-alert__expandable__text a:focus,.e2e-alert__link-circle:focus,.e2e-alert__page-changer.active:focus,.e2e-alert__page-changer:focus,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link:focus,.e2e-alert__support__link:focus,.e2e-alert__text__text a:focus{outline:#364395 dotted 1px!important}.e2e-alert__expandable__text a,.e2e-alert__expandable__text a:active,.e2e-alert__expandable__text a:focus,.e2e-alert__expandable__text a:hover,.e2e-alert__expandable__text a:link,.e2e-alert__expandable__text a:visited,.e2e-alert__text__text a,.e2e-alert__text__text a:active,.e2e-alert__text__text a:focus,.e2e-alert__text__text a:hover,.e2e-alert__text__text a:link,.e2e-alert__text__text a:visited{word-wrap:break-word!important;cursor:pointer!important;font-size:14px!important;color:#364395!important;border-bottom:1px dotted #364395!important;text-decoration:none!important}.e2e-alert-link:hover,.e2e-alert__expandable__link .e2e-alert-link:hover,.e2e-alert__expandable__text a:hover,.e2e-alert__text__text a:hover{border-bottom-style:solid!important}.e2e-alert__support{text-align:center!important;margin:25px 0 10px!important;z-index:0!important}.e2e-alert__support__link,.e2e-alert__support__link:active,.e2e-alert__support__link:focus,.e2e-alert__support__link:hover,.e2e-alert__support__link:link,.e2e-alert__support__link:visited{color:#fff!important;text-decoration:none!important;background:#364395!important;padding:15px 20px!important;-webkit-border-radius:10px!important;-moz-border-radius:10px!important;border-radius:10px!important}.e2e-alert__support__link__text{border-bottom:1px dotted #fff!important;border-bottom:1px dotted rgba(255,255,255,.5)!important;font-size:14px!important}.e2e-alert__support__link__img{vertical-align:middle!important}.e2e-alert__controls{position:absolute!important;right:10px!important;top:10px!important;z-index:1!important}.e2e-alert__controls__close-link{display:none!important}.e2e-alert__pagination{position:absolute!important;bottom:0!important;z-index:110!important;background:0 0!important;display:block!important;width:100%!important;text-align:center!important}.e2e-alert-container--paginated .e2e-alert__page,.e2e-alert-container.e2e-alert-container--non-paginated .e2e-alert__pagination,.e2e-alert__mobile,.e2e-alert__mobile--view{display:none!important}.e2e-alert__pagination.e2e-alert__mobile--view{padding-top:0!important}.e2e-alert__controls__close-link,.e2e-alert__controls__close-link:active,.e2e-alert__controls__close-link:focus,.e2e-alert__controls__close-link:hover,.e2e-alert__controls__close-link:link,.e2e-alert__controls__close-link:visited,.e2e-alert__page-changer.active,.e2e-alert__page-changer.active:active,.e2e-alert__page-changer.active:focus,.e2e-alert__page-changer.active:hover,.e2e-alert__page-changer.active:link,.e2e-alert__page-changer.active:visited,.e2e-alert__pagination__link,.e2e-alert__pagination__link:active,.e2e-alert__pagination__link:focus,.e2e-alert__pagination__link:hover,.e2e-alert__pagination__link:link,.e2e-alert__pagination__link:visited{background:#4A4A4A!important;color:#fff!important;font-weight:600!important;text-decoration:none!important;padding:4px 8px!important;-webkit-border-radius:6px!important;-moz-border-radius:6px!important;border-radius:6px!important}.e2e-alert__page-changer,.e2e-alert__page-changer:active,.e2e-alert__page-changer:focus,.e2e-alert__page-changer:hover,.e2e-alert__page-changer:link,.e2e-alert__page-changer:visited{background:#9a9a9a!important}.e2e-alert__link-circle,.e2e-alert__link-circle:active,.e2e-alert__link-circle:focus,.e2e-alert__link-circle:hover,.e2e-alert__link-circle:link,.e2e-alert__link-circle:visited{margin-left:8px!important;-webkit-border-radius:50%!important;-moz-border-radius:50%!important;border-radius:50%!important;padding:0!important;width:25px!important;height:25px!important;line-height:23px!important;text-align:center!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{text-align:right!important}.e2e-alert-container--paginated .e2e-alert__main-content{margin-bottom:30px!important}.e2e-alert__mobile--view.active,.e2e-alert__mobile.active,.e2e-alert__page.active,.e2e-alert__text--mobile--active{display:block!important}@media screen and (min-width:550px){.e2e-alert{padding:15px 20px!important}.e2e-alert__mobile,.e2e-alert__mobile--view{display:block!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile--active.e2e-alert__pagination__link--mobile:visited,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{display:none!important}.e2e-alert-heading{width:62%!important}.e2e-alert__text__title{font-size:18px!important}.e2e-alert__page .e2e-alert-heading{width:60%!important}.e2e-alert__icon{padding-right:0!important;padding-bottom:0!important;width:50px!important;text-align:left!important}.e2e-alert__icon__img{float:none!important}.e2e-alert__pagination{right:40px!important;top:0!important;bottom:initial!important;width:auto!important;height:auto!important;text-align:right!important}.e2e-alert.e2e-alert__pagination{padding-top:19px!important}.e2e-alert__controls{right:20px!important;top:16px!important}.e2e-alert__controls__close-link,.e2e-alert__controls__close-link:active,.e2e-alert__controls__close-link:focus,.e2e-alert__controls__close-link:hover,.e2e-alert__controls__close-link:link,.e2e-alert__controls__close-link:visited{display:block!important}.e2e-alert__pagination__link--mobile,.e2e-alert__pagination__link--mobile:active,.e2e-alert__pagination__link--mobile:focus,.e2e-alert__pagination__link--mobile:hover,.e2e-alert__pagination__link--mobile:link,.e2e-alert__pagination__link--mobile:visited{margin-top:18px!important}.e2e-alert-container--paginated .e2e-alert__main-content{margin-bottom:0!important}}@media screen and (min-width:900px){.e2e-alert{min-height:123px!important;padding-left:0!important}.e2e-alert.e2e-alert__pagination{min-height:0!important}.e2e-alert__text{position:relative!important}.e2e-alert__icon{position:absolute!important;top:0!important;left:0!important;width:70px!important;text-align:center!important}.e2e-alert__text__title{margin-left:70px!important}.e2e-alert-heading{width:80%!important}.e2e-alert__page .e2e-alert-heading{width:88%!important}.e2e-alert__text{padding:0 20px 0 0!important;width:70%!important}.e2e-alert__shift{position:relative!important;left:70px!important;width:87%!important}.e2e-alert__support{width:265px!important;max-width:28%!important;position:absolute!important;right:20px!important;top:0!important}.e2e-alert__support__link,.e2e-alert__support__link:active,.e2e-alert__support__link:focus,.e2e-alert__support__link:hover,.e2e-alert__support__link:link,.e2e-alert__support__link:visited{margin-top:30px!important;display:block!important;padding-right:11px!important;padding-left:11px!important}}@media screen and (min-width:1020px){.e2e-alert__text{width:72%!important}}@media screen and (min-width:1280px){.e2e-alert__text{width:78%!important}}</style></head>
<body class="LoginBody" onload="addClickFunction(&#39;btnLogin&#39;);return BodyLoad();" data-gr-c-s-loaded="true" cz-shortcut-listen="true"><div class="e2e-reset e2e-alert-container e2e-alert-container--paginated" id="e2e-alertContainer" tabindex="-1"><div class="e2e-reset e2e-alert e2e-alert__pagination e2e-alert__mobile--view" tabindex="-1"><a href="javascript:void(0)" role="button" aria-label="Message 1" title="Message 1" class="e2e-reset e2e-alert-link e2e-alert__pagination__link e2e-alert__page-changer active">1</a> <a href="javascript:void(0)" role="button" aria-label="Message 2" title="Message 2" class="e2e-reset e2e-alert-link e2e-alert__pagination__link e2e-alert__page-changer">2</a> <a href="javascript:void(0)" role="button" aria-label="Message 3" title="Message 3" class="e2e-reset e2e-alert-link e2e-alert__pagination__link e2e-alert__page-changer">3</a> </div><div id="e2e-alert-page-1" class="e2e-reset e2e-alert__page active"><div class="e2e-reset e2e-alert e2e-alert--warn" id="COMM0001279"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAASFBMVEUAAAD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/ZgD/gzD/jED/llD/n2D/s4D/vI//xp//z6//2b//7N//9e////8H1OatAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAAEeSURBVHjaxZbZbsMgEEUJYLabhcRO8v9/2sgORYRrCmqlnmeOBmYYBlEhtfNY8U5L8QPSBBQE03KkA8HtKQeLHexBEFTALkGJiglNJvGBQWZ5vlmQMWQ9FbgxoSGQXSkUXJNwRYH6zmdAQUxCREFI2bXoE2Df9UWvgK3mrl9wNADOSTiDhTD45JSEEzK5GGFECGRHTQFS6DFBC4eaJKDGCT8meIExAX8jPLb1j5bAGmL5J8GPCZ4Wbt6EmRZOoyamdmBXQ44Jkl1vXOb4Yr6gIpAGamJyi1Joi9I8HWM80hwJHuL2fHFjAVZsb5bszlOJ+ybcQZ7KFdXXD4o89yQCH0KmfQY+gtpZMmQotuowjY7d0cE++HX41edk+PvzBZN3WoN8sN2eAAAAAElFTkSuQmCC"></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">PEARSON SYSTEM WARNING, PLEASE READ.</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">Updated at 1:14 AM local time on Wednesday, June 1</div><h2 class="e2e-reset e2e-alert__text__subtitle">We have confirmed a technical issue that may be impacting your ability to purchase course access.</h2><p class="e2e-reset e2e-alert__text__text">Purchases with a credit card or Paypal are delayed at this time but processing. Registration with an access code is available. We are working to resolve this issue and we will update you when new information becomes available. Go to the <a href="https://status.pearson.com/" title="Pearson System Status" target="_blank" class="e2e-reset e2e-alert-link e2e-pss-link">Pearson System Status</a> site for the most up-to-date information about system issues.</p></div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div></div><div id="e2e-alert-page-2" class="e2e-reset e2e-alert__page"><div class="e2e-reset e2e-alert e2e-alert--info" id="COMM0001272"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img e2e-alert__icon__img--short" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAA3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8hQts9du9JpwNZ2xdmCy92P0OCb1eSo2ue04OrB5e7N6vHa7/Xm9fjz+vz////qYSeMAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAAFMSURBVHgBlZbdkoMgDEYRrSKfrD+rtOb9H3S3dchYG7E5N96cDEkYE8wHtnItXrSusuYCW3u84Wub0x0E3FlI0eCEppD80uMUX376N2S5Hf0aF9Tf+GGa4zwIEXI+P5H+WYOQVSn5IyU/wZUX/isfPnW3kdL/9IFm8y0EouAD2507we/oyYgDTj6AK5jBhIGPqCEwvQIeYH+d+TL8eQB17FPcGsUZyQED+/Sbyq5wXgPFodt8bkBlHCQ6Sjzm8elTSH1qIRHoQMRGa2R/pQN8heY7fwAHKH2YjJ++MUAIEPzQDdM0jR32mIwPCdPq/NY4lQ9nKpWPyliVD2uM1/iefyDRl+efVfiwuyGw0NLfL3y3HzNEQJ/3YfeD7E49lrzfvI3K/ip/+OJ9GPdxXXI+yvy4zy+h+tqv9StLvxT1a1e/2PVPB/3jRP38+QN1QV/Rh33Q7AAAAABJRU5ErkJggg=="></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">This is a system test.</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">Updated at 8:50 PM local time on Wednesday, June 15</div><h2 class="e2e-reset e2e-alert__text__subtitle">Pearson is testing a new alert system.</h2><p class="e2e-reset e2e-alert__text__text">This test will not impact your course.</p><div class="e2e-reset e2e-alert__expandable"><h2 class="e2e-reset e2e-alert__text__subtitle e2e-alert__expandable__title">Details:</h2><p class="e2e-reset e2e-alert__expandable__text">This is a <a href="https://status.pearson.com/#/home" target="_blank">test</a>.</p><div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--close active"><a href="javascript:void(0)" role="button" aria-label="Hide full details" title="Hide full details" class="e2e-reset e2e-alert-link">Hide full details</a></div><p></p></div><div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--open active"><a href="javascript:void(0)" role="button" aria-label="Show full details" title="Show full details" class="e2e-reset e2e-alert-link">Show full details</a></div></div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div></div><div id="e2e-alert-page-3" class="e2e-reset e2e-alert__page"><div class="e2e-reset e2e-alert e2e-alert--info" id="COMM0001251"><div class="e2e-reset e2e-alert__controls"><a href="javascript:void(0)" role="button" aria-label="Close" title="Close" class="e2e-reset e2e-alert-link e2e-alert__controls__close-link e2e-alert__link-circle">x</a><a href="javascript:void(0)" role="button" aria-label="View" title="View" class="e2e-reset e2e-alert-link e2e-alert__pagination__link--mobile">View</a></div><div class="e2e-reset e2e-alert__text"><div class="e2e-reset e2e-alert__icon"><img width="36" height="36" class="e2e-reset e2e-alert-img e2e-alert__icon__img e2e-alert__icon__img--short" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAA3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8g3q8hQts9du9JpwNZ2xdmCy92P0OCb1eSo2ue04OrB5e7N6vHa7/Xm9fjz+vz////qYSeMAAAAC3RSTlMAIEBQgI+fr7/f74xIP5cAAAFMSURBVHgBlZbdkoMgDEYRrSKfrD+rtOb9H3S3dchYG7E5N96cDEkYE8wHtnItXrSusuYCW3u84Wub0x0E3FlI0eCEppD80uMUX376N2S5Hf0aF9Tf+GGa4zwIEXI+P5H+WYOQVSn5IyU/wZUX/isfPnW3kdL/9IFm8y0EouAD2507we/oyYgDTj6AK5jBhIGPqCEwvQIeYH+d+TL8eQB17FPcGsUZyQED+/Sbyq5wXgPFodt8bkBlHCQ6Sjzm8elTSH1qIRHoQMRGa2R/pQN8heY7fwAHKH2YjJ++MUAIEPzQDdM0jR32mIwPCdPq/NY4lQ9nKpWPyliVD2uM1/iefyDRl+efVfiwuyGw0NLfL3y3HzNEQJ/3YfeD7E49lrzfvI3K/ip/+OJ9GPdxXXI+yvy4zy+h+tqv9StLvxT1a1e/2PVPB/3jRP38+QN1QV/Rh33Q7AAAAABJRU5ErkJggg=="></div><h1 class="e2e-reset e2e-alert-heading e2e-alert__text__title">PEARSON UPDATE, PLEASE READ</h1><div class="e2e-reset e2e-alert__main-content e2e-alert__mobile--view"><div class="e2e-reset e2e-alert__shift e2e-alert__mobile active"><div class="e2e-reset e2e-alert-timestamp">Updated at 12:02 AM local time on Wednesday, May 4</div><h2 class="e2e-reset e2e-alert__text__subtitle">Pearson has upgraded our systems to enhance sign-in security.</h2><p class="e2e-reset e2e-alert__text__text">If you have not done so recently, please <a href="https://support.pearson.com/getsupport/s/article/Deleting-Browser-Cached-Files-and-Cookies" target="_blank">clear your cache and cookies</a> to ensure you are leveraging the latest improvements and to remove any outdated information that may be saved in your browser.</p><div class="e2e-reset e2e-alert__expandable"><h2 class="e2e-reset e2e-alert__text__subtitle e2e-alert__expandable__title">Details:</h2><p class="e2e-reset e2e-alert__expandable__text">If you experience issues with signing in after clearing cache and cookies, please contact <a href="http://247pearsoned.custhelp.com/app/contact" target="_blank">Pearson Support.</a></p><div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--close active"><a href="javascript:void(0)" role="button" aria-label="Hide full details" title="Hide full details" class="e2e-reset e2e-alert-link">Hide full details</a></div><p></p></div><div class="e2e-reset e2e-alert__expandable__link e2e-alert__expandable__link--open active"><a href="javascript:void(0)" role="button" aria-label="Show full details" title="Show full details" class="e2e-reset e2e-alert-link">Show full details</a></div></div></div></div><div class="e2e-reset e2e-alert__support e2e-alert__mobile"><a class="e2e-reset e2e-alert-link e2e-alert__support__link e2e-pss-link" href="https://status.pearson.com/" role="button" aria-label="Pearson System Status" title="Pearson System Status" target="_blank"><img width="54" height="24" alt="" class="e2e-reset e2e-alert-img e2e-alert__support__link__img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAYCAYAAACx4w6bAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wYKEAYQmIoFDAAAA7BJREFUWMPNmFuIVWUUx39/z8kZh6Y0mRmLGmfCsqQIG+iiURhFTBJE2N0SH0KKqCDooSCrSYvACMEospculFEgBT3YBSwjlfIlmqIyj4VDdsGmcUbRmfn30Dqw2e19Zo7nHMcFG/ZlrfWt/1rrW2t9W9SRbM8GuoDLgF+AbZIO5PA2AQVJI7aXAiPAVknjnChku9v2Hbb7bN9n+zvb+23PmECu2fYy2yP+j3bbXlEPm6bVCVszsAS4COgEWoAfgI4KoHqB34FXghfgFGCf7RttzzwRgHUC84F7wtAZwBVAXwWZLqAVmBkOeT/ezwMuAQZrMahYhzQ8FfgGuCEAPRARaKtCzVFgDFgk6ceE7gIwLslTEbEicG54/XVgJbC4Sh2DwDtAj+2nbV9seyHwFnD+lERM0l+2DwLbgcKxqgEOxz5dBNwNfA+8Lan/uACz3SbpD9unAzcDQ8CGGkABvCZpM7DZdgfQCxwqZ5TtDkn7G1nWp9v+yHaT7Y22h2zvtX3Q/6dB288nZIu2F9ruieuZ4Ps69lLWep22L7VdsF1sJLCrw5i1UZJXBLiS7eEEqAHbLSnZN51NL02w5iO2p9meVW1uTwSmCMwGFgBXAavj03gUi3agHzCwHJgDHAEeBHZJ2hl6rgNuSqheEC1hK7Akr/LZbgZuBS4HtgDbgGFJwxWB2d5eoTS3Rp63AicFmHTa7JLUE0Z0AU8A5enhDUl35Rh8L/BimQ8YCDueklRK8S4GPgtbxsJxin2YReuKwNlV9JysvbAxUSFLth8F9gK3V5E5yxP3HwKlBKj5wAeJ1lSIflmeeDIDUgTWAyfnMLQBTcA5MRGMRuolaV6q/A8Aq22/CqzJaOZlA1ty1rwfeDfxvBSYBeyLKWVH3I8Ae3J07KimcJQH1jQdtX3lJOTXe3L0Xkpule1NyQpb1z4m6bDtnVEklNLxie3TJA2FMS3AhcCfknaX9yLwcULuTOC8jKW6E6DagXUxzbQ2+ojyVY6n5yZ4tmR5P108KkTtrOB5PJ5/tT2n0bPihpz37WHMLcA1Nfqvz/Za4LF4/lzSb42O2HTb/RlevjMmi1LefqkiYkk6ZLu74dO9pCNx7hpNfboNuACYW2dfPilpz3E5tkj6Ang49boXWBZTer1oE/DcVPzreMj22GRLd5Wp+HItg29NB01JLwDXxh+pJK2J0edY6ACwUtIqSaNT9mtA0qcx9lwf/a0Z+Bb4CTijgug/wM9xnvsSeBb4W9JgPbLpX5CPBeFEqbrhAAAAAElFTkSuQmCC"> <span class="e2e-reset e2e-alert__support__link__text">Pearson System Status</span></a></div></div></div></div>
    <form name="Form1" method="post" action="https://login.cert.pearsoncmg.com/sso/SSOServlet2?cmd=login&amp;siteid=6694&amp;encPassword=Y&amp;errurl=https%3a%2f%2fpegasus5.qa.pegasus.pearsoncmg.com%2fPegasus%2fSmsAuthenticationHandler.ashx%3fs%3d2" id="Form1">
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="ijyRwPvJQRytVEiJxKSA0APsS9vJ28byRk+rAItYebvF30sySWMo9mypUqzfY/BRNtDOnBwDIFuQCwUWExFKL4JIPXKw5L2xGFS+reiml5Cdt0llx2Ri/McU5J/n6zMgOoE+tIeXxBUsZDw6/6h443kMcYHP6ySFyOUMnJwJiy+/VAwcU/JtEXEPzIb5cCYITDYZw3u5R9sIgnSvv4EOC/dcD2qNxg/3hkoCkFMKgpXXsAYBtzOO3EfBKcZFOBB07UZlfRF4d4cx4e/TkWIGOBeaTGEf58dG+3ZOkVdMhOkP6+0XMACR5bokwJBE96rMaJO/0KsU/B5e3hSzy5MYukxYLmQ=">


<script src="./PegasusHED_files/pegasusintegration.cookie.js" type="text/javascript"></script><script type="text/javascript">$(document).ready(function () { var partnerType = '0';  PegasusIntegration.cookie('IntegrationPartnerType', partnerType);  $(window).focus(function () {  try {  PegasusIntegration.cookie('IntegrationPartnerType', partnerType); } catch(ex) {} }); });</script><script type="text/javascript"> 
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-30619747-1', 'auto', {'legacyCookieDomain': '.qa.pegasus.pearsoncmg.com'});
ga('set', 'dimension1', 'http://pegasus5.qa.pegasus.pearsoncmg.com/pegasus/frmlogin.aspx?s=3');
ga('set', 'dimension2', '5.16.51.1');
ga('set', 'dimension3', 'NA');
ga('set', 'dimension4', 'NA');
ga('set', 'dimension5', 'HED');
ga('set', 'dimension6', 'NA');
ga('set', 'dimension7', 'NA');
ga('set', 'dimension8', 'NA');
ga('set', 'dimension9', 'NA');
ga('send', 'pageview', '/NA/NA/Sign in page/Sign in page');
</script>
<script type="text/javascript">var SessionId='mtqclqa23lj1522p24u1icnn'; </script>
<script type="text/javascript">
<!--
$Pegasus.JSFW.DateUtil.UserDateFormat='mm/dd/yyyy';// -->
</script>

<script src="./PegasusHED_files/coursedeliverytype.js" type="text/javascript"></script>
<script src="./PegasusHED_files/pageviewmode.js" type="text/javascript"></script>
<script src="./PegasusHED_files/lmsintegrationpartner.js" type="text/javascript"></script>
<script type="text/javascript">
<!--
 var pageViewMode = new nsPVM.PageViewMode(1); var fwClientBrowser = new nsBrowser.BrowserVersion(51.0); var pageParent = new pageUI.Parent();// -->
</script>
<script type="text/javascript"> 
PegasusUXCloseImageBtnCss(); 
</script>
<script type="text/javascript">AppPath='/Pegasus';</script>
<script src="./PegasusHED_files/ScriptResource.axd" type="text/javascript"></script>
<script type="text/javascript">
<!--
var PageMethods = function() {
PageMethods.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
PageMethods.prototype = {
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return PageMethods._staticInstance.get_path();},
GetServiceURL:function(loginParams,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetServiceURL',false,{loginParams:loginParams},succeededCallback,failedCallback,userContext); }}
PageMethods.registerClass('PageMethods',Sys.Net.WebServiceProxy);
PageMethods._staticInstance = new PageMethods();
PageMethods.set_path = function(value) { PageMethods._staticInstance.set_path(value); }
PageMethods.get_path = function() { return PageMethods._staticInstance.get_path(); }
PageMethods.set_timeout = function(value) { PageMethods._staticInstance.set_timeout(value); }
PageMethods.get_timeout = function() { return PageMethods._staticInstance.get_timeout(); }
PageMethods.set_defaultUserContext = function(value) { PageMethods._staticInstance.set_defaultUserContext(value); }
PageMethods.get_defaultUserContext = function() { return PageMethods._staticInstance.get_defaultUserContext(); }
PageMethods.set_defaultSucceededCallback = function(value) { PageMethods._staticInstance.set_defaultSucceededCallback(value); }
PageMethods.get_defaultSucceededCallback = function() { return PageMethods._staticInstance.get_defaultSucceededCallback(); }
PageMethods.set_defaultFailedCallback = function(value) { PageMethods._staticInstance.set_defaultFailedCallback(value); }
PageMethods.get_defaultFailedCallback = function() { return PageMethods._staticInstance.get_defaultFailedCallback(); }
PageMethods.set_enableJsonp = function(value) { PageMethods._staticInstance.set_enableJsonp(value); }
PageMethods.get_enableJsonp = function() { return PageMethods._staticInstance.get_enableJsonp(); }
PageMethods.set_jsonpCallbackParameter = function(value) { PageMethods._staticInstance.set_jsonpCallbackParameter(value); }
PageMethods.get_jsonpCallbackParameter = function() { return PageMethods._staticInstance.get_jsonpCallbackParameter(); }
PageMethods.set_path("frmLogin.aspx");
PageMethods.GetServiceURL= function(loginParams,onSuccess,onFailed,userContext) {PageMethods._staticInstance.GetServiceURL(loginParams,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
Type.registerNamespace('Pegasus.DataTransferObjects.Login');
if (typeof(Pegasus.DataTransferObjects.Login.LoginParamDTO) === 'undefined') {
Pegasus.DataTransferObjects.Login.LoginParamDTO=gtc("Pegasus.DataTransferObjects.Login.LoginParamDTO");
Pegasus.DataTransferObjects.Login.LoginParamDTO.registerClass('Pegasus.DataTransferObjects.Login.LoginParamDTO');
}
// -->
</script>

<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="achRcwWDC/ggtiWe+NeehdNwS2DorsTa+jbESqiXCbACAxnw1wZOFkMHQJzQ7DMgDZ+dZqAUkZOMf1Zw5Upn5YnzOjf0Vxft2T1xLMzch7DXhk8/GUzGhlQ3uhbEZ8Yb6WvA0up6AHEV++l7W/qPlRCIUP8a9M11MuR9Q2a15tYbdvq1XgOLcXfJEiGcUe7rHn1GuVHCR0rGHlQBWdNkzE9dG+yVf9lOONa3XbSiifAwjDb0i0QIq/qUBn+Jp8WtFfhqJUmAiUDJ3SCcZ1YFVoGwwDZjAqCYtc288g=="><input name="_ctl5:hdnHeight" type="hidden" id="_ctl5_hdnHeight">
<div id="_ctl5_HeaderPanel" class="SetWidth" style="width: 100%;">
	
   
     
    <table cellspacing="0" role="presentation" id="HeaderMaintbl" cellpadding="0" style="height: 46px; width: 100%; border :0" visible="True" class="synapseLogo" bgcolor="#646464">
    <tbody><tr valign="top">
        <td class="LogoBGColor">
            <table id="SubHeaderMaintbl" border="0" width="100%" cellpadding="0" cellspacing="0" role="presentation">              
                  <tbody><tr id="_ctl5_firstTR">
		<td id="_ctl5_dynamicTD" class="bannerleft" valign="top" width="220">
                        
            <table cellspacing="0" role="presentation" cellpadding="0" border="0" style="table-layout:fixed; overflow:hidden; width:220px;">
	            <tbody><tr><td style="overflow:hidden;width:220"><div class="logoHt" role="banner"><img src="./PegasusHED_files/PublisherLogoServer.PCTP" alt="Pearson" border="0" class="logoImage" style="height: 46px;"></div></td></tr>	            
	            
	            <tr>
	                <td id="tdBuildNumber" class="topmenuSelected" style="display:none;"><span>&nbsp;&nbsp;Build number: 5.16.51.1</span></td>
	            </tr>          
	            
	            
        
            </tbody></table>
                    </td>
		<td>
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation">
                            <tbody><tr>
                                <td>
                                    
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    
                                    &nbsp;
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
		<td valign="top">
                        
                    </td>
	</tr>
	
                     
                 
                
            </tbody></table>
        </td>
    </tr>
    
</tbody></table>

</div>

<script type="text/javascript" language="javascript">
    var k5display = 'False';
    var IsCurrentPageinActivity = false;
    IsCurrentPageinActivity = 'False';

    //    $(document).ready(function () {
    // Below commented lines for in MAC global home page is getting distrurb
    //        if ($.browser.safari) {
    //            $(".SetWidth").css("width", "1200px");
    //        }
    //        else {
    $(".SetWidth").css("width", "100%");
    //        }
    if (k5display == "True") {
        $("#HeaderPanel").css("height", "60")
    }
    else {
        $("#HeaderPanel").css("height", "100px")
    }
    //    });
    if (IsCurrentPageinActivity == 'True') {
        $(".bannerleft").removeAttr("width");
        $(".bannerleft").css("width", "auto");
        $(".bannerleft").css("height", "auto");
        $(".bannerleft").attr("colSpan", "2");
        $(".bannerleft table td:first").css("width", "auto");
        $(".bannerleft table td image:first").css("width", "auto");
        if ($.browser.safari || $.browser.mozilla) {
            $("[id*='firstTR'] td:first").css("display", "none");
            $(".bannerleft table:first").css("width", "100%");
            $(".bannerleft .logoImage").css("width", "auto");
            $(".bannerleft").css("width", "100%");
            $("[id*='dynamicTD']").css("display", "inline");
            $("[id*='dynamicTD']").removeClass("bannerleft");
            $(".bannerleft table td:first").removeClass("logoHt");
        }
        else {
            $(".bannerleft table:first").css("width", "auto");
            $(".logoHt").css("height", "auto");
        }
        //Modified check of IE browser version
        if (($.browser.msie) && (fwClientBrowser.version == 7)) {
            $(".bannerleft .logoImage").css("width", "100%");
        }
        //To adjust behaviour of logo object in case of edit activity,currently everything is placed in 1 tr which doesnt shows full picture
    }
    else {
        $(".bannerleft .logoImage").css("height", "46px");
    }
</script><div id="_ctl6_PlaceHolderBreadCrumbs">
<table id="_ctl6__ctl0_TableJournyPath" role="presentation" cellpadding="0" cellspacing="0" border="0">
	<tbody><tr valign="middle">
		<td width="0" height="0"><input type="hidden" id="PegasusBreadCrumb" name="PegasusBreadCrumb"></td>
	</tr>
</tbody></table>

</div>  
<span id="_ctl6_PlaceHolderMessageBoard">

<script language="javascript" type="text/javascript">
    var placeHolderMessageBoardClientID = "_ctl6__ctl1_placeHolderMessageBoard";
</script>
<table id="_ctl6__ctl1_placeHolderMessageBoard" cellspacing="0" cellpadding="0" align="center" border="0" width="95%" role="presentation">
	<tbody><tr>
		<td id="_ctl6__ctl1_placeHolderImageIcon" valign="middle"><div id="PegasusMessageBoard" class="message"></div></td>
	</tr>
</tbody></table>

</span>

        <div id="PnlLogin" role="main">
	
            <center>
                <div style="height: 5px;" id="divSpacer">
                </div>
                <div class="message" id="divMsg" style="width: 95%; background-color: #FFFFCB; padding: 4px;
                    visibility: hidden">
                    <table border="0" width="100%" role="presentation">
                        <tbody><tr>
                            <td width="1" valign="top">
                                <img src="./PegasusHED_files/icn_errors.gif" alt="" id="errorImg"></td>
                            <td>
                                <span id="txtMsg" class="messageBoardText" style="color: Red;"></span>
                            </td>
                        </tr>
                    </tbody></table>
                </div>
            </center>
            <table class="content" cellspacing="6" width="84%" align="center" border="0" id="idLogin" role="presentation">
                <tbody><tr>
                    <td valign="top" width="60%">
                        <br>
                        <div id="DivWelcome" class="dvStyle">
                            <div style="margin-top:1em; font-weight:normal;">
  <p><img src="./PegasusHED_files/signin_study_partners.PNG" alt="Study Partners" ;="" align="left"> Welcome to Pearson Education's assessment management and learning platform.</p>
  <p>If you have already registered, enter your Login Name and Password in the box on the right, and then click Login.</p>
  <p>If you have not registered before, click the link below to verify your computer meets the system and browser requirements:</p>
  <p><img src="./PegasusHED_files/signin_computer.PNG" alt="Requirements" style="vertical-align:middle; margin-right:.5em;"> <a href="http://www.pearsonmylabandmastering.com/northamerica/system-requirements/">System and Browser Requirements</a></p>
<p>To register for the first time, click on the <em>Click here to register</em> link, below the login box on the right, and follow the provided instructions.</p>
  <p>For product support, contact Technical Support at: <img src="./PegasusHED_files/signin_questionmark.PNG" alt="Technical Support" style="vertical-align:middle; margin:0 .5em;"> <a href="https://support.pearson.com/" target="_blank">https://support.pearson.com</a></p>
</div>
                        </div>
                    </td>
                    <td></td><td></td>
                    <td valign="top" width="40%">
                        <br>
                        

<script language="javascript" src="./PegasusHED_files/jquery.mhsh.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript">
    $(document).ready(function () {
        if (document.getElementById("URL") != null) {
            document.getElementById("Form1").action = document.getElementById("URL").value;
        }
        $('#Form1').submit(function () {
            return getServiceURLandSubmit();
        });
    });             
</script>

<div id="dvtop" style="width: 100%">
    
            <table cellpadding="0" cellspacing="0" bgcolor="#223176" style="width: 100%" role="presentation">
                
                <tbody><tr>
                    <td align="left" valign="top" width="3%">
                        <img src="./PegasusHED_files/blue_curve_l.gif" id="img1">
                    </td>
                    <td>
                        <img src="./PegasusHED_files/icn_user_login.gif" id="imglogintop">
                    </td>
                    <td class="whiteboldGB">
                        
                        <h2><span id="lblLoginNamePwd" style="font-weight:normal; color:#fff">Enter Your Username and Password</span></h2>
                    </td>
                    <td align="right">
                        <img src="./PegasusHED_files/blue_curve_r.gif" id="img2">
                    </td>
                </tr>
            </tbody></table>
</div>


<div id="dvLogintop" class="backgroundLogin"> 
    <table class="tblloginmain" id="tbllogin" cellspacing="0" cellpadding="0" border="0" role="presentation" style="width: 64%;">
          <thead>
            <tr>
                <td colspan="3">
                    <div id="_ctl4_dvSignIn">
                        <table cellpadding="0" cellspacing="0" border="0" style="padding-top: 10px;" role="presentation">
                                 <tbody><tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <table role="presentation">
                                            <tbody><tr>
                                                <td class="dvErrormsg">
                                                    <div id="_ctl4_dvMessageError" class="dvErrormsgunamepwd">
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody></table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <div id="_ctl4_divPwdHint">
                                            <table cellpadding="0" cellspacing="0" border="0" role="presentation">
                                                <tbody><tr>
                                                    <td style="padding-top: 10px">
                                                        <span id="_ctl4_lblPwdHintMsg" class="lblPwdHint"></span></td>
                                                </tr>
                                                <tr>
                                                    <td style="padding-top: 10px">
                                                        <span id="_ctl4_lblPwdHint" class="lblPwdHintMsg"></span></td>
                                                </tr>
                                            </tbody></table>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td>
                                        <span id="loginCompositeControl"><table cellpadding="0" cellspacing="0">
		<tbody><tr>
			<td></td><td></td><td class="lname"></td><td></td>
		</tr><tr>
			<td class="tblLogin"><label for="loginname">Username</label></td><td></td><td nowrap="nowrap"><input type="Text" class="lgnTextBox" maxlength="120" id="loginname" name="loginname" value=""></td><td><span class="imagemandatory">*</span></td>
		</tr><tr>
			<td></td><td></td><td class="lrpawdl"></td><td></td>
		</tr><tr>
			<td></td><td></td><td class="lname"><label for="password" style="visibility:hidden;">Password</label></td><td></td>
		</tr><tr>
			<td class="tblLogin"><label for="password">Password</label></td><td style="vertical-align:top;"></td><td><input type="password" class="lgnTextBox" maxlength="64" id="password" name="password" autocomplete="off" value=""></td><td style="vertical-align:top;"><span class="imagemandatory">*</span></td>
		</tr><tr>
			<td></td><td></td><td class="lnameRememberuname"><div>
				<input id="ChkRemember" type="checkbox" onclick="setChkSavePwd();"><label for="ChkRemember">Remember me on this computer.</label>
			</div></td><td></td>
		</tr><tr>
			<td></td><td></td><td>&nbsp;<input type="hidden" id="URL" name="URL" value="https://login.cert.pearsoncmg.com/sso/SSOServlet2?cmd=login&amp;siteid=6694&amp;encPassword=Y&amp;errurl=https%3a%2f%2fpegasus5.qa.pegasus.pearsoncmg.com%2fPegasus%2fSmsAuthenticationHandler.ashx%3fs%3d2"></td><td></td>
		</tr><tr>
			<td></td><td></td><td><button id="PegasusHedSignInBtn" type="submit" class="lgn_btn">Sign In</button></td><td></td>
		</tr>
	</tbody></table></span>
                                    </td>  
                                    <td>
                                        <input type="hidden" id="okurl" name="okurl">                                       
                                    </td>                                                                                                        
                                </tr>
                                <tr>
                                    <td>
                                    </td>
                                    <td>
                                    </td>
                                    <td colspan="3">
                                        &nbsp;</td>
                                    <td>
                                    </td>
                                </tr>
                                <tr>
                                        <td width="100%" colspan="3">
                                           <span id="_ctl4_lblForgotPasswordHED" class="blue3" onclick="javascript:OpenForgotPassword(&#39;http://register.cert.pearsoncmg.com/forgotlogin/forgotLogin.fl&#39;);" style="font-weight:normal">Forgot Your Username or Password?</span>
                                        </td>
                                        <td>
                                        </td>
                                        <td align="left" colspan="3">
                                            <span id="_ctl4_lblForgotPassword" class="blue3"></span>
                                        </td>
                                        <td>
                                        </td>
                                </tr>
                            </tbody></table>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                </td>
                <td colspan="3">
                    &nbsp;</td>
            </tr>
         </thead>    
    </table>
</div>

            <!--Property to store the login mode of the user. -->
            <input name="_ctl4:hdnLoginMode" type="hidden" id="_ctl4_hdnLoginMode">


<table id="Table1" cellspacing="0" cellpadding="0" width="100%" border="0" role="presentation">
    <tbody><tr>
        <td height="35">
            <img src="./PegasusHED_files/icn_user_new.gif" id="imgLink" height="16" hspace="4" width="15" align="middle">
                <b><a id="aRegistrationLink" class="red3" href="https://register.pearsoncmg.com/reg/register/reg1.jsp">Click here to register</a></b>
         </td>
    </tr>
</tbody></table>
                    </td>
                </tr>
            </tbody></table>
            <table cellspacing="0" cellpadding="0" width="96%" align="center" border="0" role="presentation">
                <tbody><tr>
                    <td class="line4" valign="bottom" align="right" width="50%" height="45">
                        <span id="lblPoweredBy" class="blue2">Powered by</span>
                    </td>
                    <td class="line4" valign="bottom" align="left" width="50%" height="45">
                        <img src="./PegasusHED_files/pegasus_logo_small.gif" id="ImgPoweredBy" height="33" alt="Pegasus" width="66"></td>
                </tr>
                <tr>
                    <td valign="bottom" align="center" colspan="2" height="20" rowspan="1">
                        <a id="hypPrivacyPolicy" class="blue1" href="https://register.pearsoncmg.com/w3c/privacy.htm" target="_blank">Privacy Policy</a>
                        &nbsp;<font face="verdana" size="1">|</font>
                        <a id="hypLicenseAgreement" class="blue1" href="http://register.cert.pearsoncmg.com/reg/include/license.jsp" target="_blank">License Agreement</a>
                    </td>
                </tr>
                <tr>
                    <td class="contentblue" valign="top" align="center" colspan="2">
                        <span id="lblPearsonEducation">© 2011 Pearson Education, Inc.</span>
                    </td>
                </tr>
            </tbody></table>
            
            <input name="hdnShowMsgLogin" type="hidden" id="hdnShowMsgLogin">
            <input name="hdnAllowToLogin" type="hidden" id="hdnAllowToLogin">
            <input name="hdnKey" type="hidden" id="hdnKey">
            <input name="hdnMessageOn" type="hidden" id="hdnMessageOn" value="0">
            <input name="hdnUserName" type="hidden" id="hdnUserName">
            <input name="hdnPubID" type="hidden" id="hdnPubID">
            <input name="hdnRumbaUserID" type="hidden" id="hdnRumbaUserID">                      
            
        
</div>
    <script>SubnavigationBar=new classSubnavigationBar();</script></form>
    <script language="javascript" type="text/javascript">
        // Set CIC e2e configuration settings here (Customer incident communication end 2 end)
        var IS_CIC_E2E_ENABLED = '1';
        var CIC_E2E_DOMAIN_PATH = '//e2e-comms-stg.pearson.com/e2ecomms';
        var CIC_E2E_JS_PATH = '/js-e2e/js-e2e.js';
        var BusinessProducts = 'myitalianlab,myspanishlab,myfrenchlab';
        // Call In App Comms - In App alert direct to students / instructors when things are go wrong.
        var _e2e_comms = _e2e_comms || {};
        if (IS_CIC_E2E_ENABLED == "1") {
        	CICe2eComms();
        }

        $(document).ready(function () {
            // Preloading ThinkingIndicator image for Firefox or Chrome. 
            // In case of FF or Chrome, the image is seeked in cache, and if it is not preloaded it gives broken image.
            if (($.browser.mozilla) || (!!window.chrome))
                setTimeout(function () { Pegasus.ThinkingIndicator.PreloadProcessImage('/Pegasus') }, 500);
        });
        
        IDS_INVALID_USERNAME_PASSWORD = 'Username and/or password are incorrect.'; //23-1-09 | Dharmendra | For Internationalization
        var msgForFirefox = '0';
        document.cookie = "mysheet=;expires=;path=/;";
        FFMSG = 'This product does not support the web browser you are using. To sign in you must use one of the supported browsers. For a list of supported browsers, click the system and browser requirements link below.'; //23-1-09 | Dharmendra | For Internationalization
        fso = '';
        var logincount = '';
        var isSynapse = '0';
        var isAdmin = '0';
        var ErrorSubmission = 'Click the check boxes to confirm you have read and agree with both items.';

        function ToRedirectRegisterPage(obj) {
            window.location.href = obj;
        }

    </script>


<script src="chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js"></script></body><span class="gr__tooltip"><span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i><span class="gr__triangle"></span></span></html>