// let add = document.querySelector(".classes-to-add");
// let remove1 = document.querySelector(".classes-to-remove");
// let check1;
// let check;
// let a;
// let ElementsAdd;
// document.querySelector(".classes-list").children[1].innerHTML =
//   "no classes to show";

// add.addEventListener("blur", function () {
//   console.log(add.value);
//   if (add.value.length > 0) {
//     if (document.querySelector(".classes-list").children[1].firstChild.textContent ==
//     "no classes to show") {

//       document
//       .querySelector(".classes-list")
//       .children[1].removeChild(
//         document.querySelector(".classes-list").children[1].firstChild
//         );
//       }
//     ElementsAdd = add.value.toLowerCase().split(" ").sort();
//     console.log(ElementsAdd);
//     for (let i = 0; i < add.value.split(" ").length; i++) {
//       a = document.createElement("span");
//       a.className = `${ElementsAdd[i]}`;
//       a.innerHTML = ElementsAdd[i];
//       document.querySelector(".classes-list").children[1].appendChild(a);
//       check = document.querySelector(".classes-list").children[1].childNodes;
//     }
//     check1 = check.length;
//     sortElements();
//     add.value = null;
//   }
// });
// remove1.onblur = function () {
//   let ElementsRemove = remove1.value.toLowerCase().split(" ").sort();
//   for (let t = 0; t < ElementsRemove.length; t++) {
//     console.log(ElementsRemove[t]);
//     console.log(check1);
//     for (let g = 0; g < check1; g++) {
//       if (check[g].classList.contains(ElementsRemove[t])) {
//         document
//           .querySelector(".classes-list")
//           .children[1].childNodes[g].remove();
//         break;
//       }
//     }
//   }
//   remove1.value = null;
//   if (
//     document.querySelector(".classes-list").children[1].childNodes.length == 0
//   ) {
//     document.querySelector(".classes-list").children[1].innerHTML =
//       "no calsses to show";
//   }
// };
// function sortElements() {
//   let list = document.querySelector(".classes-list").children[1];
//   let items = Array.from(list.childNodes);
//   items.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Sort alphabetically
//   items.forEach((item) => list.appendChild(item));
// }
//----------------------------------------------------------------------------------------
// let paragraph = document.querySelector("p").remove();
// let mainDiv = document.querySelector(".our-element");
// let start = document.createElement("div");
// start.className = "start";
// start.title = "start element";
// start.innerHTML = "start";
// mainDiv.before(start)
// let end = document.createElement("div");
// end.className = "end";
// end.title = "end element";
// end.innerHTML = "end";
// mainDiv.after(end)
// console.log(end);
// console.log(start);
//----------------------------------------------------------------------------------------
// let div=document.querySelector("div")
// console.log(div.childNodes[4]);
//----------------------------------------------------------------------------------------
// document.onclick=function(e){
//   if (e.target.innerHTML=="Element") {
//     console.log(`This Is "${e.target.nodeName.toLowerCase()}"` )
//   }
// }