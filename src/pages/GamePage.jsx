import gameDetails from "../data/gameDetails";

export default function GamePage({ id, onNavigate }) {
  const game = gameDetails.find((g) => g.id === id);
  if (!game) return null;

  const stats = [
    { label: "Team Size", value: game.teamSize === 1 ? "Solo" : `${game.teamSize} People` },
    { label: "My Role",   value: game.role },
    { label: "Engine",    value: game.engine },
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* Hero */}
      <div style={{
        borderBottom: "1px solid var(--color-border)",
        background:   "linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 100%)",
      }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px var(--space-lg) 60px" }}>

          {/* Back button */}
          <button
            onClick={() => onNavigate("portfolio")}
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
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
              color: "var(--color-accent)", letterSpacing: "1.5px", textTransform: "uppercase",
            }}>
              {game.subtitle}
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: 20, maxWidth: 700,
          }}>
            {game.title}
          </h1>

          {/* Tags */}
          <div className="fade-up delay-2" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 36 }}>
            {game.tags.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>

          {/* Cover image — wraps tightly around the image, no dead space */}
          <div className="fade-up delay-3" style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
            <div style={{
              display: "inline-block",
              borderRadius: "var(--radius-lg)",
              border: "1px solid var(--color-border)",
              overflow: "hidden",
              maxWidth: "100%",
            }}>
              <img
                src={game.coverImage}
                alt={game.title}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: 460,
                  width: "auto",
                  height: "auto",
                }}
              />
            </div>
          </div>

          {/* Play CTA — directly under the cover image */}
          <div className="fade-up delay-4" style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
            textAlign: "center",
          }}>
            <p style={{
              fontFamily: "var(--font-body)", fontSize: 14,
              color: "var(--color-muted)", margin: 0,
            }}>
              Available to play for free on itch.io
            </p>
            <a
              href={game.itchUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600,
                color: "var(--color-bg)",
                background: "var(--color-accent)",
                padding: "12px 28px",
                borderRadius: "var(--radius)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Play on itch.io →
            </a>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px var(--space-lg)" }}>

        {/* Stats strip */}
        <div className="fade-up game-stats" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          marginBottom: 80,
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius)",
          overflow: "hidden",
        }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{
              padding: "28px 32px",
              background: "var(--color-surface)",
              borderRight: i < stats.length - 1 ? "1px solid var(--color-border)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 10,
                letterSpacing: "1px", textTransform: "uppercase",
                color: "var(--color-muted)", marginBottom: 10,
              }}>
                {s.label}
              </div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 18,
                fontWeight: 700, color: "var(--color-text)",
              }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="section-label fade-up">About</div>
        <h2 className="section-title fade-up delay-1">The Game</h2>
        <p className="fade-up delay-2" style={{
          fontFamily: "var(--font-body)", fontSize: 16,
          lineHeight: 1.8, color: "var(--color-muted)",
          maxWidth: 720, marginBottom: 80,
        }}>
          {game.overview}
        </p>

        {/* Screenshots */}
        <div className="section-label fade-up">Media</div>
        <h2 className="section-title fade-up delay-1">Screenshots</h2>
        {game.screenshots.length > 0 ? (
          <div className="screenshot-grid fade-up delay-2" style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginBottom: 80,
          }}>
            {game.screenshots.map((src, i) => (
              <div key={i} style={{
                borderRadius: "var(--radius)",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface2)",
                aspectRatio: "16/9",
              }}>
                <img src={src} alt={`${game.title} screenshot ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        ) : (
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
        )}

      </div>

      <style>{`
        @media (max-width: 700px) {
          .game-stats { grid-template-columns: 1fr !important; }
          .screenshot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
