/*Even Occurence
Find the first item that occurs an even number of times in an array.
Remember to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.

Examples
Input	Output
arr:
[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
arr:
[ "cat", "dog", "dig", "cat" ]	*/


function evenOccurence (arr) {
  var storageObj = {};
  var storeOrder = [];

  for(var i = 0; i < arr.length; i++)
  {
    if(!storageObj.hasOwnProperty(arr[i])){
        storageObj[arr[i]] = 1;
        storeOrder.push(arr[i]);
    }
    else{
        storageObj[arr[i]]++;
    }
  }
  //we now have an object with the number of occurences of each element
  //and an array recording the initial order of those elements

  //by iterating through array
    for(var j = 0; j < storeOrder.length; j++){
      //return the first one to have an even number as under its corresponding key in the object
      if(storageObj[storeOrder[j]] % 2 === 0){
          return storeOrder[j];
      }
    }
  return null;
}

var out = evenOccurence(["cat", "dog", "dig", "cat"]);
console.log(out);
