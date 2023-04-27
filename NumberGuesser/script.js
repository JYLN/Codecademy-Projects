let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsDiff = (guess, target) => Math.abs(target - guess);

function compareGuesses(userGuess, computerGuess, targetNum) {
  if (userGuess < 0 || userGuess > 9) {
    alert('Number out of range! Choose a number between 0-9');
  }

  const userDiff = getAbsDiff(userGuess, targetNum);
  const compDiff = getAbsDiff(computerGuess, targetNum);

  return userDiff <= compDiff;
}

// function updateScore(winner) {
//   switch (winner) {
//     case 'human':
//       humanScore++;
//       break;
//     case 'computer':
//       computerScore++;
//       break;
//   }
// }

// const updateScore = function (winner) {
//   if (winner === 'human') {
//     humanScore++;
//   } else if (winner === 'computer') {
//     computerScore++;
//   }
// };

const updateScore = winner => (winner === 'human' ? humanScore++ : computerScore++);

const advanceRound = () => currentRoundNumber++;
