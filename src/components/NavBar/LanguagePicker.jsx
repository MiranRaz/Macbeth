import { useState, useEffect } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import en_flag from "../../assets/en_flag.jpg";
import bih_flag from "../../assets/bih_flag.svg.png";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const LanguagePicker = () => {
  const [lang, setLang] = useState(localStorage.getItem("language") || "bih");
  const { t } = useTranslation();

  useEffect(() => {
    const languagePicker = document.getElementById("language-picker");
    if (languagePicker) {
      languagePicker.style.transition = "opacity 0.5s ease-in-out";
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const handleLanguageChange = () => {
    const newLang = lang === "en" ? "bih" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        pl: 3,
      }}
    >
      <Tooltip title={t("languageTooltip")}>
        <IconButton
          size="large"
          aria-label="language button"
          onClick={handleLanguageChange}
          sx={{
            borderRadius: "50%",
            padding: "5px",
            backgroundColor: "transparent",
          }}
        >
          <img
            id="language-picker"
            src={lang === "en" ? en_flag : bih_flag}
            alt={lang === "en" ? "English language" : "Bosnian language"}
            draggable="false"
            style={{
              width: "33px",
              height: "20px",
              cursor: "pointer",
              opacity: 1,
            }}
          />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default LanguagePicker;
