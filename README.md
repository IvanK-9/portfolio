# Ivan Kozyrev — Developer Portfolio (SPA)

> Minimalist, high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed around a **Swiss Minimalism** and **Dark Engineering** aesthetic featuring a responsive **Bento Grid** layout.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-emerald?style=flat-square&logo=github)](https://ivank-9.github.io/portfolio/)
[![CI/CD Deployment](https://github.com/IvanK-9/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/IvanK-9/portfolio/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 🌐 Live Deployments & Links

- **Live Production URL:** [https://ivank-9.github.io/portfolio/](https://ivank-9.github.io/portfolio/)
- **Source Repository:** [https://github.com/IvanK-9/portfolio](https://github.com/IvanK-9/portfolio)
- **LinkedIn Profile:** [https://www.linkedin.com/in/ivankozyrev/](https://www.linkedin.com/in/ivankozyrev/)
- **Contact Email:** [ivan.kozyrev@edunord.se](mailto:ivan.kozyrev@edunord.se)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** [React 18](https://react.dev/)
- **Build Tooling:** [Vite 5](https://vitejs.dev/) (fast HMR, optimized chunking)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with custom design tokens
- **Icons:** [Lucide React](https://lucide.dev/) (consistent geometric stroke geometry)
- **Typography:**
  - *Inter* — High legibility for body copy and headings
  - *JetBrains Mono* — Technical metadata, specs, tags, and timestamps
- **CI/CD & Hosting:** Automated deployment to GitHub Pages via **GitHub Actions** (`ubuntu-latest`, Node.js 20)

---

## 📐 Design System & Key Highlights

1. **Swiss Minimalism x Dark Engineering:**
   - Palette: Deep zinc (`#0c0d0e`), card surfaces (`#121417`), subtle borders (`zinc-800`), and emerald accents (`emerald-400`).
   - Hairline grid overlay with dynamic zero-latency micro-interactions (150ms transitions, diagonal arrow translations on hover).

2. **Modular Bento Grid Layout:**
   - **Hero Block (8 cols):** Executive summary, LIA 2027 status badge, GitHub/LinkedIn links, and a one-click clipboard utility.
   - **Engineering Specs Block (4 cols):** Core architectural paradigms (Clean Architecture, DDD, C# / Java runtimes, ACID data integrity).
   - **Experience Breakdown:** Structured journey highlighting the transition from industrial automation (Beloyarsk NPP, Northvolt) to backend development (Utbildning Nord).
   - **Featured Projects:** Direct links and architectural highlights for *Enterprise CRUD System* (ASP.NET Core) and *PhotoManager* (Java OOP).
   - **Vibe & Human Context:** Stage photography, music (guitar), botany, and cinematography.
   - **Dispatch & Contact Widget:** Real-time Stockholm clock (`Intl.DateTimeFormat` in `Europe/Stockholm` timezone) showing current CET time and direct dispatch actions.

3. **SEO & Social Graph:**
   - Complete Open Graph (`og:*`) and Twitter card metadata for link previews in Telegram, LinkedIn, Discord, and Slack.
   - Mobile browser chrome matching via `<meta name="theme-color" content="#0c0d0e" />`.

---

## 📂 Project Directory Structure

```text
ivan-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD to GitHub Pages
├── public/                     # Static assets
├── src/
│   ├── App.jsx                 # Main application component & layout
│   ├── index.css               # Tailwind directives & global hairline styles
│   └── main.jsx                # React application entrypoint
├── index.html                  # HTML entrypoint & OpenGraph meta tags
├── package.json                # Dependencies and script definitions
├── postcss.config.js           # PostCSS plugins (Tailwind, Autoprefixer)
├── tailwind.config.js          # Design system extensions (fonts, colors)
└── vite.config.js              # Vite configuration with relative base routing
```

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (comes with Node.js)

### Installation & Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/IvanK-9/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static bundle will be emitted to `/dist`.

5. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## 🔄 Automated CI/CD Deployment

The repository is configured with a continuous deployment workflow in `.github/workflows/deploy.yml`:
- Triggered automatically on every `push` to the `main` branch.
- Steps: Checkout -> Setup Node.js -> `npm ci` -> `npm run build` -> Upload artifact -> Deploy to GitHub Pages.
- Builds zero-runtime static HTML/CSS/JS deployed with SSL enabled on GitHub CDN infrastructure.

---

## 👤 Author

**Ivan Kozyrev**
- **Location:** Stockholm / Övertorneå, Sweden
- **Target Role:** Backend & Enterprise Software Developer (LIA / Internship 2027)
- **GitHub:** [@IvanK-9](https://github.com/IvanK-9)
- **LinkedIn:** [ivankozyrev](https://www.linkedin.com/in/ivankozyrev/)
- **Email:** [ivan.kozyrev@edunord.se](mailto:ivan.kozyrev@edunord.se)
