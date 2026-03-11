// ============================================================
//  src/pages/OtherProjects.jsx
//
//  Placeholder page — replace the content below when you have
//  projects to show. You could also wire up a src/data/other.js
//  file and map cards here the same way Portfolio.jsx does.
// ============================================================

export default function OtherProjects() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">
        <div className="section-label fade-up">Other Projects</div>

        <div style={{
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "center",
          justifyContent: "center",
          gap:            24,
          padding:        "80px 0",
          textAlign:      "center",
        }}>
          <div style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      13,
            color:         "var(--color-accent)",
            letterSpacing: "3px",
            textTransform: "uppercase",
          }}>
            Status: <span style={{ animation: "blink 1.2s step-end infinite" }}>█</span>
          </div>

          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize:   "clamp(36px, 6vw, 68px)",
            fontWeight: 900,
            color:      "#fff",
          }}>
            In Progress...
          </h2>

          <div style={{
            width:        280,
            height:       4,
            background:   "var(--color-surface2)",
            borderRadius: 99,
            overflow:     "hidden",
          }}>
            <div style={{
              height:       "100%",
              background:   "linear-gradient(90deg, var(--color-accent), var(--color-accent2))",
              borderRadius: 99,
              animation:    "progressPulse 2s ease-in-out infinite alternate",
            }} />
          </div>

          <p style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      12,
            color:         "var(--color-muted)",
            letterSpacing: 1,
          }}>
            More coming soon — stay tuned.
          </p>
        </div>
      </div>
    </div>
  );
}
