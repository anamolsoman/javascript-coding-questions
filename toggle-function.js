let arr = ["on", "off", "stop"];

function toggle(arr) {
  console.log(arr);
  let current = -1;
  length = arr.length;

  return function () {
    current++;
    current = current < length ? current : 0;
    return arr[current];
  };
}

const toggleFunc = toggle(arr);

console.log(toggleFunc());
console.log(toggleFunc());
console.log(toggleFunc());
console.log(toggleFunc());
console.log(toggleFunc());
console.log(toggleFunc());
