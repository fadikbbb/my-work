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
    containerthree.classList.remove("active");
  } else {
    containerOne.style.cssText = `
    width:50%`;
    containertwo.style.cssText = `  border-radius: 100px 0px 0px 100px;`;
    containerthree.style.cssText = `
    width:0%;
    margin:0;
    overflow:hidden;`;
    containerthree.classList.add("active");
  }
});
