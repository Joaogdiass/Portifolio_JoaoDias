import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="h-screen flex items-center justify-center bg-white text-black dark:bg-black dark:text-white p-6 text-center transition-colors duration-500">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {t("hero.title")}
      </motion.h1>
    </section>
  );
};
