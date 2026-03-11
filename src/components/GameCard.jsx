// ============================================================
//  src/components/GameCard.jsx
//
//  Displays one game in the Portfolio page.
//  Edit the styles in this file to change how ALL game cards look.
//
//  Data comes from: src/data/games.js
// ============================================================

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
        display:        "block",
        textDecoration: "none",
        background:     "var(--color-surface)",
        border:         `1px solid ${hovered ? "rgba(0,255,170,0.4)" : "var(--color-border)"}`,
        borderRadius:   "var(--radius)",
        overflow:       "hidden",
        transition:     "all 0.3s",
        transform:      hovered ? "translateY(-5px)" : "none",
        boxShadow:      hovered ? "0 16px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      {/* Cover image */}
      <div style={{ overflow: "hidden", aspectRatio: "7/8" }}>
        <img
          src={image}
          alt={title}
          style={{
            width:      "100%",
            height:     "100%",
            objectFit:  "cover",
            display:    "block",
            transition: "transform 0.4s",
            transform:  hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Card info footer */}
      <div style={{ padding: "14px 16px" }}>

        {/* Title */}
        <div style={{
          fontFamily:    "var(--font-heading)",
          fontSize:      12,
          fontWeight:    700,
          color:         "#fff",
          marginBottom:  6,
          letterSpacing: "0.5px",
        }}>
          {title}
        </div>

        {/* Optional description */}
        {description && (
          <div style={{
            fontFamily:   "var(--font-body)",
            fontSize:     12,
            color:        "var(--color-muted)",
            marginBottom: 8,
          }}>
            {description}
          </div>
        )}

        {/* Platform + tags row */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span style={{
            fontFamily:    "var(--font-mono)",
            fontSize:      10,
            color:         "var(--color-accent)",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}>
            {platform}
          </span>
          {tags?.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}
