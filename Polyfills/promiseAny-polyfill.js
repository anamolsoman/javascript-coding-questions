let promise1 = Promise.reject(5);
let promise2 = Promise.resolve(1);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 0);
});

function customPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    const promiseErrors = new Array(promises.length);
    let rejectedPromises = 0;
    if (!Array.isArray(promises)) {
      reject("Input is not array");
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          promiseErrors[index] = err;
          rejectedPromises = rejectedPromises + 1;
          if (rejectedPromises == promises.length) {
            reject(promiseErrors);
          }
        });
    });
  });
}

customPromiseAny([promise, promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
