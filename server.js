// ============================================================
//  server.js  –  Main entry point
//  Serves the static frontend and exposes /api/* endpoints
//  so the frontend can pull content from the JSON data files.
// ============================================================

const express = require("express");
const path    = require("path");
const cors    = require("cors");

// ── Data files ──────────────────────────────────────────────
const bio      = require("./data/bio.json");
const skills   = require("./data/skills.json");
const games    = require("./data/games.json");
const software = require("./data/software.json");
const nav      = require("./data/nav.json");

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ── Serve static frontend ────────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── API Routes ───────────────────────────────────────────────
// GET /api/bio       → hero text, about paragraphs, contact links
// GET /api/skills    → skills list
// GET /api/games     → portfolio game cards
// GET /api/software  → portfolio software project cards
// GET /api/nav       → nav links

app.get("/api/bio",      (_req, res) => res.json(bio));
app.get("/api/skills",   (_req, res) => res.json(skills));
app.get("/api/games",    (_req, res) => res.json(games));
app.get("/api/software", (_req, res) => res.json(software));
app.get("/api/nav",      (_req, res) => res.json(nav));

// ── SPA fallback: always serve index.html ───────────────────
app.get("*", (_req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html"))
);

app.listen(PORT, () =>
  console.log(`✅  Server running → http://localhost:${PORT}`)
);
