// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var quizScore = 0;
let answer1 = document.getElementById("btn0");
let answer2 = document.getElementById("btn1");
let answer3 = document.getElementById("btn2");
let answer4 = document.getElementById("btn3");
let mainTextBox = document.querySelectorAll("h3");
let iteration = 0;


// function for quiz countdown

// function for score tracking

// quiz questions and answers
var quizContent = [
    {
        question: 'Commonly used data types DO Not include:',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 2
    },
    {
        question: 'The condition in an if / else statement is enclosed with __________.',
        options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 3
    },
    {
        question: 'Arrays in JavaScript can be used to store __________.',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 4
    },
    {
        question: 'String values must be enclosed within __________ when being assigned to variables.',
        options: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 2
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 3
    }
];


// timer function

function countdown() {
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {

    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

seconds = seconds < 2 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`
    time--;
}
}

// function to reveal hidden buttons
function revealHiddenButtons() {
    answer2.classList.remove("invisible");
    answer3.classList.remove("invisible");
    answer4.classList.remove("invisible");
}


// function to change questions and answers


document.querySelector("button").addEventListener("click", function () {
    revealHiddenButtons();
    countdown();

    document.querySelector("h3").innerText = quizContent[iteration].question;
    answer1.innerText = quizContent[iteration].options[0];
    answer2.innerText = quizContent[iteration].options[1];
    answer3.innerText = quizContent[iteration].options[2];
    answer4.innerText = quizContent[iteration].options[3];
})



// function to indicate right or wrong answers

// function to tally quiz score






