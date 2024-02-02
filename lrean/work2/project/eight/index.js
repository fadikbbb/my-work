let boxes = document.querySelectorAll(".box1");
let player2 = document.querySelector(".player2");
let player1 = document.querySelector(".player1");
let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let name1 = document.querySelector(".inputPlayer1");
let name2 = document.querySelector(".inputPlayer2");
let submit = document.getElementsByClassName("submit")[0];
let restart = document.querySelector(".restart");
let con_boxes = document.querySelector(".containerOfboxes");
let change = true;
let restart_point=document.querySelector(".point")
function re() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
  }
}
restart.onclick = function () {
  re();
};
submit.addEventListener("click", function (event) {
  event.preventDefault();
  if (name1.value != "" || name2.value != "") {
    player1.innerHTML = `X-${name1.value} :`;
    player2.innerHTML = `O-${name2.value} :`;
    localStorage.setItem("name1", name1.value);
    localStorage.setItem("name2", name2.value);
  }
});
con_boxes.addEventListener("click", function (e) {
  if (e.target.innerHTML === "") {
    if (change == true) {
      e.target.innerHTML = "x";
      e.target.style.cssText = `color:#a1d4ff`;

      change = false;
    } else {
      e.target.innerHTML = "o";
      e.target.style.cssText = `color:#91ffca`;
      change = true;
    }
  }
  XO(0, 1, 2);
  XO(3, 4, 5);
  XO(6, 7, 8);
  XO(2, 5, 8);
  XO(1, 4, 7);
  XO(0, 3, 6);
  XO(0, 4, 8);
  XO(2, 4, 6);
  function XO(one, two, three) {
    if (
      boxes[one].innerHTML == "x" &&
      boxes[two].innerHTML == "x" &&
      boxes[three].innerHTML == "x"
    ) {
      sessionStorage.setItem("winer1", parseInt(num1.innerHTML) + 1);
      num1.innerHTML = parseInt(num1.innerHTML) + 1;
      re();
    }
    if (
      (boxes[one].innerHTML == "o" &&
        boxes[two].innerHTML == "o" &&
        boxes[three].innerHTML) == "o"
    ) {
      sessionStorage.setItem("winer2", parseInt(num2.innerHTML) + 1);
      re();
      num2.innerHTML = parseInt(num2.innerHTML) + 1;
      // location.reload();
    }
  }
});

if (sessionStorage.getItem("winer1")) {
  num1.innerHTML = sessionStorage.getItem("winer1");
}
if (sessionStorage.getItem("winer2")) {
  num2.innerHTML = sessionStorage.getItem("winer2");
}
if (localStorage.getItem("name1")) {
  player1.innerHTML = `X-${localStorage.getItem("name1")}: `;
}
if (localStorage.getItem("name2")) {
  player2.innerHTML = `O-${localStorage.getItem("name2")} : `;
}
restart_point.addEventListener("click",function(){
  num1.innerHTML="0"
  num2.innerHTML="0"
  sessionStorage.clear()
})
// localStorage.clear()
// sessionStorage.clear()
