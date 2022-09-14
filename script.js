var quizScore = 0;


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


document.querySelectorAll("#Start").addEventListener("click", function (){

// make h3 content disappear at start of quiz
function begin () {
document.querySelectorAll(h3).add("hide");
document.querySelectorAll("#Start").add("hide");
};

begin();

for ( var i = 0; i < quizContent.length; i++ ) {
var quizQuestion = document.createElement(h3)[i]
}
});