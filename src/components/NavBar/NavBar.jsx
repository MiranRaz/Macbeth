import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
// mui
import { createTheme } from "@mui/material/styles";
import { AppBar, Toolbar, Grid, useMediaQuery, Button } from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Container from "@mui/material/Container";
// assets
import macbeth_logo from "../../assets/macbeth_logo.png";
import macbeth_logo_dark from "../../assets/macbeth_logo_dark.png";
// components
import LanguagePicker from "./LanguagePicker.jsx";
// styles
import { DrawerHeader, Main, CustomButton } from "./style";
import ThemeMode from "./ThemeMode.jsx";
import LightTheme from "../../theme/LightTheme.js";
import DarkTheme from "../../theme/DarkTheme.js";
//
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const pages = ["Home", "About", "Gallery", "Stream", "Video"];

const NavBar = () => {
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  const location = useLocation();
  const { t } = useTranslation();
  const isMobileView = useMediaQuery("(max-width: 900px)");
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
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
            <Button sx={{ color: theme.palette.primary.text }}>
              {isMobileView ? (
                <DehazeIcon
                  onClick={() => {
                    setOpenDrawer(true);
                  }}
                />
              ) : (
                ""
              )}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Main openDrawer={openDrawer}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
          },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.text,
        }}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <DrawerHeader
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.text,
            width: "100vw",
          }}
        >
          <IconButton
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ChevronRightIcon sx={{ color: theme.palette.primary.text }} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{
            height: "100vh",
            width: "100vw",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.text,
          }}
        >
          {pages.map((page) => (
            <CustomButton
              onClick={() => {
                setOpenDrawer(false);
              }}
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
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
