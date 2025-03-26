let arr = [38, 27, 43];

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  // mid = 27
  let left = MergeSort(arr.slice(0, mid));
  // left = [38] -> base condition -> returned
  let right = MergeSort(arr.slice(mid));
  // right = [27, 43] - 1
  // left = [27]
  // right = [43]

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

  return merged.concat(left.slice(leftIndex), right.slice(rightIndex));
}

console.log(MergeSort(arr));
