import software    from "../data/software";
import gameDetails from "../data/gameDetails";
import WorkSpread  from "../components/WorkSpread";

const stack = ["Python", "Java", "C#", "C++", "JavaScript", "React", "Flask", "Unity", "Maya Autodesk", "Git"];

function gameSpread(g) {
  const sub = g.subtitle.toLowerCase();
  const tech = g.tags.filter(t => !sub.includes(t.toLowerCase()));
  const teamStr = g.teamSize == null ? null : (g.teamSize === 1 ? "Solo" : `${g.teamSize} People`);
  return {
    image: g.coverImage, title: g.title, kicker: g.subtitle,
    meta: [g.engine, teamStr, g.role].filter(Boolean).join(" · "), tags: tech, page: g.id,
  };
}

export default function Portfolio({ onNavigate }) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* Intro */}
      <section className="section-wrap" style={{ paddingBottom: "clamp(32px, 4vw, 56px)" }}>
        <div className="kicker kicker-accent" style={{ marginBottom: 18 }}>Index of Work</div>
        <h1 style={{
          fontFamily: "var(--font-heading)", fontSize: "clamp(40px, 6vw, 84px)",
          fontWeight: 600, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--color-text)",
        }}>
          Portfolio
        </h1>
      </section>

      {/* Software */}
      <section className="section-wrap" style={{ paddingTop: 0, paddingBottom: "clamp(48px, 6vw, 90px)" }}>
        <div className="running-label">
          <span className="display-lg">Software</span>
          <span className="kicker">Engineering</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 60px)" }}>
          {software.map((s, i) => (
            <WorkSpread
              key={s.title}
              index={i + 1}
              image={s.image}
              title={s.title}
              kicker={s.type}
              meta={s.meta}
              tags={s.tags}
              page={s.page}
              url={s.url}
              size={i === 0 ? "lead" : "row"}
              align={i % 2 === 0 ? "left" : "right"}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* Games */}
      <section className="section-wrap">
        <div className="running-label">
          <span className="display-lg">Games</span>
          <span className="kicker">Design · Engineering</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 60px)" }}>
          {gameDetails.map((g, i) => (
            <WorkSpread
              key={g.id}
              index={i + 1}
              {...gameSpread(g)}
              size={i === 0 ? "lead" : "row"}
              align={i % 2 === 0 ? "left" : "right"}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </section>

      <hr className="rule" />

      {/* Stack */}
      <section className="section-wrap" style={{ paddingTop: "clamp(36px, 4vw, 64px)", paddingBottom: "clamp(36px, 4vw, 64px)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
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
            {stack.map(s => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </section>

    </div>
  );
}
