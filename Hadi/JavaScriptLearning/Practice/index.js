// Body
document.body.cssText =
  "margin: 0px; background-color: rgb(236,236,236); font-family: Tohoma, Arial;";
// Logo
let logo = document.createElement("div");
logo.className = "logo";
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
logo.style.cssText =
  "font-weight: bold; color: rgb(35,169,110); font-size: 26px;";
// List
let List = document.createElement("ul");
List.className = "menu";
List.style.cssText =
  "padding: 0px; margin: 0px; display:flex; list-style: none; justify-content: space-between; align-items: center;";
let listItem1 = document.createElement("li");
let listItemText1 = document.createTextNode("Home");
listItem1.style.cssText = "margin-left: 10px; margin-right:10px";
listItem1.appendChild(listItemText1);
let listItem2 = document.createElement("li");
let listItemText2 = document.createTextNode("About");
listItem2.style.cssText = "margin-left: 10px; margin-right:10px";
listItem2.appendChild(listItemText2);
let listItem3 = document.createElement("li");
let listItemText3 = document.createTextNode("Service");
listItem3.style.cssText = "margin-left: 10px; margin-right:10px";
listItem3.appendChild(listItemText3);
let listItem4 = document.createElement("li");
let listItemText4 = document.createTextNode("Contact");
listItem4.style.cssText = "margin-left: 10px; margin-right:10px";
listItem4.appendChild(listItemText4);
let header = document.createElement("header");
// Header
header.className = "website-head";
header.style.cssText =
  "display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center;";
List.prepend(listItem4);
List.prepend(listItem3);
List.prepend(listItem2);
List.prepend(listItem1);
header.appendChild(logo);
header.appendChild(List);
document.body.appendChild(header);

let menu = document.createElement("div");
menu.className = "content";
menu.style.cssText = `
display: flex; 
padding: 20px; 
flex-wrap: wrap; 
justify-content: center;
 gap: 20px; 
min-height: calc(100vh - 142px); 
box-sizing: border-box;`;
for (let i = 15; i >= 1; i--) {
  let product = document.createElement("div");
  product.className = "product";
  product.style.cssText =
    "padding: 20px; backgroung-color: rgb(255,255,255); border: 1px solid rgb(221,221,221); width: calc((100% - 40px)/3); box-sizing: border-box; text-align: center; color: rgb(136,136,136); border-radius: 6px;";
  let productSpan = document.createElement("span");
  productSpan.style.cssText =
    "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
  productSpan.append(`${i }`);
  let procuctText = document.createTextNode("Product");
  product.appendChild(productSpan);
  product.append(procuctText);
  menu.prepend(product);
}
document.body.appendChild(menu);

let footer = document.createElement("footer");
footer.className = "footer";
footer.style.cssText =
  "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255); ";
let footerText = document.createTextNode("Copyright 2021");
footer.appendChild(footerText);
document.body.append(footer);
