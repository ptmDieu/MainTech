$(document).ready(function () {
    $("#myLogin").click(function () {
        $("#myModalDN").modal();
    });
    function kiemTraMail() {
        var ktmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if ($("#txtEmailDN").val() == "") {
            $("#tbEmailDN").html("* Please complete information!");
            $("#tbEmailDN").addClass("mauDo");
            return false;
        }
        if (ktmail.test($("#txtEmailDN").val()) == false) {
            $("#tbEmailDN").html("*Syntax error!");
            $("#tbEmailDN").addClass("mauDo");
            return false;
        }
        $("#tbEmailDN").html("*");
        return true;
    };
    $("#txtEmailDN").blur(kiemTraMail);

    function kiemTraMatKhau() {
        var ktmatkhau = /^([a-zA-Z0-9@!#$%&*]{8,24})$/;
        if ($("#txtMK").val() == "") {
            $("#tbMK").html("Please complete your password!");
            $("#tbMK").addClass("mauDo");
            return false;
        }
        if (ktmatkhau.test($("#txtMK").val())==false) {
            $("#tbMK").html("*Syntax error!");
            $("#tbMK").addClass("mauDo");
            return false;
        }
        $("#tbMK").html("*");
        return true;
    }
    $("#txtMK").blur(kiemTraMatKhau);

    $("#btnSaveDN").click(function () {
        var email = $("#txtEmail").val();
        var mk = $("#txtMK").val();
        if(email && mk){
            // $("table tbody").append(them);
            $("#myModalDN").modal("hide");
            return true;
        }
        else{
            alert("Please complete log in form");
        }
    });

});


