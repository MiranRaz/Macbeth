import { useState } from "react";
// mui
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
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

const pages = ["Home", "About", "Discography", "Gallery", "Stream"];

const NavBar = () => {
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const { t } = useTranslation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: theme.palette.primary.main,
        transition: "all 0.3s ease-in-out",
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
                onClick={handleCloseNavMenu}
                sx={{ my: 2 }}
                theme={theme}
              >
                {t(`${page.toLowerCase()}`)}
              </CustomButton>
            ))}
          </Grid>
          {/*light/dark theme and language picker */}
          <Grid
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <ThemeMode />
            <LanguagePicker />
          </Grid>

          {/*MOBILE VIEW*/}
          <Grid
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
