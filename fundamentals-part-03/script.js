// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// console.log(`=== DEVELOPMENT ENVIRONTMENT SETUP ===`);

// const messyExample = function (name, age) {
//   if (age >= 18) {
//     return `Hello ${name} you are an adult`;
//   } else {
//     return `Hello ${name} you are a minor`;
//   }
// };

// console.log(`Current messy code example:, ${messyExample("John", 25)}`);
// console.log(`Goal: Automatic formatting, auto-refresh, and typing shortcuts`);

// function testExtensions() {
//   const extensionTests = [
//     { name: `Prettier`, status: `installed`, purpose: `code formatting` },
//     { name: `Live Server`, status: `installed`, purpose: `auto refresh` },
//     {
//       name: `Auto Rename Tag`,
//       status: `installed`,
//       purpose: `HTML efficiency`,
//     },
//   ];

//   return extensionTests;
// }

// const extensionStatus = testExtensions();
// console.log(`Extension installation status: ${extensionStatus}`);

// const prettierTest = {
//   firstname: "Sarah",
//   lastname: "Johnson",
//   skills: ["JavaScript", "React", "Node.js"],
//   isActive: true,
// };

// const messyFunction = function (X, y, z) {
//   if (x > 0 && y > 0) {
//     return x + y + z;
//   } else {
//     return 0;
//   }
// };

// const messyArrow = items => {
//   return items.map(item => {
//     return item.toUpperCase();
//   });
// };

// console.log(
//   `Before Prettier formatting - this code works but looks unprofessional`
// );

// ////////////////////

// // Practice Prettier Formatting

// const studentTest = {
//   firstName: "your-name",
//   skills: ["HTML", "CSS", "JavaScript"],
//   experience: "beginner",
//   goals: ["become-developer", "build-projects"],
// };

// const testFunc = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     console.log(data[i]);
//   }
// };

// ///////////////////////////////////////
// // Section 3: Live Server Setup and testing

// let liveServerTest = "Initial message - change #1";
// console.log("Live Server test:", liveServerTest);

// // Test 2: Time-based updates
// const timeStamp = new Date().toLocaleTimeString();
// const updateCount = 1;

// console.log(`Live Server update #${updateCount} at ${timeStamp}`);

// // Test 3: Function testing
// function demonstrateLiveReload() {
//   const randomColor = ["red", "blue", "green", "purple", "orange"][
//     Math.floor(Math.random() * 5)
//   ];
//   const message = `Live Server rocks! Random color: ${randomColor}`;

//   console.log(message);
//   return message;
// }

// demonstrateLiveReload();

// function showCurrentTime() {
//   const now = new Date().toLocaleTimeString();
//   console.log("Current time:", now);
//   return now;
// }

// showCurrentTime();

// // Section 4 Custom Code snippets

// console.log(`Testing snippet functionality - cl + tab = console.log()`);

// function testSnippets() {
//   console.log(`Function created with snippet - func + tab = function () {}`);
//   return `Snippets working perfectly!`;
// }

// testSnippets();

// const snippetTest = message => {
//   console.log(`Arrow function from snippet: ${message}`);
//   return message;
// };

// snippetTest(`Snippets save so much typing time!`);

// ////////////////////////////////////
// // Environment Setup Verification

// console.log("🎉 Professional Development Environment Complete!");
// console.log("✅ Prettier: Automatic code formatting");
// console.log("✅ Live Server: Automatic browser refresh");
// console.log("✅ Snippets: Fast code generation");
// console.log("✅ Extensions: Enhanced productivity");
// console.log("Ready for professional JavaScript development!");

// // Calculate time savings
// function calculateTimeSavings() {
//   const dailyConsoleLogs = 50;
//   const keystrokesSavedPerLog = 11; // 'console.log()' vs 'cl' + Tab
//   const dailySavings = dailyConsoleLogs * keystrokesSavedPerLog;
//   const monthlySavings = dailySavings * 22; // work days

//   console.log(`Daily keystrokes saved: ${dailySavings}`);
//   console.log(`Monthly keystrokes saved: ${monthlySavings}`);

//   return { daily: dailySavings, monthly: monthlySavings };
// }

// calculateTimeSavings();

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

