import bio from "../data/bio";

export default function About({ onNavigate }) {
  return (
    <div className="section-wrap">
      <button
        onClick={() => onNavigate("home")}
        style={{
          background:    "none",
          border:        "none",
          color:         "var(--color-muted)",
          fontFamily:    "var(--font-mono)",
          fontSize:      12,
          letterSpacing: "1px",
          cursor:        "pointer",
          padding:       0,
          display:       "flex",
          alignItems:    "center",
          gap:           6,
          marginBottom:  24,
        }}
        onMouseEnter={e => e.currentTarget.style.color = "var(--color-text)"}
        onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
      >
        ← Back
      </button>
      <div className="section-label fade-up">About Me</div>
      <h2 className="section-title fade-up">Hi, I'm Loden.</h2>

      <div style={{
        display:       "grid",
        gridTemplateColumns: "2fr 1fr",
        gap:           40,
        alignItems:    "start",
      }}>
        {/* Bio paragraphs */}
        <div className="fade-up" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {bio.paragraphs.map((p, i) => (
            <p
              key={i}
              style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.8, margin: 0 }}
              dangerouslySetInnerHTML={{ __html: p }}
            />
          ))}
        </div>

        {/* Sidebar details */}
        <div className="fade-up delay-2" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{
            background:   "var(--color-surface)",
            border:       "1px solid var(--color-border)",
            borderRadius: "var(--radius-lg)",
            padding:      "20px 22px",
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 16 }}>
              Education
            </div>
            {bio.schools.map(s => (
              <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <img src={s.logo} alt={s.name} style={{ width: 130, height: 120, borderRadius: 8, objectFit: "contain" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-text)" }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
