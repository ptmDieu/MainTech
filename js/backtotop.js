window.onscroll = function () { scrollFunction()};
function scrollFunction() {

    if (document.body.scrollTop >50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtnbtt").style.display = "block";
    } else {
        document.getElementById("myBtnbtt").style.display = "none";
    }

}

document.getElementById('myBtnbtt').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
