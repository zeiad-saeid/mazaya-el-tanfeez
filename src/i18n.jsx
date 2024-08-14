import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import ChainedBackend from "i18next-chained-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
  // .use(ChainedBackend)

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar", // Set the default language to Arabic
    debug: true,
    // backend: {
    //   backends: [
    //     LocalStorageBackend,
    //     HttpBackend
    //   ],
    //   backendOptions: [{
    //     expirationTime: 7 * 24 * 60 * 60 * 1000 // 7 days
    //   }, {
    //     loadPath: "/locales/{{lng}}/{{ns}}.json",
    //   }]
    // },
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: [
        "localStorage",
        "cookie",
        "queryString",
        "sessionStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
