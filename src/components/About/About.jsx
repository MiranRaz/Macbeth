import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import plocha from "../../assets/plocha.png";
import "./About.css";
import GoTo from "../GoTo.jsx";
import { useEffect, useState } from "react";
import macbeth_skend from "../../assets/macbeth_skend.jpg";

const About = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  // translation
  const { t } = useTranslation();
  //
  const [theRotationAngle, setTheRotationAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.getElementById("theText").scrollTop;
      setTheRotationAngle(scrollPosition / 5);
    };

    const textElement = document.getElementById("theText");
    if (textElement) {
      textElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (textElement) {
        textElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        transition: "all 0.3s ease-in-out",
        overflow: "scroll",
      }}
    >
      <Grid
        container
        sx={{
          width: "100%",
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            fontSize: {
              xs: "66px",
              sm: "133px",
              lg: "144px",
            },
            width: {
              xs: "40%",
              sm: "40%",
              md: "60%",
            },
          }}
        >
          MACBETH
        </Grid>
      </Grid>
      <div
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: {
              xs: "center",
            },
            flexDirection: {
              xs: "column-reverse",
              md: "column",
            },
            // pt: { xs: 3, md: 12 },
            pb: 15,
          }}
        >
          <Grid
            id="theText"
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              fontSize: "36px",
              display: "flex",
              justifyContent: "flex-start",
              height: "111px",
              maxHeight: "33%",
              overflowY: "scroll",
              borderBottom: `1px solid ${theme.palette.primary.text}`,
              borderTop: `1px solid ${theme.palette.primary.text}`,
              zIndex: 2,
            }}
          >
            {t("about_desc")}
          </Grid>
          <Grid
            sx={{
              position: "sticky",
              pt: {
                xs: 1,
                md: 9,
                lg: 9,
              },
            }}
          >
            <img
              id="thePlocha"
              src={plocha}
              alt="Ploca"
              style={{
                width: "111px",
                transform: `rotate(${theRotationAngle}deg)`,
                zIndex: 2,
              }}
              draggable={false}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              maxHeight: "45%",
              overflowY: "scroll",
            }}
          >
            insert image carousel here
          </Grid>
        </Grid>
      </div>

      <Grid
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          paddingBottom: "13px",
        }}
      >
        <GoTo from="home" to="gallery" deg="-180deg" />
      </Grid>
      <Grid sx={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            overflow: "hidden",
            height: "300px", // Set the desired height for the cropped image
          }}
        >
          <img
            src={macbeth_skend}
            alt="{alt}"
            draggable={false}
            style={{
              width: "80%",
              marginTop: "-20%",
              marginBottom: "-10%",
              zIndex: 1,
            }}
          />
        </div>
      </Grid>
    </div>
  );
};

export default About;
