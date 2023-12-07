// //log for print in console
// console.log(
//   "%cgsdfgseeas fa asera %cew rgeg",
//   "color: red; font-size: 40px",
//   "color: blue; font-size: 40px"
// );
// //to see error in console
// console.error("error");
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.table(["ahmad", "masf", "sadfas"]);
// my_name = "osama";
// window.alert(`hello ${my_name}`);
// document.write(`hello ${my_name}` + " ");
// console.log(`hello %c${my_name}`, "color:red;font-size:30px;");
// window.alert("hello " + my_name);
// document.write(" hello " + my_name);
// console.log(" hello  " + "%c" + my_name, "color:red;font-size:30px;");
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// //data type
// console.log(typeof "FADI");
// console.log(typeof 50);
// console.log(typeof 55.5);
// console.log(typeof [50, 5, 12]);
// console.log(typeof ["fadi", "osama", "samir"]);
// console.log(typeof { name: "fadi", age: 50, country: "lb" });
// console.log(typeof true);
// console.log(typeof false);
// console.log(typeof undefined);
// console.log(typeof null);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// // make variable
// var user = "osama";
// console.log(user);
// console.log(hello);
// //innerHTML for edit in HTMl
// hello.innerHTML = "option";
//-------------------------------------------------------challenge-----------------------------------------------------------------------------------------------
//challange
// let title = "elzero ",
//   paragraph = "elzero web school",
//   date = "10/15",workup=`<div class="all">
//   <h1 class="title">hello ${title}</h1>
//   <p>${paragraph}</p>
//   <div class="time">${date}</div>
//   </div>`;

// document.write(workup.repeat(4));
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// //arithmetic operator
// console.log(10 + 10);//addition
// console.log(10 + " osama");//addition with two string
//console.log(+"10"+10)//retrun number
// console.log(10 - 10);//subtraction
// console.log(10 - " osama"); //nan
// console.log(typeof NaN);
// console.log(10 * 20);//multiplication
// console.log(10 * (-20 * 8));//multiplication
// console.log(2 ** 4);//power
// console.log(10 % 2);//modelo
// console.log(11 % 2);//modelo
// let num = 1;
// num++;//increment
// ++num;//increment
// num--;//decrement
// --num;//decrement
// ++num;//increment
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// assignment operators
// let a = 10;
// a = a + 20;
// //or
// a += 20;
// //and
// a = a - 20;
// //or
// a -= 20;
// //and
// a = a / 20;
// //or
// a /= 20;
// //and
// a = a % 20;
// //or
// a %= 20;
//------------------------------------------------------challenge--------------------------------------------------------------------------------------------
// let a = "-100";
// let b = "20";
// let c = 30;
// let d = true;
// console.log(-a * b); //2000
// console.log(-(--a) * +(++d) - --c); //173
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(1000000);
// console.log(1_000_000);
// console.log(1e6);
// console.log(10 ** 6);
// console.log(10 * 10 * 10 * 10 * 10 * 10);
// console.log(1000000.0);
// console.log(Number.MAX_SAFE_INTEGER);//max number safe
// console.log(Number.MAX_VALUE);//max number
// console.log(Number.MAX_VALUE+20000);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log((10.34234123132).toString());//retrun string
// console.log((10.34234123132).toFixed(2));//if want spacfic number after comma
// console.log(+"10.34234123132 osama");//retrun not a number
// console.log(parseInt("10.34234123132 osama"));//retrun intger number if it is first
// console.log(parseFloat("10.34234123132 osama"));//retrun decimal number if it is first
// console.log(Number.isInteger("100"))//false
// console.log(Number.isInteger(100.500))//false
// console.log(Number.isInteger(100))//true
// console.log(Number.isNaN("osama"))//false
// console.log(Number.isNaN("osama"/20))//true
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(Math.round(99.2)); // if under .5 give 0
// console.log(Math.round(99.5)); //if above .5 give 1
// console.log(Math.ceil(99.2)); // any number after the comma will give 1
// console.log(Math.floor(99.9)); // any number after the comma will give 0
// console.log(Math.max(20, 30, 3)); //max number between list
// console.log(Math.min(20, 30, 3)); //min number between list
// console.log(Math.pow(2, 3)); //power same console.log(2 ** 3);
// console.log(Math.random());//random number
// console.log(Math.trunc(99.5));//take only intger number
//--------------------------------------------number challenge-----------------------------------------------------------------------------------------------
// let a = 1_00;
// let b = 2_00.5;
// let c = 1e6;
// let d = 2.4;
// //find smallest number in all variables return integer
// console.log(Math.trunc(Math.min(a, b, c, d)));

