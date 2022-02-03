// Week 2 Day 4 - Some like it flat
// Nesting Arrays
// Arrays are capable of having arrays inside of them. Assuming we're given an array like...

var arr2d2 = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];

console.table(arr2d2);

// We can console.log the `8` in this array if we

console.log(arr2d2[0][2]);

// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

/*

Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

Note - Don't assume the array will always be the same size, we must rely on its .length property

Hint - Can we put a for loop inside another for loop?

*/

function isPresent2d(arr2d, value){
  // your code here
  // PSEUDOCODE - what to do before how to do
}

/*

Flatten Array
Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays. Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like Array.prototype.flat() but feel free to use .push(value) and/or .pop() where needed.

*/

// Built in methods. These come pre-baked into JS.
// .pop() and .push()

var myArr = [1, 2, 3, 4, 5];
// var result = myArr.pop();
myArr.push(6);
console.log(myArr);

function flattenArray(arr2d){
  var newArr = []
  // take every element from 2d array and push into new array
  // return newArr
}