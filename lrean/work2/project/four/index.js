let input = document.querySelector("input");
let exp = document.querySelector(".exp");
let color;
input.oninput = function () {
   color= input.value;
   console.log(color)
    window.localStorage.setItem("backgroundColor", color);
    exp.style.backgroundColor = color;
};
// window.localStorage.clear()
if (window.localStorage.getItem("backgroundColor")) {
    exp.style.backgroundColor=window.localStorage.getItem("backgroundColor")
    input.value=window.localStorage.getItem("backgroundColor")
}
else{
    console.log("no")
}
