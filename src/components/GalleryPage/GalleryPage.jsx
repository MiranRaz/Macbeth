import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import galerija_slike from "../../assets/gallery/galerija_slike.png";
import mouse_click_move from "../../assets/mouse_click_move.jpg";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const GalleryPage = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  const { t } = useTranslation();

  const containerRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (event) => {
    setScrolling(true);
    setStartX(event.clientX);
    setStartY(event.clientY);
  };

  const handleMouseUp = () => {
    setScrolling(false);
  };

  const handleMouseMove = (event) => {
    if (!scrolling) return;
    event.preventDefault();
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    const newScrollX = scrollX - deltaX;
    const newScrollY = scrollY - deltaY;
    setScrollX(newScrollX);
    setScrollY(newScrollY);
    setStartX(event.clientX);
    setStartY(event.clientY);
    containerRef.current.scrollTo(newScrollX, newScrollY);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  if (loading === false)
    return (
      <>
        <div
          style={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "20px",
          }}
        >
          {t("infoImage")}
          <img
            src={mouse_click_move}
            alt={""}
            style={{ width: "30%", height: "20%" }}
          />
        </div>
      </>
    );
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexWrap: "wrap",
        height: "calc(100vh - 64px)",
        overflow: "hidden",
        width: "100%",
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={containerRef}
        style={{
          overflow: "scroll",
          width: "100%",
          height: "100%",
          scrollBehavior: "smooth",
          scrollSnapType: "x mandatory",
          scrollSnapAlign: "start",
          WebkitOverflowScrolling: "touch",
          scrollPadding: "10px",
          scrollMargin: "10px",
          zIndex: 2,
        }}
      >
        <img src={galerija_slike} alt={""} style={{ cursor: "pointer" }} />
        {/*{images.map((image) => (*/}
        {/*  <ImageWithBlurhash*/}
        {/*    key={image.id}*/}
        {/*    src={image.path}*/}
        {/*    hash={image.hash}*/}
        {/*    placeholder={<CardPlaceholder />}*/}
        {/*  />}*/}
        {/*))}*/}
      </div>
    </div>
  );
};

export default GalleryPage;
