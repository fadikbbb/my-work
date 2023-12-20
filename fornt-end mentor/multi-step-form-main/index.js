
let nbNav = document.getElementsByClassName("nb-nav");
let page1 = document.querySelector(".content-nav1");
let page2 = document.querySelector(".content-nav2");
let page3 = document.querySelector(".content-nav3");
let page4 = document.querySelector(".content-nav4");
let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let container4 = document.querySelector(".container4");
let container5 = document.querySelector(".container5");
let bigContainer = document.querySelector(".bigest-container");
console.log(nbNav[0]);
page1.addEventListener("click", function () {
  container1.style.display = "flex";
  container1.style.flexDirection = "column";

  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  if (nbNav[0].className == "active") {
    nbNav.classList.remove("active");
  } else {
    nbNav[0].classList.add("active");
    nbNav[1].classList.remove("active");
    nbNav[2].classList.remove("active");
    nbNav[3].classList.remove("active");
  }
});

page2.addEventListener("click", function () {
  container1.style.display = "none";
  container2.style.display = "flex";
  container3.style.display = "none";
  container4.style.display = "none";
  container5.style.display = "none";
  if (nbNav[1].classname == "active") {
    nbNav.classList.remove("active");
  } else {
    nbNav[1].classList.add("active");
    nbNav[0].classList.remove("active");
    nbNav[2].classList.remove("active");
    nbNav[3].classList.remove("active");
  }
});
page3.addEventListener("click", function () {
  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "flex";
  container4.style.display = "none";
  container5.style.display = "none";
  if (nbNav[2].classname == "active") {
    nbNav.classList.remove("active");
  } else {
    nbNav[2].classList.add("active");
    nbNav[0].classList.remove("active");
    nbNav[1].classList.remove("active");
    nbNav[3].classList.remove("active");
  }
});
page4.addEventListener("click", function () {
  container1.style.display = "none";
  container2.style.display = "none";
  container3.style.display = "none";
  container4.style.display = "flex";
  container5.style.display = "none";
  if (nbNav[3].classname == "active") {
    nbNav.classList.remove("active");
  } else {
    nbNav[3].classList.add("active");
    nbNav[0].classList.remove("active");
    nbNav[1].classList.remove("active");
    nbNav[2].classList.remove("active");
  }
});
console.log(nbNav.classList);
