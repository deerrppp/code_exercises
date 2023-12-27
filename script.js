//CALLBACK FUNCTIONS
// function ask(question,yes,no){
//   if (confirm(question)) yes()
//   else no();
// }

// function showOk() {
//   alert("you agreed.");
// }

// function showCancel() {
//   alert("You canceled the execution.");
// }

// ask("Do you agree", showOk, showCancel);
//------------------------------------------

//FUNCTION EXPRESSION(SHORTER FUNCTION)
// function ask(question,yes,no) {
//   if (confirm(question)) yes()
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// let age = prompt("What is your age?", 16);

// let welcome;

// if ( age < 18 ) {
//   welcome = function() {
//     alert("Hello, you're under 18");
//   }
// } else {
//   welcome = function() {
//     alert("Hi! You're an adult");
//   }
// }

// welcome();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   () => alert("You agreed"),
//   () => alert("You cancelled the execution")
// )

// function add7(num) {
//   num + 7
// }

// let add7 = (num) => {
//   num = +prompt("ADDITION: Enter a number",7);
//   return num + 7;
// };

// console.log(add7());

// let multiply = (num1, num2) => num1 * num2;
// console.log(multiply(3, 6));

// ---CONVERT FIRST LETTER TO CAPS---
// let capitalize = (word) => {
//   // text = prompt("Enter a word:", "Input text");
//   word = prompt("Enter a word", "Hi");
//   caps = word.charAt(0).toUpperCase();
//   small = word.slice(1).toLowerCase();
//   word = caps.concat(small); //pwede din word = caps + small;
//   console.log(word);
// }
// capitalize();

// --FINDING LAST LETTER--
// let lastLetter = (word) =>
// word = word.substring(word.length - 1);

// console.log(lastLetter("owaeoakritaaw"))

// ----FIZZ BUZZ----
// let answer = +(prompt("Please enter the number you would like to FizzBuzz"));

// for (let i = 1; i <= answer; i++) {
//   if(i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//     else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }

// }

// ---------ROCK PAPER SCISSORS---------
// Game that loops 5 times using console
// function getComputerChoice() {
//   let number =  Math.floor(Math.random() * 3) + 1;
//   switch (number) {
//     case 1:
//      compChoice = "rock";
//      break;
//     case 2:
//       compChoice = "paper";
//       break;
//     case 3:
//       compChoice = "scissors";
//       break;
//   }
//   console.log(`Computer choice: ${compChoice}`);
//   return compChoice;
// }

// function getPlayerChoice() {
//   let playerChoice = prompt("Paper, Rock or Scissors?").toLowerCase();
//     if (playerChoice === "") {
//         alert("You entered an invalid response");
//       }
//     console.log(`Player choice: ${playerChoice}`);
//     return playerChoice;
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie";
//   } else if (playerSelection === "rock"){
//     if (computerSelection === "paper") {
//         return `You lose! ${computerSelection} beats ${playerSelection}.`;
//     } else {
//       return `You win! ${playerSelection} beats ${computerSelection}`; //SCISSORS
//     }
//   } else if (playerSelection === "scissors"){
//     if (computerSelection === "rock") {
//       return `You lose! ${computerSelection} beats ${playerSelection}.`;
//     } else {
//       return `You win! ${playerSelection} beats ${computerSelection}`;
//     }
//   } else if (playerSelection === "paper") {
//     if (computerSelection === "scissors"){
//       return `You lose! ${computerSelection} beats ${playerSelection}.`;
//     } else {
//       return `You win! ${playerSelection} beats ${computerSelection}`;
//     }
//   } else {
//     return "You made an invalid choice!"
//   }
// }

// function game() {
//   for (let i = 0; i < 5; i ++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     console.log(playRound(playerSelection, computerSelection));
//   }
// }

// game();

// ---LOOPING AN ARRAY---
// const fruits = ["Apple", "Banana", "Oranges", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";

// for (let i = 0; i < fLen; i++) {
//   text += "<li>" + fruits[i] + "</li>";
// }

// text += "</ul>";

// document.getElementById("demo").innerHTML = text;

