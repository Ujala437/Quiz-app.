"use strict";

// ===================================
// QUIZORA - PROFESSIONAL QUIZ APP
// ===================================

const questionBank = {

    HTML: [
        {
            q: "Which HTML attribute provides alternative text for an image?",
            o: ["alt", "name", "title", "text"],
            a: 0
        },
        {
            q: "Which tag is used to create a hyperlink?",
            o: ["<link>", "<a>", "<href>", "<url>"],
            a: 1
        },
        {
            q: "Which tag creates the largest heading?",
            o: ["<h6>", "<head>", "<h1>", "<heading>"],
            a: 2
        },
        {
            q: "Which tag is used to insert an image?",
            o: ["<image>", "<picture>", "<img>", "<src>"],
            a: 2
        },
        {
            q: "Which HTML tag creates an unordered list?",
            o: ["<ol>", "<ul>", "<li>", "<list>"],
            a: 1
        },
        {
            q: "Which attribute specifies a link destination?",
            o: ["src", "href", "link", "action"],
            a: 1
        },
        {
            q: "Which tag creates a line break?",
            o: ["<break>", "<lb>", "<br>", "<line>"],
            a: 2
        },
        {
            q: "Which HTML element creates a form?",
            o: ["<input>", "<form>", "<fieldset>", "<button>"],
            a: 1
        },
        {
            q: "Which input type hides typed characters?",
            o: ["text", "hidden", "password", "private"],
            a: 2
        },
        {
            q: "Which tag defines a table row?",
            o: ["<td>", "<th>", "<tr>", "<table-row>"],
            a: 2
        },
        {
            q: "Which declaration defines an HTML5 document?",
            o: ["<html5>", "<!DOCTYPE html>", "<doctype>", "<document>"],
            a: 1
        },
        {
            q: "Which tag is used for a paragraph?",
            o: ["<para>", "<p>", "<text>", "<pg>"],
            a: 1
        },
        {
            q: "Which attribute gives an element a unique identifier?",
            o: ["class", "name", "id", "key"],
            a: 2
        },
        {
            q: "Which tag is used to play video in HTML5?",
            o: ["<media>", "<movie>", "<video>", "<play>"],
            a: 2
        },
        {
            q: "Which tag contains page metadata?",
            o: ["<body>", "<meta>", "<head>", "<footer>"],
            a: 2
        }
    ],

    CSS: [
        {
            q: "What does CSS stand for?",
            o: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            a: 1
        },
        {
            q: "Which property changes text color?",
            o: ["font-color", "text-color", "color", "background"],
            a: 2
        },
        {
            q: "Which property changes the background color?",
            o: ["color", "background-color", "bgcolor", "background-text"],
            a: 1
        },
        {
            q: "Which symbol selects a class in CSS?",
            o: ["#", ".", "*", "@"],
            a: 1
        },
        {
            q: "Which symbol selects an ID in CSS?",
            o: [".", "#", "&", "$"],
            a: 1
        },
        {
            q: "Which property controls text size?",
            o: ["text-size", "font-style", "font-size", "size"],
            a: 2
        },
        {
            q: "Which CSS layout system is one-dimensional?",
            o: ["Grid", "Flexbox", "Table", "Float"],
            a: 1
        },
        {
            q: "Which property adds space inside an element?",
            o: ["margin", "padding", "border", "gap"],
            a: 1
        },
        {
            q: "Which property adds space outside an element?",
            o: ["padding", "spacing", "margin", "outline"],
            a: 2
        },
        {
            q: "Which property rounds element corners?",
            o: ["corner", "border-round", "border-radius", "round"],
            a: 2
        },
        {
            q: "Which property makes text bold?",
            o: ["font-weight", "font-bold", "text-weight", "bold"],
            a: 0
        },
        {
            q: "Which CSS unit is relative to the root font size?",
            o: ["px", "em", "rem", "vh"],
            a: 2
        },
        {
            q: "Which property controls an element's transparency?",
            o: ["visibility", "opacity", "transparent", "display"],
            a: 1
        },
        {
            q: "Which at-rule is used for responsive design?",
            o: ["@screen", "@responsive", "@media", "@device"],
            a: 2
        },
        {
            q: "Which property controls the space between grid items?",
            o: ["margin", "padding", "gap", "spacing"],
            a: 2
        }
    ],

    JavaScript: [
        {
            q: "Which keyword declares a block-scoped variable?",
            o: ["var", "let", "define", "dim"],
            a: 1
        },
        {
            q: "Which method displays a message in the browser console?",
            o: ["console.log()", "print()", "display()", "message()"],
            a: 0
        },
        {
            q: "Which operator checks strict equality?",
            o: ["=", "==", "===", "!="],
            a: 2
        },
        {
            q: "Which method selects an element by its ID?",
            o: [
                "getElementById()",
                "getByClass()",
                "queryId()",
                "selectId()"
            ],
            a: 0
        },
        {
            q: "Which keyword declares a constant?",
            o: ["var", "let", "const", "static"],
            a: 2
        },
        {
            q: "Which method adds an element to the end of an array?",
            o: ["pop()", "push()", "shift()", "join()"],
            a: 1
        },
        {
            q: "Which event occurs when a user clicks a button?",
            o: ["change", "hover", "click", "load"],
            a: 2
        },
        {
            q: "Which value represents no assigned value?",
            o: ["false", "0", "undefined", "NaN"],
            a: 2
        },
        {
            q: "Which loop executes while a condition is true?",
            o: ["if", "while", "switch", "case"],
            a: 1
        },
        {
            q: "Which method converts JSON text into a JavaScript value?",
            o: [
                "JSON.stringify()",
                "JSON.parse()",
                "JSON.convert()",
                "JSON.read()"
            ],
            a: 1
        },
        {
            q: "Which keyword is used to define a function?",
            o: ["func", "function", "method", "define"],
            a: 1
        },
        {
            q: "Which array method creates a new array by transforming items?",
            o: ["map()", "find()", "pop()", "includes()"],
            a: 0
        },
        {
            q: "Which operator represents logical AND?",
            o: ["||", "!", "&&", "&="],
            a: 2
        },
        {
            q: "Which method selects the first matching CSS selector?",
            o: [
                "getElement()",
                "querySelector()",
                "selectFirst()",
                "findElement()"
            ],
            a: 1
        },
        {
            q: "Which keyword waits for a Promise inside an async function?",
            o: ["wait", "defer", "await", "pause"],
            a: 2
        }
    ],

    "C++": [
        {
            q: "Who developed the C++ programming language?",
            o: [
                "Dennis Ritchie",
                "Bjarne Stroustrup",
                "James Gosling",
                "Guido van Rossum"
            ],
            a: 1
        },
        {
            q: "Which symbol ends a C++ statement?",
            o: [":", ".", ";", ","],
            a: 2
        },
        {
            q: "Which function is the usual entry point of a C++ program?",
            o: ["start()", "run()", "main()", "begin()"],
            a: 2
        },
        {
            q: "Which header is commonly used for cout and cin?",
            o: ["<stdio.h>", "<iostream>", "<string>", "<fstream>"],
            a: 1
        },
        {
            q: "Which operator inserts output into cout?",
            o: ["<<", ">>", "<>", "&&"],
            a: 0
        },
        {
            q: "Which operator extracts input from cin?",
            o: ["<<", ">>", "==", "::"],
            a: 1
        },
        {
            q: "Which keyword creates a class?",
            o: ["object", "structclass", "class", "newclass"],
            a: 2
        },
        {
            q: "Which concept allows one interface to have multiple forms?",
            o: ["Inheritance", "Polymorphism", "Compilation", "Encapsulation"],
            a: 1
        },
        {
            q: "Which access specifier allows access from anywhere permitted by the object?",
            o: ["private", "protected", "public", "internal"],
            a: 2
        },
        {
            q: "Which loop executes its body at least once?",
            o: ["for", "while", "do-while", "range-for"],
            a: 2
        },
        {
            q: "Which operator is used to access a class member through an object?",
            o: ["->", ".", "::", "&"],
            a: 1
        },
        {
            q: "Which concept creates a new class from an existing class?",
            o: ["Overloading", "Inheritance", "Abstraction", "Casting"],
            a: 1
        },
        {
            q: "Which keyword can be used to create a constant variable?",
            o: ["fixed", "constant", "const", "unchange"],
            a: 2
        },
        {
            q: "Which feature allows the same function name with different parameters?",
            o: ["Overriding", "Overloading", "Inheritance", "Recursion"],
            a: 1
        },
        {
            q: "Which operator is used to get the address of a variable?",
            o: ["*", "&", "%", "#"],
            a: 1
        }
    ]
};


