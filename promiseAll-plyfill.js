let promise1 = Promise.resolve(5);
let promise2 = Promise.reject();
let promise = new Promise((resolve, reject) => {
  resolve(3);
});

function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let resolvedPromises = 0;

    if (!Array.isArray(promises)) {
      return reject("Input is not array");
    }
    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          resolvedPromises = resolvedPromises + 1;
          if (resolvedPromises === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

customPromiseAll([promise1, promise2, promise])
  .then((values) => {
    console.log("promise resolve", values);
  })
  .catch(() => {
    console.log("promise rejected");
  });
