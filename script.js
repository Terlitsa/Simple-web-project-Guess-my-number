"use strict";

//Select an element in html that is going to be changed and save it as innitial value:
// const innitialMessageValue = document.querySelector(".message").textContent;

// //Change value of element in html:
// document.querySelector(".message").textContent = "Correct!!!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 11;

//--------------------TO BE REFACTORED!!!---------------
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
console.log("Score: " + score, typeof score);
let highScore = Number(document.querySelector(".highscore").textContent);
console.log("Highscore: " + highScore, typeof highScore);
// EVENT LISTENER
document.querySelector(".check").addEventListener("click", function () {
  //START OF LOGIC OF EVENT HANDLER
  const guess = Number(document.querySelector(".guess").value);
  console.log(`Secret numer: ${secretNumber}`);
  console.log("Introduced number: " + guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number to check!!!";
    //--------------------WIN CASE-------------------
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "You win!!!";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector("body").style.backgroundColor = "#D9CF42";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.fontSize = "8rem";
    document.querySelector("h1").textContent = "You guessed the number!!!";
  }
  // ----------THE NUMBER IS TOO BIG CASE-----------
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score < 1) {
      document.querySelector(".message").textContent = "You lost the game!";
    }
    // ----------THE NUMBER IS TOO SMALL CASE----------
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    score--;
    document.querySelector(".score").textContent = score;

    if (score < 1) {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
});
//--------RESET BUTTON--------------
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = "20";
  document.querySelector("h1").textContent = "Guess My Number!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").style.fontSize = "6rem";
  document.querySelector(".guess").value = null;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = Number(document.querySelector(".score").textContent);
});
