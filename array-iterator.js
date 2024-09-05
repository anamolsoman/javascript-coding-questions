let iterator = helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"

function helper(arr) {
  let nextIndex = 0;
  function next() {
    return nextIndex < arr.length ? arr[nextIndex++] : null;
  }
  function done() {
    return nextIndex >= arr.length ? true : false;
  }
  return {
    next,
    done,
  };
}
