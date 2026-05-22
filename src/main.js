document.addEventListener('DOMContentLoaded', () => {
    // --- 1. MIND MAP ANIMATION (Side Columns & Central Web) ---
    const canvas = document.getElementById('mindmap-bg');
    const ctx = canvas.getContext('2d');
    let nodes = [];
    const numNodes = 100; 
    const copperColor = "#D98324";

    const topics = [
        "Ethical Hacker", "Data Scientist", "Investment Banker", "Surgeon", "UI/UX Designer", "AI Engineer", "Psychologist", "Lawyer", "Pilot", "Astrobiologist",
        "Quantum Scientist", "Biotechnologist", "Aerospace Engineer", "Robotics Expert", "Genetic Counselor", "Nanotechnologist", "Neurocomputational Engineer",
        "Nuclear Researcher", "Epidemiologist", "Marine Biologist", "Materials Scientist", "Volcanologist", "Bioinformatician", "Virologist", "Agro-Tech Specialist",
        "Theoretical Physicist", "Forensic Scientist", "Geophysicist", "Audio Engineer", "Fluid Dynamics Expert", "Pharmaceutical Developer", "Renewable Energy Engineer",
        "Meteorologist", "Cryptographer", "Optical Physicist", "Food Technologist", "Prosthetic Designer", "Restoration Scientist", "Immunologist", "Evolutionary Biologist"
    ];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    class Node {
        constructor(text, index) {
            // Split nodes: Even indexes go to the Left side, Odd indexes go to the Right side
            this.side = index % 2 === 0 ? "left" : "right";
            this.text = text;
            this.radius = 2; // Slightly larger dot for visibility

            // Define horizontal boundaries based on side
            this.minX = this.side === "left" ? 30 : canvas.width * 0.75;
            this.maxX = this.side === "left" ? canvas.width * 0.25 : canvas.width - 30;

            // Spawn within their respective side boundaries
            this.x = this.minX + Math.random() * (this.maxX - this.minX);
            this.y = Math.random() * canvas.height;

            // Slow vertical drift, minimal horizontal drift
            this.vx = (Math.random() - 0.5) * 0.05;
            this.vy = (Math.random() - 0.5) * 0.25;
        }

        update() {
            // Update boundaries dynamically on window resize
            this.minX = this.side === "left" ? 30 : canvas.width * 0.75;
            this.maxX = this.side === "left" ? canvas.width * 0.25 : canvas.width - 30;

            this.x += this.vx;
            this.y += this.vy;

            // Keep horizontally constrained to their side
            if (this.x < this.minX) { this.x = this.minX; this.vx *= -1; }
            if (this.x > this.maxX) { this.x = this.maxX; this.vx *= -1; }

            // Vertical wrapping
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            // Draw the node point
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = copperColor;
            ctx.fill();

            // Larger, clearer letters
            ctx.font = "600 13px 'Inter', sans-serif";
            ctx.fillStyle = "rgba(217, 131, 36, 0.75)"; // Clearer copper

            // Align text away from the center web
            if (this.side === "left") {
                ctx.textAlign = "left";
                ctx.fillText(this.text, this.x + 10, this.y + 4);
            } else {
                ctx.textAlign = "right";
                ctx.fillText(this.text, this.x - 10, this.y + 4);
            }
        }
    }

    // Initialize 100 Nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push(new Node(topics[i % topics.length], i));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];
            a.update();
            a.draw();

            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];

                if (a.side === b.side) {
                    // Same side: standard local connections
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        const alpha = (1 - (dist / 120)) * 0.12;
                        ctx.strokeStyle = `rgba(217, 131, 36, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                } else {
                    // Opposite sides: draw the "web in between" across the center
                    const dy = Math.abs(a.y - b.y);
                    if (dy < 80) { // Only connect if they are vertically aligned
                        ctx.beginPath();
                        // Fainter lines for long spans across the center
                        const alpha = (1 - (dy / 80)) * 0.06; 
                        ctx.strokeStyle = `rgba(217, 131, 36, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
        }
        requestAnimationFrame(animate);
    }
    animate();

    // --- 2. INTERFACE CONTROLLER ---
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