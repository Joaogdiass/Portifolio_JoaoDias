import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { Moon, Sun, Globe, Download } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";
export default function FixedControls() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { lang, toggleLang } = useContext(LangContext);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50", children: [_jsx("button", { onClick: toggleTheme, className: "w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white shadow-lg hover:scale-110 transition-transform", children: theme === "dark" ? _jsx(Sun, { size: 20 }) : _jsx(Moon, { size: 20 }) }), _jsx("button", { onClick: toggleLang, className: "w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white shadow-lg hover:scale-110 transition-transform", children: _jsx(Globe, { size: 20 }) })] }), _jsx("div", { className: "fixed bottom-4 left-4 z-50", children: _jsxs("a", { href: "/cv/resume_cv.pdf", download: true, className: "flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black dark:bg-black dark:text-white shadow-lg text-base font-semibold hover:scale-105 transition-transform", children: [_jsx(Download, { size: 18 }), "CV"] }) })] }));
}
