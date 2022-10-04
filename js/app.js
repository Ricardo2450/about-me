'use strit';

let userName = prompt('Whats your name?');
console.log(userName);

alert('Hello ' + userName + '! Welcome to my page.');


let userVeteran = prompt('Am I a veteran?').toUpperCase();
if (userVeteran === 'YES' || userVeteran === 'Y') {
  // console.log(userVeteran, 'Awesome guess. I am a Navy veteran!');
  alert('Awesome guess. I am a Navy veteran!');
}
else if (userVeteran === 'NO' || userVeteran === 'N') {
  // console.log(userVeteran, 'Good guess but I am a veteran.');
  alert('Good guess but I am a veteran.');
}
else {
  alert('Please answer the question!');
}

let userLives = prompt('Do I live in Arizona?').toLowerCase();
if(userLives === 'yes' || userLives === 'y') {
  // console.log(userLives, 'I do. So I make sure to drink water because it super hot here!');
  alert('I do. So I make sure to drink water because it super hot here!');
}
else if( userLives === 'no' || userLives === 'n'){
  // console.log(userLives, 'Nope. I currently I do live in Arizona but I use to live in other places before.');
  alert('Nope. I currently I do live in Arizona but I use to live in other places before.');
}
else {
  alert('Seriously, answer the question!');
}

let userBasketballTeam = prompt('Are the Phoenix suns basketball team my favorite?').toLowerCase();
if (userBasketballTeam === 'yes' || userBasketballTeam === 'y'){
  // console.log(userBasketballTeam, 'Heck yes!!! They are my favorite team to watch. Hope to see you at a game one day.');
  alert('Heck yes!!! They are my favorite team to watch. Hope to see you at a game one day.');
}
else if(userBasketballTeam === 'no' || userBasketballTeam === 'n') {
  // console.log(userBasketballTeam, 'Wrong choice. They are my favorite and you should make them your FAVORITE too!!!');
  alert('Wrong choice. They are my favorite and you should make them your FAVORITE too!!!');
}
else {
  alert('No really, this is an important question to answer! So go answer it');
}

let userVideoGame = prompt('Do I play video games?').toUpperCase();
if (userVideoGame === 'YES' || userVideoGame === 'Y'){
  // console.log(userVideoGame, 'BINGO!!! I love playing apex legends on the ps5.');
  alert('BINGO!!! I love playing apex legends on the ps5.');
}
else if(userVideoGame === 'NO' || userVideoGame === 'N'){
  // console.log(userVideoGame, 'Wrong choice! I been gaming since I was a kid');
  alert('Wrong choice! I been gaming since I was a kid');
}
else {
  alert('Come on, how did you not answer this question?')
}

let userLearningCode = prompt('Are you learning how to code too?').toUpperCase();
if(userLearningCode === 'YES' || userLearningCode === 'Y'){
  // console.log(userLearningCode, 'Hey, same here! Remember to take breaks and its okay to fail. We will push through this together!');
  alert('Hey, same here! Remember to take breaks and its okay to fail. We will push through this together!');
}
else if(userLearningCode === 'NO' || userLearningCode === 'N'){
  // console.log(userLearningCode, 'You should seriously start. Its a great skill to learn and I love it so far!');
  alert('You should seriously start. Its a great skill to learn and I love it so far!');
}
else {
  alert("Last question and you didn't answer! SHAME" )
}

alert('Thats a little about me. Thank you ' + userName + ' for participating! Now as you enter my page. You will see some more info about me. Anyways, I hope you have a wonderful rest of your day!')

