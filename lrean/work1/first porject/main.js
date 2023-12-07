function search() {
    let searchbar = document.querySelector(".input-search").value.toUpperCase();
    let list = document.querySelectorAll(".a-dwonload");
    let gamename = document.getElementsByTagName('h5');


    for (let i = 0; i < gamename.length; i++) {
        if (gamename[i].innerHTML.toUpperCase().indexOf(searchbar) >= 0) {
            list[i].style.display = "boxes";

        } else {
            list[i].style.display = "none";
        }
        
    }



}
let showmorebtn = document.querySelector('#show-more');
let currentitem= 12;
showmorebtn.onclick = () => {
    let boxes = [...document.querySelectorAll('main div .a-dwonload')];
    for (var i = currentitem; i < currentitem + 12; i++){
        boxes[i].style.display = 'inline-block';

    }
    currentitem += 12;
}
