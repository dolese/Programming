# CodePath — Programming Learning Platform

A modern, full-featured programming learning platform built with **Next.js 14** and deployable to **Vercel** in minutes.

## ✨ Features

- 6 complete programming courses (HTML/CSS, JavaScript, React, Node.js, Python, Next.js)
- Visual weekly roadmaps with expandable topics
- Curated resources (docs, videos, books, tools)
- Real-world project ideas with difficulty ratings
- Live code examples with copy-to-clipboard
- 4 career learning paths
- Developer tips & habits
- Fully responsive dark-theme UI
- Zero external UI dependencies

---

## 🚀 Deploy to Vercel (5 minutes)

### Option A — Deploy via GitHub (Recommended)

**Step 1: Push to GitHub**
```bash
# In your terminal
cd codepath
git init
git add .
git commit -m "Initial commit — CodePath"
git branch -M main

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/codepath.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Go to [vercel.com](https://vercel.com) → Sign up / Log in
2. Click **"Add New Project"**
3. Click **"Import"** next to your `codepath` GitHub repo
4. Leave all settings as default (Vercel auto-detects Next.js)
5. Click **"Deploy"**
6. ✅ Your site is live at `https://codepath-xyz.vercel.app`

---

### Option B — Deploy via Vercel CLI

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Login**
```bash
vercel login
```

**Step 3: Deploy**
```bash
cd codepath
vercel
```

Follow the prompts:
- Set up and deploy? → **Y**
- Which scope? → your account
- Link to existing project? → **N**
- Project name? → `codepath`
- Directory? → `./` (just press Enter)

Your site deploys instantly. Future deploys:
```bash
vercel --prod
```

---

## 💻 Run Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
codepath/
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout + metadata + fonts
│   │   ├── page.js          # Entry point (Server Component)
│   │   ├── globals.css      # Global styles + scrollbar
│   │   └── data.js          # All course/path/tips data
│   └── components/
│       ├── HomePage.js      # Main page layout (Client)
│       ├── CourseCard.js    # Course grid card
│       ├── CourseModal.js   # Full detail modal (4 tabs)
│       ├── RoadmapStep.js   # Expandable week step
│       ├── PathCard.js      # Learning path card
│       └── CodeBlock.js     # Syntax block + copy button
├── vercel.json              # Vercel config
├── next.config.js           # Next.js config
├── package.json             # Dependencies
└── .gitignore
```

---

## ✏️ Customization

### Add a new course
Open `src/app/data.js` and add an object to the `courses` array:

```js
{
  id: "typescript",
  title: "TypeScript",
  icon: "🔷",
  color: "#3178C6",
  accent: "#4A90D9",
  level: "Intermediate",
  duration: "4 weeks",
  projects: 5,
  students: "88k",
  description: "Add static types to JavaScript for safer, scalable code.",
  roadmap: [ ... ],
  resources: [ ... ],
  projects_list: [ ... ],
  snippet: `// your code here`,
}
```

### Add a new learning path
Open `src/app/data.js` and add to the `learningPaths` array:

```js
{
  name: "Mobile Developer",
  emoji: "📱",
  color: "#E91E63",
  steps: ["JavaScript", "React", "React Native"],
  desc: "Build cross-platform mobile apps",
  duration: "6-8 months",
}
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 14 | Framework (App Router) |
| React 18 | UI components |
| CSS-in-JS (inline styles) | Styling — zero build config |
| Vercel | Hosting & deployment |

---

## 📄 License

MIT — free to use, modify, and deploy.
