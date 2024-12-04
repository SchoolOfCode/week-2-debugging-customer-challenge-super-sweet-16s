function randomNumberGame () { // Added function

  let score = 0;
  let playAgain = true;

  while (playAgain === true) {
    const randomNumber = Math.floor(Math.random() * 10) + 1; // changed from 100 to 10 so that the range is 1-10 instead of 1-100
    console.log(randomNumber)
    const userGuess = prompt("Guess a number between 1 and 10:");

    if (userGuess == randomNumber) { 
      // typo - should be randomNumber and added ==
      alert("Congratulations! You guessed the correct number.");
      score++;
    } else {
      alert(`Sorry, the correct number was ${randomNumber}. You lose.`); //typo - should be randomNumber
      // take out score++;
    }

    playAgain = confirm("Do you want to play again?");
  }

    alert(`Game over. Your final score is ${score}.`);
 
    return "Final Game Over!";
}