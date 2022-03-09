import "./Stream.scss";

import CRNE from "../../img/album/CRNE.jpg";
import KAJLO from "../../img/album/KAJLO.jpg";
import SAMO from "../../img/album/SAMO.jpg";
import ISTINOM from "../../img/album/ISTINOM.jpg";

import HorizontalScroll from "react-scroll-horizontal";

export default function Stream() {
  const child = { width: `100vw`, height: `100vh` };

  return (
    <div className="stream" id="stream">
      <HorizontalScroll reverseScroll>
        <div style={child} className="item">
          <a
            href="https://songwhip.com/macbeth/crne-oci"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CRNE} alt="Crne oči / 1996" />
          </a>
        </div>
        <div style={child} className="item">
          <a
            href="https://songwhip.com/macbeth/crne-oci"
            target="_blank"
            rel="noreferrer"
          >
            <img src={KAJLO} alt="Crne oči / 1996" />
          </a>
        </div>
        <div style={child} className="item">
          <a
            href="https://songwhip.com/macbeth/crne-oci"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SAMO} alt="Crne oči / 1996" />
          </a>
        </div>
        <div style={child} className="item">
          <a
            href="https://songwhip.com/macbeth/crne-oci"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ISTINOM} alt="Crne oči / 1996" />
          </a>
        </div>
      </HorizontalScroll>
    </div>
  );
}
