function sortLowHigh(a, b) {
  return a - b;
}


function binarySearch(list, item) {
  var sorted = list.sort(sortLowHigh);
  var len = list.length;
  var start = 0;
  var end = len - 1;

  while(start <= end) {

  }
}

var myNums = [30, 2, 1, 9, 15];
myNums.sort(sortLowHigh);
console.log(myNums);