// //use variables  a + d one time to get the needed out put
// console.log(Math.pow(a, Math.trunc(d))); //10000
// //get integer "2" from d variables with 4 methods
// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.ceil(d)-1);
// //use variables b+d to get this values
// console.log((Math.floor(b)/Math.ceil(d)).toFixed(2))//66.6=>string
// console.log(Math.ceil(b)/Math.ceil(d))//67=>number
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// let theName = "  ahmed  ";
// console.log(theName[1]);
// console.log(theName[5]);
// console.log(theName.charAt(1));
// console.log(theName.charAt(5));
// console.log(theName.length);
// console.log(theName.trim());
// console.log(theName.toUpperCase());
// console.log(theName.toLowerCase());
// console.log(theName.trim().charAt(2).toUpperCase());
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = "elzero web school";
// console.log(a.indexOf("web")); //for search on start point of input
// console.log(a.lastIndexOf("web")); //for search on start point of input
// console.log(a.indexOf("o")); //for search on start point of input
// console.log(a.lastIndexOf("o")); //for search on start point of input
// console.log(a.slice(2, 6)); //if you want to cut some ports of p from first
// console.log(a.slice(-2, -6)); //if you want to cut some ports of p from last
// console.log(a.repeat(5)); //for repeat the p
// console.log(a.split(" " /*from where you want split*/, 2 /*limit of split*/));
//---------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = "elzero web school";
// console.log(a.length);
// console.log(a.substring(17,-true)); //same slice
// console.log(a.substring(6, 2)); //same slice
// console.log(a.substring(-10, 6)); //0 -6
// console.log(a.substring(a.length - 5, a.length - 3));
// console.log(a.substr(0));
// console.log(a.substr(17));
// console.log(a.substr(-3));
// console.log(a.includes("web"));
// console.log(a.includes("web", 8));
// console.log(a.startsWith("web", 7));
// console.log(a.endsWith("o", 6));
//---------------------------------string challenge-----------------------------------------------------------------------------------------------------------
// let a = "Elzero web school";
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.split(" ", 1));
// console.log(a.substr(0, 7) + a.substr(11));
// console.log(
//   a.charAt(0).toLocaleLowerCase() + a.slice(1, 16).toUpperCase() + a.charAt(16)
// );
//----------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(10 == "10"); //"equal"compare value only
// console.log(10 != "10"); //"not equal"compare value only
// console.log(10 === "10"); //"equal"compare between value and typeof
// console.log(10 !== "10"); //"not equal"compare between value and typeof
// console.log(10 > "10"); //compare between smaller and bigger
// console.log(10 < "10"); //compare between smaller and bigger
// console.log(10 <= "10"); //compare between smaller and bigger or equal
// console.log(true);
// console.log(!true); // "!" not
// console.log(!(10 == "10")); //example
// console.log(10 == "10" && 10 > 8 && 10 >= 10); //"&&" and ,example
// console.log(10 == "10" || 10 > 8 || 10 >= 10); //"||" or ,example
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//if condition
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// if (price == true) {
//   price -= discountAmount;
// } else if (country == "Egypt") {
//   price -= 40;
// } else if (country == "syria") {
//   price -= 50;
// }else{
//     price -= 10;
// }
// console.log(price);
//----------------------------------------------------------------------------------------------------------------------------------------------------------
//nesting if
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "Egypt";
// let students = true;
// if (price == true) {
//   price -= discountAmount;
// } else if (country == "Egypt") {
//   if (students == true) {
//     price -= discountAmount + 30;
//   } else {
//     price -= discountAmount + 10;
//   }
// } else if (country == "syria") {
//   price -= 50;
// } else {
//   price -= 10;
// }
// console.log(price);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// //condition (ternary) operator
// let theName = "mona";
// let thwGender = "female";
// let theAge = 30;
// if (thwGender === "male") {
//   console.log("Mr");
// } else {
//   console.log("Mrs");
// }
// //condition "?"=if condition ":"else if or else
// thwGender === "male" ? console.log("Mr") : console.log("Mrs");
// let result = thwGender === "male" ? "Mr" : "Mrs"; //can you save it in variable
// console.log(result); //example
// console.log(`hello ${thwGender === "male" ? "Mr" : "Mrs"}${theName}`); //example
// theAge < 20
//   ? console.log("20")
//   : theAge > 20 && theAge < 60
//   ? console.log("between 20 and 60")
//   : theAge > 60
//   ? console.log("geater than 60")
//   : console.log("unknown");
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// /*
// logical or"||":
//     null +undefined+any falsy Value
// nullish coalescing operator "??":
//     null+undefined
// */
// console.log(Boolean(100)); //falsy value
// console.log(Boolean(-100)); //falsy value
// console.log(Boolean(0)); //falsy value
// console.log(Boolean("")); //falsy value
// console.log(Boolean(null)); //falsy value
// let price = 0;
// console.log(`the price is ${price || 200}`); //logical or"||":null +undefined+any falsy Value
// console.log(`the price is ${price ?? 200}`); //nullish coalescing operator "??":null+undefined
//----------------------------------------------challenge if condition----------------------------------------------------------------------------------------------------
// let a = 10;
// a > 10
//   ? console.log(10)
//   : a >= 10 && a <= 40
//   ? console.log("10 to 40")
//   : a > 40
//   ? console.log(">40")
//   : console.log("unknown");

// let st = "Elzero Web School";
// if (st.repeat(2).length.toString() === "34") {
//   console.log("Good");
// }
// //W poition may change
// if (st.charAt(7) === "W") {
//   console.log("Good");
// }
// if (st !== "string") {
//   console.log("Good");
// }
// let s = "10";
// if (typeof +st === "number") {
//   console.log("Good");
// }

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//   console.log("Good");
// }
//-------------------------------------------------------challenge switch--------------------------------------------------------------------------------------------------
// let job = "support";
// let salary = 0;
// switch (job) {
//   case "manager":
//     salary = 8000;
//     break;
//   case "IT":
//   case "support":
//     salary = 6000;
//     break;
//   case job === "Developer" || job === "Designer":
//     salary = 7000;
//     break;
//   default:
//     salary = 4000;
//     break;
// }
// console.log(salary);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir", ["osama", "lolo"]];
// console.log("hello " + a[1]);
// console.log("hello " + a[1][1]);
// console.log("hello " + a[4][1][1]);
// //or
// console.log(`hello ${a[1]}`);
// console.log(`hello ${a[1][1]}`);
// console.log(`hello ${a[4][1][1]}`);

