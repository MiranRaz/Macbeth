import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { Grid } from "@mui/material";
import GoTo from "../GoTo.jsx";
import macbeth_logo from "../../assets/macbeth_logo.png";
import macbeth_logo_dark from "../../assets/macbeth_logo_dark.png";
import { array } from "./VideosData.js";

const VideoPage = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        height: "100vh",
        width: "100vw",
        overflow: "scroll",
        zIndex: 2,
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: "10vh",
          paddingBottom: "20vh",
          zIndex: 2,
        }}
      >
        {array.map((item) => (
          <iframe
            style={{
              border: 0,
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              marginBottom: "20px", // Add padding at the bottom of each iframe
              zIndex: 2,
              margin: "10px",
            }}
            width="460"
            height="315"
            src={`https://www.youtube.com/embed/${item}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
            allowFullScreen
          />
        ))}
      </Grid>
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
        }}
        draggable="false"
      />
      <Grid
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingBottom: "13px",
          zIndex: 4,
        }}
      >
        <GoTo from="stream" to="home" deg="-180deg" />
      </Grid>
    </div>
  );
};

export default VideoPage;
