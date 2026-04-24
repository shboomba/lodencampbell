import { useState } from "react";

export default function GameCard({ title, image, url, platform, tags, description }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "flex",
        flexDirection:  "column",
        textDecoration: "none",
        height:         "100%",
        background:     "var(--color-surface)",
        border:         `1px solid ${hovered ? "rgba(61,214,140,0.35)" : "var(--color-border)"}`,
        borderRadius:   "var(--radius)",
        overflow:       "hidden",
        transition:     "border-color 0.2s, background 0.2s",
      }}
    >
      {/* Cover image */}
      <div style={{ overflow: "hidden", aspectRatio: "16/11" }}>
        <img
          src={image}
          alt={title}
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            display:    "block",
            transition: "transform 0.35s ease",
            transform:  hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>

        {/* Platform badge */}
        <span style={{
          fontFamily:    "var(--font-mono)",
          fontSize:      10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color:         "var(--color-accent)",
        }}>
          {platform}
        </span>

        {/* Title */}
        <div style={{
          fontFamily:  "var(--font-body)",
          fontSize:    15,
          fontWeight:  700,
          color:       hovered ? "var(--color-accent)" : "var(--color-text)",
          transition:  "color 0.2s",
          lineHeight:  1.3,
        }}>
          {title}
        </div>

        {/* Description */}
        {description && (
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize:   13,
            color:      "var(--color-muted)",
            lineHeight: 1.6,
          }}>
            {description}
          </div>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
            {tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </a>
  );
}