// console.log(a);
// //edit on array
// a[0] = "jamal";
// console.log(a);
// a[4] = "mom";
// console.log(a);
// console.log(Array.isArray(a));//to check it if Array
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir"];
// console.log(a.length);
// a[a.length] = "gamil";
// console.log(a);
// a.length = 3;
// console.log(a);
// a.unshift("miss", "idol");//add to first
// console.log(a);
// a.push("khra", "less");//add to last
// console.log(a);
// a.pop();//delete from last
// console.log(a);
// a.shift();//delete from first
// console.log(a);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["osama", "ahmed", "fadi", "samir", "ahmed"];
// console.log(a);
// console.log(a.indexOf("ahmed"));//search in Array
// console.log(a.indexOf("ahmed", 2 /*where u want it start*/));
// console.log(a.lastIndexOf("ahmed"));//The opposite
// console.log(a.lastIndexOf("ahmed", -2 ));//The opposite
// //if you sreach in array to string not found give -1
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = [10, "sayed", "mohamed", "90", 9000, 100, 20, "10", -20, -10];
// console.log(a.sort());
// console.log(a.reverse());
// //can you put it with some ,like:
// console.log(a.sort().reverse());
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["Ahmed", "sayed", "Ali", "Osama", "Gamal", "Ameer"];
// console.log(a);
// //slice create new array
// console.log(a.());
// console.log(a.slice(slice1));
// console.log(a.slice(1, 3));
// console.log(a.slice(-3));
// console.log(a.slice(1, -2));
// console.log(a.slice(-4, -2));
// console.log(a);
// //splice can you add and delete and select from where start
// a.splice(1, 2, "fadi", "samara");
// console.log(a);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = ["Ahmed", "sayed", "Ali", "Osama", "Gamal", "Ameer"];
// let b = [" samar", "sameh "];
// let c = ["haytham", "shadi"];
// let all = a + b + c;//false try
// console.log(all);
// let all1 = a.concat(b,c);//if you want make many array in one array
// console.log(all1);
// console.log(all1.join("|").toUpperCase());//for change to string or between it  in array
// console.log(all1.join());
//-----------------------------------------challenge Array-------------------------------------------------------------------------------------------------------------------
// let zero = 0;

// let counter = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// //write code here

// console.log(my.slice(my.indexOf("Ahmed"), my.indexOf("Gamal")).reverse()); //["Osama", "Elham", "Mazero","Ahmed"]

// console.log(my.slice(my.indexOf("Mazero"), counter).reverse()); //["Elham", "Mazero"]

// my.splice(zero, my.length, "Elzero");

// console.log(my); //"Elzero"

// console.log(
//   my[+zero][my[zero].indexOf("r")] + my[+zero][my[zero].indexOf("o")].toUpperCase()
// ); //"rO"
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // for([1][2][3]){
// //   //block of code
// // }
// a=10
//for loop
// for(let i =0 ; i<=a ;i++){
//   console.log(i)
// }
// for (let i = 0; i < a; i++) {
//   console.log("hello number "+i)
// }
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let a = [1, 2, "osama", "ahmed", 1, 3, "sayed", "ali", "amira"];
// for (let i = 0; i < a.length; i++) {
//   if (isNaN(a[i])) {//check the array"a" if it is a number
//     console.log(a[i]);
//   }
// }
// //or=>same output
// for (let i = 0; i < a.length; i++) {
//   if (typeof a[i] === "string") {
//     console.log(a[i]);
//   }
// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //nested loop
// let products = ["keyboard","mouse","pen","pad","monitor"]

// let color =["red","green","black"]
// let models=[2020,2021]
// for (let i = 0; i < products.length; i++) {
//     console.log(`#`.repeat(15))
//      console.log(`#${products[i]}`)
//      console.log(`#`.repeat(15))
//      console.log(`color: `)
// for (let j = 0; j < color.length; j++) {
//     console.log(`-  ${color[j]}`)
// }
// console.log(`models: `)
// for (let k = 0; k < models.length; k++) {
//     console.log(`-  ${models[k]}`);

// }

// }
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let color = ["red", "green", "black"];
// // for (let i = 0; i < products.length; i++) {
// //   if (products[i] === "pen") {
// //     break; //for stop
// //   }
// //   console.log(products[i]);
// // }
// // products = ["keyboard", 55, "mouse", 12, "pen", "pad", "monitor", 11];
// // for (let i = 0; i < products.length; i++) {
// //   if (typeof products[i] === "number") {
// //     continue; //من اجل الحذف والاستمرار
// //   }
// //   console.log(products[i]);
// // }
// //and
// mainloop: for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
//   nestloop: for (let j = 0; j < color.length; j++) {
//     console.log(color[j]);
//     if (color[j] == "green") {
//       break mainloop;//to break main loop from nested loop
//     }
//   }
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor"];
// let i = 0;
// for (;;) {
//   console.log(products[i]);
//   i +=1;
////or =>i++;
//   if (i === products.length) {

//     break;
//   }

// }
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
// let color = ["red", "green", "blue"];
// let showCount = 5;
// document.write(`<h1>show${showCount} products</h1>`);
// for (let i = 0; i < showCount; i++) {
//   document.write(`<div>`);
//   document.write(`<h3> [${i + 1}] ${products[i]} </h3>`);
//   for (let j = 0; j < color.length; j++) {
//     document.write(`<p>${color[j]} </p>`);
//     }
//     document.write(`<p>${color.join(" | ")} </p>`);
//     document.write(`</div>`);
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
// let i = 0;
// while (i < products.length) {
//   console.log(products[i]);
//   i++;
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let products = ["keyboard", "mouse", "pen", "pad", "monitor", "iphone"];
// let i = 0;
// do{
//     console.log(i);
//     i++;
// }
// while (false) {

