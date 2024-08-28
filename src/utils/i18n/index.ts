import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enLang from './locales/en/en.json';
import frLang from './locales/fr/fr.json';

const resources = {
  en: {
    translation: enLang,
  },
  fr: {
    translation: frLang,
  }
};

// Check localStorage for the saved language or use the default (e.g., 'fr')
const savedLanguage = localStorage.getItem('language') || 'fr';

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    lng: savedLanguage, // Set the initial language based on localStorage

    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
