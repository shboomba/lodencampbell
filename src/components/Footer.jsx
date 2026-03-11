// ============================================================
//  src/components/Footer.jsx
//
//  Site footer — shows copyright and contact links.
//  Contact links come from: src/data/bio.js
// ============================================================

import bio from "../data/bio";

export default function Footer() {
  return (
    <footer style={{
      borderTop:      "1px solid var(--color-border)",
      padding:        "28px 60px",
      display:        "flex",
      alignItems:     "center",
      justifyContent: "space-between",
      flexWrap:       "wrap",
      gap:            16,
    }}>
      <span style={{
        fontFamily:    "var(--font-mono)",
        fontSize:      11,
        color:         "var(--color-muted)",
        letterSpacing: 1,
      }}>
        © {new Date().getFullYear()} {bio.name}
      </span>

      <div style={{ display: "flex", gap: 24 }}>
        {bio.contacts.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              fontFamily:     "var(--font-mono)",
              fontSize:       11,
              color:          "var(--color-muted)",
              textDecoration: "none",
              transition:     "color 0.2s",
              letterSpacing:  1,
            }}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
          >
            {c.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 24px 20px !important; flex-direction: column; align-items: center; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
