# Loden Campbell's Portolio Website

A React + Vite portfolio.
https://lodencampbell.vercel.app/

---

## 📁 Project Structure

```
lodencampbell/
│
├── README.md                     ← Outline of my website
├── package.json                 
├── vite.config.js                
├── index.html                    
│
└── src/
    │
    ├── data/                     ← Site content
    │   ├── bio.js                ← Personal info
    │   ├── nav.js                ← Navigation menu links
    │   ├── skills.js             ← Skill cards data on the homepage
    │   ├── games.js              ← Game cards data on the Portfolio page
    │   └── software.js           ← Software project cards data on the Portfolio page
    │
    ├── components/               ← Reusable UI pieces
    │   ├── Nav.jsx               ← Top navigation bar
    │   ├── Footer.jsx            ← Footer
    │   ├── SkillCard.jsx         ← One skill card
    │   ├── GameCard.jsx          ← One game card
    │   └── SoftwareCard.jsx      ← One software card
    │
    ├── pages/                    ← One file per page
    │   ├── Home.jsx              ← Landing page
    │   ├── Portfolio.jsx         ← Games + software projects
    │   └── OtherProjects.jsx     ← Other creative projects I want to showcase
    │
    ├── styles/
    │   └── global.css            ← Colors, fonts, and spacing
    │
    ├── App.jsx                   ← Page router
    └── main.jsx                  ← React entry point
```


### Colors, fonts, spacing
From `src/styles/global.css`:

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
