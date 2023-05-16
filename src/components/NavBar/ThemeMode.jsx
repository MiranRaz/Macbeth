import { useSelector, useDispatch } from "react-redux";
import { toggleThemeMode } from "../../redux/themeActions";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, Tooltip } from "@mui/material";
import { useTranslation } from "react-i18next";

const ThemeMode = () => {
  const { t } = useTranslation();
  const themeMode = useSelector((state) => state.theme.themeMode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <IconButton onClick={handleThemeToggle} color="inherit">
      {themeMode ? (
        <Tooltip title={t("lightModeTheme")}>
          <Brightness4Icon />
        </Tooltip>
      ) : (
        <Tooltip title={t("darkModeTheme")}>
          <Brightness7Icon />
        </Tooltip>
      )}
    </IconButton>
  );
};

export default ThemeMode;
