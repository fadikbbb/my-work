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
      price.innerHTML = `${parseInt(price.innerHTML) / 10}\$/mo`;
      price1.innerHTML = `${parseInt(price1.innerHTML) / 10}\$/mo`;
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
let sum = 0;
let hbc4 = document.createElement("div");
hbc4.className = "content4";
let bc4 = document.createElement("div");
submit[2].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    let text = document.querySelectorAll(".text1")[i].cloneNode(true);
    let price = document.querySelectorAll(".box-price")[i].cloneNode(true);
    bc4.className = "cb4";
    if (contentBox[i].classList.contains("color2")) {
      text = text.childNodes[1];
      text.className = "text_copy";
      price.className = "price_copy";
      sum += parseInt(price.innerHTML);
      console.log(sum);
      bc4.append(text);
      bc4.append(price);
      hbc4.append(bc4);
      container4.append(hbc4);
      console.log(bc4);
      console.log(container4);
    }
  }
});
//--------------------------------------------------------------
back[2].addEventListener("click", function () {
  let del = document.querySelectorAll(".text_copy");
  let del1 = document.querySelectorAll(".price_copy");
  for (let i = 0; i < del.length; i++) {
    del[i].remove();
    del1[i].remove();
    bc4.remove();
    sum = 0;
  }
});
//-----------------------------------------------------
let sum1 = 0;
let hc4 = document.createElement("div");
submit[1].addEventListener("click", function () {
  for (let i = 0; i < 3; i++) {
    if (cardContent[i].classList.contains("color")) {
      let cardName = document.querySelectorAll(".name-card")[i].cloneNode(true);
      let cardPrice = document.querySelectorAll(".price")[i].cloneNode(true);
      hc4.className = "hc4";
      cardName.className = "name-card-copy";
      cardPrice.className = "price-card-copy";
      sum1 = parseInt(cardPrice.innerHTML);
      console.log(sum1);
      console.log(cardName);
      console.log(cardPrice);
      hc4.appendChild(cardName);
      hc4.appendChild(cardPrice);
      hbc4.append(hc4);
      container4.append(hbc4);
      console.log(hc4);
      console.log(container4);
    }
  }
});

//-----------------------------------------------------------
back[1].addEventListener("click", function () {
  let cardName = document.querySelector(".name-card-copy");
  let cardPrice = document.querySelector(".price-card-copy");
  cardName.remove();
  cardPrice.remove();
  hc4.remove();
});
submit[2].addEventListener("click", function () {
  let total = document.querySelector(".Total");
  let addtional = document.createElement("div");
  console.log(total.before(hbc4));
  console.log(container4);
  if (year.classList.contains("color1-2")) {
    sum = `${sum + sum1}\$/yr`;
  } else {
    sum = `${sum + sum1}\$/mo`;
  }
  addtional.className = "sum";
  addtional.append(sum);
  total.append(addtional);
});
back[2].addEventListener("click", function () {
  let total = document.querySelector(".sum");
  console.log(total.remove());
});

