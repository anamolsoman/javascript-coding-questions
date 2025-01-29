function add(a, b) {
  return a + b;
}

let res = add(5, 5);

function memoize(func) {
  let cache = new Map();
  return (...arguments) => {
    let key = JSON.stringify(arguments);
    let res;
    if (cache.has(key)) {
      res = cache.get(key);
      console.log("returned from catche");
    } else {
      res = func(...arguments);
      console.log("calculated the result");
      cache.set(key, res);
    }
    console.log(cache);
    return res;
  };
}
let memoizedResult = memoize(add);

console.log(memoizedResult(5, 6));
console.log(memoizedResult(1, 6));
console.log(memoizedResult(5, 6));
