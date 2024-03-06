import { useTranslation as useI18Translation } from "react-i18next";

export const useTranslation = () => {
  const translation = useI18Translation();

  const switchLanguage = (language?: string) => {
    if (language) {
      translation.i18n.changeLanguage(language);
    } else {
      const newLanguage = translation.i18n.language === "en" ? "ru" : "en";
      translation.i18n.changeLanguage(newLanguage);
    }
  };

  return {
    ...translation,
    switchLanguage,
  };
};