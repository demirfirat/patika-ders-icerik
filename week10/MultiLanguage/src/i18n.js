import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from "i18next-http-backend";

i18n.use(HttpApi).use(initReactI18next).use(LanguageDetector).init({
        fallbackLng: "en",
        backend: {
        },
    });

export default i18n;