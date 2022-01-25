// JavaScript Variables and Datatypes

// JS was invented in the 90's as a way to make websites interactive. In its earliest days, JS was only able to run in the browser.

// Since node was invented, we are now able to run JS outside of the browser.

// All coding languages will have reserved keywords that perform different actions.

var myName = "Narciso Lobo";

/*
JS naming rules
Cannot have spaces
Cannot use reserved keywords
Cannot have hyphens
Cannot start with a number

Suggested naming convention is camel case.
*/

// JavaScript Datatypes
// Primitive Datatypes

// Strings - strings of characters, delimited by quotation marks

var question = 'Will he or won\'t he';
// Escape character is a backwards slash.

// Numbers - integers (whole numbers) and decimal numbers
var timeOfDay = 928;
var percentage = .50;

// Booleans - true or false
var isOld = true;

// null and undefined
// Null is usually an intentional value, while undefined is usually unintentional.

// Only necessary to use the var keyword when instantiating or creating a variable.
// Predict the Output
var a = 25;
a = a - 13;
// console.log means print
console.log(a / 2); // --> 6

a = "hello";
console.log(a + " hello"); // --> hello hello

// Predict Loops
// Keep our code DRY - Don't Repeat Yourself

// Four things to create a for loop
// 1. A named sentry to do our bidding
// 2. Where the sentry starts
// 3. Where or how the sentry ends
// 4. How the sentry changes

for (var i = 1; i <= 10; i++){
  // Code Block of the For Loop
  console.log(i);
}
console.log("Final value of i is: ", i); // --> 11

for (var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3;
}

console.log("outside of the loop " + i);

var num = 0;
num = num + 2; // num = 2
num += 2;

var num2 = 10;
num2++; // --> num = 11