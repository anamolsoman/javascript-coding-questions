let arr = [38, 27, 43, 3, 9, 82, 10];

function MergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = MergeSort(arr.slice(0, mid));
  let right = MergeSort(arr.slice(mid));

  let merged = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < left.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  merged.push(...left.slice(i));
  merged.push(...right.slice(j));

  return merged;
}

console.log(MergeSort(arr));
