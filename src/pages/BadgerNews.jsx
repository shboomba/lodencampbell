// ============================================================
//  src/pages/BadgerNews.jsx
//
//  Case study page for the Badger News App.
//  Follows the same structure as PBSProject.jsx.
// ============================================================

export default function BadgerNews({ onNavigate }) {

  const stack = ["React", "JavaScript", "REST API", "Context API", "Postman"];

  const features = [
    { label: "Live Fetching",     desc: "Fetches 100+ articles from REST APIs, with endpoints tested and validated in Postman" },
    { label: "Summaries",         desc: "Each article is summarized in-feed, with full article display available on demand" },
    { label: "Dynamic Filtering", desc: "Filter the feed by topic and keyword in real time" },
    { label: "Personalization",   desc: "Persistent settings let each user tailor which news categories they see" },
  ];

  const contributions = [
    "Developed a React app fetching and summarizing 100+ articles with dynamic filtering",
    "Implemented full article display and browser navigation using Context API and Linking",
    "Created personalized news filtering settings",
  ];

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
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--color-muted)", background: "none",
              border: "none", cursor: "pointer", marginBottom: 40,
              transition: "color 0.2s", padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            ← Back to Portfolio
          </button>

          <div className="fade-up" style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, color: "var(--color-accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Personal Project
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: 20, maxWidth: 700,
          }}>
            Badger <span style={{ color: "var(--color-accent)" }}>News App</span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            lineHeight: 1.8, color: "var(--color-muted)",
            maxWidth: 640, marginBottom: 28,
          }}>
            A React news application that fetches, summarizes, and filters 100+ articles in
            real time, with personalized filtering settings and full in-app article reading.
          </p>

          <div className="fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px var(--space-lg)" }}>

        {/* Features */}
        <div className="section-label fade-up">How It Works</div>
        <h2 className="section-title fade-up delay-1">Features</h2>
        <div className="badger-features fade-up delay-2" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
          maxWidth: 880,
          marginBottom: 80,
        }}>
          {features.map((f) => (
            <div key={f.label} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "20px 24px",
            }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>
                {f.label}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contributions */}
        <div className="section-label fade-up">Solo Project</div>
        <h2 className="section-title fade-up delay-1">What I Built</h2>
        <ul className="fade-up delay-2" style={{
          listStyle: "none", display: "flex", flexDirection: "column", gap: 14,
          maxWidth: 720, marginBottom: 80,
        }}>
          {contributions.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "var(--color-accent)", fontSize: 10, marginTop: 7, flexShrink: 0 }}>▸</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Screenshots */}
        <div className="section-label fade-up">Media</div>
        <h2 className="section-title fade-up delay-1">Screenshots</h2>
        <div className="fade-up delay-2" style={{
          padding: "48px 32px",
          background: "var(--color-surface)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius)",
          marginBottom: 40,
          textAlign: "center",
        }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--color-muted)", letterSpacing: "1px" }}>
            Screenshots coming soon
          </span>
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .badger-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
