export default function OtherProjects() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      <div className="section-wrap">
        <div className="section-label fade-up">Other Projects</div>
        <h2 className="section-title fade-up delay-1">Coming Soon</h2>

        <p className="fade-up delay-2" style={{
          fontFamily: "var(--font-body)",
          fontSize:   15,
          color:      "var(--color-muted)",
          maxWidth:   560,
          lineHeight: 1.7,
          marginTop:  24,
        }}>
          A collection of personal projects outside of software and games: things built for fun, curiosity, or just because.
        </p>
      </div>
    </div>
  );
}
