/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION — PIYUSH GUPTA
 * =========================================================================
 * Data populated directly from Piyush Gupta's verified curriculum vitae.
 */

const PORTFOLIO_DATA = {
    // ---------------------------------------------------------------------
    // 1. Personal & Hero Information
    // ---------------------------------------------------------------------
    personal: {
        name: "Piyush",
        surname: "Gupta",
        title: "Full Stack Developer",
        subtitle: "Computer Science & Full Stack Engineering",
        tagline: "Designing and building responsive, scalable web applications, robust REST APIs, and assistive HCI systems.",
        heroBio: "Computer Science undergraduate focused on full-stack engineering, with hands-on experience designing and building responsive, scalable web applications end-to-end. Comfortable across JavaScript/TypeScript, React, Node.js, Express, MongoDB/SQL, and REST API design with a strong grounding in data structures, algorithms, and system fundamentals.",
        status: {
            available: true,
            text: "Open for full-stack roles, projects & collaboration"
        },
        photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        location: "India",
        email: "piyushgbra@gmail.com",
        phone: "+91 9975195044",
        resumePdfUrl: "assets/Piyush_Gupta_Resume.pdf",
        
        // Dynamic typewriter roles in the hero section (paired with "I am a ...")
        roles: [
            "Full Stack Developer",
            "MERN Stack Specialist",
            "REST API & Systems Designer",
            "Smart Systems & HCI Innovator"
        ],

        // Social Media & Developer Profiles
        socialLinks: [
            {
                platform: "GitHub",
                icon: "fab fa-github",
                url: "https://github.com",
                label: "github.com/piyush-dev"
            },
            {
                platform: "LinkedIn",
                icon: "fab fa-linkedin-in",
                url: "https://linkedin.com",
                label: "linkedin.com/in/piyush-dev"
            },
            {
                platform: "Email",
                icon: "fas fa-envelope",
                url: "mailto:piyushgbra@gmail.com",
                label: "piyushgbra@gmail.com"
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 2. High-Level Quick Stats (Hero Ribbon)
    // ---------------------------------------------------------------------
    stats: [
        { label: "Degree Program", value: "B.Tech", icon: "fas fa-graduation-cap" },
        { label: "Key Projects", value: "3+", icon: "fas fa-rocket" },
        { label: "Tech Stack Tools", value: "15+", icon: "fas fa-layer-group" },
        { label: "Core Focus", value: "Full Stack", icon: "fas fa-code" }
    ],

    // ---------------------------------------------------------------------
    // 3. Technical Arsenal (Skills Bento Grid)
    // ---------------------------------------------------------------------
    skills: {
        categories: [
            { id: "all", label: "All Skills" },
            { id: "languages", label: "Languages" },
            { id: "frontend", label: "Frontend" },
            { id: "backend", label: "Backend & DB" },
            { id: "tools", label: "Tools & Core" }
        ],
        bento: [
            {
                id: "languages",
                title: "Programming Languages",
                icon: "fas fa-code",
                items: [
                    { name: "C", level: "Proficient", badge: "Core" },
                    { name: "C++", level: "Proficient", badge: "DSA" },
                    { name: "JavaScript", level: "Advanced", badge: "ES6+" },
                    { name: "TypeScript", level: "Proficient", badge: "Typed" },
                    { name: "Python", level: "Proficient", badge: "Scripting" },
                    { name: "SQL", level: "Advanced", badge: "RDBMS" }
                ]
            },
            {
                id: "frontend",
                title: "Frontend Engineering",
                icon: "fas fa-laptop-code",
                items: [
                    { name: "React.js", level: "Advanced", badge: "Framework" },
                    { name: "Next.js", level: "Proficient", badge: "SSR" },
                    { name: "HTML5", level: "Expert", badge: "Semantic" },
                    { name: "CSS3", level: "Expert", badge: "Styling" },
                    { name: "Tailwind CSS", level: "Advanced", badge: "Utility-First" },
                    { name: "Web Speech API", level: "Proficient", badge: "HCI" }
                ]
            },
            {
                id: "backend",
                title: "Backend & Databases",
                icon: "fas fa-server",
                items: [
                    { name: "Node.js", level: "Advanced", badge: "Runtime" },
                    { name: "Express.js", level: "Advanced", badge: "REST APIs" },
                    { name: "JWT Authentication", level: "Proficient", badge: "Security" },
                    { name: "MongoDB", level: "Advanced", badge: "NoSQL" },
                    { name: "MySQL", level: "Advanced", badge: "Relational" },
                    { name: "PostgreSQL", level: "Proficient", badge: "SQL" }
                ]
            },
            {
                id: "tools",
                title: "Tools, Platforms & CS Foundations",
                icon: "fas fa-screwdriver-wrench",
                items: [
                    { name: "Git & GitHub", level: "Advanced", badge: "VCS" },
                    { name: "Docker", level: "Familiar", badge: "Containers" },
                    { name: "Postman", level: "Advanced", badge: "API Testing" },
                    { name: "VS Code", level: "Expert", badge: "IDE" },
                    { name: "Data Structures & Algorithms", level: "Core", badge: "CS Theory" },
                    { name: "DBMS & OS & Networks", level: "Core", badge: "Foundations" }
                ]
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 4. Things I've Built (Projects from CV)
    // ---------------------------------------------------------------------
    projects: [
        {
            id: "decentralized-notary-app",
            title: "Decentralized Notary App",
            category: "fullstack",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            tagline: "Full-stack document verification platform enabling users to securely upload, hash, and validate document authenticity with SHA-256 integrity checks.",
            highlights: [
                "Built a full-stack document verification platform enabling users to upload, hash, and validate document authenticity.",
                "Implemented SHA-256 cryptographic hashing to guarantee document integrity and detect tampering without storing raw file contents.",
                "Designed and exposed REST APIs for upload, verification, and record management following clean resource-based conventions.",
                "Built a responsive, accessible UI ensuring verification works seamlessly across desktop and mobile devices."
            ],
            techStack: ["React", "Node.js", "Express", "MongoDB", "SHA-256", "REST API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Zero Raw Storage • Cryptographic SHA-256 Verification"
        },
        {
            id: "eye-blink-controlled-hci",
            title: "Eye-Blink Controlled HCI for Augmentative & Alternative Communication",
            category: "tools",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
            tagline: "Assistive communication hardware-software system enabling individuals with severe motor disabilities to communicate using real-time eye blinks.",
            highlights: [
                "Designed an assistive communication system enabling users with severe motor disabilities to communicate using only eye blinks.",
                "Built an Arduino-based sensing module using dual IR proximity sensors to reliably detect and debounce left, right, and both-eye blinks in real time.",
                "Developed a Python serial bridge (pySerial, keyboard/pynput) to translate blink signals from the microcontroller into keyboard events.",
                "Built a tab-based, blink-navigable web interface with scanning-style selection and integrated the Web Speech API for text-to-speech output."
            ],
            techStack: ["Arduino (C++)", "Python", "pySerial", "HTML5", "CSS3", "JavaScript", "Web Speech API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Dual IR Sensor Real-Time Debounce • Web Speech TTS"
        },
        {
            id: "digital-voting-system",
            title: "Digital Voting System for Student Council Selection",
            category: "tools",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000&auto=format&fit=crop",
            tagline: "Desktop voting application featuring a Tkinter GUI, relational MySQL storage, duplicate-vote prevention, and real-time tallying.",
            highlights: [
                "Built a desktop voting application with a Tkinter GUI covering candidate registration, voting, and result views.",
                "Modeled a relational MySQL schema to reliably store voter, candidate, and election result data.",
                "Implemented duplicate-vote prevention and real-time tallying to ensure accurate, immediate results as votes are cast."
            ],
            techStack: ["Python", "Tkinter", "MySQL", "GUI Development"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Duplicate-Vote Prevention • Real-Time MySQL Tallying"
        }
    ],

    // ---------------------------------------------------------------------
    // 5. Certifications & Milestones (From CV)
    // ---------------------------------------------------------------------
    certificates: [
        {
            id: "saylor-python",
            title: "Python Programming Certification",
            issuer: "Saylor Academy",
            date: "Issued",
            credentialId: "2619457255PG",
            badgeIcon: "fab fa-python",
            verifyUrl: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1770545473/2619457255PG.pdf",
            localPdfUrl: "assets/Saylor_Python_Certificate.pdf",
            tags: ["Python", "Programming Foundations", "Logic & Scripting"]
        },
        {
            id: "alison-soft-skills",
            title: "Professional Soft Skills Certification",
            issuer: "Alison",
            date: "Issued",
            credentialId: "ALISON-SKILLS-CERT",
            badgeIcon: "fas fa-award",
            verifyUrl: "https://drive.google.com/file/d/1c80q9AQdtP5OIZexA_hvy10V_pWdyGKB/view?usp=sharing",
            localPdfUrl: "assets/Alison_Soft_Skills_Certificate.pdf",
            tags: ["Communication", "Team Collaboration", "Problem-Solving"]
        },
        {
            id: "mern-track",
            title: "MERN Stack Development Specialization",
            issuer: "Full Stack Track",
            date: "In Progress",
            credentialId: "MERN-DEV-ACTIVE",
            badgeIcon: "fab fa-react",
            verifyUrl: "#",
            localPdfUrl: null,
            tags: ["MongoDB", "Express", "React", "Node.js"]
        },
        {
            id: "unity-3d-game-dev",
            title: "3D Game Development with Unity",
            issuer: "Unity & Game Engine Track",
            date: "In Progress",
            credentialId: "UNITY-3D-DEV",
            badgeIcon: "fab fa-unity",
            verifyUrl: "#",
            localPdfUrl: null,
            tags: ["Unity", "C#", "3D Physics", "Game Loop", "Lighting & Shaders"]
        }
    ],

    // Milestones / Achievements
    achievements: [
        {
            metric: "B.Tech Hons.",
            title: "GeeksforGeeks Collab",
            description: "Enrolled in specialized Full Stack Development Honors program in collaboration with GeeksforGeeks."
        },
        {
            metric: "Assistive Tech",
            title: "HCI Innovation",
            description: "Engineered dual-sensor eye-blink assistive hardware bridge with web speech voice synthesis."
        },
        {
            metric: "Security First",
            title: "Cryptographic Notary",
            description: "Implemented SHA-256 document hashing preventing tampering across full-stack REST workflows."
        }
    ],

    // ---------------------------------------------------------------------
    // 6. Curriculum Vitae (CV)
    // ---------------------------------------------------------------------
    cv: {
        title: "Curriculum Vitae",
        description: "View my full verified resume inline or download a direct PDF copy.",
        downloadUrl: "assets/Piyush_Gupta_Resume.pdf",
        previewSummary: {
            education: "B.Tech, CSE (Hons.) — Full Stack Development (2025 – 2029)",
            institution: "Lovely Professional University in collaboration with GeeksforGeeks",
            focus: "Full Stack Web Development, REST APIs, Assistive HCI & System Fundamentals",
            languages: "JavaScript, TypeScript, Python, C, C++, SQL",
            contact: "piyushgbra@gmail.com | +91 9975195044"
        }
    },

    // ---------------------------------------------------------------------
    // 7. Academic Background & Training (From CV)
    // ---------------------------------------------------------------------
    education: [
        {
            degree: "B.Tech, Computer Science & Engineering (Hons.) — Full Stack Development",
            institution: "Lovely Professional University (in collaboration with GeeksforGeeks)",
            period: "2025 – 2029",
            score: "Undergraduate Program",
            description: "Specialized honors program emphasizing end-to-end Full Stack Development, Data Structures & Algorithms, Database Management Systems, Operating Systems, and Computer Networks."
        },
        {
            degree: "High School & Senior Secondary Education",
            institution: "Dhruv Global School",
            period: "2023 – 2025",
            score: "Secondary & Senior Secondary",
            description: "Strong foundation in Science, Mathematics, Analytical Reasoning, and Computer Science fundamentals."
        }
    ],

    training: [
        {
            title: "MERN Stack Development Specialization",
            organization: "Comprehensive Web Engineering Track",
            period: "Currently In Progress",
            description: "Building production-grade full-stack applications with React, Next.js, Node.js, Express, MongoDB, authentication, and state management."
        },
        {
            title: "Data Structures, Algorithms & System Fundamentals",
            organization: "GeeksforGeeks Collaboration Track",
            period: "Active",
            description: "Mastering core CS topics including algorithmic problem solving, time-space complexity optimization, relational DBMS, and networking principles."
        }
    ],

    // ---------------------------------------------------------------------
    // 8. Services ("What Can I Help With")
    // ---------------------------------------------------------------------
    services: [
        {
            title: "Full-Stack Web Applications",
            icon: "fas fa-code",
            description: "End-to-end development of responsive, performant web platforms using React, Next.js, Node.js, Express, and Tailwind CSS."
        },
        {
            title: "REST API Design & Security",
            icon: "fas fa-shield-halved",
            description: "Building scalable, clean resource-based REST APIs with JWT authentication, middleware validation, and SHA-256 data integrity checks."
        },
        {
            title: "Database Modeling & Management",
            icon: "fas fa-database",
            description: "Designing efficient schema architectures and queries using MongoDB, MySQL, and PostgreSQL for optimal data integrity."
        },
        {
            title: "Assistive HCI & Python Automation",
            icon: "fas fa-microchip",
            description: "Developing hardware-software integrations, microcontroller sensor debouncing (Arduino C++), pySerial bridging, and custom automation scripts."
        }
    ],

    // ---------------------------------------------------------------------
    // 9. Contact Information
    // ---------------------------------------------------------------------
    contact: {
        heading: "Let's Build Something Great",
        description: "Have a project in mind, an internship/job opportunity, or want to collaborate? Feel free to reach out directly.",
        email: "piyushgbra@gmail.com",
        phone: "+91 9975195044",
        location: "India"
    }
};
