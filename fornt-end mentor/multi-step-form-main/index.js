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
function changePage(page1, page2) {
  page1.style.display = "none";
  page2.style.display = "flex";
}
function active(page1, page2) {
  page1.classList.add("active");
  page2.classList.remove("active");
}
function changeColor(content1, content2, content3) {
  content1.classList.add("color");
  content2.classList.remove("color");
  content3.classList.remove("color");
}
submit[0].addEventListener("click", function () {
  changePage(container1, container2);
  active(nbNav[1], nbNav[0]);
});
submit[1].addEventListener("click", function () {
  changePage(container2, container3);
  active(nbNav[2], nbNav[1]);
});
submit[2].onclick = function () {
  changePage(container3, container4);
  active(nbNav[3], nbNav[2]);
};
back[0].addEventListener("click", function () {
  changePage(container2, container1);
  active(nbNav[0], nbNav[1]);
});
back[1].addEventListener("click", function () {
  changePage(container3, container2);
  active(nbNav[1], nbNav[2]);
});
back[2].addEventListener("click", function () {
  changePage(container4, container3);
  active(nbNav[2], nbNav[3]);
});
//--------------------------------------------------------------------------
let cardContent = document.getElementsByClassName("card-content");
cardContent[0].classList.add("color");
cardContent[0].addEventListener("click", function () {
  changeColor(cardContent[0], cardContent[1], cardContent[2]);
});
cardContent[1].addEventListener("click", function () {
  changeColor(cardContent[1], cardContent[0], cardContent[2]);
});
cardContent[2].addEventListener("click", function () {
  changeColor(cardContent[2], cardContent[0], cardContent[1]);
});
//-----------------------------------------------------------------------
let input4 = document.querySelector(".input-m-y");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

input4.addEventListener("click", function () {

  month.classList.toggle("color1-1");
  year.classList.toggle("color1-2");
  for (let i = 0; i < 3; i++) {
    let price = document.querySelectorAll(".box-price")[i];
    let price1 = document.querySelectorAll(".price")[i];
    
      if (year.classList.contains("color1-2")) {
      price.innerHTML = `${10 * (i + 1)}\$/yr`;
      price1.innerHTML = `${10 * parseInt(price1.innerHTML)}\$/yr`;
      console.log(price);
      console.log(price1);
    } else {
    
      price.innerHTML = `${}\$/mo`;
      price1.innerHTML = `${price1.innerHTML}\$/mo`;
      console.log(price);
      console.log(price1);
    }
  }
});

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

let add = document.createElement("div");
add.className = "add";
submit[2].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    let text = document.querySelectorAll(".text1")[i].cloneNode(true);
    let price = document.querySelectorAll(".box-price")[i].cloneNode(true);
    if (contentBox[i].classList.contains("color2")) {
      text = text.childNodes[1];
      text.className = "check_copy";
      price.className = "check_copy";
      container4.append(text);
      container4.append(price);
      console.log(text);
      console.log(price);
    }
  }
});
//--------------------------------------------------------------
back[2].addEventListener("click", function () {
  let del = document.querySelectorAll(".check_copy");
  for (let i = 0; i < del.length; i++) {
    del[i].remove();
  }
});
//-----------------------------------------------------
submit[1].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    if (cardContent[i].classList.contains("color")) {
      let cardName = document.querySelectorAll(".name-card")[i].cloneNode(true);
      let cardPrice = document.querySelectorAll(".price")[i].cloneNode(true);
      console.log(cardName);
      console.log(cardPrice);
      container4.append(cardName);
      container4.append(cardPrice);
    }
  }
});
//-----------------------------------------------------------
back[1].addEventListener("click", function () {
  console.log(container4.childNodes[12].remove());
  console.log(container4.childNodes[11].remove());
});
