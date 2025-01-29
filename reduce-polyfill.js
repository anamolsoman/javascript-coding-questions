// Polyfill of reduce()

// array.reduce((accumulator, currentValue, index, array) => {
//     // return the new accumulator value
//   }, initialValue);

let arr = [1, 2, 3, 4, 5, 6, 7];

// let res = arr.reduce((acc, val) => {
//   return acc + val;
// }, 0);

// console.log(res);

Array.prototype.customReduce = function (callback, initialValue) {
  let res = initialValue !== undefined ? initialValue : this[0]; // If no initialValue, start with first element

  for (let i = 0; i < this.length; i++) {
    res = callback(res, this[i], i, this);
  }
  return res;
};

let res = arr.customReduce((acc, val) => {
  return acc + val;
}, -20);

console.log(res);
