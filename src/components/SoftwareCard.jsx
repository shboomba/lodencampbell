// ============================================================
//  src/components/SoftwareCard.jsx
//
//  Displays one software project in the Portfolio page.
//  Edit the styles in this file to change how ALL software cards look.
//
//  Data comes from: src/data/software.js
// ============================================================

// ============================================================
//  src/components/SoftwareCard.jsx
//
//  Horizontal banner-style card — clearly distinct from SkillCard.
//  Use "page" for internal routes, "url" for external links.
// ============================================================

import { useState } from "react";

export default function SoftwareCard({ title, logo, url, page, description, tags, onNavigate }) {
  const [hovered, setHovered] = useState(false);
  const isInternal = !!page;

  const handleClick = () => {
    if (isInternal && onNavigate) onNavigate(page);
    else if (url) window.open(url, "_blank", "noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "flex",
        alignItems:     "center",
        gap:            32,
        padding:        "28px 36px",
        borderRadius:   "var(--radius-lg)",
        cursor:         "pointer",
        transition:     "all 0.25s",
        position:       "relative",
        overflow:       "hidden",
        background:     hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:         `1px solid ${hovered ? "rgba(61,214,140,0.5)" : "var(--color-border)"}`,
        boxShadow:      hovered ? "0 12px 40px rgba(0,0,0,0.35)" : "0 1px 6px rgba(0,0,0,0.2)",
        transform:      hovered ? "translateY(-2px)" : "none",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position:     "absolute",
        left: 0, top: 0, bottom: 0,
        width:        4,
        background:   "linear-gradient(180deg, var(--color-accent), var(--color-accent2))",
        borderRadius: "var(--radius-lg) 0 0 var(--radius-lg)",
        opacity:      hovered ? 1 : 0.35,
        transition:   "opacity 0.25s",
      }} />

      {/* Logo or title */}
      <div style={{ flexShrink: 0, width: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {logo ? (
          <img src={logo} alt={title} style={{
            width: "100%", height: 40, objectFit: "contain",
            filter: "brightness(0) invert(1)",
            opacity: hovered ? 1 : 0.65,
            transition: "opacity 0.25s",
          }} />
        ) : (
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 14, fontWeight: 700, color: "var(--color-text)" }}>
            {title}
          </span>
        )}
      </div>

      {/* Divider */}
      <div style={{ width: 1, alignSelf: "stretch", background: "var(--color-border)", flexShrink: 0 }} />

      {/* Text content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{
          fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700,
          color: hovered ? "var(--color-accent)" : "var(--color-text)",
          letterSpacing: "0.5px", transition: "color 0.2s",
        }}>
          {title}
        </div>

        {description && (
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-muted)", lineHeight: 1.6 }}>
            {description}
          </div>
        )}

        {tags?.length > 0 && (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
          </div>
        )}
      </div>

      {/* Arrow */}
      <div style={{
        flexShrink:  0,
        fontFamily:  "var(--font-mono)",
        fontSize:    20,
        color:       hovered ? "var(--color-accent)" : "var(--color-muted)",
        transition:  "all 0.25s",
        transform:   hovered ? "translateX(4px)" : "none",
      }}>
        →
      </div>
    </div>
  );
}