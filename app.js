"use strict";
//-------------------------Question-3----------------------
let arr = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];
function unique(arr) {
  const setArr = new Set(arr);

  console.log(setArr);
}
unique(arr);
