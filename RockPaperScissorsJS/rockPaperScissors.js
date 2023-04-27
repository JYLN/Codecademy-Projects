const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (
    userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log('Invalid input');
  }
};

const getComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * 3);

  switch (randomChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return '[CHEAT ACTIVATED]: You win!';
  }

  if (userChoice === computerChoice) {
    return 'Game tied!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    }
    return 'You win!';
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    }
    return 'You win!';
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    }
    return 'You win!';
  }
};

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();

  console.log(`Your choice: ${userChoice} | Computer choice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
