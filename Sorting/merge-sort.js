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

  console.log(left, right);
  let merged = [];

  if (left < right) {
    merged.push(left);
  } else {
    merged.push(right);
  }
  console.log(merged);
  return merged;
}

console.log(MergeSort(arr));
