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

const results = document.querySelector("#results");

function calculate() {
  for (let i = 0; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!";
}

const calculateBtn = document.querySelector("#calculate");
const clrBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clrBtn.addEventListener("click", () => (results.textContent = ""));