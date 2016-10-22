<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PegasusK12.aspx.cs" Inherits="PhisingDemo.Phisisng_Example.PegasusK12" %>

<!DOCTYPE html>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!-- saved from url=(0176)https://sso.rumba.int.pearsoncmg.com/sso/login?profile=snp&k12int=true&service=https%3a%2f%2fpegasus1.qa.pegasus.pearsoncmg.com%2fPegasus%2fRumbaSsoHandler.ashx%3fprofile%3dsnp -->
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" class="gr__sso_rumba_int_pearsoncmg_com"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  
  
    <title>10:27:40AM TUE JUN 21</title>
  


<link rel="stylesheet" href="./PegasusK12_files/style.css">
<link rel="stylesheet" type="text/css" href="./PegasusK12_files/jquery-ui-1.8.16.custom.css">
<link rel="stylesheet" href="./PegasusK12_files/errors.css">

 
      
      
      
	  	
      
      
      
    

<!--  DEFAULT PEARSON BRANDING-->

<link href="./PegasusK12_files/bubbles.css" rel="stylesheet" type="text/css">
<script type="text/javascript" async="" src="./PegasusK12_files/ga.js"></script><script src="./PegasusK12_files/jquery-1.8.0.min.js" type="text/javascript"></script><style type="text/css"></style>
<script src="./PegasusK12_files/google-analytics.js" type="text/javascript"></script>
<script src="./PegasusK12_files/modify-logout-url.js" type="text/javascript"></script>
<script src="./PegasusK12_files/events.js" type="text/javascript"></script>
<script src="./PegasusK12_files/modals.js" type="text/javascript"></script>
<script type="text/javascript" src="./PegasusK12_files/modals_extensions_next.js"></script>
<script src="./PegasusK12_files/modals(1).js" type="text/javascript"></script>
<script src="./PegasusK12_files/errors.js" type="text/javascript"></script>
<script src="./PegasusK12_files/PegasusK12.js" type="text/javascript"></script>

<!--[if IE 7]>
<link href="media/css/ie7.css" rel="stylesheet" type="text/css" />
<![endif]-->
<!--[if gte IE 6]><style type="text/css" media="screen">@import 'css/ie_cas.css';</style><![endif]-->

<script type="text/javascript">
function init() {
    var firstForm = document.forms[0];
    
    if (firstForm) {
        var formElements = firstForm.getElementsByTagName("input");
        
        for (var i = 0; i < formElements.length; i++) {
            var e = formElements[i];
            
            if (
                (! e.disabled) &&
                (e.type.toLowerCase() != 'hidden')
            ) {
                e.focus();
                e.select();
                
                break;
            }
        }
    }
}
</script>


<script type="text/javascript">
var query_string = "profile\x3Dsnp\x26k12int\x3Dtrue\x26service\x3Dhttps\x253a\x252f\x252fpegasus1.qa.pegasus.pearsoncmg.com\x252fPegasus\x252fRumbaSsoHandler.ashx\x253fprofile\x253dsnp";
 function appendScriptTag(filename) {
	 var element = document.createElement("script");
	 element.setAttribute("type","text/javascript")
	 element.src = filename;
	 document.getElementsByTagName("head")[0].appendChild(element);
 }

 function downloadJSAtOnload(filename) {
	appendScriptTag("media/js/events.js");
 }

 // Check for browser support of event handling capability
 if (window.addEventListener)
 window.addEventListener("load", downloadJSAtOnload, false);
 else if (window.attachEvent)
 window.attachEvent("onload", downloadJSAtOnload);
 else window.onload = downloadJSAtOnload;

</script>
<link rel="shortcut icon" href="https://sso.rumba.int.pearsoncmg.com/sso/favicon.ico" type="image/x-icon">
<script type="text/javascript" src="./PegasusK12_files/events.js"></script></head>
<body id="cas" class="spectrumBlue" onload="init()" data-gr-c-s-loaded="true" cz-shortcut-listen="true">
 
<!-- Pearson lockup bar -->
<div id="webkitContainer"><!-- Fixes FireFox Horizontal Scrolling -->
	<div id="pearsonLockupBar">
		<img id="logo" src="./PegasusK12_files/pearson_logo.png" alt="Pearson">
    	<img id="tagline" src="./PegasusK12_files/pearson_tagline.png" alt="ALWAYS LEARNING">
    </div>
</div>
<div id="content">



<link rel="stylesheet" href="./PegasusK12_files/reveal.css">
<script src="./PegasusK12_files/jquery-1.4.4.min.js" type="text/javascript"></script>
<script src="./PegasusK12_files/jquery.reveal.js" type="text/javascript"></script>

<script type="text/javascript">
    String.prototype.trim = function() {
        var retVal = this;
        while(retVal.substr(0,1)==" ")
            retVal = retVal.substring(1,retVal.length) ;
            
        while(retVal.substr(retVal.length-1,1)==" ")
            retVal = retVal.substring(0,retVal.length-1) ;
    
        return retVal;
    };
    
    $(document).ready(function() {
        errors.signin.onLoad();
    });

    function forwardToWAYF(wayfURL)
    {
      var serviceURL = document.getElementById("serviceURL").value;
      wayfURL = wayfURL + "?service=" + serviceURL;
      window.location = wayfURL;
    }
	
	function validateSubmit()
    {
	  // prevent duplicate form submission
	  this.fm1.submit1.disabled=true;
	  return true;
    }

