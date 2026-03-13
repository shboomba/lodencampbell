# Loden Campbell's Portolio Website

A React + Vite portfolio.

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

---

## 🛠 Tech Stack

| Technology   | Purpose                                      |
|--------------|----------------------------------------------|
| React 18     | Component-based UI                           |
| Vite         | Dev server and build tool                    |
| CSS          | Global styles via CSS custom properties      |
| Vercel       | Web hosting                                  |
