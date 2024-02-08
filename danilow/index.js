let bar=document.querySelector(".fa-bars")
let nav= document.querySelector(".nav") 
let newOb = document.createElement("div");
document.querySelector(".container").append(newOb)
bar.onclick=function(){
//    nav.style.cssText=`display:flex;`
   nav.classList.toggle("active")
}
let button=document.querySelector(".accept").onclick=function(){
    location.href="https://wa.me/qr/CLQPR4DUZNG3G1"
}