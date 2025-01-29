// Polyfill of the filter

let arr = [1, 2, 2, 3, 4, 5, 5, 6, 7];

Array.prototype.customFilter = function (callback) {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

let res = arr.customFilter((val) => {
  return val < 4;
});

console.log(res);
