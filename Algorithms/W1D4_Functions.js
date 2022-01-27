// Week 1 Day 4 - Go With the Code Flow


function functionScope() {
  // When we create a variable inside of a function, it has FUNCTION SCOPE.
  var myNum = 60;
}

functionScope();
console.log(myNum);

// When we create a variable outside of a function, it has GLOBAL SCOPE.

// Functions! What are they even?
// Functions are a series of steps that accomplish a task.

// Function declaration:
// Starts with the function keyword
// Followed by the name of the function
// Followed by the parameters of the function in parentheses
// Followed by the function's code block

var x = 5;

function setX(newValue) {
  x = newValue;
}

console.log(x); // --> 5

// Invoking or calling a function.
// Call it by name
setX(15);
console.log(x); // --> 15

// The Return of return
var x = 5;

function addToX(amount) {
  return x + amount;
  console.log("hello there");
}

console.log(x); // --> 5

// The value of a function is whatever that function RETURNS.
var result = addToX(-10);
console.log(result); // --> -5
console.log(x); // --> 5

// Code Flow - Is the Array a Palindrome
// A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

// racecar
// tacocat
// But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards?

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1); // --> not a pal

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2); // --> Pal-indrome
