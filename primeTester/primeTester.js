/*
A prime number is an integer greater than 1 that has no divisors
 other than itself and 1. Write a function that accepts a number
 and returns true if it’s a prime number, false if it’s not. The grader
 is looking at the efficiency of your solution (number of operations) as
 well as correctness! 
*/

function primeTester (n) {
  if(n ===1){
    return false;
  }
  var factors = [];
  //create an array of factors of the number
    //reduce the number bit by bit, pushing a number to the array if it's % 0
    var reducer = function(val){
      if(factors.length > 2){
        return false;
      }
      if(val === 0){
        return true;
      }
      if(n % val === 0){
        factors.push(val);
        return reducer(val-1);
      }
      else{
        return reducer(val-1);
      }
    };

    return reducer(n);

  //if the array length is greater than something, or less than something, return false

  //possibly return false somewhere within the loop if the array length breaks
};

console.log([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 7919].map(function(val){
    return primeTester(val);
}));
console.log([1, 4, 6, 8, 9, 10, 12, 15].map(function(val){
    return primeTester(val);
}));
