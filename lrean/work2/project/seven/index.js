let box = document.querySelector("#toggle");
let change = document.querySelector(".change");
let form=document.querySelector(".form")
form.addEventListener("click",function(){
  change.classList.toggle("off");
  change.classList.toggle("on");
  if (change.classList.contains("off")) {
      change.style.animation="y 1s 1 linear alternate-reverse"
  }if (change.classList.contains("on")) {
    change.style.animation="x 1s 1 linear forwards"
  }
});
