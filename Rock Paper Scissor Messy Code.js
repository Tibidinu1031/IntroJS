const getUserChoice = userInput => {
  userInput = userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {return userInput} else {console.log("Error message")}
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return "scissors";
    default:
      return "Error Message";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie!";
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return `Computer has won`;
    } else {
      return `You won`;
    }
  }


  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return "Computer has won!";
    } else {
      return "You won!"
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer has won!";
    } else {
      return "You won!"
    }
  }
}

const playGame = () => {
  userChoice = getUserChoice('rock', 'paper', 'scissors')
  computerChoice = getComputerChoice()
  console.log(`You choice is: ${userChoice}`)
  console.log(`Computer's choice is: ${computerChoice}`)
  determineWinner(userChoice, computerChoice)
}

console.log(playGame());


  



