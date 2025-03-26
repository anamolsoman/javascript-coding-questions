function customPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Input must be an array"));
      return;
    }

    let results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value: value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason: reason };
        })
        .finally(() => {
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

// Example usage
let promise1 = Promise.resolve(1);
let promise2 = Promise.reject("Error");
let promise3 = new Promise((resolve) => setTimeout(resolve, 100, 3));

customPromiseAllSettled([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));
