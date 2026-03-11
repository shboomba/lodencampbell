// ================================================================
//  client/src/pages/Portfolio.jsx
//
//  Shows game cards and software project cards.
//  Edit server/data/games.json and server/data/software.json
//  to add / remove projects — no code changes needed.
// ================================================================

import GameCard     from "../components/GameCard";
import SoftwareCard from "../components/SoftwareCard";
import { useApi }   from "../hooks/useApi";

export default function Portfolio() {
  const { data: games,    loading: gLoad } = useApi("/api/games");
  const { data: software, loading: sLoad } = useApi("/api/software");

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">

        {/* ── Personal Games ─────────────────────────────────── */}
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="section-title fade-up delay-1">Personal Games</h2>

        {gLoad ? (
          <p style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>Loading...</p>
        ) : (
          <div style={{
            display:             "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap:                 20,
          }}>
            {games?.map((game, i) => (
              <div key={game.title} className="fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
        )}

        {/* ── Software Projects ──────────────────────────────── */}
        <div style={{ marginTop: 80 }}>
          <div className="section-label fade-up">Software</div>
          <h2 className="section-title fade-up delay-1">Software Projects</h2>

          {sLoad ? (
            <p style={{ color: "var(--color-muted)", fontFamily: "var(--font-mono)", fontSize: 12 }}>Loading...</p>
          ) : (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
              {software?.map((project, i) => (
                <div key={project.title} className="fade-up" style={{ animationDelay: `${0.1 * i}s` }}>
                  <SoftwareCard {...project} />
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
