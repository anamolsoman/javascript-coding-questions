let arr = [7, 6, 5, 4, 3];

function MergeSort(arr) {
  console.log(`MergeSort called with: ${arr}`); // Log the input array
  if (arr.length <= 1) {
    console.log(`Base case reached with: ${arr}`); // Log base case
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  console.log(`Merging: ${left} and ${right}`); // Log the arrays being merged

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

  console.log(`Partially merged: ${merged}`); // Log partially merged array
  let result = merged.concat(left.slice(leftIndex), right.slice(rightIndex));
  console.log(`Fully merged: ${result}`); // Log fully merged array
  return result;
}

console.log(`Final sorted array: ${MergeSort(arr)}`); // Log the final sorted array
