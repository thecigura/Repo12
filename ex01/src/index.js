// Only change code below this line

function myRecursion(arr, n) {
    if (n <= 0) {
        return 0;
      } else {
        return myRecursion(arr, n-1) + arr[n-1];
      }
  
}
// Only change code above this line
console.log(myRecursion([1], 0));  // Change this line
module.exports = myRecursion;