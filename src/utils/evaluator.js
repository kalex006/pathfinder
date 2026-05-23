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
        },
        {
            name: "Behavioral Neuroscientist",
            keywords: { "brain": 5, "animal": 4, "hormone": 5, "mind": 3, "testing": 4, "lab": 3 },
            roadmap: "Master stereotaxic operations, neural pathway staining, and behavioral testing setups.",
            bridge: "Match sudden chemical changes inside brain structures with observable physical actions."
        }, 
        { 
            name: "Sound Masking Architect",
            keywords: { "quiet": 4, "sound": 5, "wall": 3, "room": 3, "wave": 5, "design": 3 },
            roadmap: "Study structural acoustics, destructive wave interference techniques, and white-noise generation installations.",
            bridge: "Deploy specialized sound wave emitters to cancel unwanted real-world structural noises."
        },
        { 
            name: "Chemical Logistics Coordinator",
            keywords: { "hazard": 5, "truck": 4, "chemical": 5, "rule": 3, "safe": 4, "move": 3 },
            roadmap: "Master Hazmat safety parameters, dynamic shipping workflows, and rapid spill-containment procedures.",
            bridge: "Manage high-risk chemical storage timelines under tight logistical regulations."
        },
        {   
            name: "Cell Culture Specialist",
            keywords: { "petri": 4, "cell": 5, "grow": 4, "lab": 3, "meat": 3, "medicine": 4 },
            roadmap: "Master aseptic laboratory cultivation methods, bioreactor scale-up systems, and growth media optimization.",
            bridge: "Cultivate individual cellular tissue lines without relying on living animal hosts."
        },
        {   
            name: "Entomologist",
            keywords: { "bug": 5, "insect": 5, "nature": 3, "farm": 4, "poison": 3, "research": 3 },
            roadmap: "Study insect taxonomy, pesticide resistance trends, and natural biological pest control networks.",
            bridge: "Weaponize beneficial insect populations to secure large agricultural fields safely."
        },
        {   
            name: "Geoprocess Automation Engineer",
            keywords: { "mine": 5, "drill": 4, "code": 4, "robot": 5, "safety": 3, "machinery": 4 },
            roadmap: "Learn automated drilling logic, heavy machinery remote operation setups, and LiDAR underground navigation.",
            bridge: "Replace manual mine drilling with programmatic, driverless heavy vehicle tracking systems."
        },
        {   
            name: "Viticulturist (Data-Driven)",
            keywords: { "grape": 5, "wine": 5, "farm": 3, "soil": 4, "weather": 3, "chemistry": 4 },
            roadmap: "Master soil sugar monitoring frameworks, brix data analytics, and precision canopy management.",
            bridge: "Apply strict chemical balance parameters to fine crop fermentation workflows."
        },
        {   
            name: "Pediatric Audiologist",
            keywords: { "child": 5, "hear": 5, "ear": 4, "medical": 3, "test": 3, "device": 4 },
            roadmap: "Specialize in neonatal hearing diagnostics, auditory brainstem responses, and pediatric hearing-aid program calibrations.",
            bridge: "Diagnose sensory nerve response capacities in infants without relying on verbal feedback."
        },
        {   
            name: "Fire Dynamics Engineer",
            keywords: { "burn": 4, "smoke": 4, "build": 3, "safe": 3, "fire": 5, "layout": 4 },
            roadmap: "Master fire fluid dynamics modeling, toxic gas air flow paths, and structural heat tolerance testing.",
            bridge: "Shape structural blueprints to isolate and choke off fire spread vectors naturally."
        },
        {   
            name: "Enzymologist",
            keywords: { "chemical": 4, "speed": 3, "protein": 5, "lab": 3, "wash": 2, "factory": 4 },
            roadmap: "Study protein crystallization, metabolic catalyst pathways, and enzyme kinetic reactions.",
            bridge: "Deploy biological protein catalysts to accelerate massive industrial manufacturing processes."
        },
        {   
            name: "Primate Behaviorist",
            keywords: { "monkey": 5, "forest": 4, "social": 4, "group": 3, "nature": 3, "mind": 3 },
            roadmap: "Complete long-term field observation studies, tracking communication styles and troupe status patterns.",
            bridge: "Map ancient hominid social group cues using modern primate community interactions."
        },
        {   
            name: "Semiconductor Lithography Specialist",
            keywords: { "chip": 5, "laser": 4, "code": 3, "circuit": 5, "manufacturing": 4, "clean": 4 },
            roadmap: "Master extreme ultraviolet (EUV) light systems and atomic layer deposition technologies.",
            bridge: "Etch complex microscopic processing logic gates onto delicate silicon substrates."
        },
        {   
            name: "Herpetologist",
            keywords: { "snake": 5, "frog": 4, "venom": 5, "poison": 4, "medicine": 4, "forest": 3 },
            roadmap: "Study reptile anatomy, venom extraction protocols, and biochemical peptide screening procedures.",
            bridge: "Isolate high-potency wild snake venoms to engineer targeted life-saving cardiac medications."
        },
        {   
            name: "Metallurgical Failure Analyst",
            keywords: { "break": 4, "crash": 4, "metal": 5, "microscope": 4, "stress": 4, "logic": 3 },
            roadmap: "Master scanning electron microscopy (SEM) and fatigue fracture pattern detection styles.",
            bridge: "Reconstruct structural aircraft component disasters by examining crystal-level metal splits."
        },
        {   
            name: "Computational Historian",
            keywords: { "data": 4, "history": 5, "book": 4, "archive": 4, "code": 4, "trend": 3 },
            roadmap: "Master optical character recognition (OCR) data cleanup, text-mining, and cultural trend visualization tools.",
            bridge: "Feed centuries of unstructured text archives into pattern-finding computational algorithms."
        },
        {   
            name: "Pathologist",
            keywords: { "cell": 4, "tissue": 5, "disease": 5, "cancer": 5, "microscope": 4, "hospital": 3 },
            roadmap: "Complete medical pathology residency, mastering tissue biopsy staining and microscopic cellular abnormality identification.",
            bridge: "Diagnose complex internal systemic patient diseases by analyzing static, biopsied cell shapes."
        },
        {   
            name: "Renewable Energy Storage Chemist",
            keywords: { "battery": 5, "lithium": 5, "charge": 4, "power": 4, "chemistry": 5, "grid": 3 },
            roadmap: "Study anode & cathode material degradation patterns, solid-state electrolyte systems, and ionic transfers.",
            bridge: "Modify molecular battery configurations to prevent long-term power storage leakage on electrical grids."
        },
        {   
            name: "Ichthyologist",
            keywords: { "fish": 5, "water": 4, "river": 5, "nature": 3, "count": 3, "research": 3 },
            roadmap: "Learn freshwater ecosystem tracking, fish migration tagging systems, and marine toxicology variables.",
            bridge: "Gauge complete river system health metrics by testing specific freshwater predator tissues."
        },
        {   
            name: "High-Pressure Physicist",
            keywords: { "squeeze": 4, "diamond": 5, "core": 4, "extreme": 4, "laser": 3, "logic": 3 },
            roadmap: "Master diamond anvil cell configuration operations and high-energy laser shockwave measurements.",
            bridge: "Simulate the extreme physical crushing forces of planetary cores inside controlled laboratory testing environments."
        },
        {   
            name: "Sensory Scientist (Product Development)",
            keywords: { "touch": 4, "smell": 5, "taste": 5, "human": 4, "data": 3, "factory": 3 },
            roadmap: "Study consumer psychology metrics, threshold detection statistics, and aromatic profiling workflows.",
            bridge: "Convert subjective human taste feedback reports into structured, actionable chemical ingredient changes."
        },
        {   
            name: "Remote Sensing Specialist",
            keywords: { "satellite": 5, "color": 3, "laser": 4, "map": 4, "planet": 4, "change": 3 },
            roadmap: "Learn hyperspectral imagery processing, radar backscatter tracking, and planetary sensor calibration styles.",
            bridge: "Detect hidden real-world terrain changes by evaluating multi-spectral satellite light reflection lines."
        },
        {   
            name: "Parasitologist",
            keywords: { "worm": 5, "bug": 4, "blood": 4, "host": 5, "medical": 3, "dangerous": 4 },
            roadmap: "Study protozoan life cycles, parasite transmission routes, and targeted anti-parasitic drug formulations.",
            bridge: "Interrupt microscopic parasite propagation phases to stop widespread community infection vectors."
        },
        {   
            name: "Aviation Human Factors Engineer",
            keywords: { "pilot": 5, "cockpit": 5, "screen": 4, "safety": 4, "error": 4, "design": 3 },
            roadmap: "Study cognitive workload assessment tools, flight deck spatial metrics, and emergency response ergonomics.",
            bridge: "Redesign complex emergency warning indicators to minimize user errors under extreme pilot fatigue."
        },
        {   
            name: "Structural Health Monitor (Civil Science)",
            keywords: { "bridge": 5, "break": 4, "building": 4, "sensor": 5, "safety": 3, "stress": 4 },
            roadmap: "Master acoustic sensor arrays, piezoelectric stress diagnostics, and structural resonance tracking models.",
            bridge: "Track minor micro-cracks in massive concrete highway supports before visible splits appear."
        },
        {   
            name: "Polymer Chemist",
            keywords: { "plastic": 5, "rubber": 4, "chemical": 5, "build": 3, "stretch": 4, "factory": 3 },
            roadmap: "Study monomer polymerization mechanisms, thermal transformation profiles, and biodegradable plastics design.",
            bridge: "Re-engineer common consumer plastic molecular bonds to accelerate natural environment degradation."
        },
        {   
            name: "Dendrochronologist",
            keywords: { "tree": 5, "wood": 4, "history": 4, "ring": 5, "weather": 3, "time": 3 },
            roadmap: "Master cross-dating wood sample systems, core extraction practices, and historical climate tracking.",
            bridge: "Read historical global rainfall levels by measuring individual annual tree ring growth gaps."
        },
        {   
            name: "Mycologist",
            keywords: { "mushroom": 5, "fungus": 5, "forest": 3, "poison": 3, "clean": 4, "nature": 3 },
            roadmap: "Study fungal taxonomy, spore distribution patterns, and mycelial filtering frameworks.",
            bridge: "Deploy dense underground fungal networks to filter toxic heavy metals out of municipal runoff water."
        },
        {   
            name: "Optical Communication Network Designer",
            keywords: { "fiber": 5, "light": 4, "laser": 5, "web": 3, "internet": 4, "system": 3 },
            roadmap: "Learn wavelength division multiplexing (WDM), optical signal amplification, and glass fiber layouts.",
            bridge: "Route millions of data streams simultaneously through glass fiber cables via laser color shifts."
        },
        {   
            name: "Cryogenic Engineer",
            keywords: { "cold": 5, "freeze": 5, "liquid": 4, "gas": 4, "tank": 3, "rocket": 4 },
            roadmap: "Master liquid nitrogen & helium containment physics, vacuum insulation setups, and zero-leak valving designs.",
            bridge: "Safely store unstable fuels at sub-minus-150-degree temperatures for aerospace applications."
        },
        {   
            name: "Quantitative Geneticist",
            keywords: { "math": 4, "population": 5, "dna": 5, "formula": 4, "chart": 3, "farm": 3 },
            roadmap: "Learn matrix algebra for inheritance models, variance calculations, and selective breeding analytics.",
            bridge: "Use statistical probability models to predict crop trait distributions across multi-generational hybrid fields."
        },
        {   
            name: "Mammalogist",
            keywords: { "animal": 5, "fur": 4, "tracking": 5, "forest": 3, "camera": 4, "counting": 3 },
            roadmap: "Master non-invasive track collection, infrared camera placement, and DNA hair-trap analysis.",
            bridge: "Track shifts in large predator populations using digital surveillance arrays hidden in remote wilderness areas."
        },
        {   
            name: "Computational Fluid Dynamics (CFD) Analyst",
            keywords: { "air": 4, "water": 4, "flow": 5, "design": 4, "simulator": 5, "math": 3 },
            roadmap: "Learn Navier-Stokes solvers, mesh building pipelines, and turbulence simulation profiles.",
            bridge: "Forecast wind drag forces on experimental hyper-car shapes through virtual wind tunnel testing."
        },
        {   
            name: "Geochronologist",
            keywords: { "rock": 4, "old": 4, "earth": 4, "time": 5, "isotope": 5, "radioactive": 5 },
            roadmap: "Master mass spectrometry operations, uranium-lead radioisotope tracking, and stratigraphy logic.",
            bridge: "Establish absolute dates for planetary crust cooling shifts by measuring radioactive mineral decay rates."
        },
        {   
            name: "Forensic Anthropologist",
            keywords: { "bone": 5, "death": 5, "crime": 4, "face": 4, "old": 3, "identify": 4 },
            roadmap: "Complete training in skeletal trauma analysis, taphonomic degradation patterns, and facial restoration templates.",
            bridge: "Determine historical victim profiles from damaged skeletal remain fragments."
        },
        {   
            name: "Precision Agriculture System Architect",
            keywords: { "drone": 5, "sensor": 5, "farm": 4, "water": 3, "map": 3, "automate": 4 },
            roadmap: "Master variable rate application (VRA) algorithms, RTK GPS installations, and multispectral drone scans.",
            bridge: "Direct field chemicals automatically down to the exact plant leaves requiring localized treatment."
        },
        {   
            name: "Molecular Virologist",
            keywords: { "virus": 5, "dna": 5, "code": 4, "design": 3, "lab": 3, "medical": 4 },
            roadmap: "Learn gene therapy vector configurations, capsid printing styles, and precise virus synthesis steps.",
            bridge: "Re-engineer harmless viral shells to drop target cancer-fighting genetic instructions directly into human cells."
        },
        {   
            name: "Speech Synthesis Engineer",
            keywords: { "sound": 4, "voice": 5, "code": 4, "text": 4, "ai": 5, "accent": 3 },
            roadmap: "Master waveform modeling architectures, neural vocoders, and expressive phonetic generation mechanics.",
            bridge: "Convert raw digital text tokens into realistic, emotionally nuanced human voice audio waves."
        },
        {   
            name: "Phytoremediation Consultant",
            keywords: { "plant": 5, "toxic": 5, "clean": 4, "root": 4, "soil": 3, "industry": 3 },
            roadmap: "Study plant accumulator properties, soil chemistry adjustments, and agricultural toxic logging protocols.",
            bridge: "Grow specific heavy-metal absorbing flora lines to clear industrial chemical waste zones."
        },
        {   
            name: "High-Vacuum System Engineer",
            keywords: { "space": 4, "empty": 5, "pipe": 3, "leak": 5, "pressure": 4, "semiconductor": 4 },
            roadmap: "Learn turbomolecular pump layouts, outgassing rate analytics, and helium leak detection tools.",
            bridge: "Create pristine, airless manufacturing environments inside precision semiconductor testing chambers."
        },
        {   
            name: "Zooarchaeologist",
            keywords: { "animal": 4, "bone": 5, "old": 4, "history": 5, "culture": 3, "food": 3 },
            roadmap: "Master old bone taxonomy, butcher mark documentation styles, and historical domestic tracking patterns.",
            bridge: "Chart old human nomadic dietary habits by examining animal bone piles near primitive camps."
        },
        {   
            name: "Biometric System Designer",
            keywords: { "face": 5, "eye": 5, "secure": 4, "fingerprint": 5, "scan": 4, "code": 3 },
            roadmap: "Learn iris pattern verification code, thermal face metrics, and spoof-detection security setups.",
            bridge: "Convert random biological skin or eye details into repeatable, unalterable digital login files."
        },
        {   
            name: "Atmospheric Chemist",
            keywords: { "air": 4, "smog": 5, "gas": 4, "climate": 3, "ozone": 5, "laboratory": 3 },
            roadmap: "Master airborne particulate sampling methods, gas chromatography, and solar radiation interaction equations.",
            bridge: "Calculate the breakdown speed of industrial smoke chemicals when exposed to high-altitude sunlight."
        },
        {   
            name: "Kinetic Weapon System Analyst",
            keywords: { "speed": 5, "impact": 5, "metal": 4, "math": 3, "missile": 5, "armor": 4 },
            roadmap: "Master terminal ballistic physics modeling, hydrocode shock software, and material penetration metrics.",
            bridge: "Forecast material tearing states when ultra-high-speed kinetic payloads strike thick defensive alloy plates."
        },
        {   
            name: "Malacologist",
            keywords: { "shell": 5, "snail": 5, "ocean": 4, "fresh": 3, "environment": 4, "count": 3 },
            roadmap: "Study mollusk taxonomy, shell growth tracking metrics, and freshwater environment sensitivity charts.",
            bridge: "Monitor micro-contaminant changes in public water systems by analyzing freshwater mussel shell layering."
        },
        {   
            name: "Clinical Neurophysiologist",
            keywords: { "brain": 5, "nerve": 5, "shock": 4, "monitor": 4, "medical": 3, "operation": 4 },
            roadmap: "Learn intraoperative neuromonitoring (IONM), EEG pattern analytics, and nerve conduction testing workflows.",
            bridge: "Track spinal nerve electrical health lines in real time during complex orthopedic surgeries."
        },
        {   
            name: "Space Debris Tracking Analyst",
            keywords: { "space": 4, "trash": 5, "orbit": 5, "radar": 4, "math": 3, "collision": 5 },
            roadmap: "Master orbital collision mechanics software, laser tracking operations, and perturbation vector calculations.",
            bridge: "Map erratic paths of high-speed space trash particles to steer operational communications satellites safely clear."
        },
        {   
            name: "Industrial Microbiologist",
            keywords: { "bug": 4, "vat": 5, "factory": 4, "alcohol": 3, "acid": 3, "clear": 3 },
            roadmap: "Learn scale-up fermentation monitoring protocols, mutant strain selection steps, and product purification workflows.",
            bridge: "Harness giant vats of modified bacteria to churn out pure chemical vitamins at commercial scale."
        },
        {   
            name: "Forensic Odontologist",
            keywords: { "tooth": 5, "bite": 5, "crime": 4, "identification": 4, "bone": 3, "record": 3 },
            roadmap: "Master dental anatomy profiling, bite mark template analysis, and disaster identity documentation rules.",
            bridge: "Confirm matching identities for unknown casualty remains by comparing jaw structure charts with historical dental archives."
        },
        {   
            name: "Sedimentologist",
            keywords: { "sand": 5, "rock": 4, "river": 4, "history": 4, "oil": 3, "layer": 3 },
            roadmap: "Master grain size distribution tracking, core logging steps, and depositional space configuration models.",
            bridge: "Map historical ancient oceanic delta coastlines by interpreting deep underground sand layers."
        },
        {   
            name: "Agentic AI Safety Researcher",
            keywords: { "ai": 5, "code": 4, "rules": 4, "secure": 5, "logic": 4, "system": 3, "protect": 4 },
            roadmap: "Master reward specification mathematical models, alignment protocols, and recursive adversarial red-teaming.",
            bridge: "Build mathematical guardrail architectures that prevent autonomous software models from drifting from user directives."
        }
    ],
    Commerce: [
        Commerce: [
        {
            name: "Fintech Strategist",
            keywords: { "money": 3, "finance": 4, "app": 3, "market": 2, "digital": 3, "bank": 4, "crypto": 5 },
            roadmap: "Study financial structures and learn algorithmic trading setups with Python.",
            bridge: "Use analytical skills to move from classical banking tracks into automated finance platforms."
        },
        {
            name: "Investment Banker",
            keywords: { "profit": 4, "wealth": 3, "capital": 5, "growth": 2, "stock": 5, "invest": 4, "negotiate": 3 },
            roadmap: "Clear CFA exams and master high-stakes corporate mergers and acquisitions case studies.",
            bridge: "Scale up financial modeling competencies to guide massive corporate fundraising operations."
        },
        {
            name: "Quantitative Risk Analyst",
            keywords: { "math": 5, "finance": 4, "logic": 4, "risk": 5, "predict": 4, "trade": 3 },
            roadmap: "Master stochastic calculus models, asset pricing rules, and portfolio risk evaluation tools.",
            bridge: "Combine deep math capabilities with corporate portfolio safety parameters."
        },
        {
            name: "Blockchain Financial Analyst",
            keywords: { "crypto": 5, "finance": 4, "secure": 3, "ledger": 5, "digital": 3, "token": 5 },
            roadmap: "Study decentralized finance (DeFi) networks, token economic models, and smart contract audit steps.",
            bridge: "Move traditional asset management processes into decentralized cryptographic ledgers."
        },
        {
            name: "Actuarial Scientist",
            keywords: { "math": 5, "risk": 5, "finance": 3, "logic": 4, "insurance": 5, "stats": 4 },
            roadmap: "Pass full professional actuarial board exams, specializing in life expectancy and loss trends.",
            bridge: "Apply strict probability calculations to protect insurance providers against extreme loss events."
        },
        {
            name: "Corporate Attorney / Compliance Officer",
            keywords: { "law": 5, "rules": 4, "negotiate": 3, "corporate": 4, "risk": 3, "legal": 5 },
            roadmap: "Master business contract legalities, regulatory governance models, and corporate compliance frameworks.",
            bridge: "Convert operational business management experience into corporate legal and risk architecture setups."
        },
        {
            name: "Quantitative Forensic Accountant",
            keywords: { "fraud": 5, "money": 3, "audit": 5, "court": 4, "numbers": 4, "search": 3 },
            roadmap: "Complete CPA/CFE certifications, mastering digital asset tracking and corporate balance sheet fraud patterns.",
            bridge: "Deploy analytical auditing metrics to uncover hidden money laundering pipelines in corporate records."
        },
        {
            name: "Supply Chain Logistics Director",
            keywords: { "ship": 4, "truck": 4, "cargo": 5, "global": 3, "store": 3, "system": 3 },
            roadmap: "Master ERP logic systems, multi-modal transport contracts, and lean inventory tracking frameworks.",
            bridge: "Coordinate erratic global transport schedules into a unified, zero-delay factory supply line."
        },
        {
            name: "Brand Portfolio Manager",
            keywords: { "brand": 5, "market": 4, "sell": 3, "creative": 4, "money": 2, "strategy": 4 },
            roadmap: "Study market share valuation metrics, consumer target testing, and ad ad asset allocations.",
            bridge: "Balance high-concept visual asset plans with practical market return metrics."
        },
        {
            name: "Venture Capital Associate",
            keywords: { "startup": 5, "money": 4, "rich": 3, "scale": 4, "tech": 4, "negotiate": 3 },
            roadmap: "Master early-stage business valuation methods, cap table mechanics, and technology growth metrics.",
            bridge: "Spot promising early stage tech companies and structure multi-million dollar equity investments."
        },
        {
            name: "Mergers & Acquisitions Consultant",
            keywords: { "corporate": 4, "buy": 4, "business": 3, "finance": 4, "contract": 4, "synergy": 5 },
            roadmap: "Study corporate takeover law, financial synthesis metrics, and restructuring frameworks.",
            bridge: "Weld two separate corporate entities into a single, high-efficiency business infrastructure."
        },
        {
            name: "Predictive Market Analyst",
            keywords: { "trend": 5, "data": 4, "buy": 3, "product": 3, "price": 4, "predict": 5 },
            roadmap: "Learn consumer purchasing pattern tracking, regression models, and target demographic research.",
            bridge: "Shift traditional sales history into proactive inventory acquisition models."
        },
        {
            name: "International Trade Compliance Specialist",
            keywords: { "customs": 5, "border": 5, "tax": 4, "law": 4, "global": 4, "cargo": 3 },
            roadmap: "Master cross-border tariff legislation, international trade treaties, and export control validation.",
            bridge: "Navigate strict global trade borders to keep corporate global distribution moving without penalties."
        },
        {
            name: "E-Commerce Growth Architect",
            keywords: { "online": 5, "shop": 4, "click": 4, "funnel": 5, "sell": 4, "data": 3 },
            roadmap: "Master user conversion funnels, customer acquisition cost metrics (CAC), and retention tracking systems.",
            bridge: "Convert digital website visitors into consistent online business revenue."
        },
        {
            name: "Real Estate Private Equity Analyst",
            keywords: { "building": 4, "land": 5, "property": 5, "money": 3, "rent": 4, "asset": 4 },
            roadmap: "Master commercial real estate underwriting, cash-flow metrics, and construction debt mechanics.",
            bridge: "Trade abstract stock investments for hard, high-yield physical commercial properties."
        },
        {
            name: "Cost and Management Accountant (CMA)",
            keywords: { "factory": 4, "budget": 5, "cost": 5, "save": 4, "output": 3, "numbers": 3 },
            roadmap: "Clear CMA exams, mastering industrial cost-allocation tracking, scrap reduction, and operational budgets.",
            bridge: "Optimize internal manufacturing lines to maximize gross corporate margins."
        },
        {
            name: "Corporate Treasury Manager",
            keywords: { "cash": 5, "bank": 4, "interest": 4, "currency": 5, "swap": 4, "safety": 3 },
            roadmap: "Master liquidity forecasting metrics, foreign exchange hedging options, and cash allocation setups.",
            bridge: "Protect global corporate cash reserves from unexpected international currency value drops."
        },
        {
            name: "Product Manager (SaaS Commercial)",
            keywords: { "app": 5, "software": 4, "dev": 3, "roadmap": 4, "sales": 3, "business": 4 },
            roadmap: "Learn agile project management, software feature monetization frameworks, and user growth logic.",
            bridge: "Translate technical engineering capacities into clear, high-revenue digital software products."
        },
        {
            name: "Compensation and Benefits Director (HR)",
            keywords: { "salary": 5, "bonus": 5, "human": 3, "money": 3, "contract": 4, "legal": 3 },
            roadmap: "Master equity compensation plans, executive bonus frameworks, and corporate health insurance markets.",
            bridge: "Structure corporate pay tiers to attract elite talents while managing fixed operating costs."
        },
        {
            name: "Management Consultant (Operations)",
            keywords: { "efficiency": 5, "advice": 4, "fix": 4, "corporate": 3, "cost": 4, "system": 3 },
            roadmap: "Learn bottleneck analysis setups, corporate restructuring frameworks, and business process automation.",
            bridge: "Audit underperforming businesses to re-engineer their entire operational structure."
        },
        {
            name: "Stock Broker & Portfolio Execution Specialist",
            keywords: { "market": 4, "stock": 5, "buy": 3, "trade": 5, "speed": 4, "alert": 3 },
            roadmap: "Pass regulatory licensing exams, mastering market liquidity mechanics and high-volume asset entry tools.",
            bridge: "Execute large institutional trade positions without triggering sudden market price disruptions."
        },
        {
            name: "Tax Optimization Specialist (MNC)",
            keywords: { "tax": 5, "government": 4, "save": 4, "law": 4, "global": 4, "structure": 3 },
            roadmap: "Master international tax jurisdiction rules, transfer pricing frameworks, and corporate structure strategies.",
            bridge: "Organize cross-border corporate entity assets to minimize legal tax liabilities."
        },
        {
            name: "Franchise Network Developer",
            keywords: { "store": 5, "scale": 4, "brand": 4, "contract": 4, "expansion": 5, "sales": 3 },
            roadmap: "Master franchise disclosure agreements, local market site demographics, and supply chain replication blueprints.",
            bridge: "Scale a local storefront success into a massive, uniform national commercial footprint."
        },
        {
            name: "Intellectual Property Monetization Expert",
            keywords: { "patent": 5, "idea": 4, "money": 3, "license": 5, "royalty": 5, "contract": 4 },
            roadmap: "Study patent valuation metrics, technology licensing laws, and corporate royalty contract logic.",
            bridge: "Convert abstract inventions and trademarks into predictable, long-term corporate licensing revenue."
        },
        {
            name: "Sustainability (ESG) Investment Analyst",
            keywords: { "green": 5, "carbon": 5, "fund": 4, "audit": 3, "metric": 4, "invest": 4 },
            roadmap: "Learn carbon accounting frameworks, ESG compliance metrics, and green bond market assets.",
            bridge: "Steer institutional investment funds into environmentally sustainable corporate equities."
        },
        {
            name: "Behavioral Economist (Consumer Market)",
            keywords: { "psychology": 5, "choice": 5, "buy": 3, "pricing": 4, "customer": 4, "trend": 3 },
            roadmap: "Master behavioral nudge strategies, price elasticity analytics, and choice architecture models.",
            bridge: "Use psychological patterns to construct high-conversion corporate product pricing strategies."
        },
        {
            name: "Carbon Credit Broker",
            keywords: { "green": 5, "air": 4, "pollution": 4, "trade": 5, "credit": 5, "market": 4 },
            roadmap: "Master global carbon cap-and-trade laws, validation protocols, and emissions derivatives trading.",
            bridge: "Match industrial polluters with verified green projects to trade legal pollution rights."
        },
        {
            name: "Digital Advertising Bidding Manager (Programmatic)",
            keywords: { "ad": 5, "click": 4, "auction": 5, "code": 3, "automated": 4, "web": 3 },
            roadmap: "Learn demand-side platform (DSP) metrics, real-time ad ad auction bidding algorithms, and demographic data targeting.",
            bridge: "Optimize ad ad network budgets by adjusting machine-targeted marketing bids in real time."
        },
        {
            name: "Public Relations Risk Manager",
            keywords: { "crisis": 5, "news": 4, "media": 4, "speech": 3, "protect": 4, "brand": 4 },
            roadmap: "Master media narrative control tracking, crisis response plans, and executive public communication strategies.",
            bridge: "Shield high-profile corporate brands from irreversible media reputation damages during crises."
        },
        {
            name: "Healthcare Hospital Administrator",
            keywords: { "medical": 5, "hospital": 5, "budget": 4, "doctor": 4, "staff": 3, "clinic": 3 },
            roadmap: "Master clinical resource deployment models, healthcare compliance rules, and hospital revenue cycle pipelines.",
            bridge: "Manage complex medical facility finances without degrading patient safety standards."
        },
        {
            name: "Retail Supply Allocation Modeler",
            keywords: { "shop": 4, "shelf": 5, "inventory": 5, "season": 4, "data": 3, "logistics": 4 },
            roadmap: "Learn multi-echelon inventory optimization models, seasonal demand forecasting, and stock clearance pipelines.",
            bridge: "Calibrate retail store product levels to match changing local buying habits perfectly."
        },
        {
            name: "Aviation Leasing Consultant",
            keywords: { "plane": 5, "lease": 5, "contract": 4, "airline": 4, "millions": 3, "finance": 4 },
            roadmap: "Study aircraft asset depreciation curves, international aviation registration laws, and structured debt options.",
            bridge: "Coordinate multi-million dollar cross-border commercial airplane leases for global airlines."
        },
        {
            name: "Corporate Compliance Auditor",
            keywords: { "rules": 5, "check": 4, "fine": 4, "legal": 4, "paper": 3, "report": 3 },
            roadmap: "Master internal control frameworks, anti-bribery law compliance, and investigative report writing.",
            bridge: "Validate internal corporate operations against external government safety and legal regulations."
        },
        {
            name: "Luxury Brand Relationship Director",
            keywords: { "rich": 5, "elite": 5, "sales": 3, "trust": 4, "vip": 5, "status": 4 },
            roadmap: "Study high-net-worth client psychological metrics, bespoke event curation, and long-term retention strategies.",
            bridge: "Turn simple product sales into personal, lifetime luxury brand loyalty relationships."
        },
        {
            name: "Business Intelligence Architect",
            keywords: { "dashboard": 5, "data": 4, "database": 4, "chart": 4, "executive": 3, "report": 3 },
            roadmap: "Master data warehouse design, ETL pipelines, and executive-facing interactive business dashboard construction.",
            bridge: "Clean up chaotic corporate data pipelines into clear, real-time executive decision graphics."
        },
        {
            name: "Renewable Project Finance Director",
            keywords: { "wind": 5, "solar": 5, "money": 4, "loan": 4, "government": 3, "contract": 4 },
            roadmap: "Learn power purchase agreement (PPA) financial structures, tax equity options, and long-term project debt underwriting.",
            bridge: "Secure major international banking loans to construct massive clean energy installations."
        },
        {
            name: "Maritime Shipping Arbitrator",
            keywords: { "ocean": 5, "ship": 5, "law": 5, "fight": 3, "cargo": 4, "insurance": 3 },
            roadmap: "Master international maritime contract law, cargo damage liability rules, and dispute resolution workflows.",
            bridge: "Settle multi-million dollar international shipping delay disputes outside slow court systems."
        },
        {
            name: "Digital Banking Product Owner",
            keywords: { "bank": 5, "app": 4, "digital": 4, "transfer": 4, "secure": 3, "user": 3 },
            roadmap: "Master payment gateway integrations, open banking APIs, and fintech security compliance protocols.",
            bridge: "Guide engineering teams to construct seamless, secure online mobile banking features."
        },
        {
            name: "Procurement Category Manager",
            keywords: { "buy": 5, "vendor": 5, "price": 4, "contract": 4, "negotiate": 4, "bulk": 5 },
            roadmap: "Learn global vendor sourcing strategies, raw material pricing models, and contract negotiation tactics.",
            bridge: "Centralize corporate raw material purchasing to extract massive bulk-rate discounts."
        },
        {
            name: "Commercial Real Estate Appraiser",
            keywords: { "building": 4, "office": 4, "worth": 5, "price": 4, "city": 3, "land": 3 },
            roadmap: "Master income capitalization appraisal methods, zoning law assessments, and market trend tracking systems.",
            bridge: "Determine precise financial market values for complex multi-story office towers."
        },
        {
            name: "Strategic Compensation Consultant",
            keywords: { "hr": 5, "pay": 5, "bonus": 4, "stock": 4, "market": 3, "career": 3 },
            roadmap: "Learn market salary benchmarking, executive stock option planning, and pay equality tracking metrics.",
            bridge: "Design corporate compensation structures that reduce employee turnover while protecting margins."
        },
        {
            name: "Quantitative Sports Analyst (Commercial Team Operations)",
            keywords: { "game": 5, "player": 4, "money": 3, "contract": 4, "data": 5, "trade": 4 },
            roadmap: "Master sports sabermetrics metrics, player salary cap management models, and performance prediction analytics.",
            bridge: "Build data-driven professional sports team player rosters within strict financial league salary caps."
        },
        {
            name: "Cloud Infrastructure Cost Optimizer",
            keywords: { "cloud": 5, "server": 4, "bill": 5, "save": 4, "code": 3, "network": 3 },
            roadmap: "Master AWS/Azure usage metrics, server resource allocation models, and compute instance booking structures.",
            bridge: "Reconfigure active corporate cloud storage setups to slash monthly tech platform bills."
        },
        {
            name: "Enterprise Resource Planning (ERP) Implementation Lead",
            keywords: { "system": 5, "software": 4, "corporate": 4, "workflow": 4, "change": 3, "tool": 3 },
            roadmap: "Master SAP or Oracle architecture setups, business workflow mapping, and corporate transition methodologies.",
            bridge: "Swap out obsolete corporate database software with an integrated real-time data ecosystem."
        },
        {
            name: "Agricultural Commodity Trader",
            keywords: { "wheat": 5, "corn": 5, "trade": 5, "price": 4, "future": 4, "market": 3 },
            roadmap: "Learn futures/options trading structures, global weather crop impact analysis, and supply deficit tracking.",
            bridge: "Hedge volatile agricultural crop price shifts through precise financial derivatives betting."
        },
        {
            name: "Consumer Credit Risk Modeler",
            keywords: { "loan": 5, "bank": 4, "score": 5, "loss": 4, "card": 4, "data": 3 },
            roadmap: "Master logistical default prediction models, credit bureau data scoring setups, and loss-given-default equations.",
            bridge: "Calculate precise risk barriers for automated bank personal loan approval applications."
        },
        {
            name: "Corporate Restructuring Specialist",
            keywords: { "debt": 5, "bankrupt": 5, "fix": 4, "lay-off": 4, "survival": 3, "money": 3 },
            roadmap: "Master Chapter 11 bankruptcy mechanics, asset liquidation evaluation models, and debt renegotiation strategies.",
            bridge: "Save near-bankrupt corporate systems by enforcing aggressive, surgical financial restructuring plans."
        },
        {
            name: "Customer Lifetime Value (LTV) Optimizer",
            keywords: { "data": 4, "user": 5, "stay": 4, "money": 3, "model": 4, "predict": 3 },
            roadmap: "Learn cohort churn tracking setups, automated remarketing funnel logic, and survival analysis algorithms.",
            bridge: "Adjust digital marketing outreach programs to maximize long-term cash returns from active buyers."
        },
        {
            name: "Media Rights Distribution Executive",
            keywords: { "movie": 5, "show": 4, "streaming": 5, "sell": 4, "global": 3, "deal": 4 },
            roadmap: "Master media territory licensing laws, streaming royalty calculations, and windowing distribution tactics.",
            bridge: "Maximize film production profitability by licensing content access across separate global streaming networks."
        },
        {
            name: "Industrial Real Estate Developer",
            keywords: { "factory": 4, "warehouse": 5, "build": 4, "land": 4, "logistics": 4, "rail": 3 },
            roadmap: "Learn logistics hub development designs, rail spurs connectivity plans, and structural load metrics.",
            bridge: "Convert undeveloped rural land sectors into high-volume, automated industrial shipping centers."
        },
        {
            name: "Executive Talent Acquisition Specialist",
            keywords: { "headhunter": 5, "ceo": 4, "hire": 5, "secret": 4, "negotiate": 3, "jobs": 3 },
            roadmap: "Master executive interview matching, non-compete clause navigating, and discreet headhunting tactics.",
            bridge: "Source and recruit elite global C-suite executives for Fortune 500 leadership openings."
        },
        {
            name: "Venture Debt Underwriter",
            keywords: { "loan": 5, "startup": 5, "money": 4, "tech": 4, "growth": 3, "risk": 4 },
            roadmap: "Study specialized high-growth capital debt structures, warrant equity mechanics, and startup cash runway equations.",
            bridge: "Provide non-dilutive credit loans to venture-backed tech startups lacking physical collateral."
        },
        {
            name: "International Tax Transfer Pricing Manager",
            keywords: { "tax": 5, "global": 4, "invoice": 4, "corporate": 4, "border": 3, "internal": 3 },
            roadmap: "Master OECD guidelines, intercompany transaction reporting, and arm's length pricing analytics.",
            bridge: "Establish legal pricing models for goods traded internally between a global company's international branches."
        },
        {
            name: "Government Grant Commercialization Consultant",
            keywords: { "grant": 5, "research": 4, "tech": 4, "market": 3, "money": 3, "business": 3 },
            roadmap: "Master public tech-transfer policies, grant compliance systems, and early product marketing plans.",
            bridge: "Move complex lab research discoveries out into self-sustaining commercial retail markets."
        },
        {
            name: "Fine Art Investment Advisor",
            keywords: { "painting": 5, "worth": 4, "auction": 5, "rich": 4, "asset": 4, "trade": 3 },
            roadmap: "Learn art history provenance verification metrics, auction house historical indexes, and fine art storage logistics.",
            bridge: "Build blue-chip classic art portfolios as safe alternative financial investments for wealthy clients."
        },
        {
            name: "Subscription Economy Pricing Architect",
            keywords: { "sub": 5, "software": 4, "tier": 4, "price": 5, "user": 3, "model": 3 },
            roadmap: "Master value-based subscription design, feature gating frameworks, and price elasticity test analytics.",
            bridge: "Build multi-tiered digital product pricing structures that maximize user conversions and monthly recurring revenues."
        },
        {
            name: "Mineral Rights Broker",
            keywords: { "oil": 5, "land": 5, "gold": 4, "mine": 4, "contract": 3, "buy": 3 },
            roadmap: "Study subsurface mineral law frameworks, geological lease valuations, and royalty payment tracking structures.",
            bridge: "Secure underground resource exploration rights from private landowners for industrial mining firms."
        },
        {
            name: "Global Payroll Infrastructure Lead",
            keywords: { "salary": 5, "cash": 4, "global": 4, "tax": 4, "rules": 3, "system": 4 },
            roadmap: "Master cross-border payroll platforms, global worker tax classifications, and international currency distribution setups.",
            bridge: "Coordinate automated, compliant monthly salary payouts for thousands of distributed global employees."
        },
        {
            name: "Intellectual Property Valuation Analyst",
            keywords: { "patent": 5, "value": 5, "price": 4, "law": 3, "court": 3, "money": 3 },
            roadmap: "Master relief-from-royalty financial models, market transaction comparisons, and patent lifespan analytics.",
            bridge: "Put an exact multi-million dollar financial price tag on un-printed software source code."
        },
        {
            name: "Hotel Asset Manager",
            keywords: { "hotel": 5, "room": 4, "profit": 4, "tour": 3, "build": 3, "cost": 3 },
            roadmap: "Master RevPAR (Revenue Per Available Room) optimization models, operator performance tracking, and property upkeep plans.",
            bridge: "Guide hotel management teams to cut operating waste and increase investor dividends."
        },
        {
            name: "Trade Show Monetization Director",
            keywords: { "event": 5, "booth": 5, "ticket": 4, "brand": 3, "sales": 4, "show": 3 },
            roadmap: "Master floor layout yield management, corporate sponsorship sales models, and event tech coordination.",
            bridge: "Convert empty convention center spaces into high-profit corporate networking and sales hubs."
        },
        {
            name: "Microfinance Risk Consultant",
            keywords: { "loan": 5, "help": 4, "small": 4, "bank": 3, "risk": 4, "community": 3 },
            roadmap: "Master group lending credit models, micro-business cash cycle analytics, and localized collection policies.",
            bridge: "Deploy secure peer-supported credit options to unbanked micro-entrepreneurs safely."
        },
        {
            name: "Logistics Network Topology Modeler",
            keywords: { "center": 5, "ship": 4, "map": 4, "warehouse": 4, "math": 3, "path": 3 },
            roadmap: "Master facility location linear programming models, transport mileage optimization, and supply chain designs.",
            bridge: "Calculate the exact global coordinates to build distribution hubs that minimize total shipping miles."
        },
        {
            name: "Digital Product Localization Manager",
            keywords: { "global": 5, "app": 4, "language": 5, "world": 3, "design": 3, "market": 4 },
            roadmap: "Master regional banking payment habits, local data privacy legislation, and cultural interface design profiles.",
            bridge: "Adjust a Western digital software application to match the unique consumer habits of Asian markets."
        },
        {
            name: "Private Aviation Fleet Broker",
            keywords: { "jet": 5, "charter": 5, "fly": 4, "rich": 4, "buy": 3, "deal": 3 },
            roadmap: "Study private jet maintenance records, charter utilization optimization profiles, and fractional jet ownership financing.",
            bridge: "Manage high-dollar private aircraft sales and charter contracts for executive corporate networks."
        },
        {
            name: "Sovereign Wealth Fund Asset Allocator",
            keywords: { "nation": 5, "billions": 5, "fund": 4, "global": 4, "asset": 4, "stocks": 3 },
            roadmap: "Master macro-level multi-asset class allocation modeling, geopolitical risk monitoring, and long-term yield projections.",
            bridge: "Manage a nation's multi-billion dollar excess reserves across global stock, bond, and real estate markets."
        },
        {
            name: "Healthcare Revenue Cycle Director",
            keywords: { "billing": 5, "medical": 4, "insurance": 4, "claim": 5, "money": 3, "hospital": 3 },
            roadmap: "Master clinical coding validation methods, denied claim resolution workflows, and automated insurance processing architectures.",
            bridge: "Speed up hospital revenue collection timelines by cutting down processing friction with private insurance carriers."
        },
        {
            name: "Consumer Package Goods (CPG) Category Specialist",
            keywords: { "shelf": 5, "store": 4, "layout": 4, "brand": 4, "sales": 3, "product": 3 },
            roadmap: "Master retail planogram space yield trackers, consumer basket data analytics, and promotional event designs.",
            bridge: "Arrange supermarket shelves to match consumer eye-lines and maximize companion product cross-sales."
        },
        {
            name: "Clean-Tech Venture Partner",
            keywords: { "startup": 5, "green": 5, "money": 4, "venture": 4, "tech": 4, "climate": 5 },
            roadmap: "Learn carbon reduction verification models, green technology hardware scaling systems, and early corporate cap tables.",
            bridge: "Fund and guide early stage engineering startups focused exclusively on grid-scale climate tech solutions."
        },
        {
            name: "Reinsurance Underwriter",
            keywords: { "insurance": 5, "risk": 5, "cat": 5, "disaster": 4, "millions": 3, "finance": 4 },
            roadmap: "Master extreme catastrophe modeling frameworks, portfolio aggregation risk analytics, and global risk distribution.",
            bridge: "Insure major primary insurance companies against catastrophic billion-dollar hurricane or earthquake payout losses."
        },
        {
            name: "B2B Enterprise Account Executive",
            keywords: { "sales": 5, "corporate": 4, "deal": 5, "millions": 4, "software": 4, "speak": 3 },
            roadmap: "Master complex multi-stakeholder corporate buying behaviors, value-based discovery methods, and enterprise deal terms.",
            bridge: "Secure multi-million dollar annual software platform service contracts with global corporate buyers."
        },
        {
            name: "Content Streaming Monetization Strategist",
            keywords: { "ad": 4, "streaming": 5, "video": 4, "money": 3, "user": 3, "sub": 4 },
            roadmap: "Master ad-supported video (AVOD) ad insertion tech, programmatic ad tier design, and churn reduction frameworks.",
            bridge: "Balance paid video subscription systems with targeted ad breaks to optimize digital media revenues."
        },
        {
            name: "Multi-Channel Retail Logistics Lead",
            keywords: { "store": 4, "online": 5, "shipping": 5, "warehouse": 4, "delivery": 4, "tracking": 3 },
            roadmap: "Learn distributed inventory management models, buy-online-pickup-in-store (BOPIS) frameworks, and package returns processing systems.",
            bridge: "Sync brick-and-mortar store inventories with online ecommerce shipping hubs into one real-time warehouse system."
        },
        {
            name: "Special Situations Equity Analyst",
            keywords: { "stock": 5, "spin-off": 5, "bankruptcy": 4, "profit": 3, "research": 4, "corporate": 3 },
            roadmap: "Study corporate spin-off asset dynamics, reorganization valuation models, and activist investor tracking.",
            bridge: "Spot mispriced stock assets during messy, complex corporate restructuring operations."
        },
        {
            name: "Urban Infrastructure Public-Private Partnership (PPP) Consultant",
            keywords: { "city": 4, "bridge": 4, "road": 4, "government": 5, "money": 4, "loan": 4 },
            roadmap: "Master long-term concession model frameworks, public project risk allocation strategies, and infrastructure project financing.",
            bridge: "Connect private institutional funding with government agencies to construct toll highways and urban rail projects."
        },
        {
            name: "Global Franchise Compliance Auditor",
            keywords: { "brand": 5, "rules": 4, "audit": 5, "franchise": 4, "store": 3, "quality": 4 },
            roadmap: "Master global franchise contract legalities, operational quality point metrics, and point-of-sale financial verification steps.",
            bridge: "Audit local franchise stores to protect national brand visual and operating standards uniformly."
        },
        {
            name: "Digital Asset Custody Manager",
            keywords: { "crypto": 5, "bank": 4, "secure": 5, "cold": 5, "digital": 3, "institution": 4 },
            roadmap: "Master multi-party computation (MPC) key setups, institutional grade cold-storage options, and asset security rules.",
            bridge: "Provide high-security digital asset storage support systems for major hedge funds trading crypto assets."
        },
        {
            name: "Direct-to-Consumer (DTC) Brand CFO",
            keywords: { "startup": 5, "sell": 4, "online": 5, "inventory": 4, "profit": 4, "metrics": 3 },
            roadmap: "Learn unit economics model design, working capital debt loops, and ecommerce ad budget return variables.",
            bridge: "Scale early-stage online direct product sales into a profitable, venture-backed consumer brand."
        },
        {
            name: "Maritime Hull and Cargo Insurance Broker",
            keywords: { "ship": 5, "ocean": 4, "risk": 5, "insurance": 5, "loss": 4, "damage": 4 },
            roadmap: "Master ocean marine cargo insurance legalities, salvage cost calculations, and vessel safety scoring models.",
            bridge: "Structure protective insurance coverage plans for massive commercial containership fleets navigating high-risk trade channels."
        },
        {
            name: "Predictive Equipment Maintenance (SaaS Sales Specialist)",
            keywords: { "factory": 4, "machine": 5, "app": 4, "sales": 5, "predictive": 5, "code": 3 },
            roadmap: "Learn industrial IoT sensor tracking, downtime cost analytics, and software-value sales frameworks.",
            bridge: "Sell data-driven predictive maintenance platforms to old-school industrial factory operational directors."
        },
        {
            name: "Corporate Legal Ops Manager",
            keywords: { "legal": 5, "budget": 4, "office": 3, "corporate": 4, "system": 3, "tools": 4 },
            roadmap: "Learn legal tech software procurement, external lawyer spend optimization, and contract lifecycle workflows.",
            bridge: "Run corporate legal groups like highly efficient business operational divisions, keeping costs down."
        },
        {
            name: "Alternative Data Procurement Manager",
            keywords: { "data": 5, "satellite": 5, "credit": 4, "buy": 3, "stock": 4, "predict": 4 },
            roadmap: "Learn alternative data source verification, data privacy laws, and predictive investor trading model tracking.",
            bridge: "Source unstructured external datasets (like satellite car counts) to help quantitative hedge funds forecast stock trends."
        },
        {
            name: "Real Estate Syndicate Director",
            keywords: { "group": 5, "apartment": 5, "buy": 4, "building": 4, "fund": 4, "investors": 3 },
            roadmap: "Master private real estate placement rules, investor distribution tracking, and residential apartment value-add upgrades.",
            bridge: "Pool capital from individual accredited investors to acquire high-yield multi-family apartment complexes."
        },
        {
            name: "Telecommunications Spectrum Auction Strategist",
            keywords: { "mobile": 4, "network": 4, "wave": 4, "auction": 5, "government": 4, "millions": 5 },
            roadmap: "Master game theory auction models, wireless network bandwidth demand curves, and regulatory application processes.",
            bridge: "Guide mobile telecom providers to win critical national network frequency bands without overpaying at auctions."
        },
        {
            name: "Strategic Procurement Risk Analyst",
            keywords: { "supply": 5, "risk": 5, "factory": 4, "vendor": 4, "tariff": 4, "war": 3 },
            roadmap: "Learn geopolitics supply chain risk mapping, vendor financial health diagnostics, and dual-sourcing strategies.",
            bridge: "Insulate a company's product assembly lines from sudden foreign country tariff walls or factory closures."
        },
        {
            name: "Behavioral Consumer Insights Lead",
            keywords: { "survey": 5, "data": 4, "why": 5, "human": 4, "market": 3, "trend": 3 },
            roadmap: "Learn advanced quantitative focus group tracking, consumer ethnography research, and psychological brand testing.",
            bridge: "Convert raw consumer emotional reactions into structural, concrete updates for retail product lines."
        },
        {
            name: "FinTech Credit Card Network Program Lead",
            keywords: { "card": 5, "pay": 4, "transaction": 5, "network": 5, "fee": 4, "system": 3 },
            roadmap: "Master credit card interchange fee economics, payment processors routing, and card network compliance guidelines.",
            bridge: "Build and run custom white-label credit card rewards reward structures for consumer app platforms."
        },
        {
            name: "Energy Derivative Clearing Manager",
            keywords: { "gas": 5, "oil": 5, "power": 4, "exchange": 5, "swap": 4, "finance": 4 },
            roadmap: "Master margin settlement calculations, energy counterparty clearing house rules, and default fund models.",
            bridge: "Settle daily high-volume futures trades safely for global oil and gas infrastructure companies."
        },
        {
            name: "Luxury Hospitality Concept Developer",
            keywords: { "hotel": 5, "design": 4, "trend": 4, "high-end": 5, "visual": 3, "vibe": 4 },
            roadmap: "Study high-end spatial consumer psychology, boutique brand creation methods, and experience lifestyle designs.",
            bridge: "Combine creative interior spatial trends with practical, repeatable hotel group operational metrics."
        },
        {
            name: "Global Transfer Agency Director (Mutual Funds)",
            keywords: { "fund": 5, "investor": 4, "stock": 4, "rules": 3, "system": 4, "share": 4 },
            roadmap: "Master mutual fund share record maintenance platforms, anti-money laundering validations, and dividend payment automation tools.",
            bridge: "Coordinate secure shareholder transactions and payouts across massive, distributed public investment funds."
        },
        {
            name: "Automated Warehouse Commercial Lead",
            keywords: { "robot": 5, "warehouse": 5, "tech": 4, "box": 3, "sell": 4, "automate": 4 },
            roadmap: "Master warehouse robotics performance models, space throughput designs, and high-capital hardware sales frameworks.",
            bridge: "Convince global ecommerce firms to replace manual warehouse staff loops with automated sorting robotics grids."
        },
        {
            name: "Enterprise Data Privacy Compliance Auditor",
            keywords: { "data": 5, "rules": 4, "law": 4, "secure": 5, "privacy": 5, "check": 3 },
            roadmap: "Master GDPR/CCPA legislation details, corporate data mapping workflows, and privacy impact verification methodologies.",
            bridge: "Align active cloud software marketing databases with shifting government personal data security rules."
        },
        {
            name: "Corporate Venture Capital (CVC) Deal Director",
            keywords: { "corporate": 5, "startup": 4, "invest": 5, "tech": 4, "strategy": 4, "buy": 3 },
            roadmap: "Learn corporate strategic investing alignment setups, startup cap sheets, and technology licensing options.",
            bridge: "Invest corporate parent funds into early-stage tech startups that unlock strategic corporate product advantages."
        },
        {
            name: "Healthcare Practice Acquisition Lead",
            keywords: { "doctor": 4, "buy": 5, "clinic": 5, "business": 4, "scale": 4, "group": 3 },
            roadmap: "Master medical practice cash-flow valuations, healthcare compliance checks, and local operational integration plans.",
            bridge: "Consolidate isolated private local dental or medical clinics into high-efficiency national care systems."
        },
        {
            name: "Strategic Inventory Liquidation Consultant",
            keywords: { "stock": 5, "sell": 5, "discount": 4, "close": 4, "warehouse": 3, "cash": 4 },
            roadmap: "Learn closeout retail sales pipelines, salvage asset pricing models, and global excess inventory buyer connections.",
            bridge: "Convert dead corporate excess retail stock into rapid, emergency operational cash flows."
        },
        {
            name: "Digital Identity Security Program Manager",
            keywords: { "secure": 5, "user": 4, "log-in": 5, "fraud": 4, "system": 3, "bank": 3 },
            roadmap: "Master identity federation protocols, user friction analysis setups, and cross-platform authentication infrastructure.",
            bridge: "Build seamless customer security checks that block online account hackers without annoying real users."
        },
        {
            name: "Cross-Border E-Commerce Merchant Coordinator",
            keywords: { "global": 5, "online": 4, "store": 4, "tax": 4, "currency": 4, "shipping": 3 },
            roadmap: "Master dynamic localized pricing frameworks, cross-border localized duties collections, and global carrier setups.",
            bridge: "Open local domestic retail ecommerce channels to process orders from international global web buyers seamlessly."
        },
        {
            name: "Private Equity Portfolio Performance Optimizer",
            keywords: { "firm": 5, "buy": 4, "fix": 4, "cut": 3, "value": 5, "efficiency": 4 },
            roadmap: "Learn zero-based budgeting, executive management tracking metrics, and post-merger synergy implementations.",
            bridge: "Systematically boost the operating profitability of newly acquired companies owned by a private equity firm."
        },
        {
            name: "Commercial Real Estate Debt Originator",
            keywords: { "loan": 5, "building": 4, "bank": 5, "interest": 4, "corporate": 3, "millions": 4 },
            roadmap: "Master commercial mortgage backed securities (CMBS) design, debt service coverage ratios (DSCR), and property risk metrics.",
            bridge: "Structure multi-million dollar construction and acquisition mortgage loans for institutional property developer groups."
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