// }
// console.log(i);
//----------------------------------callenge loop--------------------------------------------------------------------------------------------------------------------------------
// let myAdmins = ["Ahmed", "Osama", "Sayed", "htop", "jamera"];
// let myEmployees = [
//   "Amgad","Samah","Ameer","jawaker","jasmai","jassm",
//   "hala","horse","Omar","Othman","Othman","Othman",
//   "Othman","ADmin","ADmin","ADmin","ADmin","ADmin",
//   "Amany","Samia","Samia","Samia","Samia","Samia",
// ];
// let sizeAdmins = 5;
// let sizeMyEmployees = 0;

// document.write(`<div><h3>we have ${sizeAdmins} Admins</h3></div>`);
// for (let i = 0; i < sizeAdmins; i++) {
//   document.write(`<div>`);
//   document.write(`<p>
//   the Admin for team ${i + 1} is ${myAdmins[i]}</p>
//   <h2>member team: </h2>`);

//   for (let j = 0; j < myEmployees.length; j++) {
//     if (myAdmins[i].charAt(0) == myEmployees[j].charAt(0)) {
//       document.write(`<p>${sizeMyEmployees++ + 1} - ${myEmployees[j]}</p>`);
//     }
//   }
//   sizeMyEmployees = 0;
//   document.write(`<hr>`);
//   document.write(`</div>`);
// }
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //basic example
// function hello(userName) {
//   console.log(`hello ${userName}`);
// }
// let a = `Osama`;
// hello(a);
// hello(`Ahmed`);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function hello(userName, age) {
//   if (age < 20) {
//     console.log(`app is not stuitable for you`);
//   } else console.log(`hello ${userName} your age is ${age}`);
// }
// let a = `gaza`,
//   x = 40;
// hello(a, x);
// hello("Osama", 20);
// hello("Ahmed", 30);
// hello("gasm", 10);
// //other example
// function geneateYear(start, end, exclude) {
//   for (let i = start; i <= end; i++) {

