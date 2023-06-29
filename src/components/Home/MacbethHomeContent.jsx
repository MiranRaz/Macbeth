import { useEffect, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import "./Home.css";
import albumsData from "./albumsData.js";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { Link } from "react-router-dom";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { useTranslation } from "react-i18next";

const MacbethHomeContent = () => {
  // theme
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  // translation
  const { t } = useTranslation();

  const cardsRef = useRef([]);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showing", entry.isIntersecting);
      });
    };

    const observerOptions = {
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    const logoElement = document.querySelector(".logo");
    observer.observe(logoElement);

    return () => observer.disconnect();
  }, []);

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
      }}
    >
      <div
        className="card-container"
        style={{
          padding: "100px 0px 100px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {albumsData.map((card, index) => (
          <Grid
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`card ${
              window.innerWidth > 900 ? (index % 2 === 0 ? "" : "reverse") : ""
            }`}
            sx={{
              display: "flex",
              flexDirection: "row",
              "@media (max-width: 900px)": {
                flexDirection: "column",
              },
            }}
            xs={12}
          >
            <iframe
              className="yt-iframe"
              src={card.iframeSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ zIndex: "1", border: 0, borderRadius: "3px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="album-card-animation reset-transform">
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-front">
                      <img
                        src={card.imgSrc}
                        alt="album cover"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                    <div
                      className="flip-card-back"
                      style={{
                        backgroundColor: `${theme.palette.primary.text}`,
                        color: `${theme.palette.primary.main}`,
                      }}
                    >
                      <Grid
                        container
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          height: "100%",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <Grid
                          item
                          sx={{
                            textTransform: "uppercase",
                            textDecoration: "underline",
                          }}
                        >
                          {card.songName}
                        </Grid>
                        <Grid
                          item
                          sx={{
                            textTransform: "uppercase",
                          }}
                        >
                          {t("lyrics")} & {t("music")}
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              textTransform: "uppercase",
                              fontFamily: "inherit",
                            }}
                          >
                            Hamza Ražnatović
                          </Typography>
                          {t("arrangement")}
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              textTransform: "uppercase",
                              fontFamily: "inherit",
                            }}
                          >
                            Hamza Ražnatović <br /> Zenan Šahinović
                          </Typography>
                          ALBUM
                          <Typography
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              textTransform: "uppercase",
                              textDecoration: "underline",
                              fontFamily: "inherit",
                            }}
                          >
                            {card.albumName}
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            display: "flex",
                            textTransform: "uppercase",
                            alignItems: "flex-end",
                          }}
                        >
                          <Link
                            to={`/stream`}
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            <Button
                              variant="outlined"
                              endIcon={<HeadphonesIcon />}
                              style={{
                                fontFamily: "inherit",
                                color: `${theme.palette.primary.main}`,
                                fontWeight: "inherit",
                              }}
                            >
                              Stream
                              {/*{t("about")}*/}
                            </Button>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          xs={12}
          className="card showing"
        >
          <iframe
            className="yt-iframe"
            src="https://www.youtube.com/embed/B2yxHSYNzt8?autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            style={{ border: 0, borderRadius: "3px" }}
            allowFullScreen
          />
        </Grid>
      </div>
    </Grid>
  );
};

export default MacbethHomeContent;
