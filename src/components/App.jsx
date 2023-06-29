import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import GalleryPage from "./GalleryPage/GalleryPage.jsx";
import MusicPage from "./MusicPage/MusicPage.jsx";
import VideoPage from "./VideoPage/VideoPage.jsx";
import macbethold from "../assets/macbethold.png";

const App = () => {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: "65px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/stream" element={<MusicPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <img
        src={macbethold}
        alt="macbeth old"
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          opacity: "0.1",
          top: 64,
          right: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
        draggable="false"
      />
    </Router>
  );
};

export default App;