// ===================================
// ELEMENTS
// ===================================

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const themeBtn = document.getElementById("themeBtn");

const answeredElement = document.getElementById("answered");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

const questionCount = document.getElementById("questionCount");
const roundLabel = document.getElementById("roundLabel");
const progressBar = document.getElementById("progressBar");
const answeredLabel = document.getElementById("answeredLabel");
const feedback = document.getElementById("feedback");

const quizArea = document.getElementById("quizArea");
const resultArea = document.getElementById("resultArea");

const finalScore = document.getElementById("finalScore");
const resultMessage = document.getElementById("resultMessage");

const categoryButtons = document.querySelectorAll(".category");


// ===================================
// GAME STATE
// ===================================

let currentCategory = "HTML";
let currentQuestion = null;

let answered = 0;
let score = 0;
let round = 1;

let selectedAnswer = false;
let quizFinished = false;

let secondsLeft = 300;
let timerInterval = null;

let usedQuestions = new Set();


// ===================================
// SHUFFLE QUESTIONS
// ===================================

function shuffleArray(array) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];
    }

    return shuffled;
}


// ===================================
// GET NEXT QUESTION
// ===================================

function getNextQuestion() {
    const bank = questionBank[currentCategory];

    let available = bank.filter(
        question => !usedQuestions.has(question.q)
    );

    // When all questions have been used,
    // start a new shuffled round.
    if (available.length === 0) {
        usedQuestions.clear();
        round++;

        available = shuffleArray(bank);
    }

    const question =
        available[Math.floor(Math.random() * available.length)];

    usedQuestions.add(question.q);

    return question;
}


