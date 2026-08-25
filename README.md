# ✨ Modern Interactive Web Portfolio

A visually stunning, high-performance, and responsive developer portfolio template built with modern web standards (Vanilla HTML5, CSS3, and JavaScript). Designed with a **"Luminous Obsidian" / Cyber-Clean Glassmorphism** aesthetic, micro-interactions, an interactive particle canvas, 3D card tilt physics, a live terminal, and an interactive command palette.

---

## 🚀 Live Preview & Demo

- **Author**: Piyush Gupta
- **Design Theme**: Luminous Obsidian (Dark Mode First)
- **Deployment**: Zero-build required — runs out-of-the-box in any browser and on **GitHub Pages**, **Vercel**, or **Netlify**.

---

## 🌟 Key Features

- **🌌 Interactive Particle Constellation Background**: Lightweight, high-performance HTML5 Canvas simulation with dynamic line connections, particle pulsing, and reactive mouse repulsion.
- **⚡ Scanner Ring Profile Avatar**: Animated scanner border with breathing ambient glow (`animate-photo-glow`).
- **⌨️ Live Role Typewriter**: Smooth character typing and deletion cycles across multiple engineering specializations.
- **💻 Interactive Floating Terminal**: Live terminal visual in the hero displaying dynamic developer metadata (`whoami`, `cat skills.json`, active cursor).
- **🍱 Bento Grid Technical Arsenal**: Categorized skills breakdown across *Languages*, *Frontend*, *Backend & Databases*, and *Tools & Foundations*.
- **🚀 Featured Projects & Modal Previews**: Project cards with status tags (`Ongoing` / `Completed`), tech stack pills, GitHub source links, live demo links, and an interactive **"Details" modal popup**.
- **📜 Verified Credentials & In-Browser PDF Viewer**: Certificates showcase with credential IDs, external verification links, and an embedded in-browser modal viewer.
- **📄 Resume / Curriculum Vitae Hub**: Clean CV section featuring inline summary previews and 1-click direct PDF downloads.
- **🎓 Academic Background & Training**: Structured milestone timeline for formal degrees and specialized technical workshops.
- **📋 1-Click Copy & Toast System**: Instant copy-to-clipboard for email address and phone number with smooth animated toast alerts.
- **⌨️ Command Palette (`Ctrl + K` / `Cmd + K`)**: Keyboard-driven launcher for instant section navigation and quick actions.
- **📱 Fully Responsive**: Flawless experience across ultra-wide monitors, laptops, tablets, and mobile devices.

---

## 📂 Project Structure

```
web_resume/
│
├── index.html              # Main semantic HTML structure & meta tags
│
├── css/
│   ├── style.css           # Core styling, typography, glassmorphism tokens, and responsive layout
│   └── animations.css      # Smooth transitions, keyframes, glow effects, and scroll-reveal
│
├── js/
│   ├── portfolio-data.js   # ⭐ Central config file for easy personal info & content updates
│   ├── app.js              # DOM rendering, modals, command palette, 3D tilt, and event logic
│   └── background.js       # Interactive canvas particle constellation simulation
│
├── assets/                 # PDF resumes, certificate copies, and image assets
│   ├── Piyush_Gupta_Resume.pdf
│   ├── Saylor_Python_Certificate.pdf
│   └── Alison_Soft_Skills_Certificate.pdf
│
└── README.md               # Project documentation & setup guide
```

---

## ✏️ How to Customize with Your Own Details

All portfolio content is separated into a single, well-documented configuration file:

📁 **[`js/portfolio-data.js`](js/portfolio-data.js)**

To update your portfolio:
1. Open `js/portfolio-data.js` in your code editor.
2. Edit your information in the JSON object:
   - **`personal`**: Name, roles (for typewriter), bio, email, phone, location, photo URL, social links.
   - **`stats`**: Quick stats displayed in the hero ribbon.
   - **`skills`**: Programming languages, frameworks, backend, databases, and tools.
   - **`projects`**: Project titles, taglines, highlight bullets, tags, GitHub URLs, and live demo links.
   - **`certificates`**: Certificate titles, issuers, dates, credential IDs, and verification URLs.
   - **`cv`**: Resume highlights and PDF download path.
   - **`education` & `training`**: Degree milestones and workshops.
   - **`services`**: Service cards and offerings.
   - **`contact`**: Direct communication channels.
3. Save the file — the website will dynamically update without touching any HTML!

---

## 🚀 Deployment Guide

Because this template uses pure vanilla web standards, it requires **zero build steps** (no `npm install` or `npm run build` needed).

### Option 1: GitHub Pages (Recommended)
1. Push this repository to GitHub.
2. In your repository, go to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` (or `master`) and folder `/ (root)`.
4. Click **Save**. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository.
3. Leave build settings as default and click **Deploy**.

### Option 3: Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the project folder directly into the Netlify dashboard.

---

## 🛠️ Built With

- **HTML5** & **CSS3** (Custom Properties, Glassmorphism, Flexbox, CSS Grid)
- **JavaScript (ES6+)**
- **HTML5 Canvas API** (Constellation Particle System)
- **Google Fonts** ([Syne](https://fonts.google.com/specimen/Syne), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono))
- **Font Awesome 6** (Icons)

---

## 📄 License

This project is licensed under the **MIT License** — free to use and customize for your personal portfolio.

---

*Designed & Engineered with precision by **Piyush Gupta**.*

