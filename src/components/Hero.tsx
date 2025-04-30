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

  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 opacity-50" />
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          <span
            className={`typing-effect ${isFinished ? 'finished' : ''} ${
              isDark ? 'text-black border-black' : 'text-white border-white'
            }`}
          >
            {t('hero.title')}
          </span>
        </h1>
        <p className="text-xl sm:text-2xl mt-6">
          <span
            className={`typing-effect ${isFinished ? 'finished' : ''} ${
              isDark ? 'text-gray-800 border-gray-800' : 'text-gray-300 border-gray-300'
            }`}
          >
            {t('hero.subtitle')}
          </span>
        </p>

        <div className="flex space-x-6 mt-8">
          <a
            href="https://www.linkedin.com/in/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaLinkedin size={50} />
          </a>
          <a
            href="https://github.com/seu-perfil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition duration-300 ease-in-out transform hover:scale-110"
          >
            <FaGithub size={50} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
