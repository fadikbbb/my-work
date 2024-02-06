// let name = console.log(
//   "%cElzero",
//   "color: blue; font-size: 80px;font-weight: bold; text-align: center;font-family: Arial;"
// );
//-----------------------------------------------
// console.log(
//   "%cElzero %cWeb %cSchool",
//   "color: red; font-size : 40px; font-weight : bold;",
//   "color : green; font-size : 40px; font-weight : bold;",
//   "color : white; font-size :40px; font-weight : bold; background-color: blue;"
// );
//-----------------------------------------------
// console.group("Group 1");
// console.log("Message One");
// console.log("Message Two");
// console.groupCollapsed("Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupCollapsed("Grand Child Group");
// console.log("Message One");
// console.log("Message Two");
// console.groupEnd();
// console.groupEnd();
// console.group("Group 2");
// console.log("Message One");
// console.log("Message Two");
//-----------------------------------------------
// let Names = ["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"];
// console.table(Names)
//-----------------------------------------------
// // Add Variables Here
// let numberOne = 10,
//   numberTwo = 20;
// // Ouput
// console.log("" + numberOne + numberTwo); // Normal Concatenate => 1020
// console.log(typeof ("" + numberOne + numberTwo)); // Normal Concatenate => String
// console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
// console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

// console.log(numberOne + numberTwo);
// /*
//   Normal Concatenate
//   20
//   10
// */

// console.log(`${numberOne + numberTwo}`);
// /*
//   Template Literals Way
//   20
//   10
// */
//-----------------------------------------------
// console.log(elzero.innerHTML); // object
// console.log(typeof ["elzero"]); // object
//-----------------------------------------------
// console.log(
//   '`I\'m In \n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
// );
//-----------------------------------------------
// let a = 21;
// let b = 20;
// let c = "_" + b + a;
// console.log("_" + a + c.repeat(3) + "_" + b + "_");
//-----------------------------------------------
// Replace ? With Arithmetic Operators
// console.log(10 * 20 - 15 % 3 + 190 + 10 - 400); // 0
//-----------------------------------------------
// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * num - num); // 6

// // Soultion Three
// console.log(
//   ((num * num + true) % num) +
//     ((num * num + true) % num) +
//     ((num * num + true) % num) +
//     num
// ); // 6

// // Soultion Four
// console.log(true + true + true + num); // 6

// // Solution Five
// console.log(((true + true + true + num) / num) * num); // 6

// // Solution Six
// console.log((num += num)); // 6
//-----------------------------------------------
// let num = "10";

// // Solution One
// console.log(+num + +num); // 20

// // Solution Two
// console.log(); // 20

// // Solution Three
// console.log("Write Your Code Here"); // 20

// // Solution Four
// console.log("Write Your Code Here"); // 20
// let points = 10;

// // Write Your Code Here

// console.log(points); // 13

// // Write Your Code Here

// console.log(points); // 8;
//-----------------------------------------------
// console.log(100 !== "100"); // true
// console.log(100 < 1000); // true
// console.log(110 - 100 > 10 - 20); // true
// console.log(-10 !== "-10"); // true
// console.log(-50 !== +"-40"); // true
// console.log(10 < -"-40"); // true
// console.log("10" == 10); // true
// console.log(20 !== false); // true
//-----------------------------------------------
// let num1 = 10;
// let num2 = 20;

// console.log(num1 < num2); // true
// console.log(num1 !== num2); // true
// console.log(num2 > num1); // true
// console.log(typeof num1 === typeof num2); // true
// console.log(num1 != num2); // true
// console.log(num1 <= num2); // true
//-----------------------------------------------
// let a = 20;
// let b = 30;
// let c = 10;

// console.log(a < b || a > c || a < b); // true
// console.log(a < b && a > c); // true
// console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true
//-----------------------------------------------
// // Test Case 1
// let num1 = 9; // "009"
// if (num1 < 10) {
//   console.log(`00${num1}`);
// }
// // Test Case 2
// let num2 = 20; // "020"
// if (num2 > 10 && num2 < 100) {
//   console.log(`0${num2}`);
// }
// // Test Case 3
// let num3 = 110; // "110"
// if (num3 > 100) {
//   console.log(`${num3}`);
// }
//-----------------------------------------------
// let num1 = 9;
// let str = "9";
// let str2 = "20";
// if (+str2 > num1 && typeof str2 === typeof str) {
//   console.log("{num1} Is The Same Value As {str}");
// } else if (+str2 > num1 && +str2 === str && typeof str2 !== typeof str) {
//   console.log("{num1} Is The Same Value As {str} But Not The Same Type");
// } else if (str2 != num1 && typeof str2 !== typeof str) {
//   console.log("{str} Is The Same Type As {str2} But Not The Same Value");
// }
// // Output
// ("{num1} Is The Same Value As {str}");
// ("{num1} Is The Same Value As {str} But Not The Same Type");
// ("{num1} Is Not The Same Value Or The Same Type As {str2}");
// ("{str} Is The Same Type As {str2} But Not The Same Value");
// Edit What You Want Here
//-----------------------------------------------
// let num1 = 10;
// let num2 = 0;
// let num3 = 10;
// let num4 = 41;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
//-----------------------------------------------
// let day = [
//   "   friday  ",
//   "Friday",
//   "Saturday",
//   "Sunday",
//   "Monday",
//   "Thursday",
//   "Tuesday",
//   "Wednesday",
//   "World",
// ];
// for (let i = 0; i < day.length; i++) {
//   day[i] = day[i].trim();
//   let currentDay = day[i]
//     .substring(0, 1)
//     .toUpperCase()
//     .concat(day[i].substring(1));
//   switch (currentDay) {
//     case "Friday":
//     case "Saturday":
//     case "Sunday":
//       console.log("No Appointments Available");
//       break;
//     case "Monday":
//     case "Thursday":
//       console.log("Appointments Available From 10:00 AM To 5:00 PM");
//       break;
//     case "Tuesday":
//       console.log("Appointments Available From 10:00 AM To 6:00 PM");
//       break;
//     case "Wednesday":
//       console.log("Appointments Available From 10:00 AM To 7:00 PM");
//       break;
//     default:
//       console.log("Its Not A Valid Day");
//       break;
//   }
// }
//-----------------------------------------------
