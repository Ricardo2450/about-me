'use strict';

let userName = prompt('Whats your name?');
console.log(userName);

alert('Hello ' + userName + '! Welcome to my page.');

let finalScore = 7;
let score = 0;
score++;



function veteran() {
  let userVeteran = prompt('Am I a veteran?').toUpperCase();
  if (userVeteran === 'YES' || userVeteran === 'Y') {
    alert('Awesome guess. I am a Navy veteran!');
    score ++;
  }
  else if (userVeteran === 'NO' || userVeteran === 'N') {
    alert('Good guess but I am a veteran.');
  }
  else {
    alert('Please answer the question!');
  }
}

veteran();

function lives() {
  let userLives = prompt('Do I live in Arizona?').toLowerCase();
  if (userLives === 'yes' || userLives === 'y') {
    alert('I do. So I make sure to drink water because it super hot here!');
    score ++;

  }
  else if (userLives === 'no' || userLives === 'n') {
    alert('Nope. I currently I do live in Arizona but I use to live in other places before.');
  }
  else {
    alert('Seriously, answer the question!');
  }

}

lives();

function basketball() {
  let userBasketballTeam = prompt('Are the Phoenix suns basketball team my favorite?').toLowerCase();
  if (userBasketballTeam === 'yes' || userBasketballTeam === 'y') {
    alert('Heck yes!!! They are my favorite team to watch. Hope to see you at a game one day.');
    score ++;

  }
  else if (userBasketballTeam === 'no' || userBasketballTeam === 'n') {
    alert('Wrong choice. They are my favorite and you should make them your FAVORITE too!!!');
  }
  else {
    alert('No really, this is an important question to answer! So go answer it');
  }

}

basketball();

function videoGame() {
  let userVideoGame = prompt('Do I play video games?').toUpperCase();
  if (userVideoGame === 'YES' || userVideoGame === 'Y') {
    alert('BINGO!!! I love playing apex legends on the ps5.');
    score ++;

  }
  else if (userVideoGame === 'NO' || userVideoGame === 'N') {
    alert('Wrong choice! I been gaming since I was a kid');
  }
  else {
    alert('Come on, how did you not answer this question?');
  }
}

videoGame();

function learningCode() {
  let userLearningCode = prompt('Are you learning how to code too?').toUpperCase();
  if (userLearningCode === 'YES' || userLearningCode === 'Y') {
    alert('Hey, same here! Remember to take breaks and its okay to fail. We will push through this together!');
    score ++;

  }
  else if (userLearningCode === 'NO' || userLearningCode === 'N') {
    alert('You should seriously start. Its a great skill to learn and I love it so far!');
  }
  else {
    alert('Last question and you didn\'t answer! SHAME');
  }
}

learningCode();


alert('Thats a little about me. Thank you ' + userName + ' for participating! Now as you enter my page. You will see some more info about me. Anyways, I hope you have a wonderful rest of your day!');

alert('Just kidding! Lets play another game.');

function favNumber() {
  let userNumberAttempt = 4;
  let myFavNumber = 8;

  for (let userCounter = 0; userCounter < userNumberAttempt; userCounter++) {
    let userNumGuess = prompt('What is my favorite number between 1-20? Attempts remaining' + (userCounter - userNumberAttempt));
    if (userNumGuess < myFavNumber) {
      alert('You are to low. Try again');
    }
    else if (userNumGuess > myFavNumber) {
      alert('You are to High. Try again');
    }
    else if (parseInt(userNumGuess) === myFavNumber) {
      alert('Hey, You got it right! You are amazing at guessing!');
      score ++;
      break;
    }
    else {
      alert('Thats not a number. Please try again and pick a number!');
    }
    if (userCounter === userNumberAttempt - 1) {
      alert(`Sorry, you are out of attempts. You did not guess my favorite number. It was ${myFavNumber}`);
    }
  }

}

favNumber();

function myGames() {
  let guessAmount = 6;

  let games = ['apex legends', 'stardew valley', 'pokemon unite', 'overwatch', 'war thunder', 'elden ring'];

  for (let i = 0; i < guessAmount; i++) {
    let userGuess = prompt('Name a video game I like to play.').toLowerCase();

    let guess = false;
    for (let j = 0; j < games.length; j++) {
      if (userGuess === games[j]) {
        guess = true;
        alert(`You're correct! Some other answers could have been ${games} `);
        score ++;
        break;
      }
    }
    if (guess === true) {
      break;
    }
    if (guess === false) {
      alert('Wrong guess. Try again');
    }
    if (i === 5 && guess === false) {
      alert(`Sorry,you are out of guesses. Some answers were ${games}. Better luck next time.`);
    }
  }
}


myGames();

alert('Thanks for answering my questions. You got ' + score + ' out of ' + finalScore);
