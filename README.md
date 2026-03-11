# Loden Campbell — Portfolio Site

## ⚡ Quick Start (Running Locally)

```bash
# 1. Install all dependencies
npm run install:all

# 2. Start both servers at once
npm run dev
```

- **Frontend** (what you see): http://localhost:5173  
- **Backend API** (data source): http://localhost:3000

---

## 📁 Project Structure

```
lodencampbell/
│
├── README.md                    ← You are here
├── package.json                 ← Root: runs both servers with one command
│
├── server/                      ← Express backend (Node.js)
│   ├── server.js                ← API entry point & route definitions
│   └── data/                    ← ✏️  EDIT THESE FILES to update site content
│       ├── bio.json             ← Name, photo URL, about paragraphs, contact links
│       ├── nav.json             ← Navigation menu links
│       ├── skills.json          ← Skills section cards
│       ├── games.json           ← Portfolio: game project cards
│       └── software.json        ← Portfolio: software project cards
│
└── client/                      ← React frontend (Vite)
    ├── index.html               ← HTML shell (rarely needs editing)
    ├── vite.config.js           ← Dev server config (proxies /api to Express)
    ├── package.json
    └── src/
        ├── main.jsx             ← React entry point (rarely needs editing)
        ├── App.jsx              ← Page router — add new pages here
        │
        ├── styles/
        │   └── global.css       ← 🎨 ALL colors, fonts, spacing live here
        │
        ├── hooks/
        │   └── useApi.js        ← Reusable data-fetching hook (don't edit)
        │
        ├── components/          ← Reusable UI building blocks
        │   ├── Nav.jsx          ← Top navigation bar
        │   ├── Footer.jsx       ← Site footer
        │   ├── SkillCard.jsx    ← One card per skill
        │   ├── GameCard.jsx     ← One card per game project
        │   └── SoftwareCard.jsx ← One card per software project
        │
        └── pages/               ← One file per page/route
            ├── Home.jsx         ← Landing page (hero, bio, skills)
            ├── Portfolio.jsx    ← Games + software projects
            └── OtherProjects.jsx← Placeholder / future projects
```

---

## ✏️ How to Edit Content (No Code Required)

All site content lives in **`server/data/`** as simple JSON files.  
Just edit the file, save it, and the site updates automatically.

### Change your bio, photo, or contact info
**File:** `server/data/bio.json`
```json
{
  "name":   "Loden Campbell",
  "role":   "Software Engineer & Game Developer",
  "school": "MS Computer Science · USC",
  "photo":  "https://link-to-your-photo.jpg",
  "contacts": [
    { "label": "your@email.com", "href": "mailto:your@email.com" },
    { "label": "LinkedIn",       "href": "https://linkedin.com/in/you" }
  ]
}
```

### Add a new skill card
**File:** `server/data/skills.json` — add an object to the array:
```json
{ "name": "Blender", "description": "3D Modeling & Rendering" }
```

### Add a new game to the portfolio
**File:** `server/data/games.json` — add an object to the array:
```json
{
  "title":       "My New Game",
  "image":       "https://link-to-cover-image.png",
  "url":         "https://loden-campbell.itch.io/my-new-game",
  "platform":    "itch.io",
  "tags":        ["Unity", "C#"],
  "description": "A short description (optional)"
}
```

### Add a new software project
**File:** `server/data/software.json`:
```json
{
  "title":       "Cool App",
  "logo":        "https://link-to-logo.png",
  "url":         "https://github.com/you/cool-app",
  "description": "What the project does",
  "tags":        ["Python", "React"]
}
```

---

## 🎨 How to Change the Design

### Colors, fonts, spacing
Everything visual is controlled by CSS variables at the top of:  
**`client/src/styles/global.css`**

```css
:root {
  --color-bg:      #07070d;      /* page background */
  --color-accent:  #00ffaa;      /* neon green — main highlight color */
  --color-accent2: #ff6b35;      /* orange — secondary accent */
  --font-heading:  'Orbitron';   /* display font */
  --font-body:     'Outfit';     /* body text font */
}
```
Change these and every component updates at once.

### Changing a card's layout or style
- Edit `client/src/components/SkillCard.jsx` for skill cards
- Edit `client/src/components/GameCard.jsx` for game cards
- Edit `client/src/components/SoftwareCard.jsx` for software cards

---

## 📄 How to Add a New Page

1. Create `client/src/pages/MyPage.jsx`
2. Import it in `client/src/App.jsx` and add a case:
   ```jsx
   import MyPage from "./pages/MyPage";
   // inside renderPage():
   case "mypage": return <MyPage />;
   ```
3. Add a nav link in `server/data/nav.json`:
   ```json
   { "label": "My Page", "page": "mypage" }
   ```
The nav link appears automatically — no other changes needed.

---

## 🌐 Making the Site Public (Anyone Can Visit via Link)

**Right now this only runs on your computer.** To make it live on the internet
so anyone can visit it with just a URL, you need to **deploy** it.

The easiest free option is:

### Option A — Vercel (Recommended, Free)

Vercel hosts both the React frontend and the Express backend for free.

**Step 1: Push your code to GitHub**
```bash
git init
git add .
git commit -m "initial commit"
# Create a new repo at github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/lodencampbell.git
git push -u origin main
```

**Step 2: Deploy the backend (API) to Render**
1. Go to https://render.com → sign up free
2. Click "New Web Service" → connect your GitHub repo
3. Set Root Directory to `server`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Click Deploy — you'll get a URL like `https://lodencampbell-api.onrender.com`

**Step 3: Deploy the frontend to Vercel**
1. Go to https://vercel.com → sign up free with GitHub
2. Click "Add New Project" → import your GitHub repo
3. Set Root Directory to `client`
4. Add an Environment Variable:
   - Key: `VITE_API_URL`
   - Value: the Render URL from Step 2 (e.g. `https://lodencampbell-api.onrender.com`)
5. Click Deploy — you'll get a URL like `https://lodencampbell.vercel.app`

**Step 4: Point your domain**
1. In Vercel → Project Settings → Domains
2. Add `lodencampbell.com`
3. Update your domain registrar's DNS records as Vercel instructs
4. Done — `lodencampbell.com` now points to your self-built site ✅

### Option B — Netlify + Railway (Also Free)
Same idea: Netlify for the React frontend, Railway for the Express backend.

### Option C — Simplest: Frontend Only (No Backend Needed)
Since your site content doesn't need a database or authentication, you can
skip the backend entirely and deploy just the React app. Edit the JSON data
files inside the client instead of serving them from Express. This works
perfectly for a personal portfolio that you update occasionally.

---

## 🛠 Tech Stack

| Layer     | Technology          | Why                                      |
|-----------|---------------------|------------------------------------------|
| Frontend  | React + Vite        | Component-based, fast dev server, modern |
| Styling   | Plain CSS variables | No build step, easy to read and edit     |
| Backend   | Node.js + Express   | Lightweight, serves content as JSON API  |
| Data      | JSON files          | No database needed, easy to hand-edit    |
| Deploy    | Vercel + Render     | Free tiers, zero config                  |

