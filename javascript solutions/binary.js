function sortLowHigh(a, b) {
  return a - b;
}


function binarySearch(list, item) {
  var sorted = list.sort(sortLowHigh);
  console.log(sorted);
}

var myNums = [30, 2, 1, 9, 15];
myNums.sort(sortLowHigh);
console.log(myNums);
