import i18n from "i18next";
import enTranslation from "./en/translation";
import bihTranslation from "./bih/translation";

const initializeI18n = () => {
  i18n.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "bih", // Default language
    resources: {
      en: {
        translation: enTranslation,
      },
      bih: {
        translation: bihTranslation,
      },
    },
  });
  return i18n; // Return the i18n instance
};

export default initializeI18n;
