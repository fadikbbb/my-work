// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
// let x = mix.map(function(ele){
// return typeof ele =="string"?ele:""
// }).reduce(function(ele ,current){
//     return `${ele}${current}`
// })
// console.log(x)
// // Elzero
//--------------------------------------------------------------------------------------
// let myString = "EElllzzzzzzzeroo";
// let y = myString
//   .split("")
//   .filter(function (ele, index) {
//     return myString.indexOf(ele) == index;
//   })
//   .reduce(function (ele, current) {
//     return `${ele}${current}`;
//   });

// console.log(y);
// // Elzero
//-------------------------------------------------------------------------------------------------------
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let z = myArray
//   .reduce(function (ele, current) {
//     return ele + "" + current;
//   })
//   .split(",")
//   .join("");
// console.log(z);
// // Elzero
//----------------------------------------------------------------------------------------------------------
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let a = numsAndStrings.map(function(ele){
//     return typeof ele=="number"?-ele:""
// }).filter(function(ele){
//     return ele
// })
// console.log(a)
// // [-1, -10, 10, 20, -5, -3]
// //------------------------------------------------------------------------------------------------------------------
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let s = nums.reduce(function (acc, current) {
//     console.log(` this ele ${acc}`)
//     console.log(` this current ${current}`)
// return current % 2 === 0 ?acc*current : acc+current;
// });
// console.log(s);
// // 500
//--------------------------------------------------------------------------------------------------------------------------

