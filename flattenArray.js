let arr = [
  [1, 2],
  [2, [3, 9]],
  [4, 5],
];
let res = [];
function flattenArray(flattenArr) {
  flattenArr.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      res.push(element);
    }
  });
}
flattenArray(arr);
console.log(res);
