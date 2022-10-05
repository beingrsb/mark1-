var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ? ');
console.log('Hey ' + userName + '! Welcome to HOW WELL DO YOU KNOW Regal Quiz.');
console.log('---------------------------------------------------');
console.log("Rules & Instructions: ");
console.log('You will get +2 for each right answer and -2 for each wrong answer');
console.log('---------------------------------------------------');

const questions = [{
  question: "Where do Regal Live? ",
  answer: "Bangalore"
}, {
  question: "Whats the Regal age is? ",
  answer: "22"
}, {
  question: "In which month Regal has his birthday? ",
  answer: "june"
}, {
  question: "Which one do I like? Coffee or Tea? ",
  answer: "Tea"
}]
var score = 0;

const play = (question, answer) => {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('You are right!');
    score += 2;
  }
  else {
    console.log('You are wrong! Right answer was ' + answer);
    score -=  2;
  }
  console.log('Current score : ' + score);
  console.log('----------------------------------')
}


for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log('YAY! You scored Marks: ' + score);