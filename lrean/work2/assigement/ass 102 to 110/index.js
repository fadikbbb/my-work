// let input=prompt("print number from - to","5-20")
// console.log(input)
// let spl= input.split("-")
// console.log(spl)
// let max=Math.max(spl[0],spl[1])
// let min=Math.min(spl[0],spl[1])
// for(;min<=max;min++){
//     console.log(min)
// }
//-------------------------------------------
window.setTimeout(element,5000);

function element() {
  let container = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let x=document.createElement("div")
  x.innerHTML="X"
  container.className="container"
  container.append(x)
  x.style.cssText=`
  position: absolute;
  right:-15px;
  top:-15px;
  background-color:red;
  width:30px;
  height:30px;
  border-radius:50%;
display:flex;
align-items:center;
  justify-content:center;
  color:white;
  cursor: pointer;
  `
  container.style.cssText=`
  position: relative;
  display:flex;
  align-items:center;
  justify-content:ecnter;
  flex-direction:column;
  width:80%;
  margin:10%;
  background-color:#eee;
  font-family: sans-serif;
  border:1px solid rgb(179 179 179);
  `
  h2.innerHTML = "Welcome";
  p.innerHTML = "welcome to Elzero Web school";
  document.body.appendChild(container);
  container.appendChild(h2);
  container.appendChild(p);
  x.onclick=function(){
    x.parentElement.remove()
  }
}
//-------------------------------------------
// let counter=document.createElement("div")
// counter.innerHTML="10"
// document.body.appendChild(counter)
// let timeKey=setInterval(() => {
//   counter.innerHTML-=1
//   if (counter.innerHTML=="5") {
//     window.open("https://Elzero.org","_blank","width=400,height=400,top=100,left=7000")
//   }
//   if (counter.innerHTML=="0") {
//     clearTimeout(timeKey)
//   }
// }, 1000);