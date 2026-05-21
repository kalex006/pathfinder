// src/utils/evaluator.js

const CAREER_DATABASE = {
    Science: [
        Science: [
        {
            name: "Cybersecurity Architect",
            keywords: { "protect": 3, "code": 2, "hack": 5, "secure": 4, "logic": 2, "system": 2, "privacy": 3 },
            roadmap: "Master Linux, Networking, and obtain your CEH (Certified Ethical Hacker) certification.",
            bridge: "Bridge: Focus on Discrete Mathematics and join a high-impact Cyber-Bootcamp."
        },
        {  
            name: "AI & Machine Learning Engineer",
            keywords: { "code": 2, "logic": 3, "math": 5, "data": 3, "system": 4, "robot": 5, "predict": 5 },
            roadmap: "Master Python, linear algebra, and frameworks like PyTorch or TensorFlow.",
            bridge: "Transition standard software engineering architecture to statistical model optimization."
        },
        {   
            name: "Quantum Computing Scientist",
            keywords: { "physics": 3, "math": 5, "logic": 3, "compute": 4, "research": 4, "quantum": 5 },
            roadmap: "Study Quantum Mechanics, complex linear algebra, and IBM Qiskit.",
            bridge: "Move from classical computer science frameworks into quantum information theory."
        },
        {   
            name: "Biotechnologist",
            keywords: { "nature": 2, "medicine": 3, "cell": 4, "dna": 5, "research": 5, "heal": 3, "biology": 5 },
            roadmap: "Earn a molecular biology degree and execute genetic engineering research.",
            bridge: "Leverage organic chemistry foundations into laboratory bioprocess methods."
        },
        {   
            name: "Data Scientist",
            keywords: { "data": 5, "math": 5, "code": 4, "logic": 5, "chart": 5, "predict": 3, "analyze": 5 },
            roadmap: "Master SQL, Python & R statistical libraries, and predictive analytics modeling.",
            bridge: "Scale up mathematical analysis skills to match big data pipeline structures."
        },
        {   
            name: "Aerospace Engineer",
            keywords: { "space": 4, "physics": 4, "design": 3, "system": 3, "fly": 4, "rocket": 5 },
            roadmap: "Earn an Aerospace engineering degree, master CAD, and fluid mechanics.",
            bridge: "Translate classical thermodynamics into atmospheric and orbital propulsion mechanics."
        },
        {   
            name: "Robotics Automation Expert",
            keywords: { "robot": 5, "hardware": 4, "code": 5, "mechanical": 3, "logic": 3, "automate": 5 },
            roadmap: "Study Mechatronics, microcontrollers, ROS (Robot Operating System), and C++.",
            bridge: "Bridge embedded software engineering with kinetic mechanical hardware execution."
        },
        {   
            name: "Genetic Counselor",
            keywords: { "dna": 5, "biology": 4, "health": 3, "advice": 4, "people": 5, "research": 3 },
            roadmap: "Graduate in Genetics, complete clinical rotations, and earn board certification.",
            bridge: "Marry technical genomic sequencing data with patient-facing communication assets."
        },
        {   
            name: "Nanotechnologist",
            keywords: { "micro": 5, "physics": 4, "chemistry": 4, "lab": 3, "invent": 3, "matter": 4 },
            roadmap: "Earn a PhD in Materials Science, mastering electron microscopy and atomic synthesis.",
            bridge: "Scale down macroscopic chemical reactions to sub-100nm molecular manipulations."
        },
        {   
            name: "Neurocomputational Engineer",
            keywords: { "brain": 5, "code": 4, "logic": 4, "medical": 3, "system": 3, "signal": 5 },
            roadmap: "Study Brain-Computer Interfaces (BCI), neural signal processing, and Python.",
            bridge: "Map biological neural network responses directly into digital machine learning matrices."
        },     
        {   
            name: "Astrobiologist",
            keywords: { "space": 5, "biology": 5, "alien": 5, "extreme": 3, "research": 4, "evolution": 4 },
            roadmap: "Earn a doctorate in Biology & Geology with space science specializations.",
            bridge: "Extrapolate terrestrial microbial extremophile data onto celestial planetary biosignatures."
        },
        {   
            name: "Nuclear Fusion Researcher",
            keywords: { "plasma": 5, "physics": 5, "energy": 4, "power": 4, "math": 3, "reactor": 5 },
            roadmap: "Specialize in Plasma Physics, magnetohydrodynamics, and tokamak simulation systems.",
            bridge: "Transition nuclear fission engineering into high-energy confinement physics."
        },
        {   
            name: "Epidemiologist (Data-Driven)",
            keywords: { "health": 5, "disease": 5, "data": 4, "chart": 3, "population": 4, "predict": 4 },
            roadmap: "Earn an MPH (Master of Public Health), master R, SAS, and statistical modeling.",
            bridge: "Apply data science pattern matching to biological contagion vectors."
        },
        {   
            name: "Marine Biologist",
            keywords: { "ocean": 5, "fish": 5, "water": 4, "nature": 4, "ecology": 3, "research": 3 },
            roadmap: "Study Marine Ecology, earn advanced diving certifications, and master field sampling.",
            bridge: "Convert standard zoological research principles into maritime ecosystem observation methods."
        },
        {   
            name: "Materials Scientist",
            keywords: { "metal": 4, "polymer": 4, "chemistry": 5, "build": 3, "testing": 3, "laboratory": 3 },
            roadmap: "Study metallurgy, crystalline structures, and polymer synthesis procedures.",
            bridge: "Apply chemical composition modifications to achieve physical structural upgrades."
        },
        {   
            name: "Volcanologist",
            keywords: { "earth": 4, "lava": 5, "rock": 4, "danger": 3, "nature": 4, "monitor": 3 },
            roadmap: "Degree in Geology, field training in seismic monitoring, and geochemical analysis.",
            bridge: "Utilize thermodynamic physics equations to model subterranean magma chamber flows."
        },
        {   
            name: "Bioinformatician",
            keywords: { "code": 4, "dna": 5, "biology": 5, "data": 4, "algorithm": 4, "matrix": 3 },
            roadmap: "Master Python, biological sequencing tools (BLAST), and data curation methods.",
            bridge: "Translate biological code strings into searchable, indexed software databases."
        },
        {   
            name: "Virologist",
            keywords: { "virus": 5, "cell": 4, "health": 3, "laboratory": 4, "research": 4, "immune": 5 },
            roadmap: "Complete a Microbiology PhD, specializing in viral replication and isolation techniques.",
            bridge: "Transition clinical pathology tools toward specific pathogenic mutation vectors."
        },
        {   
            name: "Agro-Tech Specialist",
            keywords: { "farm": 5, "crop": 4, "food": 3, "automate": 4, "drone": 4, "technology": 3 },
            roadmap: "Study Agronomy along with IoT sensor deployment and automated irrigation networks.",
            bridge: "Replace manual agricultural metrics with automated tech monitoring platforms."
        },
        {   
            name: "Theoretical Physicist",
            keywords: { "math": 5, "equation": 5, "universe": 4, "logic": 4, "space": 3, "theory": 5 },
            roadmap: "Complete a PhD in Physics, specializing in string theory or general relativity models.",
            bridge: "Abstract physical real-world data points into pure, multi-dimensional mathematical logic."
        },
        {   
            name: "Forensic Scientist",
            keywords: { "crime": 5, "lab": 4, "law": 3, "chemical": 4, "dna": 4, "trace": 3 },
            roadmap: "Study Forensic Chemistry, learn rigorous chain-of-custody protocols, and analytical chromatography.",
            bridge: "Apply strict chemical isolation techniques to irregular real-world biological samples."
        },
        {   
            name: "Geophysicist",
            keywords: { "earth": 4, "seismic": 5, "oil": 4, "sonar": 3, "math": 3, "terrain": 3 },
            roadmap: "Learn seismic data processing, geological mapping, and signal processing software.",
            bridge: "Interpret acoustic wave data to construct accurate 3d maps of underground formations."
        },
        {   
            name: "Audio Engineer (Acoustician)",
            keywords: { "sound": 5, "wave": 5, "physics": 4, "studio": 3, "architect": 3, "design": 3 },
            roadmap: "Master acoustic physics, structural soundproofing designs, and specialized sound modeling software.",
            bridge: "Apply mechanical wave theory equations to structural design spatial layouts."
        },
        {   
            name: "Biomedical Fluid Dynamics Expert",
            keywords: { "blood": 5, "fluid": 5, "physics": 4, "heart": 4, "medical": 3, "simulator": 3 },
            roadmap: "Study computational fluid dynamics (CFD) applied specifically to cardiovascular pathways.",
            bridge: "Adapt mechanical pipeline engineering dynamics directly to human physiological systems."
        },
        {   
            name: "Pharmaceutical Developer",
            keywords: { "drug": 5, "pill": 4, "chemistry": 5, "health": 3, "clinical": 3, "corporate": 2 },
            roadmap: "Master organic synthesis, clinical trial protocols, and chemical safety compliance metrics.",
            bridge: "Scale localized laboratory chemical formulas up to massive industrial manufacturing standards."
        },
        {   
            name: "Renewable Energy Engineer",
            keywords: { "solar": 5, "wind": 5, "power": 4, "grid": 4, "electrical": 4, "clean": 3 },
            roadmap: "Study electrical engineering with focus grids on photovolatic cell efficiency and turbine design.",
            bridge: "Transition traditional fossil-fuel grid mechanics into decentralized green energy infrastructure."
        },
        {   
            name: "Meteorologist",
            keywords: { "weather": 5, "storm": 5, "predict": 4, "data": 3, "satellite": 4, "climate": 4 },
            roadmap: "Learn atmospheric dynamic modeling, supercomputing data synthesis, and radar interpretation.",
            bridge: "Convert real-time global atmospheric thermodynamic variables into long-term probability algorithms."
        },
        {   
            name: "Cryptographer",
            keywords: { "code": 4, "secure": 5, "math": 5, "cipher": 5, "prime": 4, "logic": 3 },
            roadmap: "Master number theory, abstract algebra, and secure algorithmic protocols.",
            bridge: "Apply abstract mathematical proofs to engineer unbreachable software security keys."
        },
        {   
            name: "Optical Physicist",
            keywords: { "laser": 5, "light": 5, "glass": 4, "lens": 4, "physics": 4, "fiber": 3 },
            roadmap: "Study photonics, laser engineering, and fiber-optic data transmission architectures.",
            bridge: "Manipulate physical electromagnetic spectrum waves to optimize modern high-speed communication lines."
        },
        {   
            name: "Food Technologist",
            keywords: { "food": 5, "chemical": 4, "taste": 3, "safe": 4, "preserve": 4, "factory": 3 },
            roadmap: "Study biochemistry, nutritional guidelines, and industrial pasteurization & preservation systems.",
            bridge: "Modify raw organic materials through safe chemical processes to maximize product shelf life."
        },
        {   
            name: "Biomechanical Prosthetic Designer",
            keywords: { "limb": 5, "robot": 4, "medical": 4, "hardware": 3, "body": 3, "movement": 4 },
            roadmap: "Learn anatomy, kinetic mechanical design, and sensor-driven bionic control setups.",
            bridge: "Interface rigid mechanical movement metrics with dynamic anatomical human muscle responses."
        },
        {   
            name: "Environmental Restoration Scientist",
            keywords: { "green": 4, "toxic": 5, "soil": 4, "water": 4, "nature": 3, "fix": 3 },
            roadmap: "Master bioremediation methods, toxic soil treatment chemistry, and environmental impact rules.",
            bridge: "Deploy biological organisms to absorb and neutralize industrial chemical spills safely."
        },
        {   
            name: "Immunologist",
            keywords: { "immune": 5, "cell": 4, "health": 3, "vaccine": 5, "blood": 3, "lab": 3 },
            roadmap: "Complete medical training or a PhD focused on T-cell/antibody isolation and behavior tracking.",
            bridge: "Manipulate biological defense mechanisms to counter foreign cellular attacks."
        },
        {   
            name: "Evolutionary Biologist",
            keywords: { "history": 3, "animal": 4, "dna": 5, "mutation": 4, "adapt": 4, "fossil": 3 },
            roadmap: "Master phylogenetic sequencing software, fossil carbon-dating, and comparative morphology.",
            bridge: "Trace modern genetic code anomalies backward through historical geological timelines."
        },
        {   
            name: "Oceanographic Modeler",
            keywords: { "ocean": 5, "tide": 4, "heat": 3, "climate": 4, "data": 3, "simulator": 3 },
            roadmap: "Study fluid mechanics, deep-sea currents, thermal transfer, and high-performance climate code.",
            bridge: "Translate local maritime sensors into complex, predictive planetary oceanic current frameworks."
        },
        {   
            name: "Cartographer (GIS Specialist)",
            keywords: { "map": 5, "space": 3, "satellite": 4, "terrain": 4, "geography": 5, "data": 3 },
            roadmap: "Master ArcGIS, spatial databases, lidar point data collection, and remote sensing.",
            bridge: "Transform raw satellite laser scan data points into highly accurate digital navigation visuals."
        },
        {   
            name: "Toxicologist",
            keywords: { "poison": 5, "chemical": 4, "blood": 3, "death": 4, "legal": 3, "lab": 3 },
            roadmap: "Study analytical chemistry, cellular damage vectors, and mass spectrometry instruments.",
            bridge: "Detect and measure minute external chemical traces inside complex biological systems."
        },
        {   
            name: "Clinical Research Director",
            keywords: { "medical": 5, "clinical": 5, "rule": 3, "project": 4, "testing": 4, "hospital": 3 },
            roadmap: "Earn a clinical advanced degree, master GCP rules, and coordinate multivariable study groups.",
            bridge: "Maintain precise scientific control vectors over unpredictable real-world human test pools."
        },
        {   
            name: "Micro-Electrical Mechanical Systems (MEMS) Engineer",
            keywords: { "chip": 5, "micro": 5, "phone": 3, "sensor": 4, "hardware": 4, "circuit": 3 },
            roadmap: "Learn semiconductor fabrication, nanoscale printing, and piezoresistive sensor architectures.",
            bridge: "Shrink macro-level electronic relays down onto sub-millimeter silicon wafers."
        },
        {   
            name: "Urban Climatologist",
            keywords: { "city": 5, "heat": 4, "weather": 4, "concrete": 3, "green": 3, "air": 3 },
            roadmap: "Study urban heat island effects, wind tunnel architecture simulations, and pollution dispersal.",
            bridge: "Redesign metropolitan structural densities to optimize microclimatic airflow and heat cooling."
        },
        {   
            name: "Paleontologist",
            keywords: { "fossil": 5, "bone": 5, "dinosaur": 5, "earth": 3, "history": 4, "dig": 3 },
            roadmap: "Focus on structural osteology, stratigraphy mapping, and architectural fossil restoration.",
            bridge: "Reconstruct structural animal physiology profiles using only partial fossil impressions."
        },
        {   
            name: "Wildlife Epidemiologist",
            keywords: { "animal": 5, "forest": 4, "disease": 5, "virus": 4, "nature": 4, "health": 3 },
            roadmap: "Veterinary medicine track specializing in zoonotic spillover mechanics and wild herd tracing.",
            bridge: "Monitor untamed animal vector paths to predict and prevent human pandemic transmission events."
        },
        {   
            name: "Molecular Gastronomy Scientist",
            keywords: { "food": 5, "kitchen": 3, "chemical": 4, "texture": 4, "lab": 3, "chef": 4 },
            roadmap: "Focus on chemical gelling agents, liquid nitrogen manipulation, and safe thermal preservation physics.",
            bridge: "Apply lab-grade colloid chemistry mechanics directly to standard culinary preparations."
        },
        {   
            name: "Autonomous Vehicle Fleet Optimizer",
            keywords: { "car": 4, "auto": 4, "code": 5, "system": 3, "math": 4, "logic": 3 },
            roadmap: "Learn queueing theory, real-time routing algorithms, and localized telematics architectures.",
            bridge: "Synchronize individual self-driving vehicles into single, fluid grid-level transportation movements."
        },  
        {   
            name: "Ergonomics Specialist",
            keywords: { "chair": 5, "body": 5, "desk": 4, "muscle": 4, "health": 3, "layout": 3 },
            roadmap: "Study biomechanics, muscle strain measurement systems, and occupational workspace engineering safety.",
            bridge: "Adapt physical machine controls to naturally fit human musculoskeletal dimensions."
        },
        {   
            name: "Petrochemical Engineer",
            keywords: { "oil": 5, "gas": 5, "fuel": 4, "refinery": 5, "chemical": 4, "machine": 3 },
            roadmap: "Master fractional distillation, hydrocarbon cracking processes, and safety protocols for high-pressure systems.",
            bridge: "Extract maximum chemical combustion efficiency out of unstable, crude underground deposits."
        },
        {   
            name: "Plant Geneticist",
            keywords: { "crop": 5, "seed": 4, "plant": 5, "dna": 4, "adapt": 3, "farm": 3 },
            roadmap: "Learn CRISPR & Cas9 applications for flora, crop disease tracking, and yield optimization.",
            bridge: "Splice targeted cold-resistant or drought-hardy genes into standard crop seed profiles."
        },
        {   
            name: "Hydrogeologist",
            keywords: { "water": 5, "underground": 5, "well": 4, "soil": 4, "earth": 3, "logic": 2 },
            roadmap: "Study porous medium fluid physics, aquifer geometry modeling, and groundwater pollution tracking.",
            bridge: "Calculate fluid flow pathways through dense, unmapped rock matrices."
        },
        {   
            name: "Space Weather Forecaster",
            keywords: { "sun": 5, "space": 5, "flare": 5, "satellite": 4, "radiation": 4, "protect": 3 },
            roadmap: "Study heliophysics, magnetospheric dynamics, and solar particle flux tracking instruments.",
            bridge: "Predict solar flare events to shield orbital satellite payloads and terrestrial power grids."
        },
        {   
            name: "Computational Linguist",
            keywords: { "language": 5, "code": 5, "word": 4, "brain": 3, "llm": 5, "logic": 3 },
            roadmap: "Master natural language processing (NLP), syntax trees, semantic indexing, and tokenization logic.",
            bridge: "Map abstract human grammatical structures directly into computer code matrices."
        }
    ],
    Commerce: [
        {
            name: "Fintech Strategist",
            keywords: { "money": 3, "finance": 4, "app": 3, "market": 2, "digital": 3, "bank": 4, "crypto": 5 },
            roadmap: "Study Financial Markets and learn Python for Finance (Algorithmic Trading).",
            bridge: "Bridge: Leverage your quantitative skills; transition into Data-Driven Finance courses."
        },
        {
            name: "Investment Banker",
            keywords: { "profit": 4, "wealth": 3, "capital": 5, "growth": 2, "stock": 5, "invest": 4, "negotiate": 3 },
            roadmap: "Clear CFA Level 1 and focus on Mergers & Acquisitions (M&A) case studies.",
            bridge: "Bridge: Focus on Financial Modeling and networking within corporate finance sectors."
        },
        {
            name: "Quantitative Portfolio Manager",
            keywords: { "math": 4, "finance": 4, "algorithm": 5, "trade": 4, "risk": 3, "market": 3, "data": 3 },
            roadmap: "Earn a Master's in Quantitative Finance (CQF) or Financial Engineering.",
            bridge: "Bridge: Merge high-level software development or statistical analytics with market risk parameters."
        },
        {
            name: "Global Supply Chain Architect",
            keywords: { "logistics": 5, "flow": 4, "shipping": 3, "efficiency": 3, "route": 3, "inventory": 4, "trade": 3 },
            roadmap: "Obtain certifications in APICS/CSCP and master supply chain management software (ERP/SAP).",
            bridge: "Bridge: Re-apply creative layout analysis or technical systems-building to global delivery operations."
        }
    ],
    Arts: [
        {
            name: "UI/UX Experience Designer",
            keywords: { "art": 3, "design": 5, "user": 4, "look": 3, "feel": 2, "app": 4, "creative": 4, "psychology": 3 },
            roadmap: "Master Figma, Adobe XD, and build a portfolio focusing on Case Studies.",
            bridge: "Bridge: Focus on Visual Hierarchy and Human-Computer Interaction (HCI) fundamentals."
        },
        {
            name: "International Human Rights Lawyer",
            keywords: { "justice": 5, "law": 5, "court": 4, "debate": 3, "global": 3, "help": 2, "society": 3, "policy": 4 },
            roadmap: "Complete your LLB, participate in Moot Courts, and specialize in International Law.",
            bridge: "Bridge: Focus on Critical Thinking, Legal Writing, and Political Science modules."
        },
        {
            name: "Computational Linguist",
            keywords: { "language": 5, "syntax": 4, "grammar": 3, "code": 3, "structure": 2, "logic": 3, "nlp": 5 },
            roadmap: "Master Python and study Natural Language Processing (NLP) models.",
            bridge: "Bridge: Apply structural literary analysis and human language syntax directly to artificial neural networks."
        },
        {
            name: "Forensic Psychologist",
            keywords: { "crime": 4, "psychology": 5, "investigate": 3, "court": 3, "profile": 4, "behavior": 5, "mind": 3 },
            roadmap: "Earn a Doctorate in Forensic Psychology, focusing on criminal profiles and risk assessments.",
            bridge: "Bridge: Shift sociological or standard psychological counseling parameters into law and behavioral analysis."
        }
    ]
};

const Evaluator = {
    // The Mathematical Matching Algorithm
    analyze: function(essayArray, chosenField) {
        // Combine all 10 answers into one lowercase mega-string
        const fullText = essayArray.join(" ").toLowerCase();
        
        let bestCareer = null;
        let highestScore = -1;

        // Mathematical Scoring Logic
        CAREER_DATABASE[chosenField].forEach(career => {
            let currentScore = 0;
            
            // For every keyword, count occurrences dynamically and apply weight
            for (let word in career.keywords) {
                if (word.trim() === "") continue; // Safeguard against empty keys
                
                const weight = career.keywords[word];
                
                // Super-efficient bug-free occurrences calculation
                const occurrences = fullText.split(word).length - 1; 
                
                if (occurrences > 0) {
                    currentScore += (occurrences * weight);
                }
            }

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestCareer = career;
            }
        });

        // Fallback: If student gives very vague answers, provide the first in the database
        return bestCareer || CAREER_DATABASE[chosenField][0];
    }
};

// Exporting it so main.js can use it
window.Evaluator = Evaluator;