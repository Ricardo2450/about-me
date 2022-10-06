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
    // console.log(userVeteran, 'Awesome guess. I am a Navy veteran!');
    alert('Awesome guess. I am a Navy veteran!');
    score + 1;
    // console.log(score);
  }
  else if (userVeteran === 'NO' || userVeteran === 'N') {
    // console.log(userVeteran, 'Good guess but I am a veteran.');
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
    // console.log(userLives, 'I do. So I make sure to drink water because it super hot here!');
    alert('I do. So I make sure to drink water because it super hot here!');
    score += 1;
    // console.log(score);

  }
  else if (userLives === 'no' || userLives === 'n') {
    // console.log(userLives, 'Nope. I currently I do live in Arizona but I use to live in other places before.');
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
    // console.log(userBasketballTeam, 'Heck yes!!! They are my favorite team to watch. Hope to see you at a game one day.');
    alert('Heck yes!!! They are my favorite team to watch. Hope to see you at a game one day.');
    score += 1;
    // console.log(score);

  }
  else if (userBasketballTeam === 'no' || userBasketballTeam === 'n') {
    // console.log(userBasketballTeam, 'Wrong choice. They are my favorite and you should make them your FAVORITE too!!!');
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
    // console.log(userVideoGame, 'BINGO!!! I love playing apex legends on the ps5.');
    alert('BINGO!!! I love playing apex legends on the ps5.');
    score += 1;
    // console.log(score);

  }
  else if (userVideoGame === 'NO' || userVideoGame === 'N') {
    // console.log(userVideoGame, 'Wrong choice! I been gaming since I was a kid');
    alert('Wrong choice! I been gaming since I was a kid');
  }
  else {
    alert('Come on, how did you not answer this question?');
  }
}

function learningCode() {
  let userLearningCode = prompt('Are you learning how to code too?').toUpperCase();
  if (userLearningCode === 'YES' || userLearningCode === 'Y') {
    // console.log(userLearningCode, 'Hey, same here! Remember to take breaks and its okay to fail. We will push through this together!');
    alert('Hey, same here! Remember to take breaks and its okay to fail. We will push through this together!');
    score += 1;
    // console.log(score);

  }
  else if (userLearningCode === 'NO' || userLearningCode === 'N') {
    // console.log(userLearningCode, 'You should seriously start. Its a great skill to learn and I love it so far!');
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
    // console.log(userCounter);
    if (userNumGuess < myFavNumber) {
      // console.log('you are to low. Try again.');
      alert('You are to low. Try again');
    }
    else if (userNumGuess > myFavNumber) {
      // console.log('You are to high. Try again');
      alert('You are to High. Try again');
    }
    else if (parseInt(userNumGuess) === myFavNumber) {
      // console.log('You got it right');
      alert('Hey, You got it right! You are amazing at guessing!');
      score += 1;
      // console.log(score);

      break;
    }
    else {
      // console.log('Thats not a number. Please pick a number!');
      alert('Thats not a number. Please try again and pick a number!');
    }
    if (userCounter === userNumberAttempt - 1) {
      // console.log(`Sorry, you are out of attempts. You did not guess my favorite number. It was ${myFavNumber}`);
      alert(`Sorry, you are out of attempts. You did not guess my favorite number. It was ${myFavNumber}`);
    }
  }

}

favNumber();

let guessAmount = 6;

let games = ['apex legends', 'stardew valley', 'pokemon unite', 'overwatch', 'war thunder', 'elden ring'];

for (let i = 0; i < guessAmount; i++) {
  let userGuess = prompt('Name a video game I like to play.').toLowerCase();

  let guess = false;
  for (let j = 0; j < games.length; j++) {
    if (userGuess === games[j]) {
      guess = true;
      alert(`you're correct! Some other answers could have been ${games} `);
      score += 1;
      // console.log(score);
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

alert('Thanks for answering my questions. You got ' + score + ' out of ' + finalScore);
// console.log(score)
