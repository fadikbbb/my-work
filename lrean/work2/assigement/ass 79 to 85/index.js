// let member={

//     name:"elzero",
//     age:38,
//     country:"egypt",
//      fullDetails:function(){
//         return `my name is ${member.name} ,my age is ${member.age} ,i live in ${member.country}`
//      }
// }

// // Create Your Object Here

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // Method One
// let objMethodOne = {
//   property: "Method One",
// };
// // Create Your Object Here
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// let variable = "Method Two";
// objMethodTwo = {
//   property: variable,
// };
// // Create Your Object Here
// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// let objMethodThree = {
//   "property": "Method Three",
// };
// // Create Your Object Here
// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// let myVar="property"
// let objMethodFour = {
//   property: "Method Four",
// };
// // Create Your Object Here

// console.log(objMethodFour[myVar]); // "Method Four"
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// // Create Your Object Here in One Line
// let finalObject= Object.assign({a:1},twoNums,threeNums)
// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */
//---------------------------------------------------------------------------------------------

// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//       publisher: "NIS America",
//       price: 40,
//     },
//     "Titan Quest": {
//       publisher: "THQ",
//       bestThree: {
//         one: "Immortal Throne",
//         two: "Ragnarök",
//         three: "Atlantis",
//       },
//       price: 50,
//     },
//     YS: {
//       publisher: "Falcom",
//       bestThree: {
//         one: "Oath in Felghana",
//         two: "Ark Of Napishtim",
//         three: "origin",
//       },
//       price: 40,
//     },
//   };
  
//   // Code One => How To Get Object Length ?
//   let objectLength = Object.keys(myFavGames).length;
//   game=Object.keys(myFavGames)
// //   console.log(Object.keys(myFavGames)[1])
//   for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${game[i]}`);
//     console.log(`The Publisher Is ${myFavGames[game[i]].publisher}`);
//     console.log(`The Price Is ${myFavGames[game[i]].price}`);

//     // Check If Nested Object Has Property (bestThree)
//     if (Object.hasOwn(myFavGames[game[i]],"bestThree")) {
//         console.log("- Game Has Releases");
//         console.log(`First => ${myFavGames[game[i]]["bestThree"]["one"]}`);
//       console.log(`Second => ${myFavGames[game[i]]["bestThree"]["two"]}`);
//       console.log(`Third => ${myFavGames[game[i]]["bestThree"]["three"]}`);
//     }
//     console.log("#".repeat(20));
    
//   }
  
//   // Ouput
  
// //   "The Game Name Is Trinity Universe"
// //   "The Publisher Is NIS America"
// //   "The Price Is 40"
// //   "####################"
// //   "The Game Name Is Titan Quest"
// //   "The Publisher Is THQ"
// //   "The Price Is 50"
// //   "- Game Has Releases"
// //   "First => Immortal Throne"
// //   "Second => Ragnarök"
// //   "Third => Atlantis"
// //   "####################"
// //   "The Game Name Is YS"
// //   "The Publisher Is Falcom"
// //   "The Price Is 40"
// //   "- Game Has Releases"
// //   "First => Oath in Felghana"
// //   "Second => Ark Of Napishtim"
// //   "Third => origin"
// //   "####################"

