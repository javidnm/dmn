
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as resources from "./resources";

export const languages =[
  {
    label:'English',
    value:'en',
  },
  {
    label:'Russian',
    value:'ru',
  },
  {
    label:'Azerbaijani',
    value:'az',
  }
]

export const initI18n = async () => {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    compatibilityJSON: 'v3',
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    cleanCode: true,
  });
};