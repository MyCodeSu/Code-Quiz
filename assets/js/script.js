var quizScore = 0;
let answer1 = document.getElementById("btn0");
let answer2 = document.getElementById("btn1");
let answer3 = document.getElementById("btn2");
let answer4 = document.getElementById("btn3");
let mainTextBox = document.querySelectorAll("h3");


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

// function to reveal hidden buttons
function revealHiddenButtons() {
    answer2.classList.remove("invisible");
    answer3.classList.remove("invisible");
    answer4.classList.remove("invisible");
}



// function to change questions and answers

// function to indicate right or wrong answers

// function to tally quiz score