// ---LOOPING AN ARRAY--- using forEach Array method
// const fruits = ["Apple", "Banana", "Mnago", "Oranges"];

// let text = "<ul>";
// fruits.forEach(myFunction);
// text += "</ul>";

// function myFunction(v) {
//   text += "<li>" + v + "</li>";
// }

// document.getElementById("demo").innerHTML = text;

// ---MAKE ALL ARRAY ITEMS CAPITALIZED---
// function toUpper(string) {
//   return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const cat = cats.map(toUpper);

// console.log(cat);

// ---FOR LOOP--- calculating squares
// const results = document.querySelector("#results");

// function calculate() {
//   for (let i = 0; i < 10; i++) {
//     const newResult = `${i} x ${i} = ${i * i}`;
//     results.textContent += `${newResult}\n`;
//   }
//   results.textContent += "\nFinished!";
// }

// const calculateBtn = document.querySelector("#calculate");
// const clrBtn = document.querySelector("#clear");

// calculateBtn.addEventListener("click", calculate);
// clrBtn.addEventListener("click", () => (results.textContent = ""));

// ---FOR LOOP--- proper punctuation and calculating the end of array
// const results = document.querySelector("#results");

// function calculate() {
//   const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
//   results.textContent = "My cats are called ";
//   for (let i = 0; i < cats.length; i++) {
//     if (i === cats.length - 1) {
//       results.textContent += `and ${cats[i]}.`;
//     } else {
//       results.textContent += `${cats[i]}, `;
//     }
//   }
// }

// const calculateBtn = document.querySelector("#calculate");
// const clrBtn = document.querySelector("#clear");

// calculateBtn.addEventListener("click", calculate);
// clrBtn.addEventListener("click", () => (results.textContent = ""));

// Finding phone number by contact name
// Exit for loop with break statement
// const contacts = [
//   "Chris:2232322",
//   "Sarah:3453456",
//   "Bill:7654322",
//   "Mary:9998769",
//   "Dianne:9384975",
// ];

// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   const searchName = input.value.toLowerCase();
//   input.value = "";
//   input.focus();
//   para.textContent = "";
//   for (const contact of contacts) {
//     const findContact = contact.split(":");
//     if (findContact[0].toLowerCase() === searchName) {
//       para.textContent = `${findContact[0]}'s contact number is ${findContact[1]}`;
//       break;
//     }
//   }
//   if (para.textContent === "") {
//     para.textContent = "Contact not found";
//   }
// });

// Finding squares of integers using continue statement
// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   para.textContent = "Output: ";
//   const num = input.value;
//   input.value = "";
//   input.focus();
//   for (let i = 1; i <= num; i++) {
//     let sqRoot = Math.sqrt(i);
//     if (Math.floor(sqRoot) !== sqRoot) {
//       continue;
//     }
//     para.textContent += `${i} `;
//   }
// });

//

// let output = document.querySelector(".output");
// output.innerHTML = "";

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement("p");
//   if (i === 0) {
//     para.textContent = `Blast Off!`;
//   } else if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else {
//     para.textContent = `${i}`;
//   }
//   output.appendChild(para);
//   i--;
// }

// DOM, COUNTDOWN TO 0
// const output = document.querySelector(".output");
// output.innerHTML = "";

// let i = 10;

// while (i >= 0) {
//   const para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i === 0) {
//     para.textContent = "Blast off!";
//   } else {
//     para.textContent = i;
//   }

//   output.appendChild(para);

//   i--;
// }

//---DO While
// let num;

// do {
//   num = prompt("Enter a number greater than 100", 0);
// } while (num <= 100 && num);

//js-exercise odin
//mag iinput ng hey tapos nakalagay kung ilan. pag negative number nilagay mag eerror
// const repeatString = function (word, num) {
//   if (num < 0) return "ERROR";
//   string = "";
//   for (i = 0; i < num; i++) {
//     string += word;
//   }
//   return string;
// };

// repeatString();

//reverse string
// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

//rest arguments
// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 2, 3, 4);
// console.log(`The total is ${total}`);

