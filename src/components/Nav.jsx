import { useState } from "react";
import nav from "../data/nav";
import bio from "../data/bio";

const IconHome = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
);

const IconGrid = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
  </svg>
);

const IconLayers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
    <polyline points="2 17 12 22 22 17"/>
    <polyline points="2 12 12 17 22 12"/>
  </svg>
);

const IconGitHub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconEmail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

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

function navIcon(icon) {
  if (icon === "home")   return <IconHome />;
  if (icon === "grid")   return <IconGrid />;
  if (icon === "layers") return <IconLayers />;
  return null;
}

const linkedInContact = bio.contacts.find(c => c.label.toLowerCase().includes("linkedin"));
const gmailContact    = bio.contacts.find(c => c.href.startsWith("mailto:") && c.label.toLowerCase().includes("gmail"));
const uscContact      = bio.contacts.find(c => c.href.startsWith("mailto:") && c.label.toLowerCase().includes("usc"));

const socialIconStyle = {
  display:        "flex",
  alignItems:     "center",
  justifyContent: "center",
  width:          34,
  height:         34,
  borderRadius:   "var(--radius)",
  border:         "1px solid var(--color-border)",
  color:          "var(--color-muted)",
  textDecoration: "none",
  transition:     "color 0.15s, border-color 0.15s",
};

export default function Nav({ activePage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const navigate = (page) => {
    onNavigate(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setOpen(o => !o)}
        className="nav-hamburger"
        style={{
          display:      "none",
          position:     "fixed",
          top:          14,
          left:         14,
          zIndex:       200,
          background:   "var(--color-surface)",
          border:       "1px solid var(--color-border)",
          borderRadius: "var(--radius)",
          padding:      8,
          cursor:       "pointer",
          color:        "var(--color-text)",
          alignItems:   "center",
          justifyContent: "center",
        }}
      >
        {open ? <IconClose /> : <IconMenu />}
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="nav-backdrop"
          style={{
            display:    "none",
            position:   "fixed",
            inset:      0,
            background: "rgba(0,0,0,0.55)",
            zIndex:     99,
          }}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`sidebar${open ? " open" : ""}`}
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          bottom:        0,
          width:         "var(--sidebar-width)",
          background:    "var(--color-nav-bg)",
          borderRight:   "1px solid var(--color-border)",
          backdropFilter:"blur(20px)",
          display:       "flex",
          flexDirection: "column",
          zIndex:        100,
          overflowY:     "auto",
          transition:    "transform 0.28s ease",
        }}
      >
        {/* Logo */}
        <div
          onClick={() => navigate("home")}
          style={{
            padding:      "28px 24px 24px",
            cursor:       "pointer",
            borderBottom: "1px solid var(--color-border)",
            flexShrink:   0,
          }}
        >
          <img
            src={bio.logo}
            alt="Logo"
            style={{ width: 38, height: 38, borderRadius: "50%", border: "1.5px solid var(--color-accent)" }}
          />
        </div>

        {/* Nav links */}
        <div style={{ flex: 1, padding: "16px 12px", display: "flex", flexDirection: "column", gap: 4 }}>
          {nav.map(item => {
            const active = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => navigate(item.page)}
                style={{
                  display:       "flex",
                  alignItems:    "center",
                  gap:           10,
                  padding:       "10px 12px",
                  borderRadius:  "var(--radius)",
                  border:        "none",
                  background:    active ? "rgba(61,214,140,0.08)" : "none",
                  color:         active ? "var(--color-accent)" : "var(--color-muted)",
                  fontFamily:    "var(--font-mono)",
                  fontSize:      12,
                  letterSpacing: "0.5px",
                  cursor:        "pointer",
                  textAlign:     "left",
                  width:         "100%",
                  transition:    "color 0.15s, background 0.15s",
                }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.color = "var(--color-text)"; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.color = active ? "var(--color-accent)" : "var(--color-muted)"; }}
              >
                {navIcon(item.icon)}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Socials + Contact Me */}
        <div style={{
          padding:       "20px 16px 28px",
          borderTop:     "1px solid var(--color-border)",
          display:       "flex",
          flexDirection: "column",
          gap:           14,
          flexShrink:    0,
        }}>
          <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
            {linkedInContact && (
              <a href={linkedInContact.href} target="_blank" rel="noreferrer" style={socialIconStyle}
                onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
              ><IconLinkedIn /></a>
            )}
            {gmailContact && (
              <a href={gmailContact.href} style={socialIconStyle}
                onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
              ><IconEmail /></a>
            )}
            {uscContact && (
              <a href={uscContact.href} style={socialIconStyle}
                onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--color-muted)"}
              ><IconEmail /></a>
            )}
          </div>

          <a
            href={gmailContact ? gmailContact.href : "mailto:loden.campbell@gmail.com"}
            style={{
              display:        "block",
              textAlign:      "center",
              padding:        "10px 0",
              border:         "1px solid var(--color-accent)",
              borderRadius:   "var(--radius)",
              color:          "var(--color-accent)",
              fontFamily:     "var(--font-mono)",
              fontSize:       11,
              letterSpacing:  "1.5px",
              textTransform:  "uppercase",
              textDecoration: "none",
              transition:     "background 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(61,214,140,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "none"}
          >
            Contact Me
          </a>
        </div>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .sidebar         { transform: translateX(-100%); width: 220px !important; }
          .sidebar.open    { transform: translateX(0); }
          .nav-hamburger   { display: flex !important; }
          .nav-backdrop    { display: block !important; }
        }
      `}</style>
    </>
  );
}
