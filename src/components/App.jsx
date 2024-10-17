import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
// components
import Home from './Home/HomePage/Home.jsx';
import About from './About/About.jsx';
import NavBar from './NavBar/NavBar.jsx';
import ErrorPage from './ErrorPage.jsx';
import GalleryPage from './GalleryPage/GalleryPage.jsx';
import MusicPage from './MusicPage/MusicPage.jsx';
import VideoPage from './VideoPage/VideoPage.jsx';
// assets
// import macbethold from "../assets/macbethold.png";
// mui
import { createTheme } from '@mui/material/styles';
// style
import lightTheme from '../theme/LightTheme.js';
import darkTheme from '../theme/DarkTheme.js';
import macbeth_logo from '../assets/macbeth_logo.png';
import macbeth_logo_dark from '../assets/macbeth_logo_dark.png';

const App = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = createTheme(themeMode ? lightTheme : darkTheme);

  return (
    <Router>
      <NavBar />
      <div
        style={{
          paddingTop: '65px',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.text,
        }}
      >
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
          position: 'fixed',
          height: '60%',
          width: '60%',
          opacity: '0.1',
          bottom: -69,
          zIndex: 0,
        }}
        draggable="false"
      />
    </Router>
  );
};

export default App;
