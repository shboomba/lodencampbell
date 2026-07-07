// ============================================================
//  src/pages/SneakyMasters.jsx
//
//  Case study: SneakyMasters (League of Legends leaderboard).
// ============================================================

export default function SneakyMasters({ onNavigate }) {

  const stack = ["JavaScript", "HTML/CSS", "Vercel Serverless", "Vercel KV (Redis)", "Riot Games API"];

  const features = [
    { label: "Live Leaderboard",  desc: "Pulls each player's live ranked data from the Riot API and sorts by a single comparable LP value computed across every tier and division" },
    { label: "LP History",        desc: "Snapshots every LP change to Vercel KV (up to 200 per player) to chart each player's climb over time" },
    { label: "Champion Stats",    desc: "Analyzes the last 20 ranked matches for top champions, primary role, and current win/loss streak" },
    { label: "Multiple Views",    desc: "Card leaderboard, rankings table, and a number-line race track; drag-to-arrange custom ordering and starred players" },
  ];

  const contributions = [
    "Built the whole app as a vanilla JavaScript single-page app: no framework, no build step",
    "Wrote five Vercel serverless functions wrapping the Riot API, with serial match fetching to respect rate limits and graceful degradation when endpoints are unavailable",
    "Persisted the shared player list and LP history in Vercel KV (Redis) so the whole friend group sees one live leaderboard",
    "Kept API usage low with a localStorage champion cache (1 hour TTL, invalidated on LP change) and 35-day position history for weekly rank-change deltas",
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
          <button onClick={() => onNavigate("other")}
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
            ← Back to Other Projects
          </button>

          <div className="fade-up" style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, color: "var(--color-accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Live Web App
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: 20, maxWidth: 700,
          }}>
            Sneaky<span style={{ color: "var(--color-accent)" }}>Masters</span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            lineHeight: 1.8, color: "var(--color-muted)",
            maxWidth: 660, marginBottom: 28,
          }}>
            A League of Legends leaderboard tracking a friend group's race to Masters
            rank in real time: live ranked data from the Riot API, LP history for every
            climb and tilt, and champion stats, deployed on Vercel.
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
        <div className="sneaky-features fade-up delay-2" style={{
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
          .sneaky-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
