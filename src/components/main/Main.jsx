import React from "react";
import "./Main.scss";
import MCBTHTPT from "../../img/MCBTHTPT.png";
import DOLE from "../../img/DOLE.png";

export default function Main() {
  return (
    <div className="main" id="main">
      <div className="imageContainer">
        <div className="imageA">
          <img src={MCBTHTPT} alt="Macbeth" />
        </div>
      </div>
      <div className="anchor">
        <a href="#stream">
            <img src={DOLE} alt="Macbeth" />
        </a>
      </div>
    </div>
  );
}
