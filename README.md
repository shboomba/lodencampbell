# Loden Campbell — Portfolio Site

A React + Vite frontend-only portfolio. No backend server needed.
Content is edited directly in the `src/data/` files.

---

## ⚡ Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 📁 Project Structure

```
lodencampbell/
│
├── README.md                     ← You are here
├── package.json                  ← Project dependencies & scripts
├── vite.config.js                ← Dev server config (don't need to touch this)
├── index.html                    ← HTML shell (don't need to touch this)
│
└── src/
    │
    ├── data/                     ← ✏️  EDIT THESE to update site content
    │   ├── bio.js                ← Your name, photo, about text, contacts, school logos
    │   ├── nav.js                ← Navigation menu links
    │   ├── skills.js             ← Skill cards on the homepage
    │   ├── games.js              ← Game cards on the Portfolio page
    │   └── software.js           ← Software project cards on the Portfolio page
    │
    ├── components/               ← Reusable UI pieces (edit to change card appearance)
    │   ├── Nav.jsx               ← Top navigation bar
    │   ├── Footer.jsx            ← Site footer
    │   ├── SkillCard.jsx         ← One skill card — edit to restyle ALL skill cards
    │   ├── GameCard.jsx          ← One game card — edit to restyle ALL game cards
    │   └── SoftwareCard.jsx      ← One software card — edit to restyle ALL software cards
    │
    ├── pages/                    ← One file per page
    │   ├── Home.jsx              ← Landing page (hero, about, skills)
    │   ├── Portfolio.jsx         ← Games + software projects
    │   └── OtherProjects.jsx     ← Placeholder for future projects
    │
    ├── styles/
    │   └── global.css            ← 🎨 ALL colors, fonts, spacing — change here first
    │
    ├── App.jsx                   ← Page router (add new pages here)
    └── main.jsx                  ← React entry point (don't need to touch this)
```

---

## ✏️ Editing Content (Most Common Tasks)

### Change your name, photo, school, or about text
**File:** `src/data/bio.js`

Everything about you lives here. Change the `name`, `role`, `school`, `photo` URL,
`contacts` array, and `paragraphs` array. Comments in the file explain each field.

---

### Add a new skill card
**File:** `src/data/skills.js`

Copy this and add it to the array:
```js
{ name: "Blender", description: "3D Modeling & Rendering" },
```

---

### Add a new game to the portfolio
**File:** `src/data/games.js`

Copy this template and fill it in:
```js
{
  title:       "My New Game",
  image:       "https://link-to-cover-image.png",
  url:         "https://loden-campbell.itch.io/my-new-game",
  platform:    "itch.io",
  tags:        ["Unity", "C#"],
  description: "A short description (leave as empty string \"\" to hide)",
},
```

---

### Add a new software project
**File:** `src/data/software.js`

```js
{
  title:       "My App",
  logo:        "https://link-to-logo.png",   // remove this line if no logo
  url:         "https://github.com/shboomba/my-app",
  description: "What the project does.",
  tags:        ["Python", "React"],
},
```

---

### Add or remove a nav link
**File:** `src/data/nav.js`

```js
{ label: "Blog", page: "blog" },
```

Then create `src/pages/Blog.jsx` and add it to `src/App.jsx` (see "Add a new page" below).

---

## 🎨 Changing the Design

### Colors, fonts, spacing
**File:** `src/styles/global.css` — top of the file, inside `:root { ... }`

| Variable           | What it controls              | Default        |
|--------------------|-------------------------------|----------------|
| `--color-bg`       | Page background               | `#07070d`      |
| `--color-accent`   | Neon green highlight color    | `#00ffaa`      |
| `--color-accent2`  | Orange secondary accent       | `#ff6b35`      |
| `--color-text`     | Body text                     | `#e4e4f0`      |
| `--color-muted`    | De-emphasized text            | `#6060a0`      |
| `--font-heading`   | Display font (titles)         | Orbitron       |
| `--font-body`      | Body text font                | Outfit         |
| `--font-mono`      | Labels, tags, nav links       | Fira Code      |

Change any of these and every component updates automatically.

### Changing a specific card type
- **Skill card appearance** → `src/components/SkillCard.jsx`
- **Game card appearance** → `src/components/GameCard.jsx`
- **Software card appearance** → `src/components/SoftwareCard.jsx`

### Changing a page's layout
- **Home page** (hero, bio, skills layout) → `src/pages/Home.jsx`
- **Portfolio page** → `src/pages/Portfolio.jsx`
- **Other Projects page** → `src/pages/OtherProjects.jsx`

---

## 📄 Adding a New Page

**Step 1:** Create the page file
```
src/pages/Blog.jsx
```
```jsx
export default function Blog() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">
        <div className="section-label">Blog</div>
        <h2 className="section-title">My Posts</h2>
        {/* your content here */}
      </div>
    </div>
  );
}
```

**Step 2:** Add it to the router in `src/App.jsx`
```jsx
import Blog from "./pages/Blog";

// inside renderPage():
case "blog": return <Blog />;
```

**Step 3:** Add the nav link in `src/data/nav.js`
```js
{ label: "Blog", page: "blog" },
```

The nav link appears automatically.

---

## 🌐 Deploying (Making It Live at lodencampbell.com)

This is a frontend-only project — you only need ONE deployment on Vercel (free).

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/shboomba/LJC-Portfolio-Website.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to https://vercel.com → sign in with GitHub
2. Click **"Add New Project"** → import your repo
3. Framework: **Vite** (Vercel will auto-detect this)
4. Leave all other settings as default
5. Click **"Deploy"**

You'll get a live URL like `https://ljc-portfolio.vercel.app` in about 60 seconds.

### Step 3 — Connect lodencampbell.com
1. In Vercel → your project → **Settings** → **Domains**
2. Add `lodencampbell.com` and `www.lodencampbell.com`
3. Vercel shows you DNS records — something like:
   ```
   Type: A      Name: @    Value: 76.76.21.21
   Type: CNAME  Name: www  Value: cname.vercel-dns.com
   ```
4. Go to wherever you bought `lodencampbell.com` (GoDaddy, Namecheap, etc.)
5. Find DNS settings → delete old A/CNAME records → add Vercel's records
6. Wait up to an hour (usually just a few minutes)

Done — `lodencampbell.com` now shows your site.

### Updating the site going forward
```bash
# Make edits (e.g. add a game to src/data/games.js)
git add .
git commit -m "added new game"
git push
```
Vercel auto-deploys in ~30 seconds. No manual steps.

---

## 🛠 Tech Stack

| Technology   | Purpose                                      |
|--------------|----------------------------------------------|
| React 18     | Component-based UI                           |
| Vite         | Dev server and build tool (fast)             |
| Plain CSS     | Global styles via CSS custom properties      |
| Vercel       | Free hosting with auto-deploy from GitHub    |
