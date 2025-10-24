"use strict";

function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {  
      result.push(item);
    }
  }
  return result;
}


console.log(unique([2, 1, 1, 3, 2]));
