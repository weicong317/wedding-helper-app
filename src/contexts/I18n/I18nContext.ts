import { createContext } from "react";

export type I18nContextType = {
  t: (key: string) => string;
  lang: string;
  changeLang: (lng: string) => void;
};

export const I18nContext = createContext<I18nContextType | null>(null);
