// ============================================================
//  src/pages/IceviteChat.jsx
//
//  Case study: IceVite Team Chat.
// ============================================================

export default function IceviteChat({ onNavigate }) {

  const stack = ["Django", "HTMX", "Bootstrap 5", "Python", "Web Push (VAPID)", "Service Workers", "SQLite"];

  const features = [
    { label: "One Channel Per Team",  desc: "Every team in the league automatically gets a private chat; players only see chats for teams they are on, switchable from a dropdown matching the site's My Teams menu" },
    { label: "Captain Moderation",    desc: "Captains can pin a message as the team announcement, delete messages, and mute members; permissions are enforced server-side" },
    { label: "Cross-Platform Push",   desc: "Real Web Push (VAPID + service worker) delivers announcements to iPhone and Android alike, with no third-party app or service" },
    { label: "Native Integration",    desc: "Built in IceVite's exact stack (Django + HTMX + Bootstrap 5) so it drops into the existing site, login, and look" },
  ];

  const contributions = [
    "Built the full feature in the site's real stack, from data model and server-rendered HTMX endpoints to UI matching IceVite's existing Bootstrap markup",
    "Implemented the Web Push pipeline end to end: subscription management, VAPID keys, service worker, and per-device install prompts with platform-specific Add to Home Screen steps",
    "Designed captain moderation (pin, delete, mute) around the league's existing captain role, with all rules enforced server-side",
    "Wrote a complete integration guide mapping every piece onto the live IceVite codebase: one Django app, one migration, auth wired to request.user",
  ];

  const screenshots = [
    "/other/icevite/chat-destroyers.png",
    "/other/icevite/mobile-after.png",
    "/other/icevite/push-ui.png",
    "/other/icevite/insitu-teampage-chat.png",
  ];

  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>

      {/* ── Hero banner ──────────────────────────────────────── */}
      <div style={{
        borderBottom: "1px solid var(--color-border)",
        background:   "linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg) 100%)",
      }}>
        <div style={{
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: "80px var(--space-lg) 60px",
        }}>
          <button onClick={() => onNavigate("other")}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-body)", fontSize: 13,
              color: "var(--color-muted)", background: "none",
              border: "none", cursor: "pointer", marginBottom: 40,
              transition: "color 0.2s", padding: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-muted)")}
          >
            ← Back to Other Projects
          </button>

          <div className="fade-up" style={{ marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11, color: "var(--color-accent)", letterSpacing: "1.5px", textTransform: "uppercase" }}>
              Community Tool
            </span>
          </div>

          <h1 className="fade-up delay-1" style={{
            fontFamily: "var(--font-heading)", fontSize: "clamp(28px, 4vw, 52px)",
            fontWeight: 700, color: "var(--color-text)", lineHeight: 1.1,
            letterSpacing: "-0.5px", marginBottom: 20, maxWidth: 700,
          }}>
            IceVite <span style={{ color: "var(--color-accent)" }}>Team Chat</span>
          </h1>

          <p className="fade-up delay-2" style={{
            fontFamily: "var(--font-body)", fontSize: 16,
            lineHeight: 1.8, color: "var(--color-muted)",
            maxWidth: 680, marginBottom: 28,
          }}>
            A native team chat feature built for icevite.com, the schedule and bench
            management site used by the Bay Area's Sharks Ice adult hockey league. Every
            team gets its own private chat with captain moderation and cross-platform
            push notifications, living right inside the site players already use.
          </p>

          <div className="fade-up delay-3" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {stack.map((s) => <span key={s} className="tag">{s}</span>)}
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px var(--space-lg)" }}>

        {/* The Problem */}
        <div className="section-label fade-up">Why It Exists</div>
        <h2 className="section-title fade-up delay-1">The Problem</h2>
        <p className="fade-up delay-2" style={{
          fontFamily: "var(--font-body)", fontSize: 16,
          lineHeight: 1.8, color: "var(--color-muted)",
          maxWidth: 720, marginBottom: 80,
        }}>
          Team captains had no reliable way to reach a whole roster. Group texts break
          down when a team mixes iPhones and Android phones, so every team ended up
          scattered across group texts, WhatsApp, and Discord just to answer "who's in
          Saturday?" As a player in the league on three teams, I built the fix: chat
          that lives inside the league site every player already has an account on,
          with push notifications that work on any phone.
        </p>

        {/* Features */}
        <div className="section-label fade-up">How It Works</div>
        <h2 className="section-title fade-up delay-1">Features</h2>
        <div className="icevite-features fade-up delay-2" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 14,
          maxWidth: 880,
          marginBottom: 80,
        }}>
          {features.map((f) => (
            <div key={f.label} style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              padding: "20px 24px",
            }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>
                {f.label}
              </div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-muted)", lineHeight: 1.7, margin: 0 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contributions */}
        <div className="section-label fade-up">Solo Project</div>
        <h2 className="section-title fade-up delay-1">What I Built</h2>
        <ul className="fade-up delay-2" style={{
          listStyle: "none", display: "flex", flexDirection: "column", gap: 14,
          maxWidth: 720, marginBottom: 80,
        }}>
          {contributions.map((item, i) => (
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "var(--color-accent)", fontSize: 10, marginTop: 7, flexShrink: 0 }}>▸</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        {/* Screenshots */}
        <div className="section-label fade-up">Media</div>
        <h2 className="section-title fade-up delay-1">Screenshots</h2>
        <div className="icevite-shots fade-up delay-2" style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 12,
          marginBottom: 40,
        }}>
          {screenshots.map((src, i) => (
            <div key={i} style={{
              borderRadius: "var(--radius)",
              overflow: "hidden",
              border: "1px solid var(--color-border)",
              background: "#ffffff",
            }}>
              <img src={src} alt={`IceVite Team Chat screenshot ${i + 1}`}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 700px) {
          .icevite-features { grid-template-columns: 1fr !important; }
          .icevite-shots { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
