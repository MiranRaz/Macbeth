import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import GoTo from "../GoTo.jsx";
import { Grid } from "@mui/material";
import { useState } from "react"; // Import useState hook for handling state
import albumData from "./AlbumData.js";
import AlbumModal from "./AlbumModal.jsx";
import macbeth_logo from "../../assets/macbeth_logo.png";
import macbeth_logo_dark from "../../assets/macbeth_logo_dark.png";
const MusicPage = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  // translation
  // const { t } = useTranslation();

  // State to track the hovered image index
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1);

  // modal state
  const [openAlbum, setOpenAlbum] = useState(false);
  const [albumName, setAlbumName] = useState("");

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          width: "100vw",
          height: `calc(100vh - 100px)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Object.entries(albumData).map(([key, value], index) => (
          <Grid
            key={key}
            item
            xs={12}
            sm={5}
            md={3}
            lg={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1.5,
              opacity: hoveredImageIndex === index ? 1 : 0.9, // Apply opacity based on hover state
              transform:
                hoveredImageIndex === index ? "translateY(-10px)" : "none", // Apply movement based on hover state
              transition: "opacity 0.3s, transform 0.3s", // Add transition effect
              zIndex: 2,
            }}
            onMouseEnter={() => setHoveredImageIndex(index)} // Set the hovered image index on mouse enter
            onMouseLeave={() => setHoveredImageIndex(-1)} // Reset the hovered image index on mouse leave
          >
            <img
              src={value.img}
              alt={`image-${index}`}
              style={{
                width: "100%",
                cursor: "pointer",
              }}
              draggable={false}
              onClick={() => {
                setOpenAlbum(!openAlbum);
                setAlbumName(value.albumName);
              }}
            />
          </Grid>
        ))}
      </Grid>
      <AlbumModal
        open={openAlbum}
        setOpen={setOpenAlbum}
        albumName={albumName}
      />
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
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingBottom: "13px",
        }}
      >
        <GoTo from="gallery" to="video" deg="-180deg" />
      </Grid>
    </div>
  );
};

export default MusicPage;
