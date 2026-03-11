// ================================================================
//  server/server.js
//
//  Express backend — serves all site content via JSON API.
//  To add a new data type:
//    1. Create a new file in server/data/  e.g. certifications.json
//    2. require() it below
//    3. Add a new app.get("/api/certifications", ...) route
// ================================================================

const express = require("express");
const cors    = require("cors");
const path    = require("path");

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Load data files ──────────────────────────────────────────
// ✏️  Each of these maps to a file in server/data/
const bio      = require("./data/bio.json");
const nav      = require("./data/nav.json");
const skills   = require("./data/skills.json");
const games    = require("./data/games.json");
const software = require("./data/software.json");

// ── API Routes ───────────────────────────────────────────────
app.get("/api/bio",      (_req, res) => res.json(bio));
app.get("/api/nav",      (_req, res) => res.json(nav));
app.get("/api/skills",   (_req, res) => res.json(skills));
app.get("/api/games",    (_req, res) => res.json(games));
app.get("/api/software", (_req, res) => res.json(software));

// ── Health check ─────────────────────────────────────────────
app.get("/api/health", (_req, res) => res.json({ status: "ok" }));

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  API running → http://localhost:${PORT}`);
  console.log(`    Endpoints: /api/bio, /api/nav, /api/skills, /api/games, /api/software`);
});
