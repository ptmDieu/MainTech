$(document).ready(function () {
    $('#mySignup').click(function () {
        $('#myModalDK').modal();
    });

    function kiemTraHoTen() {
        var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        if ($("#txtHT").val() == "") {
            $("#tbTen").html("*Please complete information!");
            $("#tbTen").addClass("mauDo");
            return false;
        }
        if (kt.test($("#txtHT").val()) == false) {
            $("#tbTen").html("*To capitalize the first letter of all words in a string!");
            $("#tbTen").addClass("mauDo");
            return false;
        }
        $("#tbTen").html("*");
        return true;
    };
    $("#txtHT").blur(kiemTraHoTen);

    function kiemTraDC() {
        var ktDC = /^([A-Za-z0-9]{2,})$/;
        if ($("#txtDC").val() == "") {
            $("#tbDC").html("*Please complete information!");
            $("#tbDC").addClass("mauDo");
            return false;
        }
        if (ktDC.test($("#txtDC").val()) == false) {
            $("#tbDC").html("*Syntax error");
            $("#tbDC").addClass("mauDo");
            return false;
        }
        $("#tbDC").html("*");
        return true;
    };
    $("#txtDC").blur(kiemTraDC);

    function kiemTraMail() {
        var ktmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        if ($("#txtEmail").val() == "") {
            $("#tbEmail").html("*Please complete information!");
            $("#tbEmail").addClass("mauDo");
            return false;
        }
        if (ktmail.test($("#txtEmail").val()) == false) {
            $("#tbEmail").html("*Syntax error!");
            $("#tbEmail").addClass("mauDo");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    };
    $("#txtEmail").blur(kiemTraMail);

    function kiemSDT() {
        var sdt = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;;
        if ($("#txtSDT").val() == "") {
            $("#tbSDT").html("*Please complete information!");
            $("#tbSDT").addClass("mauDo");
            return false;
        }
        if (sdt.test($("#txtSDT").val()) == false) {
            $("#tbSDT").html("*Syntax error!");
            $("#tbSDT").addClass("mauDo");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(kiemSDT);

    function kiemtrapw() {
        var createpassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/;
        if ($("#txtPw").val() == "") {
            $("#tbPw").html("*Please complete information!");
            $("#tbPw").addClass("mauDo");
            return false;
        }
        if (createpassword.test($("#txtPw").val()) == false) {
            $("#tbPw").html("Must have enough 8 characters, specail characters, uppercase and lowercase! ");
            $("#tbPw").addClass("mauDo");
            return false;
        }
        $("#tbPw").html("*");
        return true;
    }
    $("#txtPw").blur(kiemtrapw);

    function confirmpw() {
        var passwordC=$('#txtPwC').val();
        var pw = $('#txtPw').val();
        if ($("#txtPwC").val() == "") {
            $("#tbPwC").html("*Please complete information!");
            $("#tbPwC").addClass("mauDo");
            return false;
        }
        if (pw != passwordC) {
            $("#tbPwC").html("*You did not enter the same new password twice. Please re-enter your password ");
            $("#tbPwC").addClass("mauDo");
            return false;
        }
        $("#tbPwC").html("*");
        return true;
    }
    $("#txtPwC").blur(confirmpw);

    $("#btnSaveDK").click(function () {
        var hoten = $("#txtHT").val();
        var dc = $("#txtDC").val();
        var email = $("#txtEmail").val();
        var dt = $("#txtSDT").val();
        var pw = $('#txtPw').val();
        var pwc = $('#txtPwC').val();
        // var them = "<tr><td>" + (i++) + "</td><td>" + $("#txtHT").val() + "</td><td>" + $("#txtDC").val() + "</td><td>" + $("#txtEmail").val() + "</td><td>" + $("#txtSDT").val() + "</td><td>"+ $('#txtPw').val() + "</td><td>" + $('#txtPwC').val() + "</td></tr>";
        // var them = "<tr><td>" + (i++) + "</td><td>" + hoten + "</td><td>" + dc + "</td><td>" + email + "</td><td>" + dt + "</td><td>"+ pw + "</td><td>" + pwc + "</td></tr>";
    
        // if ($("#txtHT").val() && $("#txtDC").val() && $("#txtEmail").val() && $("#txtSDT").val() && $('#txtPw').val() && $('#txtPwC').val()) {
        if(hoten && dc && email && dt && pw && pwc){
            $("#myModalDK").modal("hide");
            // $("table tbody").append(them);
            return true;
        }
        else {
            alert("Please complete sign up form");
            return false;
        }
    });

});

