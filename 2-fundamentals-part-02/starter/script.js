// // console.log(`Fundamentals Part: 2`);
// // console.log(`Part 2: Functions ready!`);

// // ////////////////////////////////////
// // // Functions - Declarations and Expressions
// // console.log(`=== FUNCTIONS ===`);

// // function logger() {
// //     console.log(`My name is Jonas`);
// // }

// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples, oranges) {
// //     console.log(apples, oranges);
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;
// // }


// // const appleJuice = fruitProcessor(5, 0);
// // console.log(appleJuice);

// // const appleOrangeJuice = fruitProcessor(2, 4);
// // console.log(appleOrangeJuice);

// // ////////////////////////////////////
// // // Function Expressions
// // const calcAge = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // const age1 = calcAge (2000);
// // console.log(age1);

// // function calcAge2 (birthYear, currentYear) {
// //     const age = currentYear - birthYear;
// //     return age;
// // }

// // const myAge = calcAge2 (2005, 2025);
// // const someonesAge = calcAge2 (2007, 2025)
// // console.log(`I am ${myAge} years old and he is ${someonesAge} yearsold`);


// // // Handling Missing Parameters

// // function introduce(firstName, lastName, age) {
// //   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
// //   return introduction;
// // }

// // console.log(introduce("Jonas", "Schmedtmann", 46)); 
// // console.log(introduce("Sarah", )); 


// const globalVar = `I am global`;


// function testScope() {
//     const localVar = 'I am local';
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope ();
// console.log(globalVar);

// const userName = 'Jonas';

// function createWelcomeMessage(user) {
//     const message = `Welcome back, ${user}!`;
//     const timestamp = new Date().toLocaleTimeString();

//     return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }


// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins! Dolphins: ${avgDolphins}, Koalas: ${avgKoalas}`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const mixed = ["Jonas", 27, true, grades];
// console.log(mixed);


// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// access array elements
// console.log(grades[0]);
// console.log(grades[4]);

// console.log(grades.length);

// console.log(grades[0]);
// grades[0] = 99;
// console.log(grades);
// console.log(grades[0]);
// console.log(grades[0]);


// const calcAge = function(birthYear) {
//     return 2025 - birthYear
// }

// const ages = [calcAge(2000), calcAge(1995), calcAge(1991)];
// console.log(ages);
// ages[1] = calcAge(1950);
// console.log(ages);


// Array Methods - Adding Elements

// const friends = ["Michael", "Steven", "Peter"];

// const newLength = friends.push(`Jay`);
// console.log(friends);
// console.log(newLength);

// // add elements as first
// friends.unshift(`John`);
// console.log(friends);

// // Pop - remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// // Shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// // IndexOf - find position of element
// console.log(friends.indexOf("Michael"));
// console.log(friends.indexOf('Bob'))

// // Includes - check if element exists
// console.log(friends.includes("Steven")); 
// console.log(friends.includes("Bob"));

// // Array Iteration - Loops
// const friends2 = ["Michael", "Steven", "Peter"];

// for (let i = 0; i < friends2.length; i++) {
//     console.log(friends[i]);
// }

// friends2.forEach (function (friend, index) {
//     console.log(`${index}: ${friend}`);
// });

// const grades = [85, 92, 78, 96, 88,74];
// let total = 0;

// for (let i = 0; i < grades.length; i++) {
//     const element = grades[i];
// }

// const average = total / grades.length;
// console.log (`Average grade: ${average.toFixed(2)}`);


// let passCount = 0;
// grades.forEach((grades) =>  {
//     if (grades >= 70) passCount++;
// });

// console.log(`${passCount} out of ${grades.length}students passed`);

// // for loop with processing
// const years2 = [1991, 2007, 1969, 2020];
// const ages2 =[]

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
// }
// console.log(ages);

////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager
// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // Function to calculate average
//   function calculateAverage(grades) {
//   let sum = 0;                 
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];          
//   }
//   return sum / grades.length;  
// }

// // Function to find highest grade
// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i< grades.length; i++) {
//     if (grades[i] > highest) {
//         highest = grades[i];
//     }
//   }
//   return highest;
// }

// // Function to find lowest grade
// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//         lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// // Function to count passing students
// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//         count++;
//     }
//   }
//   return count;
// }

// //
// // Generate complete report
// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////
// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(jonasArray[0]); // What is this? firstName?
// console.log(jonasArray[1]); // lastName?
// console.log(jonasArray[2]);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job); 
// console.log(jonas.friends); 

