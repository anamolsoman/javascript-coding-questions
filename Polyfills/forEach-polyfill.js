let res = [1, 2, 3, 4, 5, 6];

Array.prototype.customForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

res.customForEach((value, i) => {
  res[i] = value + 1;
});

console.log(res);
