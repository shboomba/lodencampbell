const upcoming = [
  { label: "Game Project",    desc: "Original game in active development" },
  { label: "Research",        desc: "Ongoing academic research at USC"    },
  { label: "More Projects",   desc: "Additional work coming soon"         },
];

export default function OtherProjects() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">
        <div className="section-label fade-up">Other Projects</div>
        <h2 className="section-title fade-up delay-1">Active Work</h2>

        <p className="fade-up delay-2" style={{
          fontFamily: "var(--font-body)",
          fontSize:   15,
          color:      "var(--color-muted)",
          maxWidth:   560,
          lineHeight: 1.7,
          marginBottom: 48,
        }}>
          This section is being built out. Projects below are currently in development and will be detailed here as they reach a shareable state.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {upcoming.map((item, i) => (
            <div
              key={item.label}
              className="fade-up"
              style={{
                animationDelay:  `${0.08 * i}s`,
                display:         "flex",
                alignItems:      "center",
                gap:             24,
                padding:         "24px 0",
                borderBottom:    "1px solid var(--color-border)",
              }}
            >
              <span style={{
                fontFamily:    "var(--font-mono)",
                fontSize:      10,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color:         "var(--color-accent)",
                minWidth:      60,
              }}>
                WIP
              </span>
              <div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   16,
                  fontWeight: 600,
                  color:      "var(--color-text)",
                  marginBottom: 4,
                }}>
                  {item.label}
                </div>
                <div style={{
                  fontFamily: "var(--font-body)",
                  fontSize:   13,
                  color:      "var(--color-muted)",
                }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
