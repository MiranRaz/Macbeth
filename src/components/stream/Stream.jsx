import "./Stream.scss";

import CRNE from "../../img/album/CRNE.jpg";
import KAJLO from "../../img/album/KAJLO.jpg";
import SAMO from "../../img/album/SAMO.jpg";
import ISTINOM from "../../img/album/ISTINOM.jpg";

export default function Stream() {
  return (
    <div className="stream" id="stream">
      <h1>MACBETH</h1>
      <div className="container">
        <div className="item">
          <a
            href="https://songwhip.com/macbeth/crne-oci"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CRNE} alt="Crne oči / 1996" />
          </a>
        </div>
        <div className="item">
          <a
            href="https://songwhip.com/macbeth/kajlostara"
            target="_blank"
            rel="noreferrer"
          >
            <img src={KAJLO} alt="Kajlo stara / 1999" />
          </a>
        </div>
        <div className="item">
          <a
            href="https://songwhip.com/macbeth/samo-jedan-je"
            target="_blank"
            rel="noreferrer"
          >
            <img src={SAMO} alt="Samo Jedan Je / 2000" />
          </a>
        </div>
        <div className="item">
          <a
            href="https://songwhip.com/macbeth/istinom"
            target="_blank"
            rel="noreferrer"
          >
            <img src={ISTINOM} alt="Istinom / 2003" />
          </a>
        </div>
      </div>
    </div>
  );
}
