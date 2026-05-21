// src/main.js

document.addEventListener('DOMContentLoaded', () => {
    // [Keep your Mind Map Canvas Code here from the previous permanent baseline]
    // ... (Mind map code) ...

    const app = document.getElementById('app');
    let currentField = "";
    let currentQuestion = 0;
    let studentResponses = [];

    const questionSet = [
        "What kind of abstract problems do you solve in your mind purely for the satisfaction of finding answers?",
        "When you observe a complex system, are you more drawn to the mathematical code that governs it, or the physical elements that compose it?",
        "When you're faced with a massive problem, do you get more satisfaction from researching and finding the absolute truth behind it, or actually building the tool that fixes it?",
        "How do you handle unexpected setbacks when your initial designs or solutions fail to deliver results?",
        "In a team setting, are you the one designing, the one calculating, or the one leading?",
        "What is a topic you could talk about for 30 minutes without preparation?",
        "Describe your ideal relationship with technology in your daily work.",
        "What does 'Success' look like to you in terms of your impact on the world?",
        "Which specific tools or software have you experimented with recently?",
        "What is one global challenge you feel a personal responsibility to fix?"
    ];

    // Landing to Stream Selection
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.onclick = () => {
            const mainView = document.getElementById('main-view');
            if (mainView) mainView.style.display = 'none';
            renderStreamSelection();
        };
    }

    function renderStreamSelection() {
        app.innerHTML = `
            <div class="fade-in">
                <h2 class="roman-title" style="font-size: 2rem; margin-bottom: 2rem;">SELECT ORIGIN</h2>
                <div class="stream-container">
                    <button class="stream-card" onclick="window.initAssessment('Science')">SCIENCE</button>
                    <button class="stream-card" onclick="window.initAssessment('Commerce')">COMMERCE</button>
                    <button class="stream-card" onclick="window.initAssessment('Arts')">ARTS</button>
                </div>
            </div>
        `;
    }

    window.initAssessment = (field) => {
        currentField = field;
        currentQuestion = 0;
        studentResponses = [];
        renderQuestion();
    };

    function renderQuestion() {
        app.innerHTML = `
            <div class="glass-card fade-in">
                <span style="color:var(--copper); letter-spacing:3px;">ANALYSIS ${currentQuestion + 1} / 10</span>
                <h2 style="margin: 25px 0; font-weight:300;">${questionSet[currentQuestion]}</h2>
                <textarea id="user-input" class="text-input" placeholder="Express your thoughts here..."></textarea>
                <br>
                <button class="find-button" style="margin-top:20px;" onclick="window.captureAnswer()">PROCEED</button>
            </div>
        `;
        const userInput = document.getElementById('user-input');
        if (userInput) userInput.focus();
    }

    window.captureAnswer = () => {
        const userInput = document.getElementById('user-input');
        if (!userInput) return;
        
        const input = userInput.value.trim();
        if (input.length < 5) return alert("Please be more descriptive for a better match.");
        
        studentResponses.push(input);
        currentQuestion++;

        if (currentQuestion < 10) {
            renderQuestion();
        } else {
            processResults();
        }
    };

    function processResults() {
        app.innerHTML = `<div class="glass-card"><h2 class="fade-in">CONSULTING EVALUATOR.JS...</h2></div>`;
        
        // Use the Evaluator Brain
        setTimeout(() => {
            const result = window.Evaluator.analyze(studentResponses, currentField);
            
            app.innerHTML = `
                <div class="glass-card fade-in">
                    <span style="color: var(--copper); letter-spacing: 5px;">OPTIMAL PATH FOUND</span>
                    <h1 class="roman-title" style="font-size: 2.2rem; margin: 15px 0;">${result.name}</h1>
                    <div class="result-grid">
                        <div class="info-box">
                            <h4>ROADMAP</h4>
                            <p>${result.roadmap}</p>
                        </div>
                        <div class="info-box">
                            <h4>BRIDGE PLAN</h4>
                            <p>${result.bridge}</p>
                        </div>
                    </div>
                    <button class="find-button" style="margin-top:30px" onclick="location.reload()">RE-INITIALIZE</button>
                </div>
            `;
        }, 2000);
    }
});