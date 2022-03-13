import React from "react";
import "../gallery/Gallery.css";

import MCBTHTPT from "../../img/MCBTHTPT.png";

export default function Gallery() {
  return (
    <div>
      <div className="imageContainer">
        <div className="imageA">
          <img src={MCBTHTPT} alt="Macbeth" />
        </div>
      </div>
    </div>
  );
}
