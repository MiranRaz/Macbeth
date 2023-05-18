import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import plocha from "../../assets/plocha.png";
import "./About.css";

const About = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  // translation
  const { t } = useTranslation();

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        transition: "all 0.3s ease-in-out",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Grid
          container
          sx={{
            pl: 3,
            display: "flex",
            alignItems: "center",
            pt: 3,
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: "center",
              fontSize: "36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              height: "639px",
              maxHeight: "35%",
              minHeight: "35%",
              overflowY: "scroll",
              position: "relative",
            }}
          >
            {t("about_desc")}
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              textAlign: "center",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                zIndex: 1,
                backgroundColor: "transparent",
                height: "569px",
                maxHeight: "35%",
                minHeight: "35%",
              }}
            >
              <div
                style={{
                  position: "fixed",
                  bottom: "-6%",
                  left: "40%",
                  width: "100%",
                }}
              >
                <img
                  src={plocha}
                  alt="Ploca"
                  style={{
                    width: "30%",
                    height: "auto",
                  }}
                  draggable={false}
                />
              </div>
              test
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
