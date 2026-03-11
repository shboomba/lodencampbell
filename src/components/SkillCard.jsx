// ============================================================
//  src/components/SkillCard.jsx
//
//  Skill card with:
//    - Glowing border that pulses on scroll into view
//    - Lighter surface so it pops against the dark background
//    - Animated entrance on scroll
//    - No proficiency bar
//
//  Data comes from: src/data/skills.js
// ============================================================

import { useState, useEffect, useRef } from "react";

export default function SkillCard({ name, description, index = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, box-shadow 0.3s, border-color 0.3s, background 0.3s`,
        position: "relative", overflow: "hidden",
        height: "110px", display: "flex", flexDirection: "column",
        justifyContent: "center", gap: 8, padding: "20px 24px",
        borderRadius: "var(--radius)", cursor: "default",
        background: hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border: `1px solid ${hovered ? "rgba(61,214,140,0.4)" : "var(--color-border)"}`,
        boxShadow: hovered
          ? "0 4px 28px rgba(0,0,0,0.35), 0 0 0 1px rgba(61,214,140,0.1)"
          : "0 1px 6px rgba(0,0,0,0.2)",
      }}
    >
      {/* Faded first letter watermark */}
      <div style={{
        position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
        fontFamily: "var(--font-heading)", fontSize: 64, fontWeight: 900,
        color: hovered ? "rgba(61,214,140,0.08)" : "rgba(255,255,255,0.03)",
        lineHeight: 1, userSelect: "none", pointerEvents: "none",
        letterSpacing: "-2px", transition: "color 0.3s",
      }}>
        {name.charAt(0)}
      </div>

      {/* Top accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, var(--color-accent), var(--color-accent2))",
        borderRadius: "var(--radius) var(--radius) 0 0",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s",
      }} />

      <div style={{
        fontFamily: "var(--font-heading)", fontSize: 11, fontWeight: 700,
        color: hovered ? "var(--color-accent)" : "var(--color-text)",
        letterSpacing: "1.5px", textTransform: "uppercase",
        transition: "color 0.2s", position: "relative",
      }}>
        {name}
      </div>

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11,
        color: "var(--color-muted)", lineHeight: 1.4, position: "relative",
      }}>
        {description}
      </div>
    </div>
  );
}