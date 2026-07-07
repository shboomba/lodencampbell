import otherProjects from "../data/otherProjects";
import SoftwareCard  from "../components/SoftwareCard";

export default function OtherProjects({ onNavigate }) {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">

        <div className="section-label fade-up">Other Projects</div>
        <h2 className="section-title fade-up delay-1">Built for Fun & Real Life</h2>
        <p className="fade-up delay-1" style={{
          fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)",
          lineHeight: 1.7, maxWidth: 640, marginBottom: 36,
        }}>
          Projects outside of coursework and games: tools built to solve real problems
          for real communities, or just because.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {otherProjects.map((project, i) => (
            <div key={project.title} className="fade-up" style={{ animationDelay: `${0.08 * i}s` }}>
              <SoftwareCard {...project} onNavigate={onNavigate} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
