import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { Grid } from "@mui/material";
import { allVideosYT } from "./VideosData.js";

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
          backgroundColor: theme.palette.primary.main,
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
        {allVideosYT.map((item) => (
          <iframe
            key={item}
            style={{
              border: 0,
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
              marginBottom: "20px", // Add padding at the bottom of each iframe
              zIndex: 2,
              margin: "10px",
              backgroundColor: "black",
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
    </div>
  );
};

export default VideoPage;
