// ============================================================
//  src/App.jsx
//
//  Root component — handles page routing.
//
//  TO ADD A NEW PAGE:
//    1. Create src/pages/MyPage.jsx
//    2. Import it below
//    3. Add a case to the switch statement
//    4. Add an entry to src/data/nav.js
// ============================================================

import { useState, useRef } from "react";
import Nav                from "./components/Nav";
import Footer             from "./components/Footer";
import AmbientBackground  from "./components/AmbientBackground";
import Home          from "./pages/Home";
import About         from "./pages/About";
import Portfolio     from "./pages/Portfolio";
import OtherProjects from "./pages/OtherProjects";
import PBS           from "./pages/PBSProject";

export default function App() {
  const [page, setPage] = useState("home");
  const pageKey         = useRef(0);

  const navigate = (newPage) => {
    pageKey.current += 1;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Add new pages here ──────────────────────────────────────
  const renderPage = () => {
    switch (page) {
      case "home":      return <Home      onNavigate={navigate} />;
      case "about":     return <About     onNavigate={navigate} />;
      case "portfolio": return <Portfolio onNavigate={navigate} />;
      case "other":     return <OtherProjects />;
      case "pbs":       return <PBS       onNavigate={navigate} />;
      default:          return <Home      onNavigate={navigate} />;
    }
  };

  return (
    <>
      <AmbientBackground />
      <Nav activePage={page} onNavigate={navigate} />
      <div style={{ marginLeft: "var(--sidebar-width)", transition: "margin-left 0.28s ease" }}>
        <main key={pageKey.current} className="fade-up">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}