// ================================================================
//  client/src/App.jsx
//
//  Root component. Handles page routing and shared data.
//
//  To add a new page:
//    1. Create client/src/pages/MyPage.jsx
//    2. Import it below
//    3. Add a case to the renderPage() switch
//    4. Add to server/data/nav.json  ← nav link auto-appears
// ================================================================

import { useState, useRef } from "react";
import Nav           from "./components/Nav";
import Footer        from "./components/Footer";
import Home          from "./pages/Home";
import Portfolio     from "./pages/Portfolio";
import OtherProjects from "./pages/OtherProjects";
import { useApi }    from "./hooks/useApi";

export default function App() {
  const [page, setPage]  = useState("home");
  const pageKey          = useRef(0);
  const { data: bio }    = useApi("/api/bio");

  const navigate = (newPage) => {
    pageKey.current += 1;
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── Add new pages here ──────────────────────────────────────
  const renderPage = () => {
    switch (page) {
      case "home":      return <Home      bio={bio} onNavigate={navigate} />;
      case "portfolio": return <Portfolio />;
      case "other":     return <OtherProjects />;
      default:          return <Home      bio={bio} onNavigate={navigate} />;
    }
  };

  return (
    <>
      <Nav activePage={page} onNavigate={navigate} bio={bio} />

      {/* Page content — key forces re-mount + fade animation on navigation */}
      <main key={pageKey.current} className="fade-up">
        {renderPage()}
      </main>

      <Footer bio={bio} />
    </>
  );
}