console.log(`=== HOUR 2: DEVELOPER MINDSET & PROBLEM SOLVING ===`);

console.log(
  `Insight: Developers solve problems systematically, not randomly`
);

console.log(`Goal: Level up from beginner to effective problem-solver`);

// Section 1: The 4 Step Problem Solving Framework

console.log(`Framework: Understand → Break down → Research → Apply`);

// Section 2: Practical Problem-Solving Application

const calcTempAmplitude = temps => {
  let highest = temps[0];
  let lowest = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const temp = temps[i];
    if (typeof temp !== "number") continue;

    if (temp > highest) highest = temp;
    if (temp < lowest) lowest = temp;
  }
  console.log("Max:", highest, "Min:", lowest);
  return highest - lowest;
};

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTempAmplitude(temperatures);
console.log("Amplitude:", amplitude);

// Section 3: Extended Challenge Practice
const arr1 = [3, 5, 1];
const arr2 = [9, 0, 5];
// note: not yet merged, passing two arrays directly will ignore arr2
const amplitudeNew = calcTempAmplitude(arr1, arr2);
console.log("New amplitude test:", amplitudeNew);

console.log(`🎯 Framework applied - ready for independent problem solving!`);

// ------------------------------------------------------------

console.log(`=== HOUR 3: RESEARCH & DEBUGGING MASTERY ===`);

console.log("Objective: Research + Debug like a professional");
console.log("Smart research builds reusable knowledge, not quick hacks");

// Section 1: Professional Research Techniques

function demonstrateArrayMax(numbers) {
  // Approach 1 - Math.max + spread
  const m1 = Math.max(...numbers);

  // Approach 2 - classic loop
  let m2 = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > m2) m2 = numbers[i];
  }

  // Approach 3 - reduce
  const m3 = numbers.reduce((a, b) => (b > a ? b : a));

  return { m1, m2, m3 };
}

const testNumbers = [3, 7, 2, 9, 1, 5];
console.log("Research comparison:", demonstrateArrayMax(testNumbers));

// Stack Overflow Research Example
function reverseStringMethods(str) {
  const methodA = str.split("").reverse().join("");
  let methodB = "";
  for (let i = str.length - 1; i >= 0; i--) {
    methodB += str[i];
  }
  const methodC = [...str].reverse().join("");

  return { methodA, methodB, methodC };
}

console.log("Reverse string research:", reverseStringMethods("hello"));

// MDN Documentation Example
function demonstrateConcat() {
  const one = [1, 2, 3];
  const two = [4, 5, 6];
  const three = [7, 8, 9];

  const simple = one.concat(two);
  const multiple = one.concat(two, three);

  console.log("Array1 still unchanged:", one);
  return { simple, multiple };
}

console.log("Concat research:", demonstrateConcat());

// Section 2: Debugging Process
console.log(` Debugging steps: detect → isolate → inspect → repair → prevent`);

// Buggy function for practice
function calculateAverageScore(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

const testScores = [85, 92, 78, 96, 88];
console.log("Buggy avg:", calculateAverageScore(testScores));

// Fixed version
function calculateAverageScoreFixed(scores) {
  if (!Array.isArray(scores) || scores.length === 0) {
    console.error("Invalid scores input");
    return 0;
  }

  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] === "number") {
      total += scores[i];
    } else {
      console.warn(`Skipping invalid value at index ${i}`, scores[i]);
    }
  }

  return total / scores.length;
}

console.log("Fixed avg:", calculateAverageScoreFixed(testScores));

// ----------------------------------

console.log(`=== HOUR 4: ADVANCED PROBLEM-SOLVING ===`);

function printForecast(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]}°C in ${i + 1} days `;
  }
  console.log("...", output);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

printForecast(data1);
printForecast(data2);

// Alternative 1
function printForecastMap(arr) {
  const formatted = arr.map((temp, idx) => `${temp}°C in ${idx + 1} days`);
  console.log("..." + formatted.join("...") + "...");
}

// Alternative 2
function printForecastReduce(arr) {
  const res = arr.reduce(
    (acc, val, idx) => acc + `${val}°C in ${idx + 1} days ... `,
    "..."
  );
  console.log(res);
}

console.log("Alternative methods:");
printForecastMap(data1);
printForecastReduce(data1);
    
// 03 update