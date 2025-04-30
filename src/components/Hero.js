import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Hero.tsx
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import '../index.css';
export const Hero = () => {
    const { t } = useTranslation();
    const [isFinished, setIsFinished] = useState(false);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFinished(true);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (_jsxs("section", { id: "hero", className: "h-screen relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-10 opacity-50" }), _jsxs(motion.div, { className: "relative z-20 flex flex-col items-center justify-center h-full text-center px-6", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: [_jsx("h1", { className: "text-4xl sm:text-5xl md:text-7xl font-bold leading-tight", children: _jsx("span", { className: `typing-effect ${isFinished ? 'finished' : ''} ${isDark ? 'text-black border-black' : 'text-white border-white'}`, children: t('hero.title') }) }), _jsx("p", { className: "text-xl sm:text-2xl mt-6", children: _jsx("span", { className: `typing-effect ${isFinished ? 'finished' : ''} ${isDark ? 'text-gray-800 border-gray-800' : 'text-gray-300 border-gray-300'}`, children: t('hero.subtitle') }) }), _jsxs("div", { className: "flex space-x-6 mt-8", children: [_jsx("a", { href: "https://www.linkedin.com/in/seu-perfil", target: "_blank", rel: "noopener noreferrer", className: "hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110", children: _jsx(FaLinkedin, { size: 50 }) }), _jsx("a", { href: "https://github.com/seu-perfil", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-110", children: _jsx(FaGithub, { size: 50 }) })] })] })] }));
};
