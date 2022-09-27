// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question       DONE
// WHEN I answer a question
// THEN I am presented with another question                    DONE
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock                       DONE
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over                                        DONE
// WHEN the game is over
// THEN I can save my initials and score                        

var quizScore = 0;
let answer1 = document.getElementById("btn0");
let answer2 = document.getElementById("btn1");
let answer3 = document.getElementById("btn2");
let answer4 = document.getElementById("btn3");
let startButton = document.querySelector("button");
let mainTextBox = document.querySelectorAll("h3");
let iteration = 0;
let seconds = 60;
const feedbackDiv = document.getElementById("feedback");
const feedbackMessage = document.createElement("p");
feedbackDiv.append(feedbackMessage);
var highScoreArray = [];
var initialsArray = [];

// function for score tracking

// quiz questions and answers
var quizContent = [
    {
        question: 'Commonly used data types DO Not include:',
        options: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 1
    },
    {
        question: 'The condition in an if / else statement is enclosed with __________.',
        options: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 2
    },
    {
        question: 'Arrays in JavaScript can be used to store __________.',
        options: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 3
    },
    {
        question: 'String values must be enclosed within __________ when being assigned to variables.',
        options: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 1
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 2
    }
];


// timer function

function countdown() {

    const countdownEl = document.getElementById('countdown');
    seconds = 60;

    var updateCountdown = setInterval(function () {
        seconds--;
        console.log(seconds);
        if (seconds <= 0) {
            clearInterval(updateCountdown);
            seconds = 0;
            countdownEl.innerHTML = "Time's up!";
            revealQuiz();
            highScore();
            restartButton();
            document.getElementById("highScoreContainer").classList.remove("invisible");
        } else if (iteration === quizContent.length) {
            clearInterval(updateCountdown);
            seconds = 0;
            revealQuiz();
            highScore();
            restartButton();
            document.getElementById("highScoreContainer").classList.remove("invisible");
        } else {
            countdownEl.innerHTML = `Time remaining: ${seconds} seconds`;
        };

    }, 1000)
}

// function to reveal hidden buttons
function revealHiddenButtons() {
    startButton.classList.add("invisible");
    answer1.classList.remove("invisible");
    answer2.classList.remove("invisible");
    answer3.classList.remove("invisible");
    answer4.classList.remove("invisible");
}

// function to hide quiz content

function hideButtons() {
    startButton.classList.add("invisible");
    answer1.classList.add("invisible");
    answer2.classList.add("invisible");
    answer3.classList.add("invisible");
    answer4.classList.add("invisible");
    document.getElementById("highscore").classList.add("invisible");
    document.getElementById("highscore").innerText = ``;
}

// function to change questions and answers

function revealQuiz() {
    revealHiddenButtons();
    document.getElementById("highScoreContainer").classList.add("invisible");

    if (seconds <= 0) {
        hideButtons();
        document.querySelector("h3").innerText = "The quiz is over. Please enter your initials for the high score."
    }
    else if (iteration > 4) {
        hideButtons();
        document.querySelector("h3").innerText = "The quiz is over. Please enter your initials for the high score."
    } else {
        document.querySelector("h3").innerText = quizContent[iteration].question;
        answer1.innerText = quizContent[iteration].options[0];
        answer2.innerText = quizContent[iteration].options[1];
        answer3.innerText = quizContent[iteration].options[2];
        answer4.innerText = quizContent[iteration].options[3];
    }
}

// function to indicate right or wrong answers
var checkAnswer = function (event) {
    var selectedAnswer = event.target;
    if (selectedAnswer.matches(".btn")) {
        var correctAnswer = quizContent[iteration].answer;
        var answerText = quizContent[iteration].options[correctAnswer];
        var clickedAnswer = selectedAnswer.innerText;

        var userAnswer = document.querySelector("#feedback");

        if (iteration > 4) {
            hideButtons()
        }
        if (clickedAnswer === answerText) {

            feedbackMessage.innerHTML = "Correct!";
            feedbackDiv.style.color = "green";
            quizScore++;
            document.getElementById("highscore").innerText = `High Score: ${quizScore}`;
            iteration++;
        } else {
            feedbackMessage.innerHTML = "Incorrect!";
            feedbackDiv.style.color = "red";
            seconds = seconds - 10;
            iteration++;
        }
    }
}

// function record initials and high score
function highScore() {
    var initials = prompt("The quiz is over. Please enter your initials.");

    var highScoreContainer = document.getElementById("highScoreContainer");

    const scoreData = document.createElement("p");
    scoreData.setAttribute("id", "highScoreP");

    // tableContainer.removeChild(table);

    localStorage.setItem("initials", JSON.stringify(initials));
    initialsArray.push(JSON.parse(localStorage.getItem("initials")));
    localStorage.setItem("score", JSON.stringify(quizScore));
    highScoreArray.push(JSON.parse(localStorage.getItem("score")));

    for (var s = 0; s < initials.length; s++) {
        highScoreContainer.appendChild(scoreData).innerText = "Initial & Score: " + initialsArray[s] + " - " + highScoreArray[s];
    }
}

// function to restart quiz
function restartButton() {
    document.getElementById("start-button").classList.remove("invisible");
}

// calling all functions

document.getElementById("start-button").onclick = function () {
    countdown();
}

document.getElementById("button-section").onclick = function () {
    revealQuiz();
}

document.getElementById("button-section").addEventListener("click", checkAnswer);
