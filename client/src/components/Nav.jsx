// ================================================================
//  client/src/components/Nav.jsx
//
//  Top navigation bar. Reads nav links from the API.
//  To add a page: edit server/data/nav.json — no code change needed.
// ================================================================

import { useState } from "react";
import { useApi }   from "../hooks/useApi";

const styles = {
  nav: {
    position:       "fixed",
    top:            0, left: 0, right: 0,
    zIndex:         100,
    display:        "flex",
    alignItems:     "center",
    justifyContent: "space-between",
    padding:        "0 60px",
    height:         "var(--nav-height)",
    background:     "rgba(7,7,13,0.88)",
    backdropFilter: "blur(20px)",
    borderBottom:   "1px solid var(--color-border)",
  },
  logo: {
    display:    "flex",
    alignItems: "center",
    gap:        12,
    cursor:     "pointer",
    textDecoration: "none",
  },
  logoImg: {
    width:        38,
    height:       38,
    borderRadius: "50%",
    border:       "1.5px solid var(--color-accent)",
  },
  logoText: {
    fontFamily:    "var(--font-heading)",
    fontSize:      13,
    fontWeight:    700,
    color:         "var(--color-accent)",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
  links: { display: "flex", gap: 8 },
  link: {
    fontFamily:    "var(--font-mono)",
    fontSize:      11,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding:       "8px 16px",
    borderRadius:  "var(--radius)",
    border:        "1px solid transparent",
    cursor:        "pointer",
    background:    "none",
    transition:    "all 0.2s",
  },
  hamburger: {
    display:        "none",
    flexDirection:  "column",
    gap:            5,
    cursor:         "pointer",
    padding:        8,
    background:     "none",
    border:         "none",
  },
  bar: {
    display:      "block",
    width:        22,
    height:       2,
    background:   "var(--color-text)",
    borderRadius: 2,
    transition:   "all 0.3s",
  },
  mobileMenu: {
    position:   "fixed",
    top:        "var(--nav-height)",
    left:       0, right: 0,
    background: "rgba(7,7,13,0.97)",
    borderBottom: "1px solid var(--color-border)",
    flexDirection: "column",
    padding:    "12px 20px",
    gap:        4,
    zIndex:     99,
  },
  mobileLink: {
    fontFamily:    "var(--font-mono)",
    fontSize:      12,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    padding:       "12px 16px",
    borderRadius:  "var(--radius)",
    cursor:        "pointer",
    background:    "none",
    border:        "none",
    textAlign:     "left",
    width:         "100%",
    transition:    "all 0.2s",
  },
};

export default function Nav({ activePage, onNavigate, bio }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: navItems } = useApi("/api/nav");

  const navigate = (page) => { onNavigate(page); setMenuOpen(false); };

  const linkStyle = (page) => ({
    ...styles.link,
    color:      activePage === page ? "var(--color-accent)" : "var(--color-muted)",
    borderColor: activePage === page ? "var(--color-border)" : "transparent",
    background:  activePage === page ? "rgba(0,255,170,0.05)" : "none",
  });
  const mobileLinkStyle = (page) => ({
    ...styles.mobileLink,
    color: activePage === page ? "var(--color-accent)" : "var(--color-muted)",
    background: activePage === page ? "rgba(0,255,170,0.05)" : "none",
  });

  return (
    <>
      <nav style={styles.nav}>
        {/* Logo */}
        <div style={styles.logo} onClick={() => navigate("home")}>
          {bio?.logo && <img src={bio.logo} alt="Logo" style={styles.logoImg} />}
          <span style={styles.logoText}>{bio?.name ?? "Loden Campbell"}</span>
        </div>

        {/* Desktop links */}
        <div style={styles.links}>
          {navItems?.map((item) => (
            <button
              key={item.page}
              style={linkStyle(item.page)}
              onClick={() => navigate(item.page)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span style={{ ...styles.bar, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
          <span style={{ ...styles.bar, opacity: menuOpen ? 0 : 1 }} />
          <span style={{ ...styles.bar, transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div style={{ ...styles.mobileMenu, display: menuOpen ? "flex" : "none" }}>
        {navItems?.map((item) => (
          <button
            key={item.page}
            style={mobileLinkStyle(item.page)}
            onClick={() => navigate(item.page)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Responsive style override via a <style> tag */}
      <style>{`
        @media (max-width: 640px) {
          nav { padding: 0 20px !important; }
          nav > div:nth-child(2) { display: none !important; }
          nav > button { display: flex !important; }
        }
      `}</style>
    </>
  );
}
