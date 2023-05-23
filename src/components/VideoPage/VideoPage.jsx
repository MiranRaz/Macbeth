import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { Grid } from "@mui/material";
import GoTo from "../GoTo.jsx";
import macbeth_logo from "../../assets/macbeth_logo.png";
import macbeth_logo_dark from "../../assets/macbeth_logo_dark.png";
const VideoPage = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  //translation
  const { t } = useTranslation();

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        height: "100vh",
      }}
    >
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
        }}
      >
        <GoTo from="stream" to="home" deg="-180deg" />
      </Grid>
    </div>
  );
};

export default VideoPage;
