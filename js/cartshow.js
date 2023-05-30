
const cartclose=document.querySelector(".ti-close")
const cartshow=document.querySelector(".ti-shopping-cart")

cartshow.addEventListener("click", function(){
    // console.log(cartshow)
    document.querySelector(".cart").style.right="0"
})
cartclose.addEventListener("click", function(){
    // console.log(cartshow)
    document.querySelector(".cart").style.right="-100%"
})