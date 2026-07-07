import { useState } from "react";

/*
  Large editorial work block: a big cover image beside a caption.
  Alternates image side down the page via `align`. `size` controls scale.
  Used on the Portfolio page.
*/
export default function WorkSpread({
  index, image, title, kicker, meta, tags = [],
  page, url, onNavigate, align = "left", size = "row",
}) {
  const [hovered, setHovered] = useState(false);

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
