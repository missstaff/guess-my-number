"use strict";

//generates random integar between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//places dom elements into variables for easy reference
let body = document.querySelector("body");
let number = document.querySelector(".number");
let playerHighScore = document.querySelector(".highscore");
let playerScore = document.querySelector(".score");
let playerGuess = document.querySelector(".guess");

//function to display message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//adds event listener to button
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(playerGuess.value);

  //when there is no input
  if (!guess) {
    displayMessage("⛔ No number!");

    //when the user wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    body.style.background = "#60b347";
    number.style.width = "30rem";
    number.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      playerHighScore.textContent = highScore;
    }

    //when guess is wrong ~ too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      playerScore.textContent = score;
    } else {
      displayMessage("💥You Lost!💥");
      document.querySelector(".score").textContent = 0;
    }
  }
});

//resets the game when again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start Guessing...");
  number.textContent = "?";
  playerScore.textContent = score;
  playerGuess.value = "";

  body.style.background = "#222";
  number.style.width = "15rem";
});
