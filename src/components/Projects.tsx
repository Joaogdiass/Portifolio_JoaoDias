import { useState, useContext } from 'react';
import { Box, Tabs, Tab, Typography, Stack } from '@mui/material';
import { ThemeContext } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

type Project = {
  id: string;
  logoLight: string;
  logoDark: string;
};

const projectData: Project[] = [
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
  const techStack = t(`projects.${id}.techStack`, { returnObjects: true }) as string[];

  const logoSrc = isDark ? current.logoDark : current.logoLight;

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ scrollMarginTop: '100px' }}
    >
      <Box
        sx={{
          px: 4,
          py: 10,
          maxWidth: '1000px',
          mx: 'auto',
          minHeight: '100vh'
        }}
      >
        <motion.h2 className="text-3xl font-extrabold mb-6 text-center">
          {t('projects.title')}
        </motion.h2>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
          <Tabs
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="project tabs"
            indicatorColor="primary"
          >
            {projectData.map((proj) => (
              <Tab
                key={proj.id}
                label={t(`projects.${proj.id}.title`).toUpperCase()}
                sx={{
                  fontWeight: 600,
                  color: isDark ? 'black' : 'inherit',
                  '&.Mui-selected': {
                    color: isDark ? '' : '#1976d2',
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Stack direction="column" spacing={2} alignItems="start">
          {logoSrc && (
            <Box
              component="img"
              src={logoSrc}
              alt={`Logo ${title}`}
              sx={{ width: 60, height: 60, objectFit: 'contain' }}
            />
          )}

          <Typography variant="body2">{universityNote}</Typography>

          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              {description}
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              {subdescription}
            </Typography>
            <Typography variant="body2" color="gray" paragraph>
              {extra}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {techStack.map((tech, index) => (
              <Typography
                key={index}
                variant="caption"
                sx={{
                  bgcolor: isDark ? '#1e1e1e' : '#f3f4f6',
                  color: isDark ? 'white' : 'black',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  fontSize: '0.75rem',
                }}
              >
                {tech}
              </Typography>
            ))}
          </Box>
        </Stack>
      </Box>
    </motion.section>
  );
};
