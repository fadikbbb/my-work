// console.log(document.querySelector("div").innerHTML);
// console.log(document.querySelector(".element").innerHTML);
// console.log(document.querySelector("#elzero").innerHTML);
// console.log(document.querySelector("[name='js']").innerHTML);
// console.log(document.querySelectorAll(".element")[0].innerHTML);
// console.log(document.querySelectorAll("#elzero")[0].innerHTML);
// console.log(document.querySelectorAll("div")[0].innerHTML);
// console.log(document.querySelectorAll("[name='js']")[0].innerHTML);
// console.log(document.getElementById("elzero").innerHTML);
// console.log(document.getElementsByClassName("element")[0].innerHTML);
// console.log(document.getElementsByTagName("div")[0].innerHTML);
// console.log(document.getElementsByName("js")[0].innerHTML);
// console.log(document.body.children[0].innerHTML)
// console.log(document.body.firstElementChild.innerHTML)
// console.log(document.body.lastElementChild.innerHTML)
//-----------------------------------------------------------------
// console.log(window.document.body.children.length);
// console.log(document.querySelectorAll("img")[0]);
// document.body.style.backgroundColor="black"
// for (let i = 0; i < document.body.children.length-1; i++) {
//   let image = document.querySelectorAll("img")[i];
//   image.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   image.alt = "Elzero logo";
// }
//-----------------------------------------------------------------
// let inputDollar = document.querySelector("[name='dollar']");
// let inputvalues;
// console.log(inputDollar);
// inputDollar.oninput = function () {

// console.log(inputDollar.value)
//     inputvalues=inputDollar.value||0
//     let res=document.querySelector(".result")
//     res.innerHTML=`${inputvalues} USD Dollar = ${(inputvalues*15.6).toFixed(2)} Egyptian Pound`
// };
//-----------------------------------------------------------------
// let one = document.querySelector(".one");
// let two = document.querySelector(".two");
// let three=document.createElement("div")
// three.title=one.title
// three.innerHTML=one.innerHTML
// one.title=two.title
// one.innerHTML=two.innerHTML
// two.title=three.title
// two.innerHTML=`${three.innerHTML} ${one.attributes.length}`
//-----------------------------------------------------------------
// let image;
// for (let i = 0; i < document.body.children.length - 1; i++) {
//   image = document.querySelectorAll("img")[i];
//   if (image.alt) {
//     image.alt = "old";
//   } else image.alt = "new elzero";
// }
//-----------------------------------------------------------------
let numberOfElement = document.querySelector("[name='elements']");
let textOfElement = document.querySelector("[name='texts']");
let typeOfElement = document.querySelector("[name='type']");
let submitOfElement = document.querySelector("[name='create']");
let res = document.querySelector(".results");
let val1, val2, val3;
val3 = "div";
let CE;

numberOfElement.oninput = function () {
  val1 = numberOfElement.value;
  console.log(val1);
};
textOfElement.oninput = function () {
  val2 = textOfElement.value;
  console.log(val2);
};
typeOfElement.oninput = function () {
  val3 = typeOfElement.value;
  console.log(val3);
};
submitOfElement.addEventListener("click", function (e) {
  e.preventDefault();
  let length_val=res.children.length
  if (length_val > 0) {
    for (let g = 0; g < length_val ; g++) {
      console.log();
      document.querySelector(`#id-${g}`).remove();
      console.log(g);
    }
  }
  if (res.children.length == 0) {
    for (let i = 0; i < val1; i++) {
      CE = document.createElement(val3);
      CE.id = `id-${i}`;
      CE.className = `box`;
      CE.title = `Element`;
      CE.innerHTML = val2;
      res.appendChild(CE);
      // console.log(CE);
    }
  }
});
