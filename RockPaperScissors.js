const getUserChoice = userInput => {
userInput = userInput.toLowerCase();
if (userInput === 'rock'|| userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
  return userInput;
} else{
  console.log('Your selection is invalid')
}
};
//console.log(getUserChoice('rock'));

let getComputerChoice = () => {
  Math.floor(Math.random() * 3)
  if ( Math.floor(Math.random() * 3) === 0) {
    return 'rock';
  } else if (Math.floor(Math.random() * 3) === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
//console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'You won: Bomb destroys everything. That is a Cheat!!'
  }
  if (userChoice === computerChoice){
    return 'The Game Was a Tie!!!'
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The computer won: Paper wraps around rock';
    } else if (computerChoice === 'scissors'){
      return 'You won: Rock breaks Scissors';
    }
  } if (userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'You won: Paper wraps around rock';
    } else if (computerChoice === 'scissors'){
      return 'The Computer won: Scissors cuts Paper';
    }
  } if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The Computer won: Rock can break Scissors';
    } else if (computerChoice === 'paper'){
      return 'You won: Scissors cuts Paper';
    }
  }
}


/*console.log(determineWinner('paper', 'scissors')); 
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock')); */

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();

