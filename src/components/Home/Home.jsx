import { useState, useEffect } from "react";
import { Button, Grid } from "@mui/material";
import macbeth_yt from "../../assets/macbeth_yt.jpg";
import macbeth_text from "../../assets/macbeth_text.png";
import macbeth_text_light from "../../assets/macbeth_text_light.png";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import "./Home.css";
import MacbethHomeContent from "./MacbethHomeContent.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward.js";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import CSS file for animations

const Home = () => {
  const [showImage, setShowImage] = useState(false); // Set initial state to false
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  const { t } = useTranslation();

  useEffect(() => {
    const initialLoad = localStorage.getItem("initialLoad"); // Check if it's the initial page load

    if (!initialLoad) {
      // If it's the initial page load, delay the animation by 1 second
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 1000);

      // Set a flag in localStorage to indicate that the initial page load has occurred
      localStorage.setItem("initialLoad", "true");

      return () => clearTimeout(timer);
    } else {
      // If it's not the initial page load, show the image immediately without animation
      setShowImage(true);
    }
  }, []);

  return (
    <div
      style={{
        height: `calc(100vh - 65px)`,
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        transition: "all 0.3s ease-in-out",
        overflowY: "scroll",
        overflowX: "hidden", // Add overflow: hidden to hide overflowing content
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          height: "300px", // Set the desired height for the cropped image
          mt: 19,
        }}
      >
        <img
          src={macbeth_yt}
          alt="{alt}"
          draggable={false}
          loading="lazy"
          style={{
            width: "80%",
            marginTop: "-20%",
            marginBottom: "-10%",
            transition: "opacity 0.3s ease-in-out", // Add transition property
            opacity: showImage ? 1 : 0, // Apply opacity based on showImage state
          }}
        />
      </Grid>
      <Grid
        className={`transition-image ${showImage ? "show" : ""}`}
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1, // Ensure the lower image appears on top
          marginTop: "-6.7%", // Adjust the value to control the amount of vertical overlap
          marginRight: "-37%", // Adjust the value to control the amount of horizontal overlap
          overflow: "hidden",
        }}
      >
        <img
          className="logo"
          src={themeMode ? macbeth_text_light : macbeth_text}
          alt="{alt}"
          draggable={false}
          loading="lazy"
          style={{ width: "23%" }}
        />
      </Grid>
      {/* Intersection observer implementation */}
      <MacbethHomeContent />
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          paddingBottom: "100px",
        }}
      >
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "inline-block",
              cursor: "pointer",
            }}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <Button
              variant="text"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    transform: "rotate(-90deg)",
                  }}
                />
              }
              style={{
                fontFamily: "inherit",
                color: "inherit",
                fontWeight: "inherit",
              }}
            >
              {t("home")}
            </Button>
          </div>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center", // Add this line to center the arrow
          }}
        >
          <Link
            to={"/about"}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button
              variant="text"
              endIcon={<ArrowForwardIcon />}
              style={{
                fontFamily: "inherit",
                color: "inherit",
                fontWeight: "inherit",
              }}
            >
              {t("about")}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
