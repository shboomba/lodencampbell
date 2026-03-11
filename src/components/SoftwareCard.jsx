// ============================================================
//  src/components/SoftwareCard.jsx
//
//  Displays one software project in the Portfolio page.
//  Edit the styles in this file to change how ALL software cards look.
//
//  Data comes from: src/data/software.js
// ============================================================

import { useState } from "react";

export default function SoftwareCard({ title, logo, url, description, tags }) {
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
        gap:            16,
        textDecoration: "none",
        background:     hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:         `1px solid ${hovered ? "rgba(0,255,170,0.35)" : "var(--color-border)"}`,
        borderRadius:   "var(--radius)",
        padding:        "28px 32px",
        transition:     "all 0.25s",
        transform:      hovered ? "translateY(-3px)" : "none",
        minWidth:       220,
      }}
    >
      {/* Logo (if provided) or plain text title */}
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

      {/* Tech tags */}
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
