// ================================================================
//  client/src/pages/Home.jsx
//
//  Landing page — hero section, about bio, and skills grid.
//  All content is pulled from the API (server/data/).
// ================================================================

import SkillCard from "../components/SkillCard";
import { useApi } from "../hooks/useApi";

export default function Home({ bio, onNavigate }) {
  const { data: skills } = useApi("/api/skills");

  if (!bio) return null;

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div style={{
        display:       "grid",
        gridTemplateColumns: "1fr 1fr",
        minHeight:     "calc(100vh - var(--nav-height))",
        alignItems:    "center",
        padding:       "80px var(--space-lg) 60px",
        gap:           60,
        maxWidth:      "var(--max-width)",
        margin:        "0 auto",
      }}
        className="hero-grid"
      >
        {/* Left column */}
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

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
            <span style={{ display: "block", width: 32, height: 1, background: "var(--color-accent)" }} />
            {bio.role}
          </div>

          <h1 className="fade-up delay-2" style={{
            fontFamily:  "var(--font-heading)",
            fontSize:    "clamp(44px, 6vw, 82px)",
            fontWeight:  900,
            lineHeight:  0.95,
            letterSpacing: "-1px",
            color:       "#fff",
            textShadow:  "0 0 80px rgba(0,255,170,0.12)",
          }}>
            {bio.name.split(" ").map((word, i) => (
              <span key={i} style={{ display: "block" }}>
                {i === 1 ? <span style={{ color: "var(--color-accent)" }}>{word}</span> : word}
              </span>
            ))}
          </h1>

          <div className="fade-up delay-2" style={{
            fontFamily:  "var(--font-mono)",
            fontSize:    14,
            color:       "var(--color-muted)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderLeft:  "2px solid var(--color-accent2)",
            paddingLeft: 16,
          }}>
            {bio.school}
          </div>

          {/* Contacts */}
          <div className="fade-up delay-3" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {bio.contacts.map((c) => (
              <a key={c.href} href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                style={{
                  fontFamily:     "var(--font-mono)",
                  fontSize:       12,
                  color:          "var(--color-muted)",
                  textDecoration: "none",
                  display:        "flex",
                  alignItems:     "center",
                  gap:            8,
                  transition:     "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
              >
                <span style={{ color: "var(--color-accent)", fontSize: 10 }}>→</span>
                {c.label}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="fade-up delay-4" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
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
                e.target.style.background  = "#00e699";
                e.target.style.boxShadow   = "0 8px 24px rgba(0,255,170,0.25)";
                e.target.style.transform   = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background  = "var(--color-accent)";
                e.target.style.boxShadow   = "none";
                e.target.style.transform   = "none";
              }}
            >
              View Projects
            </button>

            <a href={bio.contacts[0]?.href}
              style={{
                fontFamily:     "var(--font-mono)",
                fontSize:       11,
                letterSpacing:  "2px",
                textTransform:  "uppercase",
                padding:        "12px 28px",
                borderRadius:   "var(--radius)",
                background:     "transparent",
                color:          "var(--color-text)",
                border:         "1px solid var(--color-border)",
                cursor:         "pointer",
                transition:     "all 0.2s",
                textDecoration: "none",
                display:        "inline-block",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color       = "var(--color-accent)";
                e.currentTarget.style.background  = "rgba(0,255,170,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color       = "var(--color-text)";
                e.currentTarget.style.background  = "transparent";
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right column — photo + school logos */}
        <div className="fade-up delay-3" style={{
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          gap:            24,
        }}>
          {/* Photo */}
          <div style={{ position: "relative", width: 280, height: 340 }}>
            <div style={{
              position:     "absolute",
              inset:        -8,
              borderRadius: "var(--radius-lg)",
              background:   "linear-gradient(135deg, var(--color-accent), transparent 60%)",
              zIndex:       0,
            }} />
            <div style={{
              position:     "absolute",
              bottom:       -8, right: -8,
              width:        "100%", height: "100%",
              border:       "1px solid rgba(255,107,53,0.4)",
              borderRadius: "var(--radius-lg)",
              zIndex:       0,
            }} />
            <img
              src={bio.photo}
              alt={bio.name}
              style={{
                position:     "relative",
                zIndex:       1,
                width:        "100%",
                height:       "100%",
                objectFit:    "cover",
                borderRadius: "var(--radius)",
                filter:       "grayscale(15%) contrast(1.05)",
              }}
            />
          </div>

          {/* School logos */}
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {bio.schools?.map((school) => (
              <img
                key={school.name}
                src={school.logo}
                alt={school.name}
                style={{
                  height:     36,
                  width:      "auto",
                  objectFit:  "contain",
                  opacity:    0.7,
                  filter:     "brightness(0) invert(1)",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = 1)}
                onMouseLeave={(e) => (e.target.style.opacity = 0.7)}
              />
            ))}
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ── About / Bio ──────────────────────────────────────── */}
      <div className="section-wrap">
        <div className="section-label fade-up">About</div>
        <h2 className="section-title fade-up delay-1">Hi, I'm Loden.</h2>
        <div style={{
          fontSize:   16,
          lineHeight: 1.85,
          color:      "#a0a0c8",
          maxWidth:   720,
          display:    "flex",
          flexDirection: "column",
          gap:        20,
        }}>
          {bio.paragraphs?.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
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
          {skills?.map((skill, i) => (
            <div key={skill.name} className="fade-up" style={{ animationDelay: `${0.05 * i}s` }}>
              <SkillCard {...skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
            padding: 60px 32px !important;
          }
          .hero-grid > div:last-child { order: -1; }
        }
        @media (max-width: 540px) {
          .hero-grid { padding: 40px 20px !important; }
        }
      `}</style>
    </div>
  );
}
