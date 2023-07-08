import { useEffect, useRef } from "react";
// data
import albumsData from "./albumsData.js";
// mui
import { Grid } from "@mui/material";
// styling
import { GridWrapper } from "./style.js";
import "./HomeContent.css";

const HomeContent = () => {
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
                flexDirection: "row",
              },
            }}
          >
            <iframe
              className="yt-iframe"
              src={card.iframeSrc}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                minWidth: "80%",
                width: "auto",
                backgroundColor: "black",
              }}
            />
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
            style={{ width: "85%", backgroundColor: "black" }}
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
