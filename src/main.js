document.addEventListener('DOMContentLoaded', () => {
    // --- 1. MIND MAP ANIMATION (True Branching Tree & White Strings) ---
    const canvas = document.getElementById('mindmap-bg');
    const ctx = canvas.getContext('2d');
    const copperColor = "#D98324";

    // Structured Mind Map Database (Parent-Child Relationships)
    const mindMapNodes = [
        // Level 0: Root (Center)
        { id: "root", text: "PATHFINDER", parent: null, relX: 0, relY: 0, isRoot: true },

        // Level 1: Main Domains
        { id: "sci", text: "SCIENCE",  parent: "root", relX: -320,  relY: -180 },
        { id: "com", text: "COMMERCE", parent: "root", relX:  320,  relY: -100 },
        { id: "art", text: "ARTS",     parent: "root", relX: -250,  relY: 220  },

        // Level 2: Science Branches
        { id: "cyber",     text: "Cybersecurity",                 parent: "sci", relX: -450, relY: -200 },
        { id: "ai",        text: "AI & ML",                       parent: "sci", relX: -300, relY: -350 },
        { id: "quantum",   text: "Quantum Computing",             parent: "sci", relX: -500, relY: -250 },
        { id: "biotech",   text: "Biotechnology",                 parent: "sci", relX: -450, relY: -350 },
        { id: "data",      text: "Data Scientist",                parent: "sci", relX: -600, relY: -350 },
        { id: "aero",      text: "Aerospace Engineer",            parent: "sci", relX: -650, relY: -200 },
        { id: "robot",     text: "Robotics Automation Expert",    parent: "sci", relX: -650, relY: -50  },
        { id: "Nano",      text: "Nanotechnologist",              parent: "sci", relX: -690, relY: -280 },
        { id: "Neuro",     text: "Neurocomputational Engineer",   parent: "sci", relX: -250, relY: -250 },
        { id: "Astro",     text: "Astrobiologist",                parent: "sci", relX: -300, relY: -100 },
        { id: "Nuclear",   text: "Nuclear Fusion Researcher",     parent: "sci", relX: -590, relY: -110 },
        { id: "Epidemi",   text: "Epidemiologist",                parent: "sci", relX: -100, relY: -300 },
        { id: "Marine",    text: "Marine Biologist",              parent: "sci", relX: -90,  relY: -180 },
        { id: "Material",  text: "Materials Scientist",           parent: "sci", relX: -500, relY:   10 },
        { id: "Volcano",   text: "Volcanologist",                 parent: "sci", relX: -650, relY:   50 },
        { id: "Bio",       text: "Bioinformatician",              parent: "sci", relX: -450,  relY:  90 },
        { id: "Viro",      text: "Virologist",                    parent: "sci", relX: -100,  relY:-350 },
        { id: "Agro-Tech", text: "Agro-Tech Specialist",          parent: "sci", relX: 100,  relY: -300 },
        { id: "Theore",    text: "Theoretical Physicist",         parent: "sci", relX:  70,  relY: -230 },
        
        // Level 2: Commerce Branches
        { id: "ib",         text: "Investment Banking",                       parent: "com", relX: 300, relY: -350  },
        { id: "fintech",    text: "Fintech",                                  parent: "com", relX: 250, relY: -250  },
        { id: "quant",      text: "Quantitative Finance",                     parent: "com", relX: 600, relY: -350  },
        { id: "supply",     text: "Global Logistics",                         parent: "com", relX: 80,  relY: -150  },
        { id: "Block",      text: "Blockchain Financial Analyst",             parent: "com", relX: 500, relY: -300  },
        { id: "Actuarial",  text: "Actuarial Scientist",                      parent: "com", relX: 600, relY: -250  },
        { id: "Quanti",     text: "Quantitative Forensic Accountant",         parent: "com", relX: 400, relY: -200  },
        { id: "Brand",      text: "Brand Portfolio Manager",                  parent: "com", relX: 550, relY: -130  },
        { id: "Venture",    text: "Venture Capital Associate",                parent: "com", relX: 500, relY: -50   },
        { id: "Merger",     text: "Acquisitions Consultant",                  parent: "com", relX: 400, relY:  30   },
        { id: "Predi",      text: "Predictive Market Analyst",                parent: "com", relX: 400, relY:  90   },
        { id: "Inte",       text: "International Trade Compliance Specialist",parent: "com", relX: 600, relY:  180  },
        { id: "E-Com",      text: "E-Commerce Growth Architect",              parent: "com", relX: 650, relY:  100  },
        { id: "Real",       text: "Real Estate Private Equity Analyst",       parent: "com", relX: 650, relY:  50   },
        { id: "Cost",       text: "Cost and Management Accountant (CMA)",     parent: "com", relX: 600, relY:  250  },
        { id: "Corpo",      text: "Corporate Treasury Manager",               parent: "com", relX: 600, relY:  300  },
        { id: "Pro",        text: "Product Manager (SaaS Commercial)",        parent: "com", relX: 250, relY:  250  },
        { id: "Tax",        text: "Tax Optimization Specialist (MNC)",        parent: "com", relX: 250, relY:  150  },
        { id: "Fran",       text: "Franchise Network Developer",              parent: "com", relX: 350, relY:  300  },

        // Level 2: Arts Branches
        { id: "ux",     text: "UI/UX Design",             parent: "art", relX: -700, relY: 100  },
        { id: "law",    text: "Human Rights Law",         parent: "art", relX: -700, relY: 180  },
        { id: "Digi",   text: "Creative Director",        parent: "art", relX: -650, relY: 250  },
        { id: "Behav",  text: "Behavioral Psychologist",  parent: "art", relX: -650, relY:  300 },
        { id: "VFX",    text: "Cinematographer",          parent: "art", relX: -450, relY: 300  },
        { id: "Art",    text: "Game Designer",            parent: "art", relX: -450, relY: 200  },
        { id: "Crea",   text: "Creative Copywriter",      parent: "art", relX: -450, relY: 150  },
        { id: "Arch",   text: "Heritage Conservator",     parent: "art", relX: -250, relY: 20   },
        { id: "Inve",   text: "Photojournalist",          parent: "art", relX: -250, relY: 70   },
        { id: "Sou",    text: "Foley Artist",             parent: "art", relX: -250, relY: 150  },
        { id: "Exhi",   text: "Curation Director",        parent: "art", relX: -250, relY: 300  },
        { id: "Corpo",  text: "Cross-Cultural Advisor",   parent: "art", relX:  30,  relY: 300  },
        { id: "Typo",   text: "Typeface Designer",        parent: "art", relX:  30,  relY: 200  },
        { id: "Indus",  text: "Esthetics Designer",       parent: "art", relX:  30,  relY: 150  },
        { id: "Cos",    text: "Wardrobe Designer",        parent: "art", relX:  180, relY: 50   },
    ];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Helper function to draw rounded rectangle pills (Learn Anything Style)
    function drawRoundRect(x, y, width, height, radius, fillStyle, strokeStyle) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        
        ctx.fillStyle = fillStyle;
        ctx.fill();
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const time = Date.now() * 0.0008; // Slow, majestic swaying speed

        // Dynamic scaling factor based on screen width to prevent off-screen overflow
        const isMobile = canvas.width < 768;
        const scale = isMobile ? Math.max(canvas.width / 1100, 0.35) : 1.0;

        // 1. Calculate dynamic positions with organic swaying
        const activeNodes = mindMapNodes.map((node, index) => {
            const swayX = Math.sin(time + index * 0.5) * (isMobile ? 6 : 12);
            const swayY = Math.cos(time * 0.8 + index * 0.5) * (isMobile ? 6 : 12);

            return {
                ...node,
                x: cx + (node.relX * scale) + swayX,
                y: cy + (node.relY * scale) + swayY
            };
        });

        // 2. Draw White Connecting Strings (Parent to Child)
        activeNodes.forEach(node => {
            if (node.parent) {
                const parentNode = activeNodes.find(n => n.id === node.parent);
                if (parentNode) {
                    ctx.beginPath();
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.25)"; // Elegant White Strings
                    ctx.lineWidth = isMobile ? 0.5 : 0.8;
                    ctx.moveTo(parentNode.x, parentNode.y);
                    ctx.lineTo(node.x, node.y);
                    ctx.stroke();
                }
            }
        });

        // 3. Draw Glassmorphic Pills and Text Labels
        activeNodes.forEach(node => {
            if (node.isRoot) return;

            // Scale down font size on mobile to prevent overlapping
            ctx.font = isMobile ? "600 9px 'Inter', sans-serif" : "600 13px 'Inter', sans-serif";
            const textWidth = ctx.measureText(node.text).width;
            
            // Tighter padding on mobile
            const paddingX = isMobile ? 8 : 16;
            const paddingY = isMobile ? 5 : 10;
            const textHeight = isMobile ? 9 : 13;
            const pillWidth = textWidth + paddingX * 2;
            const pillHeight = textHeight + paddingY * 2;

            const px = node.x - pillWidth / 2;
            const py = node.y - pillHeight / 2;

            // Draw the glassmorphic pill container
            drawRoundRect(
                px, py, pillWidth, pillHeight, 4,
                "rgba(255, 255, 255, 0.02)", // Subtle glass fill
                "rgba(217, 131, 36, 0.25)"   // Subtle copper border
            );

            // Draw the bold copper text inside the pill
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "rgba(217, 131, 36, 0.85)"; // High visibility copper
            ctx.fillText(node.text, node.x, node.y);
        });

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