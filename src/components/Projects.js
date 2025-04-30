import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useContext } from 'react';
import { Box, Tabs, Tab, Typography, Stack } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const projectData = [
    {
        id: '1',
        logoLight: '/images/projetos/xp-white.webp',
        logoDark: '/images/projetos/xp.png',
    },
    {
        id: '2',
        logoLight: '/images/projetos/hc.png',
        logoDark: '/images/projetos/hc.png',
    },
    {
        id: '3',
        logoLight: '/images/projetos/ibm.png',
        logoDark: '/images/projetos/ibm.png',
    },
    {
        id: '4',
        logoLight: '/images/projetos/hapvida.png',
        logoDark: '/images/projetos/hapvida.png',
    }
];
export const Projects = () => {
    const [value, setValue] = useState(0);
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
    const isDark = theme === 'dark';
    const current = projectData[value];
    const id = current.id;
    const title = t(`projects.${id}.title`);
    const description = t(`projects.${id}.description`);
    const subdescription = t(`projects.${id}.subdescription`);
    const extra = t(`projects.${id}.extra`);
    const universityNote = t(`projects.${id}.universityNote`);
    const techStack = t(`projects.${id}.techStack`, { returnObjects: true });
    const logoSrc = isDark ? current.logoDark : current.logoLight;
    return (_jsx(motion.section, { id: "projects", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, style: { scrollMarginTop: '100px' }, children: _jsxs(Box, { sx: {
                px: 4,
                py: 10,
                maxWidth: '1000px',
                mx: 'auto',
                minHeight: '100vh'
            }, children: [_jsx(motion.h2, { className: "text-3xl font-extrabold mb-6 text-center", children: t('projects.title') }), _jsx(Box, { sx: { borderBottom: 1, borderColor: 'divider', mb: 6 }, children: _jsx(Tabs, { value: value, onChange: (_, newValue) => setValue(newValue), variant: "scrollable", scrollButtons: "auto", "aria-label": "project tabs", indicatorColor: "primary", children: projectData.map((proj) => (_jsx(Tab, { label: t(`projects.${proj.id}.title`).toUpperCase(), sx: {
                                fontWeight: 600,
                                color: isDark ? 'black' : 'inherit',
                                '&.Mui-selected': {
                                    color: isDark ? '' : '#1976d2',
                                },
                            } }, proj.id))) }) }), _jsxs(Stack, { direction: "column", spacing: 2, alignItems: "start", children: [logoSrc && (_jsx(Box, { component: "img", src: logoSrc, alt: `Logo ${title}`, sx: { width: 60, height: 60, objectFit: 'contain' } })), _jsx(Typography, { variant: "body2", children: universityNote }), _jsxs(Box, { children: [_jsx(Typography, { variant: "h6", fontWeight: "bold", gutterBottom: true, children: title }), _jsx(Typography, { variant: "body2", color: "gray", paragraph: true, children: description }), _jsx(Typography, { variant: "body2", color: "gray", paragraph: true, children: subdescription }), _jsx(Typography, { variant: "body2", color: "gray", paragraph: true, children: extra })] }), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }, children: techStack.map((tech, index) => (_jsx(Typography, { variant: "caption", sx: {
                                    bgcolor: isDark ? '#1e1e1e' : '#f3f4f6',
                                    color: isDark ? 'white' : 'black',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: 1,
                                    fontSize: '0.75rem',
                                }, children: tech }, index))) })] })] }) }));
};
