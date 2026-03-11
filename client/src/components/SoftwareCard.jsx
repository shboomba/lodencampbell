// ================================================================
//  client/src/components/SoftwareCard.jsx
//
//  Renders one software project card.
//  Data comes from server/data/software.json
//
//  Each software object shape:
//  {
//    "title":       "PBS Project",
//    "logo":        "https://...",        ← optional logo image
//    "url":         "https://...",
//    "description": "What the project does",
//    "tags":        ["Python", "React"]   ← optional tech tags
//  }
// ================================================================

import { useState } from "react";

export default function SoftwareCard({ title, logo, url, description, tags }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      style={{
        display:        "flex",
        flexDirection:  "column",
        gap:            16,
        background:     hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:         `1px solid ${hovered ? "rgba(0,255,170,0.35)" : "var(--color-border)"}`,
        borderRadius:   "var(--radius)",
        padding:        "28px 32px",
        cursor:         "pointer",
        transition:     "all 0.25s",
        transform:      hovered ? "translateY(-3px)" : "none",
        textDecoration: "none",
        minWidth:       220,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo or title */}
      {logo ? (
        <img
          src={logo}
          alt={title}
          style={{
            height:     44,
            width:      "auto",
            objectFit:  "contain",
            filter:     "brightness(0) invert(1)",
            opacity:    hovered ? 1 : 0.7,
            transition: "opacity 0.2s",
          }}
        />
      ) : (
        <div style={{
          fontFamily: "var(--font-heading)",
          fontSize:   16,
          fontWeight: 700,
          color:      "#fff",
        }}>
          {title}
        </div>
      )}

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
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}
    </a>
  );
}
