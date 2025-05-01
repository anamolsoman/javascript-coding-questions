let arr = [7, 6, 5, 4, 3];

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  console.log(arr);

  let merged = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  // console.log(merged);
  return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(MergeSort(arr));
