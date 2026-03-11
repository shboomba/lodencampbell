// ============================================================
//  src/pages/PBS.jsx
//
//  Case study page for the PBS Wisconsin Recommendation Engine.
//  Edit the content sections below to update the page.
//  Add new "contribution" blocks by copying the pattern in
//  the CONTRIBUTIONS section.
// ============================================================

export default function PBS({ onNavigate }) {

  // ── Tech stack tags ────────────────────────────────────────
  const stack = [
    "Python", "Flask", "React", "Vite",
    "NLP", "Machine Learning", "REST API", "JSON",
  ];

  // ── Your specific contributions ────────────────────────────
  const contributions = [
    {
      area:  "Machine Learning",
      icon:  "◈",
      color: "var(--color-accent)",
      items: [
        "Transformed content metadata into ML features using natural language processing",
        "Extracted semantic signals from program descriptions to identify show similarities",
        "Integrated features into a managed ML service and trained the recommendation model",
        "Deployed the model as a hosted endpoint and validated recommendation quality",
      ],
    },
    {
      area:  "Backend",
      icon:  "⬡",
      color: "#3db8d6",
      items: [
        "Built a Python Flask backend bridging the ML model and the React frontend",
        "Designed consistent structured JSON output, insulating the UI from ML changes",
        "Implemented user ID → recommendation endpoint → metadata lookup pipeline",
      ],
    },
    {
      area:  "Frontend",
      icon:  "◻",
      color: "var(--color-accent2)",
      items: [
        "Developed the recommendations UI in React + Vite matching PBS Wisconsin's style",
        "Built graceful fallback handling — UI degrades cleanly if backend is unavailable",
        "Architected the user identity layer for easy swap from manual ID to authenticated session",
      ],
    },
  ];

  // ── Future enhancements ────────────────────────────────────
  const enhancements = [
    { label: "User Login Integration", desc: "Connect to PBS Passport for persistent personalization across sessions" },
    { label: "Transcript-Based Matching", desc: "Use show transcript data for richer semantic similarity scoring" },
    { label: "Geo-Based Recommendations", desc: "Incorporate location signals to surface regionally trending content" },
    { label: "Save for Later", desc: "Allow users to build a personal Watch Later queue" },
  ];

  // ── Team & acknowledgements ────────────────────────────────
  const team = ["Loden Campbell", "Samarth Boranna", "Shashwat Ghevde", "Yohan Pandya"];
  const mentors = ["Tim Schneider", "Mark Riechers", "Amber Samdahl"];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ── Hero banner ──────────────────────────────────────── */}
      <div style={{
        borderBottom: "1px solid var(--color-border)",
        background:   "linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 100%)",
      }}>
        <div style={{
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: "80px var(--space-lg) 60px",
        }}>
          {/* Back link */}
          <button onClick={() => onNavigate("portfolio")}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-mono)", fontSize: 11,
              color: "var(--color-muted)", letterSpacing: "1.5px",
              textTransform: "uppercase", background: "none",
              border: "none", cursor: "pointer", marginBottom: 40,
              transition: "color 0.2s", padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            ← Back to Portfolio
          </button>

          <div className="fade-up" style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <img src="/pbs.png" alt="PBS Wisconsin"
              style={{ height: 36, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--color-accent)", letterSpacing: "3px", textTransform: "uppercase" }}>
              Case Study
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 900, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-1px", marginBottom: 20, maxWidth: 700,
          }}>
            PBS Wisconsin<br />
            <span style={{ color: "var(--color-accent)" }}>Recommendation Engine</span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.8,
            color: "var(--color-muted)", maxWidth: 660, marginBottom: 36,
          }}>
            A proof-of-concept content personalization system built in collaboration with PBS Wisconsin —
            combining NLP, machine learning, and a full-stack web pipeline to deliver tailored show
            recommendations to viewers.
          </p>

          {/* Tech stack pills */}
          <div className="fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stack.map((s) => (
              <span key={s} style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                letterSpacing: "1px", textTransform: "uppercase",
                padding: "6px 14px", borderRadius: 99,
                border: "1px solid var(--color-border)",
                color: "var(--color-accent)", background: "rgba(61,214,140,0.06)",
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Pipeline overview ────────────────────────────────── */}
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px var(--space-lg)" }}>

        <div className="section-label fade-up">How It Works</div>
        <h2 className="section-title fade-up delay-1">End-to-End Pipeline</h2>

        {/* Pipeline steps */}
        <div className="pipeline-grid" style={{ display: "grid", gap: 2, marginBottom: 80 }}>
          {[
            { step: "01", label: "Data Prep",       desc: "Content metadata & anonymous viewing behavior preprocessed into structured datasets" },
            { step: "02", label: "Model Training",  desc: "NLP features extracted from descriptions, model trained and deployed as a hosted endpoint" },
            { step: "03", label: "Flask Backend",   desc: "User ID → ML endpoint → metadata lookup → structured JSON response" },
            { step: "04", label: "React Frontend",  desc: "Recommendations displayed in real time, styled to PBS Wisconsin's design language" },
          ].map((item, i) => (
            <div key={item.step} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div style={{
                display: "flex", alignItems: "flex-start", gap: 24,
                padding: "28px 32px",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: i === 0 ? "var(--radius) var(--radius) 0 0" :
                              i === 3 ? "0 0 var(--radius) var(--radius)" : 0,
                borderTop: i > 0 ? "none" : "1px solid var(--color-border)",
              }}>
                <span style={{
                  fontFamily: "var(--font-heading)", fontSize: 11, fontWeight: 900,
                  color: "var(--color-accent)", letterSpacing: "2px",
                  minWidth: 28, paddingTop: 3,
                }}>
                  {item.step}
                </span>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "var(--color-text)", letterSpacing: "1px", marginBottom: 6 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Contributions ──────────────────────────────────── */}
        <div className="section-label fade-up">My Role</div>
        <h2 className="section-title fade-up delay-1">Contributions</h2>

        <div className="contrib-grid" style={{ display: "grid", gap: 20, marginBottom: 80 }}>
          {contributions.map((c, i) => (
            <div key={c.area} className="fade-up" style={{
              animationDelay: `${i * 0.1}s`,
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "32px",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top accent line in area color */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: 3,
                background: `linear-gradient(90deg, ${c.color}, transparent)`,
                borderRadius: "var(--radius) var(--radius) 0 0",
              }} />

              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <span style={{ fontSize: 20, color: c.color }}>{c.icon}</span>
                <span style={{
                  fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700,
                  color: c.color, letterSpacing: "1.5px", textTransform: "uppercase",
                }}>
                  {c.area}
                </span>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {c.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ color: c.color, fontSize: 10, marginTop: 5, flexShrink: 0 }}>▸</span>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.65 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Future Enhancements ────────────────────────────── */}
        <div className="section-label fade-up">Looking Ahead</div>
        <h2 className="section-title fade-up delay-1">Future Enhancements</h2>

        <div className="enhance-grid" style={{ display: "grid", gap: 12, marginBottom: 80 }}>
          {enhancements.map((e, i) => (
            <div key={e.label} className="fade-up" style={{
              animationDelay: `${i * 0.07}s`,
              display: "flex", alignItems: "flex-start", gap: 20,
              padding: "22px 28px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: "50%", flexShrink: 0, marginTop: 6,
                background: "var(--color-accent)",
                boxShadow: "0 0 8px rgba(61,214,140,0.5)",
              }} />
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: "var(--color-text)", letterSpacing: "0.5px", marginBottom: 4 }}>
                  {e.label}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  {e.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Acknowledgements ───────────────────────────────── */}
        <div className="fade-up" style={{ marginTop: 20 }}>
          <h3 style={{
            fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600,
            color: "var(--color-text)", marginBottom: 12,
          }}>
            Acknowledgements
          </h3>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15,
            color: "var(--color-muted)", lineHeight: 1.8,
          }}>
            This project was completed by Loden Campbell, Samarth Boranna, Shashwat Ghevde, and Yohan Pandya,
            with generous insights and guidance from our mentors at PBS Wisconsin, Tim Schneider, Mark Riechers,
            and Amber Samdahl, as well as our Instructor, Amber Field.
          </p>
        </div>

      </div>

      <style>{`
        .pipeline-grid { grid-template-columns: 1fr; }
        .contrib-grid  { grid-template-columns: repeat(3, 1fr); }
        .enhance-grid  { grid-template-columns: repeat(2, 1fr); }
        .team-grid     { grid-template-columns: 1fr; }
        @media (max-width: 900px) {
          .contrib-grid { grid-template-columns: 1fr !important; }
          .enhance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}