// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let currentInterval = intervals[i];
    let lastMerged = result[result.length - 1];

    if (currentInterval[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(currentInterval[1], lastMerged[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
}

console.log(mergeIntervals(intervals));
