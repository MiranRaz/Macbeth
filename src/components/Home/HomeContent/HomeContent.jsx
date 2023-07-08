import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
// data
import albumsData from "./albumsData.js";
// mui
import { Grid } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
// styling
import {
  GridWrapper,
  GridCardBack,
  TypographyCenter,
  StreamButton,
} from "./style.js";
import "./HomeContent.css";

const HomeContent = () => {
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
    <GridWrapper container>
      <div className="card-container">
        {albumsData.map((card, index) => (
          <Grid
            item
            xs={12}
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
          >
            <iframe
              className="yt-iframe"
              src={card.iframeSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="card-wrapper">
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
                    <div className="flip-card-back">
                      <GridCardBack container>
                        <Grid item sx={{ textDecoration: "underline" }}>
                          {card.songName}
                        </Grid>
                        <Grid item>
                          {t("lyrics")} & {t("music")}
                          <TypographyCenter>Hamza Ražnatović</TypographyCenter>
                          {t("arrangement")}
                          <TypographyCenter>
                            Hamza Ražnatović <br /> Zenan Šahinović
                          </TypographyCenter>
                          ALBUM
                          <TypographyCenter>{card.albumName}</TypographyCenter>
                        </Grid>
                        <Link to={`/stream`}>
                          <StreamButton
                            variant="outlined"
                            endIcon={<HeadphonesIcon />}
                          >
                            Stream
                          </StreamButton>
                        </Link>
                      </GridCardBack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          className="card showing"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            className="yt-iframe"
            src="https://www.youtube.com/embed/B2yxHSYNzt8?autoplay=1&mute=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </Grid>
      </div>
    </GridWrapper>
  );
};

export default HomeContent;