// console.log(jonas["firstName"]); 
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);
// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedtman";
// jonas.hasDriversLicense = true;
// console.log(jonas);

// // Use arrays for ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList = ["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 96];

// // Use Objects for named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

////////////////////////////////////
// Object Methods

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// console.log(jonas.calcAge(1991)); 
// console.log(jonas.calcAge(jonas.birthYear)); 

// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());

// const jonasAdvanced = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

////////////////////////////////////
// Coding Challenge #3 - User Profile System (Beginner-Friendly)

// const user = {
//   firstName: "Vergel",
//   lastName: "Santiago",
//   birthYear: 2005,
//   location: "Shibuya, Tokyo",
//   interests: ["gaming", "movie", "music", "coding"],
//   friends: ["Elaiza", "Mikylla", "Angel"],
//   online: true,

//   // Calculate age directly when called
//   getAge: function () {
//     return new Date().getFullYear() - this.birthYear;
//   },

//   // Instead of storing objects, just count how many friends
//   addFriend: function (name) {
//     this.friends.push(name);
//   },

//   // Toggle online status
//   setStatus: function (status) {
//     this.online = status;
//   },

//   // Show a simpler summary
//   showProfile: function () {
//     return (
//       this.firstName + " " + this.lastName +
//       " (" + this.getAge() + " years old)\n" +
//       "Location: " + this.location + "\n" +
//       "Status: " + (this.online ? "Online" : "Offline") + "\n" +
//       "Friends: " + this.friends.join(", ") + "\n" +
//       "Interests: " + this.interests.join(", ")
//     );
//   }
// };

// // Example usage
// console.log(user.showProfile());
// user.addFriend("Alex");
// user.setStatus(false);
// console.log("\nAfter updates:");
// console.log(user.showProfile());


////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);

// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]); 
// console.log(allParagraphs.length);

////////////////////////////////////
// Modifying Element Content

// const message = document.querySelector(".message");

// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// message.innerHTML = "<strong>Bold text from JS!</strong>";

// console.log(message.innerText);

// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// const heading = document.querySelector("h1");

// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

////////////////////////////////////
// Event Listeners - User Interaction

// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// button.addEventListener("click", function () {
//   console.log("Button was clicked!");
//   message.textContent = "You clicked the button!";
//   message.style.color = "green";
// });

// let clickCount = 0;

// button.addEventListener("click", function () {
//   clickCount++;
//   button.textContent = `Clicked ${clickCount} times`;
//   button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50%)`;
// });

// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//   const userText = input.value;
//   message.textContent = `You typed: ${userText}`;
//   message.style.fontSize = `${userText.length + 10}px`;
// });

// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click Me!";
//   }
// });

// Game State Object
const gameState = {
  scores: [0, 0],
  winningScore: 5,
  isGameOver: false,

  addPoint: function (playerIndex) {
    if (!this.isGameOver) {
      this.scores[playerIndex]++;
      this.updateScoreDisplay(playerIndex);

      if (this.scores[playerIndex] >= this.winningScore) {
        this.showWinner(playerIndex);
      }
    }
  },

  updateScoreDisplay: function (playerIndex) {
    document.querySelector(`#score-${playerIndex + 1}`).textContent =
      this.scores[playerIndex];
  },


  showWinner: function (playerIndex) {
    this.isGameOver = true;
    const winnerName = `Player ${playerIndex + 1}`;
    document.querySelector(".winner-name").textContent = winnerName;

    document.querySelector(".winner").classList.remove("hidden");
    document.querySelector(".status").classList.add("hidden");
  },

  resetGame: function () {
    this.scores = [0, 0];
    this.isGameOver = false;

    document.querySelectorAll(".score").forEach((el) => (el.textContent = 0));
    document.querySelector(".winner").classList.add("hidden");
    document.querySelector(".status").classList.remove("hidden");
  },
};

document.querySelectorAll(".btn-add").forEach((btn) => {
  btn.addEventListener("click", function () {
    const playerIndex = this.dataset.player - 1;
    gameState.addPoint(playerIndex);
  });
});

document.querySelector("#btn-reset").addEventListener("click", function () {
  gameState.resetGame();
});

document.querySelector("#winning-score").addEventListener("change", function () {
  gameState.winningScore = parseInt(this.value);
  document.querySelector(".target").textContent = this.value;
  gameState.resetGame();
});

// cleaning up code and organizing game logic into the gameState object for better structure and maintainability.