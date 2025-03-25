let arr = [5, 3, 1, 2, 4, 9, 7];

function BubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp;
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
}

console.time("BubbleSortWithoutFlag");
BubbleSort(arr);
console.timeEnd("BubbleSortWithoutFlag");
console.log(arr);
