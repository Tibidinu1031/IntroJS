const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === "scissors" || userInput === 'bomb') {
    return userInput;
  } else {
    return "Error Message";
  } 
}

const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3)
  switch (randomChoice){
    case 0:
      return 'rock';
    case 1:
      return "paper";
    case 2:
      return 'scissors';
    default:
      return 'error message';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "That's a Tie";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer won";
    } else {
      return "You won";
    }
  }

  // This is a cheat code for the user
  // Bomb makes sure the user wins no matter what
  if (userChoice === 'bomb') {
    return "You won"
  }
}

const playGame = () => {
  userChoice = getUserChoice('bomb');
  computerChoice = getComputerChoice();
  console.log(`You chose: ${userChoice}`)
  console.log(`Computer chose: ${computerChoice}`)
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();