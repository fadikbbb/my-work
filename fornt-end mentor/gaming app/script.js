let title = document.querySelector(".titleMiddle");
let container = document.querySelector(".container");

window.addEventListener("scroll", (event) => {
  console.log(window.scrollY);
  if (window.scrollY > 220) {
    title.classList.add("scroll");
  } else {
    
    title.classList.remove("scroll");
      }
});
