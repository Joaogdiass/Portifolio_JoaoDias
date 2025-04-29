import { useContext } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LangContext } from "../contexts/LangContext";

export default function FixedControls() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang } = useContext(LangContext);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white shadow-lg hover:scale-110 transition-transform"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <button
        onClick={toggleLang}
        className="w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white shadow-lg hover:scale-110 transition-transform"
      >
        <Globe size={20} />
      </button>
    </div>
  );
}
