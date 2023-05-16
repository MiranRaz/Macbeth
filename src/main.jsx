import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import initializeI18n from "./locales/i18n.js";
import App from "./components/App.jsx";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import store from "./redux/store";
import darkTheme from "./theme/DarkTheme";
import lightTheme from "./theme/LightTheme";
import "./main.css";

const i18n = initializeI18n();

const AppWithTheme = () => {
  const themeMode = useSelector((state) => state.theme.themeMode);
  const theme = createTheme(themeMode ? lightTheme : darkTheme);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setShowTransition(true); // Activate the transition on component mount
  }, []);

  return (
    <div className={`transition ${showTransition ? "show" : ""}`}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppWithTheme />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);
