// Question: Create a funtion to  calculate age , user will provide birth year only.Function will return the age.

// Function to calculate age
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

// Taking input from user
const userInput = prompt("Enter your birth year:");

// Convert input to a number
const birthYear = Number(userInput);

// Validate input
if (!isNaN(birthYear) && birthYear > 1900 && birthYear <= new Date().getFullYear()) {
  const age = calculateAge(birthYear);
  console.log(`You are ${age} years old.`);
  alert(`You are ${age} years old.`);
} else {
  console.log("Please enter a valid birth year!");
  alert("Please enter a valid birth year!");
}
// JS is a program that executes javascript code.
// firefox - spider monkey <-- engine
// chrome - V8
// nodejs - V8
// The Javascript engine always constists of two main components
// 1. Memory heap - where the memory allocation happens
// 2. Call stack - where the code is beign executed line by line

// Execution context - global execution context
// 1. Creation phase
// 2. Execution phase

// scope - global scope , function scope, block scope
// lexical scope
// closure
// first class function
// higher order function
// callback function
// IIFE - Immediately invoked function expression

// Difference between var, let , const






// Hoisting - var, function declaration
// var - undefined
// function declaration - entire function
// let , const - temporal dead zone 
// 


// Temporal dead zone - let , const 
// Arrow function - ES6 (2015)
// Differences between regular function and arrow function  
// 1. Syntax
// 2. this keyword
// 3. arguments object
// 4. cannot be used as constructor
// 5. no prototype
// 6. implicit return
// 7. methods like call, apply, bind
// 8. cannot use yield keyword
// 9. no duplicate named parameters
// 10. cannot use super keyword
// 11. no new.target
// 12. cannot use eval function

// // Example of arrow function
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// // Example of regular function
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(2, 3)); // 6


// // Example of this keyword in arrow function
// const obj = {
//   name: "John",
//     greet: () => {
//     console.log(`Hello, my name is ${this.name}`);
//     },
// };
// obj.greet(); // Hello, my name is undefined

// // Example of this keyword in regular function
// const obj2 = {
//   name: "Jane",
//     greet: function() {
//     console.log(`Hello, my name is ${this.name}`);
//     },
// };
// obj2.greet(); // Hello, my name is Jane
// // Example of arguments object in regular function
// function showArgs() {
//   console.log(arguments);
// }

// what is scope?
// execution context?
// hoisting?
// temporal dead zone?
// lexical scope?
// arrow function? 

// prompt, alert, console.log

// An Array  is a data structure / object that can hold multiple values in a single variable.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // apple
// console.log(fruits.length); // 3

// const arr = [1, 2.2, "hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
// console.log(arr);

// Array methods
// 1. push() - adds an element to the end of the array
// fruits.push("date");
// console.log(fruits); // ["apple", "banana", "cherry", "date"]

// 2. pop() - removes the last element from the array
// fruits.pop();
// console.log(fruits); // ["apple", "banana", "cherry"]  

// 3. unshift() - adds an element to the beginning of the array
// fruits.unshift("avocado");
// console.log(fruits); // ["avocado", "apple", "banana", "cherry"]

// 4. shift() - removes the first element from the array
// fruits.shift();
// console.log(fruits); // ["apple", "banana", "cherry"]

// 5. indexOf() - returns the index of the first occurrence of an element
// console.log(fruits.indexOf("banana")); // 1  

// 6. splice() - adds/removes elements from the array
// fruits.splice(1, 1, "blueberry");
// console.log(fruits); // ["apple", "blueberry", "cherry"]

// 7. slice() - returns a shallow copy of a portion of the array
// const citrus = fruits.slice(1, 3);
// console.log(citrus); // ["banana", "cherry"]

// 8. forEach() - executes a provided function once for each array element
// fruits.forEach(function(fruit) {
//   console.log(fruit);
// });  

// 9. map() - creates a new array with the results of calling a provided function on every element
// const upperFruits = fruits.map(function(fruit) {
//   return fruit.toUpperCase();
// });
// console.log(upperFruits); // ["APPLE", "BANANA", "CHERRY"]

// 10. filter() - creates a new array with all elements that pass the test implemented by the provided function
// const longFruits = fruits.filter(function(fruit) {
//   return fruit.length > 5;
// });
// console.log(longFruits); // ["banana", "cherry"]

// 11. reduce() - executes a reducer function on each element of the array, resulting in a single output value
// const totalLength = fruits.reduce(function(accumulator, fruit) {
//   return accumulator + fruit.length;
// }, 0);
// console.log(totalLength); // 16

// 12. find() - returns the value of the first element that satisfies the provided testing function
// const foundFruit = fruits.find(function(fruit) {
//   return fruit.startsWith("b");
// });
// console.log(foundFruit); // "banana"

// 13. sort() - sorts the elements of the array in place and returns the sorted array
// fruits.sort();
// console.log(fruits); // ["apple", "banana", "cherry"]

// 14. reverse() - reverses the order of the elements in the array
// fruits.reverse();
// console.log(fruits); // ["cherry", "banana", "apple"]

// 15. concat() - merges two or more arrays and returns a new array
// const moreFruits = ["date", "elderberry"];
// const allFruits = fruits.concat(moreFruits);
// console.log(allFruits); // ["cherry", "banana", "apple", "date", "elderberry"]

// 16. join() - joins all elements of the array into a string
// const fruitString = fruits.join(", ");
// console.log(fruitString); // "cherry, banana, apple"

// 17. includes() - determines whether an array includes a certain element
// console.log(fruits.includes("banana")); // true  

// 18. flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
// const nestedArray = [1, [2, [3, [4]]]];
// const flatArray = nestedArray.flat(2);
// console.log(flatArray); // [1, 2, 3, [4]]

// 19. fill() - fills all the elements of an array from a start index to an end index with a static value
// const filledArray = new Array(5).fill(0);
// console.log(filledArray); // [0, 0, 0, 0, 0]

// 20. Array.from() - creates a new array instance from an array-like or iterable object
// const str = "hello";
// const charArray = Array.from(str);
// console.log(charArray); // ["h", "e", "l", "l", "o"]

// 21. lastIndexOf() - returns the index of the last occurrence of an element
// const numbers = [1, 2, 3, 2, 1];
// console.log(numbers.lastIndexOf(2)); // 3

// These are some of the most commonly used array methods in JavaScript.
// You can explore more methods in the official documentation.  
// End of Array methods


// Functios are first class citizens in javascript
// 1. Function can be stored in a variable
// 2. Function can be passed as an argument to another function
// 3. Function can be returned from another function
// 4. Function can be stored in data structures like array, object
// 5. Function can have properties and methods

// Example of function stored in a variable 

// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("John")); // Hello, John!


// Example of function passed as an argument

// function processUserInput(callback) {
//   const name = prompt("Please enter your name:");
//   console.log(callback(name));
// }
// processUserInput(greet); // Hello, [name]!

// In javascript each object is linked to a prototype object.
// The prototype contains methods that are accessible to all objects linked to that prototype.
// This is  different from class-based inheritance in other programming languages. As their child classes inherit from parent classes.
//      and in thi case it is like instance inheriting from class.
// 

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//  getFullName: function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// const employee = Object.create(person);
// employee.jobTitle = "Software Engineer";
// console.log(employee.getFullName()); // John Doe
// console.log(employee.jobTitle); // Software Engineer


//  Prototype-based inheritance is a way to share properties and methods between objects.















//  Prototype is also an object.
//  Prototype chain is used to build new types of objects based on existing ones.
//  All javascript objects inherit properties and methods from their prototype.


