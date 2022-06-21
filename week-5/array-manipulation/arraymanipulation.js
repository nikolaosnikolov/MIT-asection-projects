// Step 1: use slice to find elements in an array
function sliceElements(givenArray) {
    const newArray = givenArray.slice(givenArray.length - 3, givenArray.length)
    return newArray
    //TODO: return last 3 elements of givenArray
  }
  
  // Step 2: use splice to find elements in an array
  function spliceElements(givenArray, element1, element2) {
    const arrayLength = givenArray.length
    givenArray.splice(arrayLength - 1, 1, element1, element2)
    return givenArray
    //TODO: remove the last element of givenArray and add element1 and element2 at that position
  }
  
  // Step 3: use splice to find elements in an array
  function splitElements(givenString) {
    const newArray2 = givenString.split(' ');
    return newArray2
    //TODO: convert givenString into an array of words
  }
  
  //Uncomment these line to see results for step 1
  console.log(sliceElements([1, 2, "MIT Certificate", 4, 5])); // should return ["MIT Certificate", 4, 5]
  console.log(sliceElements([1, 2, [3, 4], "JavaScript"])); // should return [2, [3, 4], "JavaScript"]
  
  //Uncomment these line to see results for Step 2
  var arr = [1, 2, "MIT Certificate", 4, 5];
  console.log(spliceElements(arr, "JavaScript", 101)); // should return [1, 2, "MIT Certificate", 4, "JavaScript", 101]
  
  //Uncomment these line to see results for Step 3
  var str = "MIT Certificate loves JavaScript";
  console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "JavaScript"]
  
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = { sliceElements, spliceElements, splitElements };
  }
  