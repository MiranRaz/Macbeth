import React from "react";
import "./Main.scss";
import MCBTHTPT from "../../img/MCBTHTPT.png";

export default function Main() {
  return (
    <div className="main" id="main">
      <div className="imageContainer">
        <img src={MCBTHTPT} alt="Macbeth" />
      </div>
    </div>
  );
}
