import { createContext, useState, ReactNode, useEffect } from "react";
import i18n from "../i18n";

interface LangContextType {
  lang: string;
  toggleLang: () => void;
}

export const LangContext = createContext<LangContextType>({
  lang: "pt",
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState("pt");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const toggleLang = () => {
    const newLang = lang === "pt" ? "en" : "pt";
    setLang(newLang);
    i18n.changeLanguage(newLang); // <-- aplica a mudança
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}
