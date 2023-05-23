import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import LightTheme from "../theme/LightTheme.js";
import DarkTheme from "../theme/DarkTheme.js";
const ErrorPage = () => {
  // theme
  let themeMode = useSelector((state) => state.theme.themeMode);
  const theme = themeMode ? createTheme(LightTheme) : createTheme(DarkTheme);
  //translation
  const { t } = useTranslation();

  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.text,
        height: "100vh",
      }}
    >
      {t("error")}
    </div>
  );
};

export default ErrorPage;
