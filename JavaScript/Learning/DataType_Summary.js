// // # Primitive
// // 7 Data Types in JavaScript: String , Number, Boolean, null, undefined, Symbol, BigInt

// const score =100
// const scoreValue = 100.3 

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;  // undefined

// const id = Symbol('12345')
// const anotherId = Symbol("12345")  // unique

// console.log(id===anotherId);  // false

// const bigNumber = 1234567890123456789012345678901234567890n




// // # Reference (Non-Primitive)
// // Array , Object, Functions 

// const heros = ["shaktiman", "naagraj", "doga"]
// let myObj = {   
//     name: "Sumansh",
//     age: 20,
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) vs Heap (Reference/Non-Primitive)  memory

let myName = "Sumansh"

let anotherName = myName

console.log({myName, anotherName});