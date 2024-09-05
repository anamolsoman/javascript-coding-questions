function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

let taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

function asyncParallel(taskList, callback) {
  let result = [];
  let completedTasks = 0;

  taskList.forEach((asyncTask) => {
    asyncTask((value) => {
      result.push(value);
      completedTasks = completedTasks + 1;

      if (completedTasks === taskList.length) {
        callback(result);
      }
    });
  });
}

asyncParallel(taskList, (result) => {
  console.log(result);
});
