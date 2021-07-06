"use strict";

//generates random integar between 1 and 20
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//function to display message
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//adds event listener to button
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No number!";

    //calling message passing in the message as a string
    displayMessage("⛔ No number!");

    //when the user wins
  } else if (guess === number) {
    //document.querySelector(".message").textContent = "🎉 Correct Number!";

    //calling message passing in the message as a string
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.background = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is wrong ~ too high or too low
  } else if (guess !== number) {
    if (score > 1) {
      // let message = (document.querySelector(".message").textContent =
      //   guess > number ? "📈 Too High!" : "📉 Too Low!");
      // displayMessage(message);

      displayMessage(guess > number ? "📈 Too High!" : "📉 Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥You Lost!💥";
      document.querySelector(".score").textContent = 0;
    }

    /* this portion was refactored to the previous else if statement (1 block not 2) ~ could be done with a function too */

    //   //when guess is too high
    // } else if (guess > number) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📈 Too High!";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "💥You Lost!💥";
    //     document.querySelector(".score").textContent = 0;
    //   }

    //   //when guess is too low
    // } else if (guess < number) {
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📉 Too Low!";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //     document.querySelector(".score").textContent = score;

    //     //when user loses
    //   } else {
    //     document.querySelector(".message").textContent = "💥You Lost!💥";
    //     document.querySelector(".score").textContent = 0;
    //   }
  }
});

//resets the game when again button is clicked
document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.background = "#222";
  document.querySelector(".number").style.width = "15rem";
});
