import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
export const About = () => {
    const { t } = useTranslation();
    const { theme } = useContext(ThemeContext);
    const isDark = theme === 'dark';
    const textColor = isDark ? 'text-black' : 'text-gray-300';
    return (_jsx("section", { id: "about", className: "min-h-screen flex items-center justify-center p-6 md:p-10", children: _jsxs(motion.div, { className: "text-center max-w-2xl", initial: { opacity: 0, scale: 0.9 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.8, ease: 'easeOut' }, viewport: { once: true }, children: [_jsx(motion.h2, { className: "text-4xl md:text-4xl font-bold mb-6", children: t('about.title') }), _jsx(motion.p, { className: `text-base md:text-lg mb-4 ${textColor}`, children: t('about.paragraph1') }), _jsx(motion.p, { className: `text-base mb-4 md:text-lg ${textColor}`, children: t('about.paragraph2') }), _jsx(motion.p, { className: `text-base  md:text-lg ${textColor}`, children: t('about.paragraph3') })] }) }));
};
