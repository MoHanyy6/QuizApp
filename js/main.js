let userName;
let currentQuestionIndex = 0;
let score = 0;
const playerData = [];
const questions = [
    { question: "What does CSS stand for in web development?", options: ["Computer Style Sheet", "Cascading Style Sheet", "Creative Style Sheets", "Centralized style sheets"], correctAnswer: "Cascading Style Sheet" },
    { question: "Which programming language is commonly used for server-side scripting in web development??", options: ["HTML", "CSS", "JavaScript", "Python"], correctAnswer: "Python" },
    { question: "What is the purpose of SEO in web development??", options: ["Search engine optmization", "Serch Engine Operations", "Search Emprovment Optmizely", "None of the above"], correctAnswer: "Search engine optmization" },
    { question: "What is DNS refers to?", options: ["Domain Nearly Service", "Domain Notification System", "Domain Name System", "None of the above"], correctAnswer: "Domain Name System" },
    { question: "what does the  URL stand for?", options: ["Universal Unidirectional locator", "Uniform Resource Locator", "Uniform Retrieval Language", "Universal Reinforcment Location"], correctAnswer: "Uniform Resource Locator" },
    { question: "What is NOT Client side programming?", options: ["HTML", "CSS", "JavaScript", "none of the above"], correctAnswer: "none of the above" },
    {question: "Which file extension is commonly used for Cascading Style Sheets?", options: [".css", ".html", ".js", ".py"], correctAnswer: ".css" },
    { question: "Which file extension is commonly used for JavaScript?", options: [".JavSC", ".JSC", ".js", ".py"], correctAnswer: ".js"  },
    { question: "Which file extension is commonly used for Hyper Text Markup Language?", options: [".css", ".html", ".js", ".py"], correctAnswer: ".html"  },
    { question: "What is main purpose for html?", options: ["Web", "Mobile", "Desktop", "machine Learning"], correctAnswer: "Web" }
    
];

function startQuiz() {
    userName = document.getElementById("userName").value;
    if (userName.trim() === "") {
        alert("Please enter your name before starting the quiz.");
    } else {
        showScreen("screen2");
        loadQuestion();
    }
}

function loadQuestion() {
    const questionContainer = document.getElementById("questionContainer");
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;
    
    currentQuestion.options.forEach(option => {
        questionContainer.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });
}

function checkAnswer(userAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(loadQuestion, 100); 
    } else {
        showScreen("screen3");
        displayResult();
    }
}

function displayResult() {
    const userResult = document.getElementById("userResult");
    userResult.innerText = `${userName}, Your Score: ${score}/${questions.length}`;
    playerData.push({ name: userName, score: score });
    setTimeout(() => {
        showDashboard(); //3lashan tro7 3la dashboardddd
    }, 2000); 
}

function viewDashboard() {
    showScreen("screen4");
    displayPlayerHistory();
}

function displayPlayerHistory() {
    const playerHistory = document.getElementById("playerHistory");

    playerData.sort((a, b) => b.score - a.score);

    playerHistory.innerHTML = "";
    playerData.forEach(player => {
        playerHistory.innerHTML += `<li>${player.name}: ${player.score}</li>`;
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showScreen("screen3");
        displayResult();
    }
}

function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");
    screens.forEach(screen => {
        screen.style.display = "none";
    });

    document.getElementById(screenId).style.display = "flex";
}
