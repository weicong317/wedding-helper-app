import { initReactI18next } from "react-i18next";

import i18n from "i18next";

import ch from "@/locales/ch.json";
import en from "@/locales/en.json";

i18n
  .use(initReactI18next) // connect with React
  .init({
    resources: {
      en: { translation: en },
      ch: { translation: ch },
    },
    lng: "ch",
    fallbackLng: "ch",
    interpolation: { escapeValue: false },
  });

export default i18n;
