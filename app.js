"use strict";
//---------------------Question-2----------------
const arr1 = [5, 6, 2];
const arr2 = [3, 7, 1];
const arr3 = [2, 4, 8];
function sorting(arr1, arr2, arr3) {
  let sumArr = [];
  //merge input array with concat
  sumArr = sumArr.concat(arr1, arr2, arr3);
  //sorting our array
  sumArr.sort(compareNumeric);
  console.log(sumArr);
}
sorting(arr1, arr2, arr3);
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
