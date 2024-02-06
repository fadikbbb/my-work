/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter(function (a) {
    return isNaN(parseInt(a));
  })
  .map(function (a) {
    return a.length > 1 ? a[0] : a !== "Z" ? a : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  })
  .split("_")
  .map(function (a) {
    return a;
  })
  .reduce(function (acc, cu) {
    return `${acc} ${cu}`;
  });

console.log(solution); // Elzero Web School
