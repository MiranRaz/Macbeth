import React, { useState, useEffect } from "react";
import "./App.scss";
import Main from "./components/main/Main";
import NavBar from "./components/navbar/NavBar";
import Stream from "./components/stream/Stream";
import History from "./components/history/History";
import SideBar from "./components/sidebar/SideBar";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {loading ? (
        <div className="loadCont">
          <h1>Macbeth</h1>
        </div>
      ) : (
        <div className="app">
          <>
            <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
              <Main />
              <Stream />
              <History />
            </div>
          </>
        </div>
      )}
    </>
  );
}
