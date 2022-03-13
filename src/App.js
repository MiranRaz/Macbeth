import React, { useState } from "react";
import "./App.scss";
import Gallery from "./components/gallery/Gallery";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Gallery />
      </div>
    </div>
  );
}
