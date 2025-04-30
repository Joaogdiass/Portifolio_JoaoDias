import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const { t } = useTranslation();
    const navLinks = [
        { label: t('header.home'), href: '#hero' },
        { label: t('header.about'), href: '#about' },
        { label: t('header.projects'), href: '#projects' },
        { label: t('header.skills'), href: '#skills' },
        { label: t('header.contact'), href: '#contact' },
    ];
    return (_jsxs("header", { className: `fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isDark ? 'text-black' : 'bg-black text-white'}`, style: isDark ? { backgroundColor: '#f9f9f9' } : undefined, children: [_jsxs("nav", { className: "max-w-6xl mx-auto px-4 py-3 flex justify-between items-center", children: [_jsx(motion.div, { className: "text-2xl font-bold tracking-wide", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6 }, children: "Jo\u00E3o Dias" }), _jsx("div", { className: "hidden md:flex items-center space-x-6", children: navLinks.map((link) => (_jsxs("a", { href: link.href, className: "relative group text-sm uppercase tracking-wide", children: [link.label, _jsx("span", { id: "header-hover", className: "absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300" })] }, link.href))) }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: toggleMenu, className: "text-2xl", children: isOpen ? _jsx(AiOutlineClose, {}) : _jsx(AiOutlineMenu, {}) }) })] }), isOpen && (_jsx(motion.div, { className: "md:hidden flex flex-col items-center py-4 space-y-4", initial: { opacity: 0, y: -10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -10 }, children: navLinks.map((link) => (_jsx("a", { href: link.href, onClick: toggleMenu, className: "text-base hover:text-cyan-400 transition", children: link.label }, link.href))) }))] }));
};
