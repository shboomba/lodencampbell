// ============================================================
//  src/pages/EnvDistributor.jsx
//
//  Case study: Environment Distributor (Snake World).
// ============================================================

export default function EnvDistributor({ onNavigate }) {

  const stack = ["Unity", "C#", "C++", "Procedural Generation", "Perlin Noise", "Poisson Disk Sampling"];

  const features = [
    { label: "Heightmap Generation", desc: "Perlin noise generates terrain heightmaps that drive foliage placement across the entire landscape" },
    { label: "Natural Distribution", desc: "Poisson disk sampling spaces foliage organically, so placement reads as hand-set rather than clumped or gridded" },
    { label: "Exclusion Zones",      desc: "Enforced exclusion radii around the track and scene objects keep generated content out of gameplay-critical areas" },
    { label: "Fully Procedural",     desc: "The whole environment regenerates on demand, looking hand-placed while requiring zero manual placement" },
  ];

  const contributions = [
    "Built a procedural environment system using Perlin noise to generate heightmaps and drive foliage placement across terrain",
    "Implemented Poisson disk sampling to distribute foliage with natural spacing",
    "Enforced exclusion radii around the track and scene objects to prevent overlap with gameplay areas",
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
              Procedural Generation · Snake World
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: 20, maxWidth: 700,
          }}>
            Environment <span style={{ color: "var(--color-accent)" }}>Distributor</span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            lineHeight: 1.8, color: "var(--color-muted)",
            maxWidth: 680, marginBottom: 28,
          }}>
            A procedural environment system built for Snake World as Systems Programmer.
            Perlin noise shapes the terrain and drives foliage placement, Poisson disk
            sampling keeps distribution natural, and exclusion radii protect the track
            and scene objects, so the world reads as hand-placed while staying fully
            procedural.
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
        <h2 className="section-title fade-up delay-1">The System</h2>
        <div className="envdist-features fade-up delay-2" style={{
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
        <div className="section-label fade-up">Systems Programmer</div>
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
          .envdist-features { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
