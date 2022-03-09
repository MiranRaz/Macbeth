import React, { useState } from "react";
import "./App.scss";

import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
import Stream from "./components/stream/Stream";
import Footer from "./components/footer/Footer";
import History from "./components/history/History";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Main />
        <Stream />
        <History />
        <Footer />
      </div>
    </div>
  );
}
