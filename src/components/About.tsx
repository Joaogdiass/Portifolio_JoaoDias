import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const About = () => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const textColor = isDark ? 'text-black' : 'text-gray-300';

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-10">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2 className="text-4xl md:text-4xl font-bold mb-6">
          {t('about.title')}
        </motion.h2>

        <motion.p className={`text-base md:text-lg mb-4 ${textColor}`}>
          {t('about.paragraph1')}
        </motion.p>

        <motion.p className={`text-base mb-4 md:text-lg ${textColor}`}>
          {t('about.paragraph2')}
        </motion.p>
        <motion.p className={`text-base  md:text-lg ${textColor}`}>
          {t('about.paragraph3')}
        </motion.p>
      </motion.div>
    </section>
  );
};
