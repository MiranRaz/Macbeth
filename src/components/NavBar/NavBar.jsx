import { AppBar, Toolbar, Grid, useMediaQuery } from "@mui/material";
import { useLocation } from "react-router-dom";
import Container from "@mui/material/Container";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CollectionsIcon from "@mui/icons-material/Collections";
import HeadsetIcon from "@mui/icons-material/Headset";
import VideocamIcon from "@mui/icons-material/Videocam";
// assets
import macbeth_logo from "../../assets/macbeth_logo.png";
import macbeth_logo_dark from "../../assets/macbeth_logo_dark.png";
// components
import LanguagePicker from "./LanguagePicker.jsx";
// styles
import { CustomButton } from "./style";
import { useTranslation } from "react-i18next";
import ThemeMode from "./ThemeMode.jsx";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";

const pages = ["Home", "About", "Gallery", "Stream", "Video"];

const NavBar = () => {
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  const location = useLocation();
  const { t } = useTranslation();
  const isMobileView = useMediaQuery("(max-width: 900px)");

  if (isMobileView) {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: theme.palette.primary.main,
          transition: "all 0.3s ease-in-out",
          borderBottom: `1px solid ${theme.palette.primary.text}`,
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid
              sx={{
                flexGrow: 1,
                pr: 3,
                display: "flex",
                justifyContent: { xs: "flex-start", md: "center" },
              }}
            >
              <img
                src={themeMode ? macbeth_logo : macbeth_logo_dark}
                alt="macbeth logo"
                style={{
                  height: "65px",
                  width: "85px",
                  cursor: "pointer",
                }}
                draggable="false"
                onClick={() => (window.location.href = "/")}
              />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ThemeMode />
              <LanguagePicker />
            </Grid>
          </Toolbar>
        </Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            bottom: 0,
            position: "fixed",
            width: "100%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.text,
          }}
        >
          <BottomNavigation
            sx={{
              width: "100%",
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.text,
            }}
          >
            <CustomButton to={"/"}>
              <BottomNavigationAction
                label="Home"
                icon={
                  <HomeIcon
                    sx={{
                      color: theme.palette.primary.text,
                    }}
                  />
                }
              />
            </CustomButton>
            <CustomButton to={"/about"}>
              <BottomNavigationAction
                label="About"
                value="about"
                icon={
                  <InfoIcon
                    sx={{
                      color: theme.palette.primary.text,
                    }}
                  />
                }
              />
            </CustomButton>
            <CustomButton to={"/gallery"}>
              <BottomNavigationAction
                label="Gallery"
                value="gallery"
                icon={
                  <CollectionsIcon
                    sx={{
                      color: theme.palette.primary.text,
                    }}
                  />
                }
              />
            </CustomButton>
            <CustomButton to={"/stream"}>
              <BottomNavigationAction
                label="Stream"
                value="stream"
                icon={
                  <HeadsetIcon
                    sx={{
                      color: theme.palette.primary.text,
                    }}
                  />
                }
              />
            </CustomButton>
            <CustomButton to={"/video"}>
              <BottomNavigationAction
                label="Video"
                value="video"
                icon={
                  <VideocamIcon
                    sx={{
                      color: theme.palette.primary.text,
                    }}
                  />
                }
              />
            </CustomButton>
          </BottomNavigation>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease-in-out",
        borderBottom: `1px solid ${theme.palette.primary.text}`,
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid
            sx={{
              flexGrow: 1,
              pr: 3,
              display: "flex",
              justifyContent: { xs: "flex-start", md: "center" },
            }}
          >
            <img
              src={themeMode ? macbeth_logo : macbeth_logo_dark}
              alt="macbeth logo"
              style={{
                height: "65px",
                width: "85px",
                cursor: "pointer",
              }}
              draggable="false"
              onClick={() => (window.location.href = "/")}
            />
          </Grid>
          <Grid
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-around",
            }}
          >
            {pages.map((page) => (
              <CustomButton
                key={page}
                to={page === "Home" ? "/" : `/${page.toLowerCase()}`}
                isactive={(
                  location.pathname ===
                  (page === "Home" ? "/" : `/${page.toLowerCase()}`)
                ).toString()}
                sx={{ my: 2 }}
                theme={theme}
              >
                {t(`${page.toLowerCase()}`)}
              </CustomButton>
            ))}
          </Grid>
          <Grid
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ThemeMode />
            <LanguagePicker />
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
