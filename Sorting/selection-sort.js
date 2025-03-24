let arr = [5, 3, 1, 2, 4, 9, 7];

function SelectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smalletElIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smalletElIndex]) {
        smalletElIndex = j;
      }
    }

    if (smalletElIndex !== i) {
      let temp;
      temp = arr[smalletElIndex];
      arr[smalletElIndex] = arr[i];
      arr[i] = temp;
    }
  }
}

SelectionSort(arr);
console.log(arr);
