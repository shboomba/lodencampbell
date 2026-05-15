import { useState } from "react";

export default function SoftwareCard({ title, image, type, url, page, description, tags, onNavigate }) {
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
        position:   "relative",
        display:    "flex",
        flexDirection: "row",
        background: hovered ? "var(--color-surface2)" : "var(--color-surface)",
        border:     `1px solid ${hovered ? "rgba(61,214,140,0.35)" : "var(--color-border)"}`,
        borderRadius: "var(--radius-lg)",
        cursor:     "pointer",
        transition: "background 0.2s, border-color 0.2s",
        overflow:   "hidden",
        minHeight:  160,
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position:   "absolute",
        left: 0, top: 0, bottom: 0,
        width:      3,
        background: "var(--color-accent)",
        opacity:    hovered ? 1 : 0.4,
        transition: "opacity 0.2s",
      }} />

      {/* Image */}
      {image && (
        <div style={{
          flexShrink:  0,
          width:       220,
          overflow:    "hidden",
          background:  "var(--color-surface2)",
          borderRight: "1px solid var(--color-border)",
        }}>
          <img
            src={image}
            alt={title}
            style={{
              width:          "100%",
              height:         "100%",
              objectFit:      "contain",
              objectPosition: "center",
              display:        "block",
              transition:     "transform 0.35s ease",
              transform:      hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>

        {/* Top row: type badge + CTA */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          {type && (
            <span style={{
              fontFamily:    "var(--font-body)",
              fontSize:      11,
              fontWeight:    600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color:         "var(--color-accent)",
            }}>
              {type}
            </span>
          )}

          <span style={{
            fontFamily: "var(--font-body)",
            fontSize:   13,
            color:      hovered ? "var(--color-accent)" : "var(--color-muted)",
            transition: "color 0.2s",
            display:    "flex",
            alignItems: "center",
            gap:        6,
          }}>
            View Project
            <span style={{
              display:    "inline-block",
              transition: "transform 0.2s",
              transform:  hovered ? "translateX(4px)" : "none",
            }}>→</span>
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily:    "var(--font-body)",
          fontSize:      "clamp(18px, 2.5vw, 22px)",
          fontWeight:    700,
          color:         hovered ? "var(--color-accent)" : "var(--color-text)",
          marginBottom:  10,
          transition:    "color 0.2s",
          letterSpacing: "-0.3px",
          lineHeight:    1.2,
        }}>
          {title}
        </h3>

        {/* Description */}
        {description && (
          <p style={{
            fontFamily:   "var(--font-body)",
            fontSize:     15,
            color:        "var(--color-muted)",
            lineHeight:   1.7,
            marginBottom: 20,
            maxWidth:     680,
          }}>
            {description}
          </p>
        )}

        {/* Tags */}
        {tags?.length > 0 && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
