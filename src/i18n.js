import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import common_en from "./translations/en/common.json";
import common_tr from "./translations/tr/common.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en",
    resources: {
      en: {
        common: common_en, // 'common' is our custom namespace
      },
      tr: {
        common: common_tr,
      },
    },

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
