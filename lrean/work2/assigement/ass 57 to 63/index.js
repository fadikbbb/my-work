// function sayHello(theName, theGender) {
//   return typeof theName == "string" && theGender == "Male"
//     ? console.log(`hello mr ${theName}`)
//     : typeof theName == "string" && theGender == "Female"
//     ? console.log(`hello miss ${theName}`)
//     : console.log(`hello ${theName}`);
//   // Your Code Here
// }

// // Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
// sayHello("Sameh"); // "Hello Sameh"
//------------------------------------------------------------------------------
// function calculate(firstNum, secondNum, operation) {
//   // Your Code Here
//   return isNaN(firstNum) == false &&
//     isNaN(secondNum) == false &&
//     operation == "add"
//     ? console.log(firstNum + secondNum)
//     : isNaN(firstNum) == false &&
//       isNaN(secondNum) == false &&
//       operation == "subtract"
//     ? console.log(firstNum - secondNum)
//     : isNaN(firstNum) == false &&
//       isNaN(secondNum) == false &&
//       operation == "multiply"
//     ? console.log(firstNum * secondNum)
//     : isNaN(firstNum) == false && isNaN(secondNum) == false && operation != true
//     ? console.log(firstNum + secondNum)
//     : console.log(`Second Number Not Found`);
// }
// // Needed Output
// calculate(20); // Second Number Not Found
// calculate(20, 30); // 50
// calculate(20, 30, "add"); // 50
// calculate(20, 30, "subtract"); // -10
// calculate(20, 30, "multiply"); // 600
//-----------------------------------------------------------------------------------------
// function ageInTime(theAge) {
//   return theAge > 10 && theAge < 100
//     ? `second => ${theAge * 31_556_926}\nminute => ${
//         theAge * 525_948
//       }\nhour => ${theAge * 8_765}\nday => ${theAge * 365}\nmonth => ${
//         theAge * 12
//       }`
//     : `your age not available`;
// }
// console.log(ageInTime(1));
// console.log(ageInTime(90));
// console.log(ageInTime(100));
//------------------------------------------------------------------------------------------------------
// function checkStatus(a, b, c) {
//   // Your Code Here
//   let name;
//   let age;
//   let ok;
//   typeof a == "string"
//     ? (name = a)
//     : typeof a == "number"
//     ? (age = a)
//     : a == true
//     ? (ok = `you are available`)
//     : a == false
//     ? (ok = `you aren't available`)
//     : `no input`;
//   typeof b == "string"
//     ? (name = b)
//     : typeof b == "number"
//     ? (age = b)
//     : b == true
//     ? (ok = `you are available`)
//     : b == false
//     ? (ok = `you aren't available`)
//     : `no input`;
//   typeof c == "string"
//     ? (name = c)
//     : typeof c == "number"
//     ? (age = c)
//     : c == true
//     ? (ok = `you are available`)
//     : c == false
//     ? (ok = `you aren't available`)
//     : `no input`;
//   console.log(`hello ${name}, your age is ${age} , ${ok}`);
// }

// // Needed Output
// checkStatus("Osama", 38, false); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(38, "Osama",true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//---------------------------------------------------------------------------------------------------------
// function createSelectBox(startYear, endYear) {
//     // Your Code Here
//     document.write(`<select>`)
//     for (; startYear <= endYear; startYear++) {
//         console.log(`${startYear}`)
//           document.write(`<option value=${startYear}>${startYear}</option>`)
//     }
//     document.write(`</select>`)
//   }
//   createSelectBox(2000, 2021);
//--------------------------------------------------------------------------------------------------------------------
// function multiply(...mult) {
//   let x = 1;
//   for (let i = 0; i < mult.length; i++) {
//     if (isNaN(mult[i]) == true) {
//       continue;
//     }
//     x *= parseInt(mult[i]);
//   }
//   return x;
// }
// console.log(multiply(10, 20)); // 200
// console.log(multiply("A", 10, 30)); // 300
// console.log(multiply(100.5, 10, "B")); // 1000
