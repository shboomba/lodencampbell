// ============================================================
//  src/components/SkillCard.jsx
//
//  Displays one skill on the homepage.
//  Edit the styles in this file to change how ALL skill cards look.
//
//  Data comes from: src/data/skills.js
// ============================================================

import { useState } from "react";

export default function SkillCard({ name, description }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:     "relative",
        overflow:     "hidden",
        background:   hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:       `1px solid ${hovered ? "rgba(0,255,170,0.3)" : "var(--color-border)"}`,
        borderRadius: "var(--radius)",
        padding:      "24px",
        transition:   "all 0.25s",
        transform:    hovered ? "translateY(-2px)" : "none",
        cursor:       "default",
      }}
    >
      {/* Green top bar that appears on hover */}
      <div style={{
        position:   "absolute",
        top: 0, left: 0, right: 0,
        height:     2,
        background: "linear-gradient(90deg, var(--color-accent), transparent)",
        opacity:    hovered ? 1 : 0,
        transition: "opacity 0.25s",
      }} />

      {/* Skill name */}
      <div style={{
        fontFamily:    "var(--font-heading)",
        fontSize:      13,
        fontWeight:    700,
        color:         "var(--color-accent)",
        letterSpacing: "1px",
        marginBottom:  8,
      }}>
        {name}
      </div>

      {/* Skill description */}
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize:   12,
        color:      "var(--color-muted)",
      }}>
        {description}
      </div>
    </div>
  );
}
