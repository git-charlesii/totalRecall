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


// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.


let user = {
  name: 'Charles',
  email: '123Chuck@nunya.com',
  purchased: [],
}
// B. Update the user
// Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.


console.log(user);
user.email = '123Chuck@nunya.com';
user['email'] = 'notCharles@nunya.com';
console.log(user);

// Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).

user.address = '123 main street, Oz.';
console.log(user);
console.log(user.address);

// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.

console.log(user.purchased);
user.purchased.push('carbohydrates');
console.log(user.purchased);
console.log(user);

// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.

user.purchased.push('peace of mind');
console.log(user.purchased);

// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.

user.purchased.push('Merino jodhpurs');
console.log(user.purchased);

// Console.log just the "Merino jodhpurs" from the purchased array.

console.log(user.purchased[2]);

// Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)

user.friend = {
  name: 'Lenny',
  age: 59,
  location: 'Eleuthera',
  purchased: [],
  }

  // Console.log just the friend's name
  console.log(user.friend.name);

  // Console.log just the friend's location
  console.log(user.friend.location);

  // CHANGE the friend's age to 55
  user.friend.age = (55);
  console.log(user.friend.age);
  
  // The friend has purchased "The One Ring". Use ``.push()to add "The One Ring" to the friend'spurchased` array.
  user.friend.purchased.push('The One Ring');
  console.log(user.friend.purchased);

//   The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
// Console.log just "A latte" from the friend's purchased array.

  user.friend.purchased.push('A latte');

  console.log(user.friend.purchased[1]);

  // F. Loops
  // Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
  // Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.


// IV. Functions
// A. printGreeting - write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting

function printGreeting(name) {
  return `Buenas, ${name}! Hola!`;
  
}
let name = 'Carlos';
console.log(printGreeting(name));

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.

// Write a function PrintCool that accepts one parameter, name as an argument
function printCool(name) {
  return (`${name} is super cool.`)
}
 console.log(printCool(name));
// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
// console.log(calculateCube(5));
// => 125

function calculateCube(i) {
  let volume = i ** 3;
  return volume;
}
console.log(calculateCube(6));

// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// console.log(isVowel("a"));
// => true

function isVowelthat(i) {
  // for most of the time dealing with this, i left out the 'or' characters and my argument was not enclosed within a string.  most my mistakes have been syntax and order, not necessarily the logic, although i still struggle a bit with thinking like the computer.
  return i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u';
  
}
console.log(isVowelthat('p'));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]

  function getTwoLengths(string1 , string2) {
    return [string1.length,  string2.length];
  }
  console.log(getTwoLengths('frustrated', 'sheeesh'));



// Part 1. Math Problems


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log('The sum of the numbers is 50:' + isSum50);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log('At least two of the preceding calculations are odd:' + isTwoOdd);
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log('Are any of the numbers larger than 25? True or False?' + isOver25);
// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log('All of these numbers are unique?' + isUnique);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
console.log(dontDoThis);


//Part 2: Practical Math


//   Let’s look at a more practical scenario.
//   You are planning a cross-country road trip!
//   The distance of the trip, in total, is 1,500 miles.
const totalDistance = 1500;
//   Your car’s fuel efficiency is as follows:
//   At 55 miles per hour, you get 30 miles per gallon.
//   At 60 miles per hour, you get 28 miles per gallon.
//   At 75 miles per hour, you get 23 miles per gallon.
const fuelEfficiency = {
  55 /*miles per hour*/ : 30, /*miles per gallon*/
  60 /*miles per hour*/ : 28, /*miles per gallon*/
  75 /*miles per hour*/ : 23 /*miles per gallon*/

}
// fuel budget
//   You have a fuel budget of $175.
const fuelBudget = 175; /*dollars*/
//   The average cost of fuel is $3 per gallon.
const fuelCostperGallon = 3; /*dollars/gallon*/
//   Set up a program to answer the following questions:
//   How many gallons of fuel will you need for the entire trip?
// total fuel cost at 55, 60, and 75 mph


//   Will your budget be enough to cover the fuel expense?
//   How long will the trip take, in hours?
//   Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

// total distance of the trip
// INCOMPLETE


// fuel budget


























              
              
              