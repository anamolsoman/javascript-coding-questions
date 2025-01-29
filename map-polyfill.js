// Polyfill of Map

let arr = [1, 2, 3, 4, 5];
// let res = arr.map((val, index, array) => {
//   console.log(array, "aaaa");
//   return val ==2;
// });

Array.prototype.customMap = function (callbackFunc) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callbackFunc(this[i], i, this));
  }
  return res;
};

let res2 = arr.customMap((val) => {
  console.log(val);
  return val == 2;
});

console.log(res2);