//     if (i == exclude) {
//       continue;
//     }console.log(i);
//   }
// }
// geneateYear(1982, 2021, 2020);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function generate(start, end, exclude) {
//   for (let i = start; i <= end; i++) {
//     if (i == 15) {
//       return `interruptting`;
//     }
//     console.log(i);
//   }
// }
// console.log(generate(1, 20));
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function sayHello(userName="unkown",/*(default value)this if you dont have age*/ age="unknown") {
// //or this same out put
//     age=age||"unknow"
// //or this same out put
//   if (age === undefined) {
//     age = "unknow";
//   }
//   return `hello ${userName} your age is ${age}`;
// }
// console.log(sayHello("Osama"));
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function calc(
//   ...numbers /*"..." that mean you dont know how much var and this is array*/
// ) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return `this is sum of number is ${result}`;
// }
// console.log(calc(50, 30, 10, 10));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function showInfo(us = "un", ag = "un", rt = 0, show = "yes", ...sk ) {
//   document.write(`<div>`);
//   document.write(`<ph2>welcome ${us}</h2>`);
//   document.write(`<p>age: ${ag}</p>`);
//   document.write(`<p>hour rate is $${rt}</p>`);
//   if (show === "yes") {
//     if (sk.length > 0) {
//       document.write(`<p>skils is ${sk.join(" | ")}</p>`);
//     } else {
//       document.write(`<p>no skills</p>`);
//     }
//   } else {
//     if (sk.length > 0) {
//       document.write(`<p>skills are hidden</p>`);
//     } else {
//       document.write(`<p>no skills and hidden</p>`);
//     }
//   }
//   document.write(`</div>`);
// }
// showInfo("ahmed", 20, 30, "yes","html","css" );
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//
//-------------------------------------------------------------
// function showDetails(a, b, c) {
//   let name, age, status;
//   if (typeof a === "string") {
//     name = a;
//   } else if (typeof a === "number") {
//     age = a;
//   } else {
//     if (a == true) {
//       status = `availabe`;
//     } else {
//       status = `not availabe`;
//     }
//   }
//   if (typeof b === "string") {
//     name = b;
//   } else if (typeof b === "number") {
//     age = b;
//   } else {
//     if (b == true) {
//       status = `availabe`;
//     } else {
//       status = `not availabe`;
//     }
//   }
//   if (typeof c === "string") {
//     name = c;
//   } else if (typeof c === "number") {
//     age = c;
//   } else {
//     if (c == true) {
//       status = `availabe`;
//     } else {
//       status = `not availabe`;
//     }
//   }
//   typeof a === "string"
//     ? (name = a)
//     : typeof a === "number"
//     ? (age = a)
//     : typeof a == true
//     ? (status = `available`)
//     : (status = `not availabe`);
//   typeof b === "string"
//     ? (name = b)
//     : typeof b === "number"
//     ? (age = b)
//     : b == true
//     ? (status = `available`)
//     : (status = `not availabe`);
//   typeof c === "string"
//     ? (name = c)
//     : typeof c === "number"
//     ? (age = c)
//     : c == true
//     ? (status = `available`)
//     : (status = `not availabe`);
//   console.log(`hello ${name} your age is ${age} ${status} `);
// }
// showDetails("fadi", 30, true);
// showDetails(30, false, "fadi");
// showDetails("fadi", true, 30);
// showDetails(false, "fadi", 30);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let calculator = function (num1, num2) {
//   //"anonymous function" this function made for one action
//   return num1 + num2;
// };
// console.log(calculator(10, 20));
// //example
// document.getElementById("show").onclick = function () {
//   console.log("show");
// };
// // other example
// setTimeout(function () {
//   document.write(`<p>hello fadi</p>`);
// }, 5000);
// // other example

// function sayhello() {
//   console.log("hello osama");
// }
// document.getElementById("show").onclick = sayhello;
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // example 1
// function saymessage(fname, lname) {
//   let message = `hello`;
//   //nest function
//   function concatmsg() {
//     message = `${message} ${fname} ${lname}`;
//   }
//   concatmsg();
//   return message;
// }
// console.log(saymessage("osama", "ahmed"));

// //example 2

// function saymessage(fname, lname) {
//   let message = `hello`;
//   //nest function
//   function concatmsg() {
//     return`${message} ${fname} ${lname}`;
//   }
//   return concatmsg();
// }
// console.log(saymessage("osama", "ahmed"));

// //example 3

// function saymessage(fname, lname) {
//   let message = `hello`;
//   //nest function
//   function concatmsg() {
//     function getFullName(){
//         return`${fname} ${lname}`

//     }
//     return`${message} ${getFullName()}`;
//   }
//   return concatmsg();
// }
// console.log(saymessage("osama", "ahmed"));
// -----------------------------------------------------------------------------------------------------------------------------------------------
// example 1
// // regular function
// let print= function() {
//   return 10;
// }

// //vs

// // arrow function
// let print= _ =>10
// console.log(print());

// example 2

// // regular function
// let print = function (num) {
//   return num;
// };
// //vs
// // arrow function
// print = num => num;
// console.log(print(100));

// example 3

// // regular function
// let print = function (num1, num2) {
//   return num1 + num2;
// };
// //vs
// // arrow function
// print = (num1, num2) => num1 + num2;
// console.log(print(100,50));

// example 4

// // regular function
// let print = function (num1, num2) {
//   let a = 10;
//   num1 = a;
//   return num1 + num2;
// };
// //vs
// // arrow function
// print = (num1, num2) => {
//   a = 10;
//   num1 = a;
//   return num1 + num2;
// };
// console.log(print(100, 50));
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //global variable
// let a = 1;
// var b = 2;
// function showText() {
//   //local variable
//   let a = 10;
//   var b = 20;
//   //first for local variable if it isnt found in local it sreach in global

//   console.log(`form local ${a}`);
//   console.log(`form local ${b}`);
// }
// //you cant use local variable out of function
// console.log(`form global ${a}`);
// console.log(`form global ${b}`);
// showText();
//-----------------------------------------------------------------------------------
// let x = 10;//global variable
// if (x == 10) {
//   let x = 50;// local variable
//   console.log(x)
// }

// console.log(x);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// // let name= function(...names){
// // return console.log(`string [${names.join(],[)}] => done`)
// // }
// let Name = (...names) => console.log(`string [${names.join("],[")}] => done`);
// console.log(Name("fadi", "Osama", "Mohamed", "Ali", "Ibrahim"));

// // let calc = function (one, two, ...nums) {
// //     return one + two + +nums[+flase];
// // };
// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + +nums[myNumbers[1]+myNumbers[2]-myNumbers[3]];
// console.log(calc(20, 50, 10, 60)); //80
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myNums = [1, 2, 3, 4, 5, 6];
// let newArray = [];
// example 1
// for (let i = 0; i < myNums.length; i++) {
//   newArray.push(myNums[i] + myNums[i]);
// }
// console.log(newArray);

// higher order function
// same idea with Map

// example 2

// let addSelf = myNums.map(function (element, index, arr) {
//   return element + element;
// }, 10);
// let addSelf = myNums.map((e) => e + e);
// console.log(addSelf);

// example 3

// function addition(ele) {
//   return ele + ele;
// }
// let add = myNums.map(addition);
// console.log(add);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";
// //so1
// let sw = swappingCases.split("").map(function (ele) {
//   return ele == ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// });
// //so2
// console.log(sw.join(""));
// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });
// //so3
// console.log(inv);
// let ing = ignoreNumbers.split("").map(function (ele) {
//   return isNaN(parseInt(ele))? ele :"";
// });
// console.log(ing.join(""));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //get friends with Name start with A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];
// let filterfriends = friends.filter(function (ele) {
//   return ele.startsWith("A");
// });
// console.log(filterfriends);

// // get even Number only
// let number = [11, 20, 2, 5, 17, 10];
// let evenNumbers = number.filter(function (ele) {
//   return ele % 2 === 0;
// });
// console.log(evenNumbers);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //filter words more than 4 characters
// let sentence = "I Love Foood Code Too Playing Much ";
// let samllWords = sentence.split(" ").filter(function (ele) {
//   return ele.length <= 4;
// });
// console.log(samllWords.join(" "));
// //ignore numbers
// let ignoreNumbers = "Elz123er4o";
// let ign = ignoreNumbers.split("").filter(function (ele) {
//   return isNaN(parseInt(ele));
// });
// console.log(ign.join(""));
// let mix = "A13B2ZX";
// let mul = mix
//   .split("")
//   .filter(function (ele) {
//     return parseInt(ele);
//   })
//   .map(function (ele) {
//     return ele*ele;
//   });
// console.log(mul.join(""));
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let nums = [10, 20, 15, 30];
// let add = nums.reduce(function (acc, current, index, arr) {
//   console.log(`acc: ${acc}`);
//   console.log(`current ele: ${current}`);
//   console.log(`current index: ${index}`);
//   console.log(`arr: ${arr}`);
//   console.log(acc + current);
//   return acc + current;
// }, 5 /*<=start point of reduce*/);
// console.log(add);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let theBiggest = [
//   "bla",
//   "Propaganda",
//   "other",
//   "AAA",
//   "Battery",
//   "Test",
//   "Propaganda_two",
// ];
// let check = theBiggest.reduce(function (acc, current) {
//   return acc.length > current.length ? acc : current;
// });
// console.log(check);
// let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "@", "O"];
// let elzero = removeChars
//   .filter(function (ele) {
//     return ele != "@";
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(elzero);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function (ele) {
//   ele.onclick = function () {
//     // for remove class acive
//     allLis.forEach(function (ele) {
//       ele.classList.remove("active");
//     });
//     // for add class active
//     this.classList.add("active");
//     // for delete divs
//     allDivs.forEach(function (ele) {
//       ele.style.display = "none";
//     });
//   };
// });
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split(",")
//   .filter(function (ele) {
//     return isNaN(parseInt(ele));
//   })
//   .map(function (ele) {
//     return ele.startsWith("_") ? " " : ele.charAt();
//   })
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   })
//   .slice(false, -true);
// console.log(solution);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let user = {
//   //properties
//   theName: "osama",
//   theAge: 38,
//   //method
//   sayHello: function () {
//     return `hello`;
//   },
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.sayHello());
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myvar = "country"; //dynamic property name by var
// let user = {
//   theName: "Osama",
//   //this name not valid we can use it by '[""]' to becaome valid and you can use valid name in it too
//   /*||*/
//  /*\||/*/
//   /*\/*/
//   country: "egypt",
//   "country of": "egypt",
//   //or this
//   100: "egypt",
// };
// //doesnt work in other way
//  /*||*/
// /*\||/*/
//  /*\/*/
// console.log(user.theName); //valid name with dot notation =>work
// console.log(user.country); //valid name with dot notation =>work
// console.log(user["theName"]); //valid name with bracket notation =>work
// console.log(user["country of"]); //not valid name with bracket notation =>work
// console.log(user["100"]); //not valid name with bracket notation =>work
// console.log(user[myvar]); //valid name with bracket notation without quotation cause it is var =>work
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let user = {
//   name: "Osama",
//   age: 38,
//   skill: ["html", "css", "js"],
//   available: true,
//   adresses: {
//     ksa: "riyadh",
//     egypt: {
//       one: "cairo",
//       two: "Giza",
//       three:"skandria"
//     },
//   },
//   checkAv: function () {
//     if (user.available === true) {
//       return `free for work`;
//     } else {
//       return `not free`;
//     }
//   },
// };
// console.log(user.name);
// console.log(user.age);
// console.log(user.skill);
// console.log(user.skill[2]);
// console.log(user.skill.join(" | "));
// //you can write it how you want bracket notation or dot notation
// console.log(user.adresses.ksa);
// console.log(user.adresses.egypt.one);
// console.log(user["adresses"].egypt["two"]);
// console.log(user["adresses"]["egypt"].three);
// //for check if it is available
// console.log(user.checkAv());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let user =new Object({
//     age:20,
// });

// console.log(user);

// user.age = 30;

// user["country"] = "egypt";

// user.sayHello = function () {
//   return `hello`;
// };

// console.log(user);

// console.log(user.age);

// console.log(user.country);

// console.log(user.sayHello());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(this); //this is same window
// console.log(this === window); //example give true
// myVar = 100;
// console.log(window.myVar);
// console.log(this.myVar);
// function sayHello() {
//   console.log(this);
//   return this;
// }
// sayHello();
// console.log(sayHello() == window);
// document.getElementById("c1").onclick = function () {
//   console.log(this);//for take button you click on it
// };
// let user = {
//   age: 38,
//   ageInDays: function () {
//     console.log(this)//return to method
//     return user.age * 365;
//   },
// };
// console.log(user.age);
// console.log(user.ageInDays());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let user = {
//   age: 40,
//   doubleAge: function () {
//     return user.age * 2;
//   },
// };

// console.log(user);
// console.log(user.age);
// console.log(user.doubleAge());

// let obj = Object.create({});//way to make object
// obj.age = 100;
// console.log(obj);
////or
// let copyObj = Object.create(user);//make object by using other object

// copyObj.age = 50;
// console.log(copyObj);
// console.log(copyObj.age);
// console.log(copyObj.doubleAge());
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let obj1 = {
//   prop1: 1,
//   meth1: function () {
//     return this.prop1;
//   },
// };
// let obj2 = {
//   prop2: 2,
//   meth1: function () {
//     return this.prop2;
//   },
// };
// let targetObject = {
//   prop1: 1,
//   prop3: 3,
// };
// //"object.assign it is using to make new object by
// //use other object or many other object example: "
// let finalObject = Object.assign(targetObject, obj1, obj2);
// //and can edit from it
// finalObject.prop1 = 200;
// finalObject.prop4 = 20;
// console.log(finalObject.prop4);
// console.log(finalObject);
// // and you can add in object
// let newObject = Object.assign({}, obj1, { prop5: 50, name: "fadi" });
// console.log(newObject);
// console.log(newObject.name);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // DOM => document Object model
// let myIdElement = document.getElementById("my-div");//to call from html by ID
// console.log(myIdElement);

// let myTagElements = document.getElementsByTagName("p");//by tagname like p ,div, button
// console.log(myTagElements);
// console.log(myTagElements[1]);
// console.log(myTagElements[1].innerHTML="test");

// let myClassElements = document.getElementsByClassName("my-span");//by class
// console.log(myClassElements[0]);

// let myQueryElement = document.querySelector(".my-span");//for all can use it to ID,tag,class but one element
// console.log(myQueryElement);

// let myQueryElements = document.querySelectorAll(".my-span");//for all can use it ID,tag,class but more elements
// console.log(myQueryElements);
// console.log(myQueryElements[1]);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML); //retrun html with text
// console.log(myElement.textContent); //retrun the text in html
// //example for innerhtml
// myElement.innerHTML = "text from <span>main.js <span>file";
// //example for textcontent
// myElement.textContent = "text from <span>main.js<span>file";
// //change attributes with directly in html
// document.images[0].src = "https://google.com";
// document.images[0].alt = "alternate";
// document.images[0].title = "picture";
// document.images[0].id = "pic";
// document.images[0].className = "img";
// //or
// let mylink = document.querySelector(".link");
// //change attributes with method
// console.log(mylink.getAttribute("class"));//to call att
// console.log(mylink.getAttribute("href"));//to call att
// mylink.setAttribute("href", "https://twitter.com");//to edit or add to att
// mylink.setAttribute("title", "twitter");//to edit or add to att
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(document.getElementsByTagName("p")[0].attributes); //to get all att in element

// let myp = document.getElementsByTagName("p")[0];

// //retrun true or false if you have att or not
// if (myp.hasAttribute("data-src")) {
//   console.log("found");
//   if (myp.getAttribute("data-src") == "") {
//     myp.removeAttribute("data-src"); //to remove att
//   } else {
//     myp.setAttribute("data-src", "new value");
//   }
// } else {
//   console.log("not found");
// }
// myDiv = document.getElementsByTagName("div")[0];
// //retrun true or false if you have atts or not
// if (myDiv.hasAttributes()) {
//   console.log(`found`);
// } else {
//   console.log(`not found`);
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myElement = document.createElement("div"); //to create element
// let myAttr = document.createAttribute("data-custom"); //to create attr
// let myText = document.createTextNode("product one"); //to create text our messege in element
// let myComment = document.createComment("this is div"); //to create comment

// myElement.className = "product"; //attr
// myElement.setAttributeNode(myAttr); //new way to make attr to ele
// myElement.setAttribute("data-test", "testing"); //add attr to ele
// myElement.appendChild(myComment); //to add comment
// myElement.appendChild(myText); //to add messege
// document.body.appendChild(myElement); //to call all in page
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let s = document.createElement("div");
// s.className = "all";

// for (let i = 0; i < 100; i++) {
//     let myElement = document.createElement("div");
//     myElement.className = "product";
//     s.appendChild(myElement);
//   //-----------
//   let myTitle = document.createElement("h3");
//   myElement.appendChild(myTitle);
//   //-----------
//   let myTitleM = document.createTextNode(` product title `);
//   myTitle.appendChild(myTitleM);
//   //-----------
//   let span = document.createElement("span");
//   myTitle.appendChild(span);
//   //-----------
//   let spanM = document.createTextNode(` ${1 + i} `);
//   span.appendChild(spanM);
//   //-----------
//   let myText = document.createElement("p");
//   myElement.appendChild(myText);
//   //-----------
//   let myTextP = document.createTextNode("fadi you are so good");
//   myText.appendChild(myTextP);
//   //-----------
//   document.body.appendChild(s);
// }
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let myElement=document.querySelector("div")
// console.log(myElement.children)//to get the ele
// console.log(myElement.children[0])//to choose the ele
// console.log(myElement.childNodes)//to get all  text
// console.log(myElement.childNodes[0])//to choose text
// console.log(myElement.firstChild)//to get first text
// console.log(myElement.lastChild)//to get last text
// console.log(myElement.firstElementChild)//to get first ele
// console.log(myElement.lastElementChild)//to get last ele
// // let myColor=document.querySelector("p")
// // myColor.style.color="red"
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// //Event==احداث
// let myBtn = document.getElementById("btn");
// myInput=document.getElementById("input")
// mySubmit=document.getElementById("input1")
// myBtn.onclick = function () {
//   //for when click make action
//   console.log("clicked");
// };
// myBtn.oncontextmenu = function () {
//   //for change or edit to click right menu in chrome
//   console.log("clicked");
// };
// myBtn.onmouseenter = function () {
//   //when mouse enter without click ele make ation
//   console.log("enter");
// };
// myBtn.onmouseleave = function () {
//   //when mouse leave without click ele make ation
//   console.log("leave");
// };
// window.onload = function () {
//   //when make refresh to page make action
//   console.log("refreshed");
// };
// window.onscroll = function () {
//   //when scroll make action
//   console.log("scroll");
// };
// window.onresize = function () {
//   //for change media qurey
//   console.log("long");
// };
// myInput.onfocus = function () {
//   //for when focus in input or option  make action
//   console.log("focus");
// };
// myInput.onblur = function () {
//   //for when leave focus in input or option  make action
//   console.log("blur");
// };
// mySubmit.onsubmit = function () {
//   //for when click on submit the info make action
//   console.log("submit");
// };
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// mySubmit = document.getElementById("submit");

// mySubmit.onclick= function (event) {
//   mySubmit.style.color = "red";
//   event.preventDefault();
// };
// document.links[0].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();//for onclick dont make submit
// };
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let mySubmit = document.getElementById("submit");
// let input1 = document.querySelector(".input1");
// let input2 = document.querySelector(".input2");
// onload = function () {//this make action when you do something
//   input1.focus();//this make action auto (simulation)

//   input1.onblur = function () {//this make action when you do something
//     input2.focus();//this make action auto (simulation)
//     input2.onblur = function () {//this make action when you do something
//       mySubmit.click();//this make action auto (simulation)
//     };
//   };
// };
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let element = document.getElementById("my-div");
// console.log(element.classList);
// console.log(element.classList[3]); //for get class by index
// console.log(element.classList.item(3)); //same above
// console.log(element.classList.contains("one")); //for check if this class is exist

// //toggle if not found class add it if found class delete it
// console.log(element.classList.toggle("hello")); //add
// console.log(element.classList.toggle("hello")); //delete
// element.onclick = function () {
//   element.classList.add("me", "she"); //add
//   element.onclick = function () {
//     element.classList.remove("test", "one"); //delete
//   };
// };

// console.log(element.classList);
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let element = document.getElementById("my-div");
// // element.style.color = "red"; //change or add direct
// // element.style.backgroundColor = "black"; //second word first latter cap
// element.style.cssText = `
// background-color :red;
// color :red;
// `; //same css
// element.style.removeProperty("color"); //make remove from css file or form inline style
// element.style.setProperty("font-size", "40px"); //add style
// element.style.setProperty("font-size", "40px", "important"); //can you make it important
// document.styleSheets[0].rules[0].style.setProperty(
//   "background-color",
//   "green",
//   "important"
// );// for add to stylesheets
// document.styleSheets[0].rules[0].style.removeProperty("cursor");//remove form stylesheets
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let element = document.getElementById("my-div");
// let createdP = document.createElement("p");
// let createdP1 = document.createElement("p");
// element.before(createdP); //can put element before other element you choose it
// element.before("hello from js"); //can put string before other element you choose it
// element.after("hello from js"); //can put string after other element you choose it
// element.after(createdP1); //can put element after other element you choose it
// element.append("hello from js"); //for put the string in side the element and in last it
// element.append(createdP); //for put the element in side the element and in last it
// element.prepend("hello from js"); //for put the string in side the element and in first it
// element.prepend(createdP1); //for put the element in side the element and in first it
// element.remove();//for delete element 
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// let container = document.createElement("div");
// container.className = "container";
// let header = document.createElement("div");
// //=============header============================
// header.className = "header";
// container.appendChild(header);
// let logo = document.createElement("div");
// header.appendChild(logo);
// logo.className = "logo";
// let textLogo = document.createTextNode("elzero");
// logo.append(textLogo);
// header.style.cssText = `
// margin:0;
// font-family:Tahoma,Arial;

// display:flex;
// justify-content:space-between;
// align-items:center;
// `;
// logo.style.cssText = `margin:10px;color:green;font-size:20px; font-weight:bold;`
// //===========ul=>list nav========================
// let list = document.createElement("ul");
// list.className = "list";
// header.appendChild(list);

// let menu1 = document.createElement("li");
// let menu2 = document.createElement("li");
// let menu3 = document.createElement("li");
// let menu4 = document.createElement("li");
// list.appendChild(menu1);
// list.appendChild(menu2);
// list.appendChild(menu3);
// list.appendChild(menu4);
// let li1 = document.createTextNode("home");
// menu1.className = "nav";
// menu1.appendChild(li1);
// let li2 = document.createTextNode("about");
// menu2.className = "nav";
// menu2.appendChild(li2);
// let li3 = document.createTextNode("service");
// menu3.className = "nav";
// menu3.appendChild(li3);
// let li4 = document.createTextNode("contact");
// menu4.className = "nav";
// menu4.appendChild(li4);
// list.style.cssText = `
// list-style: none;
//     display: flex;
//     justify-content: end;
//     align-items: center;
// `;
// (menu1.style.cssText = `margin:10px;color:gray;`),
// (menu2.style.cssText = `margin:10px;color:gray;`),
// (menu3.style.cssText = `margin:10px;color:gray;`),
// (menu4.style.cssText = `margin:10px;color:gray;`);

// //===============sction======================
// let all = document.createElement("div");
// all.className = "all";
// container.appendChild(all);
// all.style.cssText=`display: grid;
// grid-template-columns: 1fr 1fr 1fr;
// background-color:rgb(236,236,236)
// `;
// for (let i = 1; i <= 15; i++) {
//   prodact = document.createElement("div");
//   prodact.className = `prodact`;
//   all.appendChild(prodact);
//   num = document.createElement("h1");
//   prodact.appendChild(num);
//   numText = document.createTextNode(i);
//   num.appendChild(numText);

//   p = document.createElement("p");
//   prodact.appendChild(p);
//   pText = document.createTextNode("product");
//   p.appendChild(pText);
//   prodact.style.cssText=`
// display: flex;
// align-items: center;
// flex-direction: column;
// background-color: white;
// margin:5px;

// `
// num.style.cssText=`margin:0;margin-bottom:5px;`
// p.style.cssText=`margin:0;margin-bottom:5px;font-size:9px ;color:rgb(151,151,151)`
// }
// all.append(prodact);

// //===============footer=============================

// let footer = document.createElement("footer");
// footer.className = "footer";
// container.appendChild(footer);
// let CR = document.createElement("div");
// CR.className = "copyRight";
// footer.appendChild(CR);
// let CRText = document.createTextNode("CopyRight 2023");
// CR.appendChild(CRText);

// console.log(container);
// document.body.appendChild(container);
// CR.style.cssText=`
// color:white
// `;
// footer.style.cssText=`
// height: 50px;
//     background: #009688;
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     justify-content: center;
// `
///-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
