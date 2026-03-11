// ============================================================
//  src/pages/Home.jsx
//
//  The landing page — hero, about section, skills grid.
//
//  Content comes from:
//    src/data/bio.js     ← hero text, photo, contacts, paragraphs
//    src/data/skills.js  ← skill cards
// ============================================================

import bio       from "../data/bio";
import skills    from "../data/skills";
import SkillCard from "../components/SkillCard";

// ── Inline SVG icons matching the original site style ────────
const IconEmail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconSchool = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// Pick the right icon based on contact label
function ContactIcon({ label }) {
  if (label.toLowerCase().includes("linkedin")) return <IconLinkedIn />;
  if (label.toLowerCase().includes("usc"))      return <IconSchool />;
  return <IconEmail />;
}

export default function Home({ onNavigate }) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ── Hero — full width, no photo ──────────────────────── */}
      <div style={{
        display:        "flex",
        flexDirection:  "column",
        justifyContent: "center",
        minHeight:      "calc(100vh - var(--nav-height))",
        padding:        "80px var(--space-lg) 60px",
        maxWidth:       "var(--max-width)",
        margin:         "0 auto",
        gap:            32,
      }}>

        {/* Eyebrow */}
        <div className="fade-up delay-1" style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      12,
          color:         "var(--color-accent)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          display:       "flex",
          alignItems:    "center",
          gap:           12,
        }}>
          <span style={{ width: 32, height: 1, background: "var(--color-accent)", display: "block" }} />
          {bio.role}
        </div>

        {/* Name */}
        <h1 className="fade-up delay-2" style={{
          fontFamily:    "var(--font-heading)",
          fontSize:      "clamp(52px, 9vw, 110px)",
          fontWeight:    900,
          lineHeight:    0.92,
          letterSpacing: "-2px",
          color:         "#fff",
        }}>
          {bio.name.split(" ").map((word, i) => (
            <span key={i} style={{ display: "block", color: i === 1 ? "var(--color-accent)" : "#fff" }}>
              {word}
            </span>
          ))}
        </h1>

        {/* School */}
        <div className="fade-up delay-2" style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      14,
          color:         "var(--color-muted)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          borderLeft:    "2px solid var(--color-accent2)",
          paddingLeft:   16,
        }}>
          {bio.school}
        </div>

        {/* Contact links with icons */}
        <div className="fade-up delay-3" style={{ display: "flex", flexDirection: "column", gap: 0, maxWidth: 360 }}>
          {bio.contacts.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              style={{
                display:        "flex",
                alignItems:     "center",
                gap:            14,
                padding:        "14px 16px",
                borderBottom:   i < bio.contacts.length - 1 ? "1px solid var(--color-border)" : "none",
                textDecoration: "none",
                color:          "var(--color-text)",
                fontFamily:     "var(--font-body)",
                fontSize:       15,
                fontWeight:     400,
                transition:     "all 0.2s",
                borderRadius:   i === 0 ? "var(--radius) var(--radius) 0 0" : i === bio.contacts.length - 1 ? "0 0 var(--radius) var(--radius)" : 0,
                background:     "var(--color-surface)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color      = "var(--color-accent)";
                e.currentTarget.style.background = "var(--color-surface2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color      = "var(--color-text)";
                e.currentTarget.style.background = "var(--color-surface)";
              }}
            >
              {/* Icon box */}
              <span style={{
                display:        "flex",
                alignItems:     "center",
                justifyContent: "center",
                width:          34,
                height:         34,
                borderRadius:   6,
                background:     "rgba(0,255,170,0.12)",
                color:          "var(--color-accent)",
                flexShrink:     0,
              }}>
                <ContactIcon label={c.label} />
              </span>
              {c.label}
            </a>
          ))}
        </div>

        {/* View Projects button only */}
        <div className="fade-up delay-4">
          <button
            onClick={() => onNavigate("portfolio")}
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding:       "12px 28px",
              borderRadius:  "var(--radius)",
              background:    "var(--color-accent)",
              color:         "#07070d",
              border:        "none",
              cursor:        "pointer",
              fontWeight:    600,
              transition:    "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#00e699";
              e.target.style.transform  = "translateY(-1px)";
              e.target.style.boxShadow  = "0 8px 24px rgba(0,255,170,0.25)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "var(--color-accent)";
              e.target.style.transform  = "none";
              e.target.style.boxShadow  = "none";
            }}
          >
            View Projects
          </button>
        </div>
      </div>

      <hr className="divider" />

      {/* ── About — text left, school logos right ────────────── */}
      <div className="section-wrap">
        <div className="section-label fade-up">About</div>
        <h2 className="section-title fade-up delay-1">Hi, I'm Loden.</h2>

        <div className="about-grid" style={{ display: "grid", gap: 60, alignItems: "start" }}>

          {/* Left: paragraphs */}
          <div style={{
            display:       "flex",
            flexDirection: "column",
            gap:           20,
            fontSize:      16,
            lineHeight:    1.85,
            color:         "#a0a0c8",
          }}>
            {bio.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          {/* Right: school logos stacked */}
          <div className="fade-up delay-2" style={{
            display:        "flex",
            flexDirection:  "column",
            gap:            32,
            alignItems:     "center",
            justifyContent: "center",
            padding:        "40px 32px",
            background:     "var(--color-surface)",
            border:         "1px solid var(--color-border)",
            borderRadius:   "var(--radius-lg)",
          }}>
            {bio.schools.map((school) => (
              <img
                key={school.name}
                src={school.logo}
                alt={school.name}
                style={{
                  width:      "100%",
                  maxWidth:   180,
                  height:     "auto",
                  objectFit:  "contain",
                  filter:     "brightness(0) invert(1)",
                  opacity:    0.75,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.75)}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ── Skills ───────────────────────────────────────────── */}
      <div className="section-wrap">
        <div className="section-label fade-up">Skills</div>
        <h2 className="section-title fade-up delay-1">Technical Toolkit</h2>
        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
          gap:                 16,
        }}>
          {skills.map((skill, i) => (
            <div key={skill.name} className="fade-up" style={{ animationDelay: `${0.05 * i}s` }}>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-grid { grid-template-columns: 1fr 280px; }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .hero-wrap { padding: 40px 20px !important; }
        }
      `}</style>
    </div>
  );
}