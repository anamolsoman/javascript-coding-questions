let promise1 = Promise.reject(5);
let promise2 = Promise.reject(1);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 0);
});

function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject("Input is not array");
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

// function customPromiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     promisesArray.forEach((promise) => {
//       Promise.resolve(promise)
//         // resolve, when any of the input promise resolves
//         .then(resolve, reject)
//         // reject, when any of the input promise rejects
//         .catch(reject);
//     });
//   });
// }

customPromiseRace([promise, promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
