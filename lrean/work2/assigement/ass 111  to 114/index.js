// let box1 = document.querySelector("#box1");
// let box2 = document.querySelector("#box2");
// let box3 = document.querySelector("#box3");
// let option3 = document.createElement("div");
// let textp = document.querySelector("p");
// for (let i = 16; i <= 30; i++) {
//   option3 = document.createElement("option");
//   option3.value = `${i}px`;
//   option3.innerHTML = `${i}px`;
//   //   console.log(option3)
//   box3.append(option3);
// }
// box1.oninput = function () {
//   console.log(box1.value);
//   textp.style.fontFamily = box1.value;
//   window.localStorage.setItem("font", box1.value);
// };
// box2.oninput = function () {
//   console.log(box2.value);
//   textp.style.color = box2.value;
//   window.localStorage.setItem("color", box2.value);
// };
// box3.oninput = function () {
//   console.log(box3.value);
//   textp.style.fontSize = `${box3.value}`;
//   window.localStorage.setItem("size", box3.value);
// };
// if (window.localStorage.getItem("font")) {
//   textp.style.fontFamily = window.localStorage.getItem("font");
//   box1.value = window.localStorage.getItem("font");
//   console.log("yes");
// } else {
//   console.log("no");
// }
// if (window.localStorage.getItem("color")) {
//   textp.style.color = window.localStorage.getItem("color");
//   box2.value = window.localStorage.getItem("color");
//   console.log("yes");
// } else {
//   console.log("no");
// }
// if (window.localStorage.getItem("size")) {
//   textp.style.fontSize = window.localStorage.getItem("size");
//   box3.value = window.localStorage.getItem("size");
//   console.log("yes");
// } else {
//   console.log("no");
// }
//-------------------------------------------------------------------------------------------------
let name1 = document.querySelector(".name");
let userName = document.querySelector(".uesrName");
let pass = document.querySelector(".pass");
let color = document.querySelector("#sele");
let submit = document.querySelector(".submit");
name1.oninput = function () {
  console.log(name1.value);
  localStorage.setItem("name", name1.value);
};
userName.oninput = function () {
  console.log(userName.value);
  localStorage.setItem("userName", userName.value);
};
pass.oninput = function () {
  console.log(pass.value);
  localStorage.setItem("pass", pass.value);
};
color.oninput = function () {
  console.log(color.value);
  localStorage.setItem("color", color.value);
};
if (localStorage.getItem("name")) {
  console.log("yes");
  name1.value = localStorage.getItem("name");
} else {
  console.log("no");
}
if (localStorage.getItem("userName")) {
  console.log("yes");
  userName.value = localStorage.getItem("userName");
} else {
  console.log("no");
}
if (localStorage.getItem("pass")) {
  console.log("yes");
  pass.value = localStorage.getItem("pass");
} else {
  console.log("no");
}
if (localStorage.getItem("color")) {
  console.log("yes");
  color.value = localStorage.getItem("color");
} else {
  console.log("no");
}
submit.onclick = function () {
  window.localStorage.clear();
};
