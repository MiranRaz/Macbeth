import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home.jsx";
import About from "./About/About.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import ErrorPage from "./ErrorPage.jsx";
import Gallery from "./Gallery/Gallery.jsx";
const App = () => {
  return (
    <Router>
      <NavBar />
      <div style={{ paddingTop: "65px" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
