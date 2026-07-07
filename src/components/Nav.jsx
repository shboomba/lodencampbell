// ============================================================
//  src/components/Nav.jsx
//
//  Fixed top navbar: logo + name, page links, availability,
//  contact link. Collapses to a burger menu on mobile.
//  Links come from: src/data/nav.js
// ============================================================

import { useState } from "react";
import nav from "../data/nav";
import bio from "../data/bio";

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const IconClose = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const contactHref =
  bio.contacts.find(c => c.href.startsWith("mailto:") && c.label.toLowerCase().includes("gmail"))?.href
  || "mailto:loden.campbell@gmail.com";

export default function Nav({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header style={{
        position:       "fixed",
        top:            0,
        left:           0,
        right:          0,
        height:         "var(--masthead-h)",
        zIndex:         100,
        display:        "flex",
        alignItems:     "center",
        justifyContent: "space-between",
        gap:            24,
        padding:        "0 var(--space-lg)",
        background:     "var(--color-nav-bg)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom:   "1px solid var(--color-border)",
      }}>
        {/* Logo + name */}
        <button
          onClick={() => go("home")}
          style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "none", border: "none", cursor: "pointer", padding: 0,
          }}
        >
          <img
            src={bio.logo}
            alt=""
            style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid var(--color-accent)", flexShrink: 0 }}
          />
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text)",
            whiteSpace: "nowrap",
          }}>
            {bio.name}
          </span>
        </button>

        {/* Desktop nav — centered in the bar */}
        <nav className="masthead-links" style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 28,
        }}>
          {nav.map(item => {
            const active = activePage === item.page || (item.page === "portfolio" && activePage?.startsWith("game-"));
            return (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                style={{
                  background: "none", border: "none", cursor: "pointer", padding: "4px 0",
                  fontFamily: "var(--font-body)", fontSize: 13, fontWeight: active ? 600 : 500,
                  letterSpacing: "0.04em",
                  color: active ? "var(--color-accent)" : "var(--color-muted)",
                  transition: "color 0.18s",
                  borderBottom: `1px solid ${active ? "var(--color-accent)" : "transparent"}`,
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--color-text)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = "var(--color-muted)"; }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Contact — pinned top right */}
        <a
          className="masthead-contact"
          href={contactHref}
          style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--color-accent)", textDecoration: "none",
            borderBottom: "1px solid var(--color-accent-deep)", paddingBottom: 2,
            whiteSpace: "nowrap",
          }}
        >
          Contact
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(o => !o)}
          className="masthead-burger"
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            color: "var(--color-text)", padding: 6,
          }}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </header>

      {/* Mobile dropdown panel */}
      {open && (
        <div
          className="masthead-panel"
          style={{
            position: "fixed", top: "var(--masthead-h)", left: 0, right: 0, zIndex: 99,
            background: "var(--color-nav-bg)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid var(--color-border)",
            display: "none", flexDirection: "column",
            padding: "12px var(--space-lg) 24px",
          }}
        >
          {nav.map(item => {
            const active = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => go(item.page)}
                style={{
                  background: "none", border: "none", cursor: "pointer", textAlign: "left",
                  padding: "14px 0", borderBottom: "1px solid var(--color-border)",
                  fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 600,
                  color: active ? "var(--color-accent)" : "var(--color-text)",
                }}
              >
                {item.label}
              </button>
            );
          })}
          <a
            href={contactHref}
            style={{
              marginTop: 18, fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            Contact Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 820px) {
          .masthead-links   { display: none !important; }
          .masthead-contact { display: none !important; }
          .masthead-burger  { display: flex !important; }
          .masthead-panel   { display: flex !important; }
        }
      `}</style>
    </>
  );
}
