import games        from "../data/games";
import software     from "../data/software";
import GameCard     from "../components/GameCard";
import SoftwareCard from "../components/SoftwareCard";

const stack = ["Python", "Java", "C#", "C++", "JavaScript", "React", "Flask", "Unity", "Maya Autodesk", "Git"];

export default function Portfolio({ onNavigate }) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">

        {/* ── Software Projects ─────────────────────────────── */}
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="section-title fade-up delay-1">Software Projects</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {software.map((project, i) => (
            <div key={project.title} className="fade-up" style={{ animationDelay: `${0.08 * i}s` }}>
              <SoftwareCard {...project} onNavigate={onNavigate} />
            </div>
          ))}
        </div>

        {/* ── Games ─────────────────────────────────────────── */}
        <div style={{ marginTop: 80 }}>
          <div className="section-label fade-up" style={{ marginBottom: 24 }}>Games</div>

          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
            gridAutoRows:        "1fr",
            gap:                 20,
          }}>
            {games.map((game, i) => (
              <div key={game.title} className="fade-up" style={{ animationDelay: `${0.08 * i}s` }}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Tech stack strip ──────────────────────────────── */}
        <div className="fade-up" style={{
          display:    "flex",
          alignItems: "center",
          gap:        12,
          marginTop:  80,
          paddingTop: 40,
          borderTop:  "1px solid var(--color-border)",
          flexWrap:   "wrap",
        }}>
          <span style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      10,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color:         "var(--color-muted)",
            whiteSpace:    "nowrap",
          }}>
            Stack
          </span>
          <span style={{ width: 1, height: 16, background: "var(--color-border)", flexShrink: 0 }} />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stack.map(s => (
              <span key={s} style={{
                fontFamily:   "var(--font-body)",
                fontSize:     12,
                color:        "var(--color-muted)",
                background:   "var(--color-surface)",
                border:       "1px solid var(--color-border)",
                borderRadius: 4,
                padding:      "3px 10px",
              }}>
                {s}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
