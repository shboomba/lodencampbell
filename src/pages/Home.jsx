import { useState, useRef } from "react";
import bio      from "../data/bio";
import software from "../data/software";
import games    from "../data/games";
import CharacterScene from "../components/CharacterScene";

const skillGroups = [
  { label: "Languages", pills: ["Python", "Java", "C#", "C++", "JavaScript"] },
  { label: "Tools",     pills: ["React", "Flask", "Unity", "Maya Autodesk", "Git"] },
  { label: "Strengths", pills: ["Project Leadership", "Game Design", "Team Collaboration", "AI / ML"] },
];

// First 2 games + PBS as featured
const featured = [
  { ...software[0], linkType: "internal" },
  { ...games[0],    linkType: "external" },
  { ...games[1],    linkType: "external" },
];

function FeaturedCard({ title, image, type, platform, description, tags, url, page, linkType, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const label = type || platform || "";

  const handleClick = () => {
    if (linkType === "internal" && page && onNavigate) onNavigate(page);
    else if (url) window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:      "flex",
        flexDirection: "row",
        background:   hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:       `1px solid ${hovered ? "rgba(61,214,140,0.30)" : "var(--color-border)"}`,
        borderRadius: "var(--radius-lg)",
        overflow:     "hidden",
        cursor:       "pointer",
        transition:   "border-color 0.2s, background 0.2s",
        minHeight:    96,
      }}
    >
      {image && (
        <div style={{ width: "42%", flexShrink: 0, overflow: "hidden", background: "var(--color-surface2)" }}>
          <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s ease", transform: hovered ? "scale(1.04)" : "scale(1)" }} />
        </div>
      )}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
        {label && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-accent)" }}>
            {label}
          </span>
        )}
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, color: hovered ? "var(--color-accent)" : "var(--color-text)", transition: "color 0.2s", lineHeight: 1.3 }}>
          {title}
        </div>
        {description && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-muted)", lineHeight: 1.55 }}>
            {description}
          </div>
        )}
        {tags?.length > 0 && (
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 3 }}>
            {tags.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard({ label, children }) {
  return (
    <div style={{
      background:    "var(--color-surface)",
      border:        "1px solid var(--color-border)",
      borderRadius:  "var(--radius-lg)",
      padding:       "22px 24px",
      display:       "flex",
      flexDirection: "column",
      gap:           14,
    }}>
      <div style={{
        display:       "flex",
        alignItems:    "center",
        gap:           10,
        paddingBottom: 12,
        borderBottom:  "1px solid var(--color-border)",
      }}>
        <span style={{ width: 3, height: 13, background: "var(--color-accent)", borderRadius: 2, display: "block", flexShrink: 0 }} />
        <span style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      13,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color:         "var(--color-text)",
          fontWeight:    700,
        }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

export default function Home({ onNavigate }) {
  const viewWorkRef = useRef(null);
  const resumeRef   = useRef(null);

  return (
    <div>

      {/* ── Hero ── */}
      <div style={{ position: "relative" }}>
        <div style={{
          maxWidth:            "var(--max-width)",
          margin:              "0 auto",
          padding:             "72px 56px 64px var(--space-lg)",
          display:             "grid",
          gridTemplateColumns: "58% 42%",
          minHeight:           440,
        }}>

          {/* Left: text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22, position: "relative", zIndex: 5 }}>

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

            <h1 className="fade-up delay-2" style={{
              fontFamily:    "var(--font-heading)",
              fontSize:      "clamp(38px, 5.5vw, 72px)",
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

            {/* Tagline */}
            <p className="fade-up delay-2" style={{
              fontFamily: "var(--font-body)",
              fontSize:   14,
              color:      "var(--color-muted)",
              lineHeight: 1.65,
              maxWidth:   400,
              marginTop:  4,
            }}>
              {bio.tagline}
            </p>

            {/* Education */}
            <div className="fade-up delay-2" style={{
              display:       "flex",
              alignItems:    "center",
              gap:           10,
              flexWrap:      "wrap",
              fontFamily:    "var(--font-mono)",
              fontSize:      12,
              letterSpacing: "0.5px",
            }}>
              <span style={{ color: "var(--color-text)", fontWeight: 500 }}>MS Computer Science · USC</span>
              <span style={{ color: "var(--color-border)", fontSize: 16, lineHeight: 1 }}>|</span>
              <span style={{ color: "var(--color-muted)" }}>BS Computer Science · UW-Madison</span>
            </div>

            {/* Availability badge */}
            <div className="fade-up delay-3" style={{
              display:       "flex",
              alignItems:    "center",
              gap:           8,
              fontFamily:    "var(--font-mono)",
              fontSize:      11,
              color:         "var(--color-muted)",
              letterSpacing: "0.3px",
            }}>
              <span className="pulse-dot" />
              Available for internships &amp; full-time opportunities
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
                  transition:  "opacity 0.15s",
                  display:     "flex",
                  alignItems:  "center",
                  gap:         8,
                  lineHeight:  1,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                View My Work <span>→</span>
              </button>

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
                  transition:  "background 0.15s, border-color 0.15s",
                  display:     "inline-flex",
                  alignItems:  "center",
                  gap:         8,
                  lineHeight:  1,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(61,214,140,0.1)"; e.currentTarget.style.borderColor = "rgba(61,214,140,0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--color-surface2)"; e.currentTarget.style.borderColor = "rgba(61,214,140,0.35)"; }}
              >
                Resume <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: empty — figures roam here */}
          <div />
        </div>

        <CharacterScene hangRefs={[viewWorkRef, resumeRef]} />
        <hr className="divider" />
      </div>

      {/* ── Featured Projects ── */}
      <div className="section-wrap" style={{ paddingBottom: "var(--space-md)" }}>
        <div className="section-label fade-up">Featured Projects</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {featured.map((item, i) => (
            <FeaturedCard key={i} {...item} onNavigate={onNavigate} />
          ))}
        </div>
        <button
          onClick={() => onNavigate("portfolio")}
          style={{
            marginTop:     16,
            background:    "none",
            border:        "none",
            color:         "var(--color-accent)",
            fontFamily:    "var(--font-mono)",
            fontSize:      12,
            letterSpacing: "1px",
            cursor:        "pointer",
            padding:       0,
            display:       "flex",
            alignItems:    "center",
            gap:           6,
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
        >
          View all projects →
        </button>
      </div>

      <hr className="divider" />

      {/* ── Info cards ── */}
      <div className="section-wrap" style={{ paddingTop: "var(--space-md)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>

          {/* About Me */}
          <InfoCard label="About Me">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.75, margin: 0 }}>
                {bio.blurb}
              </p>
              <button
                onClick={() => onNavigate("about")}
                style={{
                  alignSelf:     "flex-start",
                  background:    "none",
                  border:        "none",
                  color:         "var(--color-accent)",
                  fontFamily:    "var(--font-mono)",
                  fontSize:      12,
                  letterSpacing: "1px",
                  cursor:        "pointer",
                  padding:       0,
                  display:       "flex",
                  alignItems:    "center",
                  gap:           6,
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Learn more about me →
              </button>
            </div>
          </InfoCard>

          {/* Skills */}
          <InfoCard label="Skills">
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {skillGroups.map(group => (
                <div key={group.label}>
                  <div style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      11,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color:         "var(--color-accent)",
                    marginBottom:  8,
                  }}>{group.label}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {group.pills.map(pill => (
                      <span key={pill} className="skill-pill" style={{ fontSize: 12, padding: "3px 10px" }}>{pill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>

          {/* Currently Working On */}
          <InfoCard label="Currently Working On">
            <div style={{ display: "flex", flexDirection: "column" }}>
              {bio.currentlyWorkingOn.map((item, i) => (
                <div key={i} style={{
                  display:       "flex",
                  gap:           14,
                  alignItems:    "flex-start",
                  padding:       "14px 0",
                  borderTop:     i === 0 ? "none" : "1px solid var(--color-border)",
                }}>
                  <span style={{
                    fontFamily:    "var(--font-mono)",
                    fontSize:      10,
                    color:         "var(--color-accent)",
                    opacity:       0.55,
                    letterSpacing: "1px",
                    paddingTop:    2,
                    flexShrink:    0,
                    minWidth:      22,
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: 4 }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--color-text)" }}>
                        {item.title}
                      </span>
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-muted)", lineHeight: 1.6 }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </InfoCard>

        </div>
      </div>

    </div>
  );
}
