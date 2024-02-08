let containerOne = document.querySelector(".container1");
let containertwo = document.querySelector(".container2");
let containerthree = document.querySelector(".check");
let button = document.querySelector(".button");
button.addEventListener("click", function () {
  if (containerthree.classList.contains("active")) {
    containerOne.style.cssText = `
    width:0%;
    margin:0;
    overflow:hidden
    `;
    containerthree.style.cssText = `
    margin-left: 30px;
    width:50%;
   `;
    containertwo.style.cssText = `  border-radius: 0px 100px 100px 0px;`;
    document.querySelector(".title").innerHTML =
      "welcome back";
      document.querySelector(".paragraph").innerHTML =
      "    Register with your personal details to use all of site features";
      document.querySelector(".button").innerHTML="sgin in"
    containerthree.classList.remove("active");
  } else {
    containerOne.style.cssText = `
    width:50%`;
    document.querySelector(".title").innerHTML =
    "hello, friend!";
    document.querySelector(".button").innerHTML="sgin up"
  document.querySelector(".paragraph").innerHTML =
    "enter your presonal detail to use all of site features";
     containertwo.style.cssText = `  border-radius: 100px 0px 0px 100px;`;
    containerthree.style.cssText = `
    width:0%;
    margin:0;
    overflow:hidden;`;
    containerthree.classList.add("active");
  }
});
