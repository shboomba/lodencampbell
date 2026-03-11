// ================================================================
//  client/src/components/SkillCard.jsx
//
//  Renders one skill entry.
//  Data comes from server/data/skills.json
//
//  Each skill object shape:
//  {
//    "name":        "Python",
//    "description": "AI Projects"
//  }
// ================================================================

import { useState } from "react";

export default function SkillCard({ name, description }) {
  const [hovered, setHovered] = useState(false);

  const cardStyle = {
    background:   hovered ? "var(--color-surface2)" : "var(--color-surface)",
    border:       `1px solid ${hovered ? "rgba(0,255,170,0.3)" : "var(--color-border)"}`,
    borderRadius: "var(--radius)",
    padding:      "24px",
    transition:   "all 0.25s",
    transform:    hovered ? "translateY(-2px)" : "none",
    position:     "relative",
    overflow:     "hidden",
    cursor:       "default",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent top bar — appears on hover */}
      <div style={{
        position:   "absolute",
        top: 0, left: 0, right: 0,
        height:     2,
        background: "linear-gradient(90deg, var(--color-accent), transparent)",
        opacity:    hovered ? 1 : 0,
        transition: "opacity 0.25s",
      }} />

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
