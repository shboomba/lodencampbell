import { useRef } from "react";
import bio from "../data/bio";
import CharacterScene from "../components/CharacterScene";

const skillGroups = [
  {
    label: "Languages",
    pills: ["Python", "Java", "C#", "C++", "JavaScript"],
  },
  {
    label: "Tools",
    pills: ["React", "Flask", "Unity", "Maya Autodesk", "Git"],
  },
  {
    label: "Strengths",
    pills: ["Project Leadership", "Game Design", "Team Collaboration", "AI / ML"],
  },
];

const IconEmail    = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function ContactPill({ label, href }) {
  const isLinkedIn = label.toLowerCase().includes("linkedin");
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        gap:            8,
        padding:        "8px 16px",
        border:         "1px solid var(--color-border)",
        borderRadius:   "var(--radius)",
        background:     "var(--color-surface)",
        color:          "var(--color-muted)",
        fontFamily:     "var(--font-mono)",
        fontSize:       12,
        textDecoration: "none",
        transition:     "color 0.15s, border-color 0.15s",
        whiteSpace:     "nowrap",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color       = "var(--color-accent)";
        e.currentTarget.style.borderColor = "var(--color-accent)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color       = "var(--color-muted)";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      {isLinkedIn ? <IconLinkedIn /> : <IconEmail />}
      {label}
    </a>
  );
}

export default function Home({ onNavigate }) {
  const viewWorkRef = useRef(null);
  const resumeRef   = useRef(null);

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ── Hero wrapper (position relative so canvas can fill it) */}
      <div style={{ position: "relative" }}>

      <div style={{
        maxWidth:  "var(--max-width)",
        margin:    "0 auto",
        padding:   "80px var(--space-lg) 72px",
        display:   "flex",
        flexDirection: "column",
        gap:       28,
      }}>

        {/* Eyebrow */}
        <div className="fade-up delay-1" style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      11,
          color:         "var(--color-accent)",
          letterSpacing: "3px",
          textTransform: "uppercase",
          display:       "flex",
          alignItems:    "center",
          gap:           12,
        }}>
          <span style={{ width: 24, height: 1, background: "var(--color-accent)", display: "block" }} />
          {bio.role}
        </div>

        {/* Name */}
        <h1 className="fade-up delay-2" style={{
          fontFamily:    "var(--font-heading)",
          fontSize:      "clamp(42px, 7vw, 80px)",
          fontWeight:    900,
          lineHeight:    0.92,
          letterSpacing: "-2px",
          color:         "var(--color-text)",
        }}>
          {bio.name.split(" ").map((word, i) => (
            <span key={i} style={{ display: "block", color: i === 1 ? "var(--color-accent)" : "var(--color-text)" }}>
              {word}
            </span>
          ))}
        </h1>

        {/* Education */}
        <div className="fade-up delay-2" style={{
          display:    "flex",
          alignItems: "center",
          gap:        10,
          flexWrap:   "wrap",
          fontFamily: "var(--font-mono)",
          fontSize:   12,
          letterSpacing: "0.5px",
        }}>
          <span style={{ color: "var(--color-text)", fontWeight: 500 }}>
            MS Computer Science · USC
          </span>
          <span style={{ color: "var(--color-border)", fontSize: 16, lineHeight: 1 }}>|</span>
          <span style={{ color: "var(--color-muted)" }}>
            BS Computer Science · UW-Madison
          </span>
        </div>

        {/* Contact pills */}
        <div className="fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {bio.contacts.map(c => (
            <ContactPill key={c.href} label={c.label} href={c.href} />
          ))}
        </div>

        {/* CTAs */}
        <div className="fade-up delay-4" style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <button
            ref={viewWorkRef}
            onClick={() => onNavigate("portfolio")}
            style={{
              fontFamily:    "var(--font-mono)",
              fontSize:      11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding:       "11px 26px",
              borderRadius:  "var(--radius)",
              background:    "var(--color-accent)",
              color:         "#0a1a10",
              border:        "none",
              cursor:        "pointer",
              fontWeight:    700,
              transition:    "opacity 0.15s",
            }}
            onMouseEnter={e => e.target.style.opacity = "0.85"}
            onMouseLeave={e => e.target.style.opacity = "1"}
          >
            View My Work
          </button>

          {/* Resume — put your PDF in the public/ folder as "resume.pdf", or replace href with a hosted link */}
          <a
            ref={resumeRef}
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily:     "var(--font-mono)",
              fontSize:       11,
              letterSpacing:  "2px",
              textTransform:  "uppercase",
              padding:        "11px 26px",
              borderRadius:   "var(--radius)",
              background:     "var(--color-surface2)",
              color:          "var(--color-text)",
              border:         "1px solid rgba(61,214,140,0.35)",
              cursor:         "pointer",
              fontWeight:     700,
              textDecoration: "none",
              transition:     "background 0.15s, border-color 0.15s",
              display:        "inline-block",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = "rgba(61,214,140,0.1)";
              e.currentTarget.style.borderColor = "rgba(61,214,140,0.6)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = "var(--color-surface2)";
              e.currentTarget.style.borderColor = "rgba(61,214,140,0.35)";
            }}
          >
            Resume
          </a>
        </div>
      </div>

      <CharacterScene hangRefs={[viewWorkRef, resumeRef]} />
      <hr className="divider" />

      </div>{/* end hero wrapper */}

      {/* ── About ─────────────────────────────────────────────── */}
      <div className="section-wrap">
        <div className="section-label fade-up">About</div>
        <h2 className="section-title fade-up delay-1">Hi, I'm Loden.</h2>

        <div style={{
          display:       "flex",
          flexDirection: "column",
          gap:           18,
          fontSize:      15,
          lineHeight:    1.8,
          color:         "var(--color-text)",
          maxWidth:      680,
        }}>
          {bio.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>

      <hr className="divider" />

      {/* ── Skills ────────────────────────────────────────────── */}
      <div className="section-wrap">
        <div className="section-label fade-up">Skills</div>
        <h2 className="section-title fade-up delay-1">Technical Toolkit</h2>

        <div>
          {skillGroups.map(group => (
            <div key={group.label} className="skill-row fade-up">
              <span className="skill-row-label">{group.label}</span>
              <div className="skill-row-pills">
                {group.pills.map(pill => (
                  <span key={pill} className="skill-pill">{pill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
