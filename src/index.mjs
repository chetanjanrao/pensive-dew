function makeArray() {
  let arr = [];
  //let newArray = [10, 20, 2, 400, 9];
  let lengthOfArray = prompt("enter the length of array to create");
  for (let i = 0; i < lengthOfArray; i++) {
    let value = prompt("enter the " + i + " position no ");
    arr.push(Number(value));
  }
  return arr;
}
function largestNumber(newArray) {
  if (newArray.length === 0) {
    return undefined;
  }
  let max = newArray[0];
  for (let x = 1; x < newArray.length; x++) {
    if (newArray[x] > max) {
      max = newArray[x];
    }
  }
  return max;
}
let result = makeArray();
let largestValue = largestNumber(result);
console.log("Largest value =  " + largestValue);
