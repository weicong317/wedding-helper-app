import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { I18nContext } from "./I18nContext";
import type { I18nContextType } from "./I18nContext";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const { t, i18n } = useTranslation();

  const value: I18nContextType = {
    t,
    lang: i18n.language,
    changeLang: (lng) => i18n.changeLanguage(lng),
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};
