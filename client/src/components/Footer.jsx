// ================================================================
//  client/src/components/Footer.jsx
// ================================================================

const s = {
  footer: {
    borderTop:      "1px solid var(--color-border)",
    padding:        "28px 60px",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "space-between",
    flexWrap:       "wrap",
    gap:            16,
  },
  text: {
    fontFamily:    "var(--font-mono)",
    fontSize:      11,
    color:         "var(--color-muted)",
    letterSpacing: 1,
  },
  links: { display: "flex", gap: 24 },
  link: {
    fontFamily:     "var(--font-mono)",
    fontSize:       11,
    color:          "var(--color-muted)",
    textDecoration: "none",
    transition:     "color 0.2s",
    letterSpacing:  1,
  },
};

export default function Footer({ bio }) {
  return (
    <footer style={s.footer}>
      <span style={s.text}>© {new Date().getFullYear()} Loden Campbell</span>
      <div style={s.links}>
        {bio?.contacts?.map((c) => (
          <a
            key={c.href}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={s.link}
            onMouseEnter={(e) => (e.target.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
          >
            {c.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
