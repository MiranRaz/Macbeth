import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { decode } from "blurhash";

import galerija_slike from "../../assets/galerija_slike.png";

const Gallery = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  const blurhash = "LKO2?V%2Tw=w]~RBVZRi};RPxuwH";
  const [imageData, setImageData] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const pixels = decode(blurhash, 32, 32); // Adjust the width and height as needed
    setImageData(pixels);
    const image = new Image();
    image.src = galerija_slike;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div
      style={{
        height: `calc(100vh - 65px)`,
        width: "100vw",
        backgroundColor: theme.palette.primary.main,
        overflow: "scroll",
        color: theme.palette.primary.text,
      }}
    >
      {imageData && (
        <>
          {imageLoaded ? null : <div>Loading...</div>}
          <img
            src={galerija_slike}
            alt="Large Image"
            draggable={false}
            loading="lazy"
            style={{
              filter: imageLoaded ? "none" : "blur(30px)",
              width: `${imageData.width}px`,
              height: `${imageData.height}px`,
              opacity: imageLoaded ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Gallery;
