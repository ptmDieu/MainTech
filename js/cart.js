// nhận biến từ button
const cart = document.querySelectorAll(".item-lap button")
// console.log(cart)
cart.forEach(function (button, index) {
    button.addEventListener("click",function(event) {
        var cartbtn=event.target
        var productcart=cartbtn.parentElement
        var productName=productcart.querySelector("h3").innerText
        var productPrice=productcart.querySelector("span").innerText
        // console.log(productName,productPrice)
        addcart(productName,productPrice)
        deleteCart()
    })
})

// thêm biến vào bảng
function addcart(productName,productPrice){
    var addtr=document.createElement("tr")
    var trcontent='<tr><td><p>'+productName+'</p></td><td><p style="text-align:center;"><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input type="number" min="0" value="1" style="width: 50px;outline: none;"> </td></tr>'
    addtr.innerHTML=trcontent
    var carttable=document.querySelector("tbody")
    // console.log(carttable)
    carttable.append(addtr)
}

//tính tổng tiền
function carttotal(){
    var cartitem=document.querySelectorAll("tbody tr")
    var price_total=0
    // console.log(cartitem.length)
    for (var i=0;i<cartitem.length;i++){
        // console.log(i)
        var inputvalue=cartitem[i].querySelector("input").value
        var price=cartitem[i].querySelector("span").innerHTML
        firsttotal=inputvalue*price
        price_total=price_total+firsttotal 
        // console.log(price_total) 
    }
    // var carttotalall=document.querySelector(".price_total span").innerHTML
    // carttotalall.innerHTML= price_total
}

//xoá giỏ hàng
function deleteCart(){
        var prDl=document.querySelectorAll(".deletecart")
        prDl[i].addEventListener("click", function(event){
            var deleteC = event.target
            var removeC = deleteC.parentElement.parentElement
            removeC.remove()
        })
}
// var productrmv=document.querySelector(".deletecart")
// console.log(productrmv)
// productrmv.addEventListener("click", function(event){
//     var deleteC = event.target
//     var removeC = deleteC.parentElement.parentElement
//     removeC.remove()
// })
