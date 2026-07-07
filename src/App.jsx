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
import Home          from "./pages/Home";
import About         from "./pages/About";
import Portfolio     from "./pages/Portfolio";
import OtherProjects from "./pages/OtherProjects";
import PBS           from "./pages/PBSProject";
import BadgerNews    from "./pages/BadgerNews";
import IceviteChat   from "./pages/IceviteChat";
import SneakyMasters from "./pages/SneakyMasters";
import EnvDistributor from "./pages/EnvDistributor";
import GamePage      from "./pages/GamePage";

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
      case "other":     return <OtherProjects onNavigate={navigate} />;
      case "pbs":       return <PBS       onNavigate={navigate} />;
      case "badger":    return <BadgerNews onNavigate={navigate} />;
      case "icevite":   return <IceviteChat   onNavigate={navigate} />;
      case "sneakymasters": return <SneakyMasters onNavigate={navigate} />;
      case "envdist":   return <EnvDistributor onNavigate={navigate} />;
      default:
        if (page.startsWith("game-")) return <GamePage id={page} onNavigate={navigate} />;
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <>
      <Nav activePage={page} onNavigate={navigate} />
      <div style={{ paddingTop: "var(--masthead-h)" }}>
        <main key={pageKey.current} className="fade-up">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}