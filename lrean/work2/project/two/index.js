
let time = document.querySelector("span")
time.style.cssText = `
color:red;
font-size:50px;
display:flex;
flex-direction:column;
`
function date() {
    time.innerText = Date();
};