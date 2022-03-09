import React from "react";
import "./SideBar.scss";

export default function SideBar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"sidebar " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#main">početna</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#stream"> Macbeth</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#history">historija</a>
        </li>
      </ul>
    </div>
  );
}
