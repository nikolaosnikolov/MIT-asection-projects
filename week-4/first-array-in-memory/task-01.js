// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

//This is your starting array
const arr = [10, 10, 16, 12];

function returnFirst(arr) {
  return arr[0];
  // return the first item from the array
}

function returnLast(arr) {
  return arr[3];
  // return the last item of the array
}

function getArrayLength(arr) {
  return arr.length;
  // return the length of the array
}

function incrementByOne(arr) {
  arr[0] = arr[0] + 1;
  arr[1] = arr[1] + 1;
  arr[2] = arr[2] + 1;
  arr[3] = arr[3] + 1;

  return arr;
  // arr is an array of integers(numbers), Increment all items in the array by
  // return the array
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
  // add the parameter item to the end of the array arr
  // return the array
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
  // add the parameter item to the front of the array arr
  // return the array
  // hint: use the array method .unshift
}

//uncomment these lines to check results in browser console
console.log("returnFirst result:" + returnFirst(arr))
console.log("returnLast result:" + returnLast(arr))
console.log("getArrayLength result:" + getArrayLength(arr))
console.log("incrementByOne result:" + incrementByOne(arr))
console.log("addItemToArray result:" + addItemToArray(arr, 10))
console.log("addItemToFront result:" + addItemToFront(arr, 10))

//////////////////////////////////
//don't change this line
if (typeof module !== 'undefined') {
  module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
  };
}
