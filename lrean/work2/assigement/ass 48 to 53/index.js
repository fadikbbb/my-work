// let start = 10;
// let end = 100;
// let exclude = 40;
// let x=false;
// for (let i = false; i < start; i++) {
// x += start;
// if(x==exclude){
//     continue
// }
// console.log(x)
// }
// // Output
// // 10
// // 20
// // 30
// // 50
// // 60
// // 70
// // 80
// // 90
// // 100
//--------------------------------------------------------
// let start = 10;
// let end = 0;
// let Stop = 3;

// for (let i = start; i >= end; i--) {
//   if (i >= start) {
//     console.log(`${i}`);
//   } else if (i < Stop) {
//     break;
//   } else {
//     console.log(`0${i}`);
//   }
// }
// // Output
// // 10
// // 09
// // 08
// // 07
// // 06
// // 05
// // 04
// // 03
//-----------------------------------------------------------
// let start = 1;
// let end = 6;
// let breaker = 2;

// for(let i= start;i<=end;i++){
//     console.log(`${i}\n-- ${breaker}\n-- ${breaker+breaker}`)
// }
// // Output
// // 1
// // -- 2
// // -- 4
// // 2
// // -- 2
// // -- 4
// // 3
// // -- 2
// // -- 4
// // 4
// // -- 2
// // -- 4
// // 5
// // -- 2
// // -- 4
// // 6
// // -- 2
// // -- 4
//-----------------------------------------------------------------------------
// let index = 10;
// let jump = 2;
// let i = index;
// for (;;) {
//   // Write Your Code Here
//   if (i <= jump) {
//     break;
//   }
//   if (i % jump == index - index) {
//     console.log(i);
//   }
//   i--;
// }

// // Output
// // 10
// // 8
// // 6
// // 4
//------------------------------------------------------------------------------------

// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";
// for (let i = letter.length - letter.length; i < friends.length; i++) {
//   if (
//     friends[i].charAt(letter.length - letter.length) !=
//       letter.charAt(letter.length - letter.length) &&
//     friends[i].charAt(letter.length - letter.length) !=
//       letter.charAt(letter.length - letter.length).toUpperCase()
//   ) {
//     console.log(`${i} => ${friends[i]}`);
//   }
// }
// //-------------------------------------------

// // let x = friends.filter(function (ele) {
// //   return ele.charAt(letter.indexOf("")) != "A";
// // });
// // Output
// // "1 => Sayed"
// // "2 => Eman"
// // "3 => Mahmoud"
// // "4 => Osama"
// // "5 => Sameh"
//---------------------------------------------------------------------------------------------------

// let start = 0;
// let swappedName = "elZerO";
// swappedName = swappedName.split("");
// for (let i = start; i < swappedName.length; i++) {
//   if (swappedName[i]==swappedName[i].toUpperCase()) {
//     swappedName[i] = swappedName[i].toLowerCase();
//   } else if (swappedName[i]==swappedName[i].toLowerCase()) {
//     swappedName[i] = swappedName[i].toUpperCase();
//   }
// }
// console.log(swappedName.join(""));
// // Output
// // "ELzERo"
// //-------------------------------------------------------------------------------------------------------------
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++) {
//     if(typeof mix[i]=="number"){
//         if(mix[i]!=mix[start]){
//             console.log(mix[i])
//         }
//     }
    
// }
// // Output
// // 2
// // 3
// // 4