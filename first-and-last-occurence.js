let arr = [1, 2, 3, 5, 5, 6, 6, 7, 8, 9];
let n = 5;

function first(arr, n) {
  let first = 0;
  let last = arr.length - 1;
  let result = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === n) {
      result = mid;
      last = mid - 1;
    } else if (n < arr[mid]) {
      last = mid - 1;
    } else if (n > arr[mid]) {
      first = mid + 1;
    }
  }
  return result;
}

function last(arr, n) {
  let first = 0;
  let last = arr.length - 1;
  let result = 0;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (arr[mid] === n) {
      result = mid;
      first = mid + 1;
    } else if (n < arr[mid]) {
      last = mid - 1;
    } else if (n > arr[mid]) {
      first = mid + 1;
    }
  }
  return result;
}

console.log(first(arr, n));
console.log(last(arr, n));
