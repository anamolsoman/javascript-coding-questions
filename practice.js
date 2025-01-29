let nums = [3, 1, 3, 4, 3];
let k = 6;

let sortedArr = nums.sort((a, b) => a - b);

let left = 0;
let right = sortedArr.length - 1;
let pair = 0;

while (left < right) {
  if (sortedArr[left] + sortedArr[right] === k) {
    pair++;
    left++;
    right--;
  }
  if (sortedArr[left] + sortedArr[right] > k) {
    right--;
  }
  if (sortedArr[left] + sortedArr[right] < k) {
    left++;
  }
}

console.log(pair);