// function removeFromArray(array, ...removedNumber) {
//   return array.filter((num) => removedNumber.includes(num));
// }

// const remover = removeFromArray([1, 2, 3, 4, 5, 6], 2, 3, 4);
// console.log(remover);

// let reverseString = (string) => string.split("").reverse().join("");
// console.log(reverseString("aaba"));

//SUM OF ALL NUMBERS
// const sumAll = function (num1, num2) {
//   if (num1 < 0 || num2 < 0) return "ERROR";
//   // if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
//   if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
//   if (num1 > num2) [num1, num2] = [num2, num1];
//   let total = 0;
//   for (let i = num1; i <= num2; i++) {
//     total += i;
//   }
//   return total;
// };
// let addition = sumAll(7, 3);
// console.log(addition);

//LEAPYEAR
//## Hints
//- use an `if` statement and `&&` to make sure all the conditions are met properly
//Leap years are years divisible by four (like 1984 and 2004).
//However, years divisible by 100 are not leap years (such as 1800 and 1900)
//unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years).
//(Yes, it's all pretty confusing)
// const leapYears = function (num) {
//   return num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0);
// };
// let test = leapYears(1800);
// console.log(test);

//CONVERT CELSIUS to FAHRENHEIT & vice-versa
//answer should be rounded to one decimal place: i.e., `convertToCelsius(100)` should return `37.8` and not `37.77777777777778`.
// Write two functions that convert temperatures from Fahrenheit to Celsius, and vice versa:
// ```
// convertToCelsius(32) // fahrenheit to celsius, should return 0

// convertToFahrenheit(0) // celsius to fahrenheit, should return 32
// const convertToCelsius = function (fahrenheit) {
//   return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
// };

// const convertToFahrenheit = function (celsius) {
//   return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
// };
// console.log(convertToCelsius(32)); //0
// console.log(convertToCelsius(100)); //1 decimal
// console.log(convertToCelsius(-100)); //negative 1 decimal
// console.log(convertToFahrenheit(0));
// console.log(convertToFahrenheit(73.2));
// console.log(convertToFahrenheit(-10));

// const container = document.querySelector("#container");
// const p = document.createElement("p");
// p.innerText = "Hey I'm red!";
// container.appendChild(p);
// const h3 = document.createElement("h3");
// h3.innerText = "I'm a blue h3!";
// container.appendChild(h3);

// const div = document.createElement("div");
// div.classList.add("div");
// const h1 = document.createElement("h1");
// h1.innerText = "I'm in a div.";
// div.appendChild(h1);
// const p2 = document.createElement("p");
// p2.innerText = "ME TOO!";
// div.appendChild(p2);
// container.appendChild(div);

// function alertFunction() {
//   alert("YAY! You did it!");
// }

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", (a) => console.log(a));

//ADDING ELEMENTS AND APPENDING IT TO A PARENT NODE
const container = document.querySelector("#container");
const red = document.createElement("p");
red.classList.add("red");
red.style.color = "red";
red.textContent = "Hey I'm red";
container.appendChild(red);
const blue = document.createElement("h3");
blue.classList.add("blue");
blue.style.color = "blue";
blue.textContent = "I'm a blue";
container.appendChild(blue);
const div = document.createElement("div");
div.style.backgroundColor = "pink";
div.style.borderStyle = "solid";
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);
const p = document.createElement("p");
p.textContent = "Me TOO!";
div.appendChild(p);
container.appendChild(div);
//SETTING ATTRIBUTE TO A BUTTON
const button1 = document.createElement("button");
button1.setAttribute("id", "1");
button1.textContent = "Click Me";
const button2 = document.createElement("button");
button2.setAttribute("id", "2");
button2.textContent = "Click Me";
const button3 = document.createElement("button");
button3.setAttribute("id", "3");
button3.textContent = "Click Me";
container.appendChild(button1);
container.appendChild(button2);
container.appendChild(button3);

//SETTING EACH BUTTON TO HAVE AN EVENT LISTENER AND ADDING AN ALERT
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(`You clicked button ${button.id}!`);
  });
});
