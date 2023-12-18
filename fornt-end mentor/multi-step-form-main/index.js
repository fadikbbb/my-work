let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
let container3 = document.querySelector(".container3");
let container4 = document.querySelector(".container4");
let container5 = document.querySelector(".container5");
let nbNav = document.getElementsByClassName("nb-nav");
let submit = document.getElementsByClassName("front");
let back = document.getElementsByClassName("back");

// container1.style.display = "none";
// container3.style.display = "none";
// container2.style.display = "flex";
// // container4.style.display = "flex";

submit[0].addEventListener("click", function () {
  container1.style.display = "none";
  container2.style.display = "flex";
  nbNav[1].classList.add("active");
  nbNav[0].classList.remove("active");
});
submit[1].addEventListener("click", function () {
  container2.style.display = "none";
  container3.style.display = "flex";
  nbNav[2].classList.add("active");
  nbNav[1].classList.remove("active");
});

submit[2].onclick = function () {
  container4.style.display = "flex";
  container3.style.display = "none";
  nbNav[3].classList.add("active");
  nbNav[2].classList.remove("active");
};

back[0].addEventListener("click", function () {
  container1.style.display = "flex";
  container2.style.display = "none";
  nbNav[0].classList.add("active");
  nbNav[1].classList.remove("active");
});
back[1].addEventListener("click", function () {
  container2.style.display = "flex";
  container3.style.display = "none";
  nbNav[1].classList.add("active");
  nbNav[2].classList.remove("active");
});
back[2].addEventListener("click", function () {
  container3.style.display = "flex";
  container4.style.display = "none";
  nbNav[2].classList.add("active");
  nbNav[3].classList.remove("active");
});

//--------------------------------------------------------------------------
let cardContent = document.getElementsByClassName("card-content");
cardContent[0].classList.add("color");
cardContent[0].addEventListener("click", function () {
  cardContent[0].classList.add("color");
  cardContent[1].classList.remove("color");
  cardContent[2].classList.remove("color");
  console.log("clicked");
});
cardContent[1].addEventListener("click", function () {
  cardContent[0].classList.remove("color");
  cardContent[1].classList.add("color");
  cardContent[2].classList.remove("color");

  console.log("clicked");
});
cardContent[2].addEventListener("click", function () {
  cardContent[0].classList.remove("color");
  cardContent[1].classList.remove("color");
  cardContent[2].classList.add("color");
});
//-----------------------------------------------------------------------
let input4 = document.querySelector(".input-m-y");

let month = document.querySelector(".month");
let year = document.querySelector(".year");
let date = "month";
input4.onclick = function () {
  month.classList.toggle("color1");
  year.classList.toggle("color1");
};
//--------------------------------------------------------------------
let contentBox = document.querySelectorAll(".content-box");
inputBox = document.querySelectorAll(".check");
inputBox[0].onclick = function () {
  contentBox[0].classList.toggle("color2");
};
inputBox[1].onclick = function () {
  contentBox[1].classList.toggle("color2");
};
inputBox[2].onclick = function () {
  contentBox[2].classList.toggle("color2");
};

//-----------------------------------------------------------
let text = document.querySelectorAll(".text1");
let T, p;
submit[2].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    price = document.querySelectorAll(".box-price")[i].cloneNode(true);
    if (contentBox[i].classList.contains("color2")) {
      console.log(text[i].childNodes[1]);

      container4.append(text[i].childNodes[1].innerHTML);
      console.log(price[i]);
      container4.append(price);
    }
  }
});
//-----------------------------------------------------
submit[1].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    if (cardContent[i].classList.contains("color")) {
      let cardName = document.querySelectorAll(".name-card")[i].cloneNode(true);
      let cardPrice=document.querySelectorAll(".price")[i].cloneNode(true);
      console.log(cardName);
      console.log(cardPrice);
      container4.append(cardName.innerHTML);
      container4.append(cardPrice.innerHTML);
    }
  }
});
