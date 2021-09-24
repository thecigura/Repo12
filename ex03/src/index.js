// Only change code below this line
function rangeOfNumbers(startN, endN) {
    if (endN - startN === 0) {
        return [startN];
      } else if (endN < startN) {
        return "The start number will always be less than or equal to the ending number";
      } else {
        var range = rangeOfNumbers(startN, endN - 1);
        range.push(endN);
        return range;
      }
  
}
// Only change code above this line
console.log(rangeOfNumbers(1, 7));    // Change this line
module.exports = rangeOfNumbers;