// let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
// let num = 3;

// // Method 1
// console.log(myFriends.slice(-num - num, num)); // ["Ahmed", "Elham", "Osama"];
// // Method 2

// myFriends.pop(); // ["Ahmed", "Elham", "Osama"];
// console.log(myFriends);
// // Method 3
// console.log(myFriends.splice(-num - num, num)); // ["Ahmed", "Elham", "Osama"];
//-----------------------------------------------------------------------------------------
// let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// // Write Your Code Here
// friends.shift();
// friends.pop();
// console.log(friends); // ["Eman", "Osama"]
//------------------------------------------------------------------------------------------
// let arrOne = ["C", "D", "X"];
// let arrTwo = ["A", "B", "Z"];
// let finalArr = [];
// // Write One Single Line Of Code
// finalArr=arrOne.concat(arrTwo).sort().reverse()
// console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//---------------------------------------------------------------------------------------------
// let website = "Go";
// let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

// console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
//-----------------------------------------------------------------------------------------------------
// let needle = "JS";
// let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
// for (let i = 0; i < haystack.length; i++) {
//   if (haystack[i] == needle) {
//     console.log("found");
//   }
// }

// if (haystack.includes(needle)) {
//   console.log("found");
// }
// if(haystack.indexOf(needle)){
// console.log("found")
// }
//---------------------------------------------------------------------------------------------------------------------
// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// // Your Code Here
// allArrs = arr1.concat(arr2).sort().slice(arr2.length).join("").toLowerCase();
// console.log(allArrs); // fxy
//-------------------------------------------------------------------------------------------------------========================