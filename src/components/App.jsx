import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import GalleryPage from "./GalleryPage/GalleryPage.jsx";
import MusicPage from "./MusicPage/MusicPage.jsx";
import VideoPage from "./VideoPage/VideoPage.jsx";
import macbeth_logo from "../assets/macbeth_logo.png";
import macbeth_logo_dark from "../assets/macbeth_logo_dark.png";
import { useSelector } from "react-redux";

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);

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
        src={themeMode ? macbeth_logo : macbeth_logo_dark}
        alt="macbeth logo"
        style={{
          position: "fixed",
          height: "60%",
          width: "60%",
          opacity: "0.1",
          bottom: -69,
          zIndex: 0,
          pointerEvents: "none",
        }}
        draggable="false"
      />
    </Router>
  );
};

export default App;
