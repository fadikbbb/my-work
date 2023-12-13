let nbNav = document.getElementsByClassName("nb-nav");
let page1 = document.querySelector(".content-nav1");
let page2 = document.querySelector(".content-nav2");
let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let bigContainer = document.querySelector(".bigest-container");
button1 = document.querySelector(".button1");
input1 = document.querySelector(".input-name");
input2 = document.querySelector(".input-email");
input3 = document.querySelector(".input-phone");

button1.addEventListener("click", function (e) {
  if (input1 != "" && input2 != "" && input3) {
    container1.style.display = "none";

    e.preventDefault(); container2.style.display = "flex";
    if (nbNav[0].className == "active") {
      nbNav.classList.remove("active");
    } else {
      nbNav[1].classList.add("active");
      nbNav[0].classList.remove("active");
    }
  }
  else {
    e.preventDefault();
    console.log(typeof input3);
    console.log(typeof input2);
    console.log(typeof input1);
  }
});






























// page2.addEventListener("click", function () {
//   container1.style.display = "none";
//   container2.style.display = "flex";
//   container3.style.display = "none";
//   container4.style.display = "none";
//   container5.style.display = "none";
//   if (nbNav[1].classname == "active") {
//     nbNav.classList.remove("active");
//   } else {
//     nbNav[1].classList.add("active");
//     nbNav[0].classList.remove("active");
//     nbNav[2].classList.remove("active");
//     nbNav[3].classList.remove("active");
//   }
// });
// page3.addEventListener("click", function () {
//   container1.style.display = "none";
//   container2.style.display = "none";
//   container3.style.display = "flex";
//   container4.style.display = "none";
//   container5.style.display = "none";
//   if (nbNav[2].classname == "active") {
//     nbNav.classList.remove("active");
//   } else {
//     nbNav[2].classList.add("active");
//     nbNav[0].classList.remove("active");
//     nbNav[1].classList.remove("active");
//     nbNav[3].classList.remove("active");
//   }
// });
// page4.addEventListener("click", function () {
//   container1.style.display = "none";
//   container2.style.display = "none";
//   container3.style.display = "none";
//   container4.style.display = "flex";
//   container5.style.display = "none";
//   if (nbNav[3].classname == "active") {
//     nbNav.classList.remove("active");
//   } else {
//     nbNav[3].classList.add("active");
//     nbNav[0].classList.remove("active");
//     nbNav[1].classList.remove("active");
//     nbNav[2].classList.remove("active");
//   }
// });
// console.log(nbNav.classList);
