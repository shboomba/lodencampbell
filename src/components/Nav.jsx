// ============================================================
//  src/components/Nav.jsx
//
//  Top navigation bar.
//  Links come from: src/data/nav.js
//  Visual style is controlled by inline styles below.
// ============================================================

import { useState } from "react";
import nav from "../data/nav";
import bio from "../data/bio";

export default function Nav({ activePage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (page) => { onNavigate(page); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 60px", height: "var(--nav-height)",
        background: "var(--color-nav-bg)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--color-border)",
      }}>
        <div onClick={() => navigate("home")} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
          <img src={bio.logo} alt="Logo" style={{ width: 38, height: 38, borderRadius: "50%", border: "1.5px solid var(--color-accent)" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: 13, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "2px", textTransform: "uppercase" }}>
            {bio.name}
          </span>
        </div>

        <div style={{ display: "flex", gap: 8 }} className="nav-desktop">
          {nav.map((item) => (
            <button key={item.page} onClick={() => navigate(item.page)} style={{
              fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "1.5px",
              textTransform: "uppercase", padding: "8px 16px", borderRadius: "var(--radius)",
              border: `1px solid ${activePage === item.page ? "var(--color-border)" : "transparent"}`,
              background: activePage === item.page ? "rgba(61,214,140,0.08)" : "none",
              color: activePage === item.page ? "var(--color-accent)" : "var(--color-muted)",
              cursor: "pointer", transition: "all 0.2s",
            }}>{item.label}</button>
          ))}
        </div>

        <button onClick={() => setMenuOpen((o) => !o)} className="nav-hamburger"
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8 }}>
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: "var(--color-text)",
              borderRadius: 2, transition: "all 0.3s",
              transform: i===0&&menuOpen ? "rotate(45deg) translate(5px,5px)" : i===2&&menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none",
              opacity: i===1&&menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          position: "fixed", top: "var(--nav-height)", left: 0, right: 0, zIndex: 99,
          background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)",
          display: "flex", flexDirection: "column", padding: "12px 20px", gap: 4,
        }}>
          {nav.map((item) => (
            <button key={item.page} onClick={() => navigate(item.page)} style={{
              fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "1.5px",
              textTransform: "uppercase", padding: "12px 16px", borderRadius: "var(--radius)",
              background: activePage === item.page ? "rgba(61,214,140,0.08)" : "none",
              color: activePage === item.page ? "var(--color-accent)" : "var(--color-muted)",
              border: "none", cursor: "pointer", textAlign: "left", width: "100%",
            }}>{item.label}</button>
          ))}
        </div>
      )}
      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
          nav { padding: 0 20px !important; }
        }
      `}</style>
    </>
  );
}