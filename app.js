"use strict";
//-------------------------Question-4---------------------
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
  let map = new Map();
  let word;
  arr.forEach((element) => {
    word = element.toLowerCase().split("").sort().join("");

    map.set(word, element);
  });

  let finalArr = Array.from(map.values());
  console.log(finalArr);
}
aclean(arr);
