import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
import i18n from "../i18n";
export const LangContext = createContext({
    lang: "pt",
    toggleLang: () => { },
});
export function LangProvider({ children }) {
    const [lang, setLang] = useState("pt");
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
    const toggleLang = () => {
        const newLang = lang === "pt" ? "en" : "pt";
        setLang(newLang);
        i18n.changeLanguage(newLang); // <-- aplica a mudança
    };
    return (_jsx(LangContext.Provider, { value: { lang, toggleLang }, children: children }));
}
