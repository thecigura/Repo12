// Only change code below this line
var prevNum = 0;
var currNum = 1;
var result = 0;

function sumFibonacci(num) {
  if (num === 1) return 1;

  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }
  return result;
}

// Only change code above this line
console.log(sumFibonacci(1));    // Change this line
module.exports = sumFibonacci;