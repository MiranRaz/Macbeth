import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import images from "./images.jsx";
import ImageWithBlurhash from "./ImageWithBlurHash.jsx";
import CardPlaceholder from "./CardPlaceholder.jsx";

const GalleryPage = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        padding: "5px",
        height: "calc(100vh - 64px)",
        overflow: "scroll",
      }}
    >
      {images.map((image) => (
        <ImageWithBlurhash
          key={image.id}
          src={image.path}
          hash={image.hash}
          placeholder={<CardPlaceholder />}
        />
      ))}
    </div>
  );
};

export default GalleryPage;
