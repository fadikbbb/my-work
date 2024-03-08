// const getData = (apiLink) => {
//   let myPromise = new Promise((resolve, reject) => {
//     let myData = new XMLHttpRequest();
//     myData.onload = function () {
//       if (this.status === 200 && this.readyState === 4) {
//         resolve(JSON.parse(myData.responseText));
//       } else {
//         reject(console.error("not found"));
//       }
//     };
//     myData.open("get", apiLink);
//     myData.send();
//   })
//     .then((resolve) => {
//       resolve.length = 5;
//       return resolve;
//     })
//     .then((resolve) => {
//       resolve.forEach((element) => {
//         let div = document.createElement("div");
//         let p = document.createElement("p");
//         let h3 = document.createElement("h3");
//         p.innerHTML = element.title;
//         h3.innerHTML = element.description;
//         div.appendChild(h3);
//         div.appendChild(p);
//         document.body.appendChild(div);
//       });
//     })
//     .catch((reject) => {
//       return reject;
//     });
// };
// getData("article.json");
//------------------------------
// fetch("article.json")
//   .then(
//     (resolve) => {
//       return resolve.json();
//     },
//     (reject) => {
//       console.log(console.error("not found"));
//     }
//   )
//   .then((resolve) => {
//     resolve.length = 5;
//     return resolve;
//   })
//   .then((resolve) => {
//     resolve.forEach((element) => {
//       let div = document.createElement("div");
//       let p = document.createElement("p");
//       let h3 = document.createElement("h3");
//       p.innerHTML = element.title;
//       h3.innerHTML = element.description;
//       div.appendChild(h3);
//       div.appendChild(p);
//       document.body.appendChild(div);
//     });
//   })
