function sortLowHigh(a, b) {
  return a - b;
}


function binarySearch(list, item) {
  var sorted = list.sort(sortLowHigh);
  var len = list.length;
  var start = 0;
  var end = len - 1;
  var mid;

  while(start <= end) {
    mid = (start + end) / 2;

    if (sorted[mid] < item) {
      start = mid + 1;
    } else if (sorted[mid] > item){
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

var myNums = [30, 2, 1, 9, 15];
console.log(binarySearch(myNums, 2));

