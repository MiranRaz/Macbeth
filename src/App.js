import React, { useState, useEffect } from "react";
import "./App.scss";

import Gallery from "./components/gallery/Gallery";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

import gitara from "../src/img/gitara.png";

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      {loading ? (
        <div className="loadingData">
          <div className="icona">
            <img src={gitara} />
          </div>
        </div>
      ) : (
        <>
          <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="sections">
            <Gallery />
          </div>
        </>
      )}
    </div>
  );
}
