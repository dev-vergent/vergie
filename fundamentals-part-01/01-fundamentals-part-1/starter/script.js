// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");
// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31;
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// const PI = 3.1415;
// console.log(PI);

// // do not use var
// var job = "programmer";
// job = 'teacher';
// console.log(job);

// const country = 'Portugal';
// const language = 'Portugese';
// const population = 10;

// let ageNow = 25;
// age = 31;

// console.log('=== DATA TYPES ===');

// let weight = 45;
// console.log(typeof weight);

// let username = 'Max';
// console.log(typeof username);

// let javascriptIsFun = true;
// console.log(typeof javascriptIsFun);

// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable);

// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable);

// console.log('=== EXERCISES ===');

// const myFirstName = 'Vergel';
// console.log(myFirstName, typeof myFirstName);
// let myAge = 20;
// console.log(myAge, typeof myAge);
// const favoriteNumber = 74;
// console.log(favoriteNumber, typeof favoriteNumber);
// const iLikeJavascript = true;
// console.log(iLikeJavascript, typeof iLikeJavascript);

// let score = 100;
// console.log(score);
// score = 150;
// console.log(score);

////////////////////////////////////
// Basic Operators - Math operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// console.log('Math operations:');
// console.log('Addition:', 10 + 5);
// console.log('Subtraction:', 20 - 8);
// console.log('Multiplication:', 4 * 7);
// console.log('Division:', 15 / 3);
// console.log('Exponentation:', 2 ** 3);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old");

// ////////////////////////////////////
// // Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5; 
// console.log("x starts as:", x);

// x += 10;
// console.log("After x += 10:", x);

// x *= 4;
// console.log("After x *= 4:", x);

// x /= 2; 
// console.log("After x /= 2:", x);

// x++;
// console.log("After x++:", x); 

// x--;
// x--; 
// console.log("After x-- twice:", x);

// ////////////////////////////////////
// // Comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge); 

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

//Test Data 1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;
// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log(`Just a regular string...`);

// ////////////////////////////////////
// // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// ////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean("")); 

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// if (height !== undefined) {
//   console.log("Height is defined");
// }

// ////////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = Math.floor(massMark / heightMark ** 2);
// const BMIJohn = Math.floor(massJohn / (heightJohn * heightJohn));
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is greater than John's BMI (${BMIJohn}).`);
// } else if (BMIMark < BMIJohn) {
//   console.log(`John's BMI (${BMIJohn}) is greater than John's BMI (${BMIJohn}).`);
// } else {
//   console.log('Error');
// }

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Jonas"));
// console.log(typeof Nan);

// console.log(String(23), 23);
// console.log(typeof String(23));

// console.log("I am" + 23 + "years old");
// console.log("23" - "10" - 3);
// console.log("23" / "2");
// console.log("23" * "2");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Type Conversion and Coercion

// // type conversion (manual)
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18); 

// console.log(Number("Jonas")); 
// console.log(typeof NaN);
// console.log(String(23), 23); 
// console.log(typeof String(23));

// console.log("I am " + 23 + " years old"); 
// console.log("23" - "10" - 3); 
// console.log("23" / "2"); 
// console.log("23" * "2");

// // Predict the output, then test:
// console.log("5" + 2); // Your guess: 52
// console.log("5" - 2); // Your guess: 3
// console.log("5" * 2); // Your guess: 10
// console.log("5" / 2); // Your guess: 2.5

// const userAge = "25"; 
// const userScore = 95; 

// console.log(Number(userAge));
// console.log(String(userScore));

// // const num1 = prompt("First number:"); 
// // const num2 = prompt("Second number:"); 
// // const sum = Number(num1) + Number(num2);
// // console.log(`Sum: ${sum}`);

// ////////////////////////////////////
// // Equality Operators: == vs. ===

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// if (age == 18) console.log("You just became an adult :D (loose)");

// console.log("18" === 18); 
// console.log("18" == 18);
// console.log(18 === 18);

// ////////////////////////////////////
// // Logical Operators

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// Exercise 1: Exam Result System

// const score = 85;
// const hasAdmissionTicket = true;
// const isScholar = false;

// if ((score >= 75 && hasAdmissionTicket) || isScholar) {
//   console.log("You passed the exam and can proceed to enrollment.");
// } else {
//   console.log("Sorry, you are not qualified for enrollment.");
// }


// // Exercise 2: Sports Game Advisor
// const temperature = 28;
// const isRaining = false;
// const isCourtAvailable = true;

// if ((temperature >= 20 && temperature <= 30) && !isRaining && isCourtAvailable) {
//   console.log("Perfect time to play basketball!");
// } else if ((temperature >= 15 && temperature <= 35) && !isRaining) {
//   console.log("You can still play, but conditions aren’t perfect.");
// } else {
//   console.log("Better to stay home and rest.");
// }


////////////////////////////////////
// The Conditional (Ternary) Operator

const userAge = 20;

const beverage = userAge >= 18 ? "coffee" : "milk";
console.log(beverage);

console.log(`I’ll have ${userAge >= 18 ? "coffee ☕" : "milk 🥛"} please!`);

// 1. Login status

const loggedIn = false;
const message = loggedIn ? "Welcome back 👋" : "Please log in to continue";

console.log(message);

// 2. Price with discount
const hasCoupon = true;
const itemPrice = hasCoupon ? 500 * 0.9 : 500;
console.log(`Final price: ${itemPrice}`);

// Exercise 2: Smart Responses

const grade = 92;
const day = "rainy";
const batteryLevel = 80;

console.log(`Your grade: ${grade} (${grade >= 75 ? "Passed 🎉" : "Failed ❌"})`);
console.log(`Today’s weather: ${day} (${day === "sunny" ? "Perfect for a walk 🌞" : "Better stay cozy indoors 🌧️"})`);
console.log(`Battery status: ${batteryLevel}% (${batteryLevel <= 20 ? "Charge soon 🔋" : "All good ✅"})`);


////////////////////////////////////
// Coding Challenge #4

const amount = 145;
const serviceFee = amount >= 50 && amount <= 300 ? amount * 0.15 : amount * 0.20;
const finalAmount = amount + serviceFee;

console.log(`Amount: ${amount} | Tip: ${serviceFee} | Total: ${finalAmount}`);
// update

console.log("To push something to GitHub");