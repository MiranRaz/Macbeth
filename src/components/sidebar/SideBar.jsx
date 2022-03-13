import React from "react";
import "./SideBar.scss";

export default function SideBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#galerija">Galerija</a>
        </li>
      </ul>
    </div>
  );
}
