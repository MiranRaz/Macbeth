import { Grid } from "@mui/material";
import macbeth_yt from "../../assets/macbeth_yt.jpg";
import macbeth_text from "../../assets/macbeth_text.png";
import macbeth_text_light from "../../assets/macbeth_text_light.png";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";

const Home = () => {
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  return (
    <div
      style={{
        height: `calc(100vh - 65px)`,
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        transition: "all 0.3s ease-in-out",
        overflow: "hidden", // Add overflow: hidden to hide overflowing content
      }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "center", pt: 14 }}
      >
        <img
          src={macbeth_yt}
          alt="{alt}"
          draggable={false}
          loading="lazy"
          style={{ width: "80%" }}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1, // Ensure the lower image appears on top
          marginTop: "-7%", // Adjust the value to control the amount of vertical overlap
          marginRight: "-37%", // Adjust the value to control the amount of horizontal overlap
        }}
      >
        <img
          src={themeMode ? macbeth_text_light : macbeth_text}
          alt="{alt}"
          draggable={false}
          loading="lazy"
          style={{ width: "23%" }}
        />
      </Grid>
    </div>
  );
};

export default Home;
