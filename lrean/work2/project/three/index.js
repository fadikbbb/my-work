let list = document.querySelector("ul");
let icon = document.querySelector("i");
list.style.display = "none";
var x = window.matchMedia("(max-width: 700px)");
if (x.matches == true) {
  icon.style.display = "flex";
  list.style.display = "none";
 } 
else if(x.matches == false) {
  icon.style.display = "none";
  list.style.cssText = `display:flex;
  `;
}
icon.onclick = function () {
    if(list.style.display=="none"){
list.style.cssText=`
display:flex;  
flex-direction: column;`;
    }
    else{
        list.style.cssText=`
        display:none;  
        flex-direction: column;`;
    }
};
console.log(x);