// ===================================
// START / CHANGE CATEGORY
// ===================================

function startQuiz(category) {
    currentCategory = category;

    answered = 0;
    score = 0;
    round = 1;

    usedQuestions.clear();

    selectedAnswer = false;
    quizFinished = false;

    secondsLeft = 300;

    clearInterval(timerInterval);

    categoryButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    quizArea.hidden = false;
    resultArea.hidden = true;

    updateStats();
    showQuestion();
    startTimer();
}


// ===================================
// SHOW QUESTION
// ===================================

function showQuestion() {
    if (quizFinished) return;

    currentQuestion = getNextQuestion();

    selectedAnswer = false;

    feedback.textContent = "";
    feedback.className = "feedback";

    questionElement.textContent = currentQuestion.q;

    roundLabel.textContent =
        currentCategory + " • ROUND " + round;

    questionCount.textContent =
        "QUESTION " + (answered + 1);

    progressBar.style.width =
        Math.min((answered % 10) * 10, 100) + "%";

    answeredLabel.textContent =
        answered + " questions answered";

    optionsElement.innerHTML = "";

    nextBtn.disabled = true;
    nextBtn.textContent = "Next Question →";

    const letters = ["A", "B", "C", "D"];

    currentQuestion.o.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "option-btn";

        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = letters[index];

        const text = document.createElement("span");
        text.textContent = option;

        button.appendChild(letter);
        button.appendChild(text);

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        optionsElement.appendChild(button);
    });
}


// ===================================
// SELECT ANSWER
// ===================================

function selectAnswer(index, clickedButton) {
    if (selectedAnswer || quizFinished) return;

    selectedAnswer = true;

    const buttons =
        optionsElement.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const correctIndex = currentQuestion.a;

    if (index === correctIndex) {
        score++;

        clickedButton.classList.add("correct");

        feedback.textContent = "✓ Correct answer! Excellent!";
        feedback.className = "feedback success";
    } else {
        clickedButton.classList.add("wrong");

        buttons[correctIndex].classList.add("correct");

        feedback.textContent =
            "✗ Not quite! The correct answer is " +
            currentQuestion.o[correctIndex];

        feedback.className = "feedback error";
    }

    answered++;

    updateStats();

    progressBar.style.width =
        Math.min((answered % 10) * 10, 100) + "%";

    questionCount.textContent =
        "QUESTION " + (answered + 1);

    answeredLabel.textContent =
        answered + " questions answered";

    nextBtn.disabled = false;
}


// ===================================
// NEXT QUESTION
// ===================================

nextBtn.addEventListener("click", () => {
    if (quizFinished) return;

    if (!selectedAnswer) return;

    showQuestion();
});


// ===================================
// UPDATE SCORE
// ===================================

function updateStats() {
    answeredElement.textContent = answered;
    scoreElement.textContent = score;
}


// ===================================
// TIMER
// ===================================

function startTimer() {
    clearInterval(timerInterval);

    updateTimerDisplay();

    timerInterval = setInterval(() => {
        if (quizFinished) {
            clearInterval(timerInterval);
            return;
        }

        secondsLeft--;

        updateTimerDisplay();

        if (secondsLeft <= 0) {
            finishQuiz(true);
        }
    }, 1000);
}


function updateTimerDisplay() {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    timerElement.textContent =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}


// ===================================
// FINISH QUIZ
// ===================================

function finishQuiz(timeUp = false) {
    if (quizFinished) return;

    quizFinished = true;

    clearInterval(timerInterval);

    quizArea.hidden = true;
    resultArea.hidden = false;

    finalScore.textContent = score + " / " + answered;

    if (timeUp) {
        resultMessage.textContent =
            "Time is up! Keep practising to improve your score.";
    } else if (answered > 0 && score === answered) {
        resultMessage.textContent =
            "Perfect score! Amazing work! 🎉";
    } else if (score > 0) {
        resultMessage.textContent =
            "Great effort! Keep learning and try again.";
    } else {
        resultMessage.textContent =
            "Every expert was once a beginner. Try again!";
    }

    progressBar.style.width = "100%";
}


// ===================================
// RESTART
// ===================================

restartBtn.addEventListener("click", () => {
    startQuiz(currentCategory);
});


// ===================================
// CATEGORY BUTTONS
// ===================================

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (!questionBank[category]) return;

        startQuiz(category);
    });
});


// ===================================
// DARK / LIGHT MODE
// ===================================

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeBtn.textContent = isDark ? "☀️" : "🌙";

    themeBtn.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
});


// ===================================
// START APP
// ===================================

startQuiz("HTML");
