import { jsx as _jsx } from "react/jsx-runtime";
// src/context/ThemeContext.tsx
import { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext({
    theme: "dark",
    toggleTheme: () => { },
});
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark");
    useEffect(() => {
        const stored = localStorage.getItem("theme") || "dark";
        document.documentElement.classList.add(stored); // ← força light ou dark
        setTheme(stored);
    }, []);
    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(newTheme);
    };
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
}
