// DOM VARIABLES
var heading = document.querySelector("header");
var startQuiz = document.querySelector("#start-quiz");
var timer = document.querySelector("#timer");
var instructions = document.querySelector("#instructions");
var quizContainer = document.querySelector(".quizContainer");
var askQuestions = document.querySelector("#questions");
var submit = document.querySelector("#submit");
var clear = document.querySelector("#clearScores");
var finalScore = document.getElementById("final-score")

// variables
let time = 20;
let questionIndex = 0;

// What is hapening on the click of the button
startQuiz.addEventListener("click", function(){
    heading.remove();
    startQuiz.remove();
    instructions.remove();
    const askQuestions = document.createElement("h3");
    askQuestions.innerHTML = "What is your name?";
    quizContainer.appendChild(askQuestions);
    console.log(quizContainer)
    
})
