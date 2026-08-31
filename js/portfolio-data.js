/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION — PIYUSH GUPTA
 * =========================================================================
 * Honest, clear, and technical developer portfolio data.
 */

const PORTFOLIO_DATA = {
    // ---------------------------------------------------------------------
    // 1. Personal & Hero Information
    // ---------------------------------------------------------------------
    personal: {
        name: "Piyush",
        surname: "Gupta",
        title: "Full Stack Developer",
        subtitle: "Computer Science Undergraduate",
        tagline: "Computer Science student building full-stack web applications, REST APIs, and practical assistive tech.",
        heroBio: "Computer Science undergraduate at Lovely Professional University (Full Stack Honors in collaboration with GeeksforGeeks). I build full-stack web applications, backend services, and assistive hardware-software tools using React, Node.js, Python, and SQL/NoSQL databases.",
        status: {
            available: true,
            text: "Open to software engineering internships & projects"
        },
        photoUrl: "assets/profile.jpg",
        location: "India",
        email: "piyushgbra@gmail.com",
        phone: "+91 9975195044",
        resumePdfUrl: "assets/Piyush_Gupta_Resume.pdf",
        
        // Dynamic typewriter roles in the hero section
        roles: [
            "Full Stack Developer",
            "MERN Stack Developer",
            "Software Engineer",
            "Assistive Tech Builder"
        ],

        // Social Media & Developer Profiles
        socialLinks: [
            {
                platform: "GitHub",
                icon: "fab fa-github",
                url: "https://github.com",
                label: "GitHub"
            },
            {
                platform: "LinkedIn",
                icon: "fab fa-linkedin-in",
                url: "https://linkedin.com",
                label: "LinkedIn"
            },
            {
                platform: "Email",
                icon: "fas fa-envelope",
                url: "mailto:piyushgbra@gmail.com",
                label: "Email"
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 2. Quick Stats
    // ---------------------------------------------------------------------
    stats: [
        { label: "Education", value: "B.Tech CSE", icon: "fas fa-graduation-cap" },
        { label: "Key Projects", value: "3 Built", icon: "fas fa-code-branch" },
        { label: "Primary Languages", value: "C++, JS, Python", icon: "fas fa-terminal" },
        { label: "Core Focus", value: "Full Stack", icon: "fas fa-layer-group" }
    ],

    // ---------------------------------------------------------------------
    // 3. Technical Skills
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
                    { name: "C++", level: "DSA & Problem Solving", badge: "DSA" },
                    { name: "JavaScript", level: "ES6+, Async, DOM", badge: "Web" },
                    { name: "TypeScript", level: "Static Typing", badge: "Typed" },
                    { name: "Python", level: "Scripting & Automation", badge: "Scripts" },
                    { name: "SQL", level: "Queries & Relational Design", badge: "DB" },
                    { name: "C", level: "Systems Fundamentals", badge: "Core" }
                ]
            },
            {
                id: "frontend",
                title: "Frontend Development",
                icon: "fas fa-laptop-code",
                items: [
                    { name: "React.js", level: "Components & State", badge: "UI" },
                    { name: "Next.js", level: "App Router & SSR", badge: "Framework" },
                    { name: "HTML5", level: "Semantic Markup", badge: "Structure" },
                    { name: "CSS3", level: "Responsive Layouts & Flex/Grid", badge: "Styles" },
                    { name: "Tailwind CSS", level: "Utility-First CSS", badge: "Utility" },
                    { name: "Web Speech API", level: "Speech Synthesis & Input", badge: "HCI" }
                ]
            },
            {
                id: "backend",
                title: "Backend & Databases",
                icon: "fas fa-server",
                items: [
                    { name: "Node.js", level: "Runtime & Event Loop", badge: "Runtime" },
                    { name: "Express.js", level: "REST API Routing & Middleware", badge: "API" },
                    { name: "MongoDB", level: "NoSQL Schema & Aggregation", badge: "NoSQL" },
                    { name: "MySQL", level: "Relational Tables & Joins", badge: "RDBMS" },
                    { name: "PostgreSQL", level: "Relational Queries", badge: "SQL" },
                    { name: "JWT", level: "Token Authentication", badge: "Auth" }
                ]
            },
            {
                id: "tools",
                title: "Tools & CS Foundations",
                icon: "fas fa-screwdriver-wrench",
                items: [
                    { name: "Git & GitHub", level: "Version Control & Collaboration", badge: "VCS" },
                    { name: "Docker", level: "Containerization Basics", badge: "DevOps" },
                    { name: "Postman", level: "API Testing & Debugging", badge: "Testing" },
                    { name: "Data Structures", level: "Arrays, Trees, Graphs, HashMaps", badge: "CS" },
                    { name: "DBMS & SQL", level: "Normalization & Indexing", badge: "CS" },
                    { name: "Operating Systems & Networks", level: "Processes, Threads, TCP/IP", badge: "CS" }
                ]
            }
        ]
    },

    // ---------------------------------------------------------------------
    // 4. Projects
    // ---------------------------------------------------------------------
    projects: [
        {
            id: "decentralized-notary-app",
            title: "Decentralized Notary App",
            category: "fullstack",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            tagline: "A document verification web app that generates SHA-256 cryptographic hashes on upload to verify file integrity and detect tampering without storing raw file contents.",
            highlights: [
                "Built full-stack document verification allowing users to upload, hash, and check document authenticity.",
                "Implemented SHA-256 hashing to verify file integrity without storing sensitive documents on the server.",
                "Created RESTful endpoints for document upload, record lookups, and status checks.",
                "Designed a clean, responsive interface that works on both desktop and mobile browsers."
            ],
            techStack: ["React", "Node.js", "Express", "MongoDB", "SHA-256"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Zero Raw File Storage • Client-Side SHA-256 Hashing"
        },
        {
            id: "eye-blink-controlled-hci",
            title: "Eye-Blink Controlled Assistive HCI",
            category: "tools",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
            tagline: "An assistive communication system using dual IR proximity sensors with an Arduino to detect eye blinks, bridge signals to Python via serial, and navigate a web UI with speech synthesis.",
            highlights: [
                "Engineered a hardware prototype with dual IR sensors to detect and debounce left, right, and dual-eye blinks in real time.",
                "Wrote a Python serial bridge (pySerial) to translate incoming hardware signals into keyboard events.",
                "Built a web interface with scanning-style tab navigation and speech synthesis via the Web Speech API."
            ],
            techStack: ["Arduino C++", "Python", "pySerial", "JavaScript", "Web Speech API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Real-Time Sensor Debouncing • Text-to-Speech Output"
        },
        {
            id: "digital-voting-system",
            title: "Digital Voting System",
            category: "tools",
            status: "Completed",
            featured: true,
            image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1000&auto=format&fit=crop",
            tagline: "A desktop voting application built with Python Tkinter and MySQL, featuring duplicate-vote prevention and real-time ballot tallying.",
            highlights: [
                "Built desktop GUI views for candidate registration, voter verification, and live election results.",
                "Designed normalized MySQL tables to record ballots and maintain voter eligibility checks.",
                "Implemented validation logic to prevent duplicate voting and calculate results instantly."
            ],
            techStack: ["Python", "Tkinter", "MySQL"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            metrics: "Duplicate-Vote Validation • Real-Time MySQL Tallies"
        }
    ],

    // ---------------------------------------------------------------------
    // 5. Certifications & Highlights
    // ---------------------------------------------------------------------
    certificates: [
        {
            id: "saylor-python",
            title: "Python Programming Certification",
            issuer: "Saylor Academy",
            date: "Certified",
            credentialId: "2619457255PG",
            badgeIcon: "fab fa-python",
            verifyUrl: "https://learn.saylor.org/pluginfile.php/1/tool_certificate/issues/1770545473/2619457255PG.pdf",
            localPdfUrl: "assets/Saylor_Python_Certificate.pdf",
            tags: ["Python", "Control Flow", "Data Structures", "Functions"]
        },
        {
            id: "alison-soft-skills",
            title: "Professional Soft Skills Certification",
            issuer: "Alison",
            date: "Certified",
            credentialId: "ALISON-SKILLS-CERT",
            badgeIcon: "fas fa-award",
            verifyUrl: "https://drive.google.com/file/d/1c80q9AQdtP5OIZexA_hvy10V_pWdyGKB/view?usp=sharing",
            localPdfUrl: "assets/Alison_Soft_Skills_Certificate.pdf",
            tags: ["Communication", "Team Collaboration", "Problem Solving"]
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
            tags: ["React", "Node.js", "Express", "MongoDB"]
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
            tags: ["Unity", "C#", "3D Physics", "Game Loop"]
        }
    ],

    // Highlights
    achievements: [
        {
            metric: "B.Tech (Hons.)",
            title: "GeeksforGeeks Track",
            description: "Enrolled in the specialized Full Stack Computer Science curriculum at Lovely Professional University in collaboration with GeeksforGeeks."
        },
        {
            metric: "Assistive Tech",
            title: "HCI Hardware Bridge",
            description: "Built a functional assistive communication prototype combining IR sensor hardware with Python serial processing and web speech synthesis."
        },
        {
            metric: "Full-Stack Web",
            title: "Practical Web Apps",
            description: "Built document verification with cryptographic hashing and desktop voting with relational MySQL validation."
        }
    ],

    // ---------------------------------------------------------------------
    // 6. Curriculum Vitae
    // ---------------------------------------------------------------------
    cv: {
        title: "Curriculum Vitae",
        description: "Review a summary of my background below or download the full resume PDF.",
        downloadUrl: "assets/Piyush_Gupta_Resume.pdf",
        previewSummary: {
            education: "B.Tech, CSE (Hons.) — Full Stack Development (2025 – 2029)",
            institution: "Lovely Professional University in collaboration with GeeksforGeeks",
            focus: "Full Stack Web Development, REST APIs, Assistive HCI & CS Fundamentals",
            languages: "C++, JavaScript, TypeScript, Python, SQL",
            contact: "piyushgbra@gmail.com | +91 9975195044"
        }
    },

    // ---------------------------------------------------------------------
    // 7. Academic Background & Training
    // ---------------------------------------------------------------------
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering (Hons.) — Full Stack Development",
            institution: "Lovely Professional University (in collaboration with GeeksforGeeks)",
            period: "2025 – 2029",
            score: "Undergraduate Honors",
            percentageBadge: null,
            description: "Specialized honors program focusing on Full Stack Web Development, Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks."
        },
        {
            degree: "Senior Secondary Education (Class XII)",
            institution: "Dhruv Global School",
            period: "2023 – 2025",
            score: "Score: 77%",
            percentageBadge: "77%",
            description: "Senior secondary curriculum with a focus on Physics, Chemistry, Mathematics, and Computer Science."
        },
        {
            degree: "Secondary School Examination (Class X)",
            institution: "Global Indian International School",
            period: "2022 – 2023",
            score: "Score: 87%",
            percentageBadge: "87%",
            description: "Secondary schooling with strong foundations in Mathematics, Science, and Analytical Problem Solving."
        }
    ],

    training: [
        {
            title: "MERN Stack Web Development",
            organization: "Comprehensive Engineering Track",
            period: "Active",
            description: "Building full-stack projects with React, Next.js, Node.js, Express, MongoDB, and authentication workflows."
        },
        {
            title: "Data Structures & Computer Science Core",
            organization: "GeeksforGeeks Collaboration Track",
            period: "Active",
            description: "Practicing algorithmic problem solving, time/space complexity optimization, relational database queries, and operating systems concepts."
        }
    ],

    // ---------------------------------------------------------------------
    // 8. What I Work On
    // ---------------------------------------------------------------------
    services: [
        {
            title: "Full-Stack Web Development",
            icon: "fas fa-code",
            description: "Building responsive web interfaces with React/Next.js and connecting them to clean Node.js and Express backends."
        },
        {
            title: "REST APIs & Database Design",
            icon: "fas fa-database",
            description: "Creating structured REST API endpoints, JWT token authentication, and data modeling in MongoDB, MySQL, and PostgreSQL."
        },
        {
            title: "Assistive Tech & Python Scripts",
            icon: "fas fa-microchip",
            description: "Developing hardware-software prototypes (Arduino C++), serial communication bridges (pySerial), and Python automation tools."
        },
        {
            title: "CS Fundamentals & Problem Solving",
            icon: "fas fa-brain",
            description: "Applying data structures, algorithms, and object-oriented principles to build clean, maintainable software."
        }
    ],

    // ---------------------------------------------------------------------
    // 9. Contact Information
    // ---------------------------------------------------------------------
    contact: {
        heading: "Get in Touch",
        description: "Interested in collaborating, discussing an internship or project, or have a question? Feel free to reach out.",
        email: "piyushgbra@gmail.com",
        phone: "+91 9975195044",
        location: "India"
    }
};