</script>
<form id="fm1" action="https://sso.rumba.int.pearsoncmg.com/sso/login?execution=e1s1&amp;profile=snp&amp;k12int=true&amp;service=https%3a%2f%2fpegasus1.qa.pegasus.pearsoncmg.com%2fPegasus%2fRumbaSsoHandler.ashx%3fprofile%3dsnp" method="POST" onsubmit="validateSubmit()">

        
            <div id="containerLogin" class="custom">
        
        
  
  
        
            <h1>Pearson Sign In</h1>
        
        
    
    
    
        
        
      
      
    
    
    
    <a href="http://helpdev.pearsoncmg.com/rumba/universal_signin/en/index_CSH.htm#us_sign_in|csh" class="button secondary help pophelp">
    Help</a>
    
    
        
        


        
        <fieldset>
            
          <label for="username">
          Username
          </label>
          
          
            
            <input id="username" name="username" class="required" onchange="this.value = this.value.trim()" type="text" value="" size="25" autocomplete="false">
          
        </fieldset>
        <fieldset>
              
          <label for="password">
          Password
          </label>
          
          
          <input id="password" name="password" class="required" onchange="this.value = this.value.trim()" type="password" value="" size="25" autocomplete="off">
         <input type="hidden" name="_eventId" value="submit">
        
          <button id="Pegasusk12SignInBtn" class="btn-submit" name="submit1" type="submit">Sign In</button>
          
          	<p class="forgot"><a href="https://sso.rumba.int.pearsoncmg.com/sso/login?execution=e1s1&amp;_eventId=forgot&amp;service=https://pegasus1.qa.pegasus.pearsoncmg.com/Pegasus/RumbaSsoHandler.ashx?profile=snp">Forgot your username or password?</a></p>
          <div class="clear">
      			<!-- -->
    	  </div>
			<div style="height: 50px;">
			       
			           <hr>
			           <p style="float: left; vertical-align: middle">
			           <a href="javascript:forwardToWAYF(&#39;http://wayf.rumba.int.pearsoncmg.com/wayf&#39;);">
			           <img id="k12int" src="./PegasusK12_files/eb_logo_white.png" alt="Login through my SIS" class="logoBorder"></a></p>
			           <p style="float: left; width:20px;"></p>
			           <p style="float: left; vertical-align: middle"><a href="https://sso.rumba.int.pearsoncmg.com/sso/login?profile=snp&amp;k12int=true&amp;service=https%3a%2f%2fpegasus1.qa.pegasus.pearsoncmg.com%2fPegasus%2fRumbaSsoHandler.ashx%3fprofile%3dsnp#" data-reveal-id="myModal" data-animation="fade"><span class="questionMark"></span></a></p>
			       
			</div>
			<div id="myModal" class="reveal-modal">
			   	 <p>Select this option only if your district is using Pearson EasyBridge Plus or EasyBridge Auto. If your district is not an EasyBridge Plus or EasyBridge Auto customer, enter your username and password to sign in.</p>
			        <a class="close-reveal-modal">×</a>
			</div>
       
      </fieldset>

    <div class="clear">
      <!-- -->
    </div>

  
  <input type="hidden" id="serviceURL" value="https://pegasus1.qa.pegasus.pearsoncmg.com/Pegasus/RumbaSsoHandler.ashx?profile=snp">
  
</div>
</form>



		</div><!-- End #content -->
     
      
      		    
		      
		        <div id="footer" class="marketingFooter">
		       
      
      
    
  <p>  Copyright © 2005–2016. All rights reserved.   
  
  
  			<a href="https://sso.rumba.int.pearsoncmg.com/sso/license/LicenseAgreement.html" class="pop">
   License Agreement </a> |
   
  
  
  			<a href="https://sso.rumba.int.pearsoncmg.com/sso/privacy/PrivacyStatement.html" class="pop"> 
   Privacy Statement </a> |
  
   
  
  <a href="http://helpdev.pearsoncmg.com/rumba/universal_signin/en/index_CSH.htm#us_support|csh" class="pop">
   Support </a> | 
  			<a href="http://helpdev.pearsoncmg.com/rumba/universal_signin/en/index_CSH.htm#global|csh" class="pophelp"> Help </a>

</p>
</div>


<!-- Marketing Image -->
<div id="marketingImage">
        <img src="./PegasusK12_files/snp_backgroundfinal.png" alt="">
</div>


<div id="modalContainer" style="display:none;" role="alertdialog" aria-labelledby="dialogTitle" aria-describedby="dialogDescription">
     <div id="modal">
     	<span class="close">
			<a href="https://sso.rumba.int.pearsoncmg.com/sso/login?profile=snp&amp;k12int=true&amp;service=https%3a%2f%2fpegasus1.qa.pegasus.pearsoncmg.com%2fPegasus%2fRumbaSsoHandler.ashx%3fprofile%3dsnp#" id="closeModalX" class="closeModal"><img src="./PegasusK12_files/close-modal.png" alt="Back" title="Back"> </a>
		</span>
        <div id="modalContent" class="preload">
            <p class="loading">
                
            </p>
        </div>
	</div>
	<div id="modalOverlay">
	</div>
</div>

	


<script src="chrome-extension://hhojmcideegachlhfgfdhailpfhgknjm/web_accessible_resources/index.js"></script></body><span class="gr__tooltip"><span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i><span class="gr__triangle"></span></span></html>
