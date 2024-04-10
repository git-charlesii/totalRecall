// Variables & Data types
// A. Variables

const myName = 'Charles';
var favoriteLanguage = 'Python';
var newFavoriteLanguage = 'Javascript';
newFavoriteLanguage = favoriteLanguage;
console.log(myName + "'s" + ' favorite coding language is ' + favoriteLanguage);

// B. Strings

var firstVariable = "Hello World";
var firstVariable = 50;
var secondVariable = 50;
var secondVariable = "Charles";
console.log(firstVariable);

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Kevin' === 'Kevin');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false == false)
console.log(e == 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


//  D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit

let animal = 'quack quack';
 if (animal == 'cow'){
  console.log('Moooo');
  } 
  else {
  console.log('You\'re probably a horse.');

} 

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let ageOfDriver = 17;
if (ageOfDriver >= 16){
  console.log("Here are the keys!");
} else { 
  console.log("Sorry kid, you're too young.")
}

// II. Loops
// Remember: USE let when you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 0; i<11; i++) {
  console.log(i);
}

for (let i = 10; i<401; i++) {
  console.log(i);
}

// for (let i = 12; i<4001; i+3) {
//   console.log(i);
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "is an even number"

// for (let i = 1; i<101; i++);
//  console.log(i % 2 + "is an even number");


// A. Talk about it in your group:
// What are the things in an array called?
// a. elements, and they start from 0

// Do Arrays guarantee those things will be in order?
// no

// What real-life thing could you model with an array?
// anything.

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes.
// let quotes = [ ["damn if you do, damned if you don't"], ["beggers can't be choosers"], ["if you don't know, now you show"]];

// C. Accessing elements
// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
randomThings = [1, 10, "Hello", true]
console.log(randomThings[0]);
// Change the value of "Hello"to "World"
console.log(randomThings[2]);
randomThings[2] = "World";

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
console.log(ourClass[4]);
ourClass[4] = "Octocat";
console.log(ourClass[4]);
// Add a new element, "Cloud City" to the array
ourClass.push('Cloud City');
console.log(ourClass);
// E. Mix It Up

// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]
const myArray = [5, 10, 500, 20];
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon');
console.log(myArray);

// Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);

// Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
myArray.reverse();
console.log(myArray);


// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// Thom's closet is more complicated. Check out this nested data structure!!
const krystynsCloset = [["left shoe" , "cowboy boots", "right sock", "Per Scholas hoodie", "green pants", "yellow knit hat", "marshmallow peeps"]];

const thomsCloset = [["grey button-up", "dark grey button-up",  "light blue button-up", "blue button-up",  ], ["grey jeans" , "jeans",  "PJs"],[ "wool mittens","wool scarf", "raybans"]];

// const thomsCloset = [
//   [
    // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
    // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
    // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.






















