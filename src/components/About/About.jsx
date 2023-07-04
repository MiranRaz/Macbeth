import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";
import "./About.css";
import bandMembers from "./bandMembers.js";
import macbeth_skend from "../../assets/macbeth_skend.jpg";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";

const About = () => {
  // theme
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  // translation
  const { t } = useTranslation();

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 64px)",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        transition: "all 0.3s ease-in-out",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Grid
        item
        sx={{
          fontSize: {
            xs: "66px",
            sm: "133px",
            lg: "144px",
          },
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        MACBETH
      </Grid>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: {
              xs: "center",
            },
            flexDirection: {
              xs: "column-reverse",
              md: "column",
            },
            paddingBottom: "15px",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: "center",
              fontSize: "36px",
              display: "flex",
              maxHeight: "33%",
              zIndex: 2,
            }}
          >
            {t("about_desc")}
          </Grid>
        </Grid>
      </div>
      <Grid sx={{ minHeight: "70vh", pt: "128px" }}>
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
      {bandMembers.map((member) => (
        <Grid
          key={member?.id}
          sx={{
            height: "40vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 5,
          }}
        >
          <Grid
            key={member?.id}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: { md: "row", ld: "column" },
              width: "80%",
            }}
          >
            <img
              key={member?.id}
              src={member?.image}
              alt={""}
              draggable={false}
              style={{
                height: "333px",
                width: "333px",
                zIndex: 4,
              }}
            />
            <div style={{ width: "50%" }}>{member?.description}</div>
          </Grid>
        </Grid>
      ))}
      <div style={{ height: "60vh" }}></div>
    </div>
  );
};

export default About;
