import { useState } from "react";

/*
  Large editorial work block: a big cover image beside a caption.
  Alternates image side down the page via `align`. `size` controls scale.
  Used on the Portfolio page.
*/
const IconGitHub = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function WorkSpread({
  index, image, title, kicker, meta, tags = [],
  page, url, github, onNavigate, align = "left", size = "row",
}) {
  const [hovered, setHovered] = useState(false);
  const [ghHovered, setGhHovered] = useState(false);

  const open = () => {
    if (page && onNavigate) onNavigate(page);
    else if (url) window.open(url, "_blank", "noreferrer");
  };

  const num = String(index).padStart(2, "0");
  const isLead = size === "lead";
  const imageRight = align === "right";

  const imageCol = (
    <div style={{
      borderRadius: "var(--radius)",
      border: "1px solid var(--color-border-strong)",
      overflow: "hidden",
      background: "var(--color-surface)",
      aspectRatio: isLead ? "16 / 10" : "16 / 11",
    }}>
      <img
        src={image}
        alt={title}
        style={{
          width: "100%", height: "100%", objectFit: "cover", display: "block",
          transition: "transform 0.5s cubic-bezier(0.2,0.7,0.2,1), filter 0.4s",
          transform: hovered ? "scale(1.035)" : "scale(1)",
          filter: hovered ? "none" : "saturate(0.96)",
        }}
      />
    </div>
  );

  const captionCol = (
    <div style={{
      display: "flex", flexDirection: "column", justifyContent: "center",
      gap: 14, padding: "4px 0",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span className="index-num">{"№"} {num}</span>
        <span style={{ flex: 1, height: 1, background: "var(--color-border)", maxWidth: 64 }} />
        {kicker && <span className="kicker">{kicker}</span>}
      </div>

      <h3
        className="caption-title"
        style={{
          fontSize: isLead ? "clamp(22px, 2.4vw, 34px)" : undefined,
          color: hovered ? "var(--color-accent)" : "var(--color-text)", transition: "color 0.2s", margin: 0,
        }}
      >
        {title}
      </h3>

      {meta && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", letterSpacing: "0.02em" }}>
          {meta}
        </div>
      )}

      {tags.length > 0 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={() => setGhHovered(true)}
          onMouseLeave={() => setGhHovered(false)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 8, alignSelf: "flex-start",
            padding: "8px 14px", borderRadius: "var(--radius)",
            border: `1px solid ${ghHovered ? "var(--color-accent)" : "var(--color-border-strong)"}`,
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.08em", textTransform: "uppercase", textDecoration: "none",
            color: ghHovered ? "var(--color-accent)" : "var(--color-text)",
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          <IconGitHub />
          GitHub
        </a>
      )}

      <span style={{
        display: "inline-flex", alignItems: "center", gap: 9, marginTop: 4,
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: hovered ? "var(--color-accent)" : "var(--color-muted)", transition: "color 0.2s",
      }}>
        View Project
        <span style={{ display: "inline-block", transition: "transform 0.25s", transform: hovered ? "translateX(5px)" : "none" }}>
          {"→"}
        </span>
      </span>
    </div>
  );

  return (
    <article
      onClick={open}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="work-spread"
      style={{
        display: "grid",
        gridTemplateColumns: isLead ? "1fr 1fr" : "0.95fr 1fr",
        gap: "clamp(24px, 3vw, 48px)",
        alignItems: "stretch",
        cursor: "pointer",
        direction: imageRight ? "rtl" : "ltr",
        maxWidth: isLead ? 1080 : 980,
        marginLeft: imageRight ? "auto" : 0,
      }}
    >
      <div style={{ direction: "ltr" }}>{imageCol}</div>
      <div style={{ direction: "ltr" }}>{captionCol}</div>

      <style>{`
        @media (max-width: 760px) {
          .work-spread { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </article>
  );
}
