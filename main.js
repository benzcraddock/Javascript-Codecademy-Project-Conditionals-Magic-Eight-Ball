// define variable set to empty string, allows for user to enter their name in between ''
let userName = 'BENYE';

// ternary expression that uses string interpolation to log 'Hello, userName!' if they enter their name
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// define variable that represents the question the user wants to ask the Magic Eight ball
const userQuestion = 'Will Kanye drop DONDA today?';

// states what question the user asked the Magic Eight ball
console.log(`The user, ${userName}, asked the Magic Eight Ball "${userQuestion}"`);

// define variable that returns a random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8);

// define variable, dependent on value of randomNumber
let eightBall = '';

// control flow that takes in randomNumber and assigns eightBall to a possible reply, using switch statements
switch (randomNumber) {
  case 0:
    eightBall = 'No cap, DONDA is dropping today'
    break;
  case 1:
    eightBall = 'NOWR'
    break;
  case 2:
    eightBall = 'On GOD it\'s not dropping fam'
    break;
  case 3:
    eightBall = 'SOONR'
    break;
  case 4:
    eightBall = 'Not looking too good'
    break;
  case 5:
    eightBall = 'YESSIR'
    break;
  case 6:
    eightBall = 'In Jesus name, no more cap'
    break;
  case 7:
    eightBall = 'He runnin\' around like he Pac'
    break;
}

// print magic eight ball's answer
console.log(`The Magic Eight Ball says, "${eightBall}"`);