// ============================================================
//  src/pages/Portfolio.jsx
//
//  Shows game cards and software project cards.
//
//  Content comes from:
//    src/data/games.js    ← game cards
//    src/data/software.js ← software project cards
// ============================================================

import games        from "../data/games";
import software     from "../data/software";
import GameCard     from "../components/GameCard";
import SoftwareCard from "../components/SoftwareCard";

export default function Portfolio() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">

        {/* ── Personal Games ─────────────────────────────────── */}
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="section-title fade-up delay-1">Personal Games</h2>

        <div style={{
          display:             "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap:                 20,
        }}>
          {games.map((game, i) => (
            <div key={game.title} className="fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>

        {/* ── Software Projects ──────────────────────────────── */}
        <div style={{ marginTop: 80 }}>
          <div className="section-label fade-up">Software</div>
          <h2 className="section-title fade-up delay-1">Software Projects</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {software.map((project, i) => (
              <div key={project.title} className="fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                <SoftwareCard {...project} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
