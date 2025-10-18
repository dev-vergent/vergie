'use strict';

console.log(' === BEHIND THE SCENES: SCOPING AND HOISTING ===');

// // Global Execution Context
// console.log('Starting program');

// function alpha() {
//   console.log('aplha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// function outerFunction() {
//   console.log('Outer function start');
//   innerFunction();
//   console.log('Outer function end');
// }

// function innerFunction() {
//   console.log('Inner Function');
//   console.trace();
// }

// outerFunction();

// Section 3: hoisting and temporal dead zone

// //  hoisted - initialized to undefined
// console.log(varX);
// // they exists but uninitialized, or temporal dead zone magagamit lng pag na initialize ng tama
// console.log(letX);
// console.log(constX);

// var varX = 1;
// let letX = 2;
// const constX = 3;

// // hoisted
// console.log(addDecl(5, 3));
// function addDecl(a, b) {
//   return a + b;
// }

// // temporal dead zone. it cant run because addExpr is just a variable that initialized
// // console.log(addExpr(3,2));
// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

console.log('=== `this` KEYWORD & ARROW FUNCTIONS ===');

////////// Understanding the `this` Keyword
// const person = {
//   name: 'Jonas',
//   greet: function () {
//     console.log(`Hello, I am ${this.name}`);
//   },
// };

// person.greet();

// // Method borrowing
// const anotherPerson = {
//   name: 'Sarah',
// };

// // Borrow greet function
// anotherPerson.greetAnotherPerson = person.greet;
// // Dosplay or run the greet function for anotherPerson
// anotherPerson.greetAnotherPerson();

// // Detached function
// const greetFunction = person.greet;
// greetFunction();

////////// Arrow Functions vs Regular Functions
// const obj = {
//   name: 'Object',
//   regularMethod: function () {
//     console.log(`Regular: ${this.name}`);
//   },

//   arrowMethod: () => {
//     console.log(`Arrow: ${this.name}`);
//   },
// };

// obj.regularMethod();
// obj.arrowMethod();

// const timer = {
//   name: 'Timer',
//   start: function () {
//     console.log(`${this.name} starting...`);

//     // to call the property name we need to create this self pattern
//     // so that js can access it easily
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // In modern approch you just need a parent function to have a arrow function in it
//   // so that we can call the property without creating self pattern

//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern...`);
//     }, 1500);
//   },
// };

// timer.start();
// timer.startModern();

////////// The `arguments` Keyword & Advanced Scenarios

// const functionTypes = {
//   regularFunction: function () {
//     console.log(`Arguments length: ${arguments.length}`);
//     console.log(`First argument: ${arguments[0]}`);
//   },

//   arrowFunction: () => {
//     console.log(arguments);
//     console.log(`Arrow function called`);
//   },

//   modernFunction: (...args) => {
//     console.log(`Args length ${args.length}`);
//     console.log(`First arg: ${args[0]}`);
//   },
// };

// functionTypes.regularFunction('hello', 'nga');
// // functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach')



console.log('=== PRIMITIVES vs OBJECTS, COPYING & STRICT MODE ===');
// // primitives in stack
// // primitive are copied by value
// let age = 30;
// // independent copy
// let oldAge = age;

// age = 31;
// console.log(`age : ${age}`);
// console.log(`old age: ${oldAge}`);

// // heap
// // objects are copied by reference or shared data
// const me = {
//   name: 'JB',
//   age: '20',
// };

// const friend = me;

// friend.name = 'John Doe';
// friend.age = 19;

// console.log(me);
// console.log(friend);

// Shallow vs Deep Copying

// Shallow Copy

// though we can name, age are easy to be independent but nested objects, variables, properties
const original = {
  name: 'Alice',
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Bob';
console.log('original name: ', original);
console.log('copy name: ', shallowCopy);

shallowCopy.hobbies.push('gaming');

console.log(original.hobbies);
console.log(shallowCopy.hobbies);

// Deep Copy

const deepOriginal = {
  name: 'iya',
  age: 20,
  // nested objects
  address: { city: 'caloocan', country: 'ph' },
  // nested array
  hobbies: ['watching', 'music'],
};

const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = 'Manila';
deepCopy.hobbies.push('gaming');
deepCopy.name = 'Vergel';

console.log(deepOriginal);
console.log(deepCopy);

// cleanup code and organizing game logic into the gameState object for better structure and maintainability.