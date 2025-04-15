import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ setSelectedSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado do menu hambúrguer
  const [isDarkMode, setIsDarkMode] = useState(true); // Tema escuro por padrão
  const [language, setLanguage] = useState<'pt' | 'en'>('pt'); // Estado para o idioma

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark'); // Tema escuro
    } else {
      document.documentElement.classList.remove('dark'); // Tema claro
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');

  return (
    <header className="bg-gray-800 text-white">
      <div className="max-w-full-xl mx-auto p-4 flex justify-between items-center">
        <div className="text-2xl font-bold">João Gabriel</div>

        <nav className="hidden md:flex space-x-6">
          <motion.button
            className="hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedSection('Sobre')}
          >
            {language === 'pt' ? 'Sobre' : 'About'}
          </motion.button>
          <motion.button
            className="hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedSection('Projetos')}
          >
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </motion.button>
          <motion.button
            className="hover:text-gray-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedSection('Contato')}
          >
            {language === 'pt' ? 'Contato' : 'Contact'}
          </motion.button>
        </nav>

        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <motion.span initial={{ rotate: 0 }} animate={{ rotate: 45 }} transition={{ duration: 0.3 }}>
                &#10005;
              </motion.span>
            ) : (
              <motion.span initial={{ rotate: 0 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                &#9776;
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <motion.button className="hover:text-gray-400" onClick={() => setSelectedSection('Sobre')}>
            {language === 'pt' ? 'Sobre' : 'About'}
          </motion.button>
          <motion.button className="hover:text-gray-400" onClick={() => setSelectedSection('Projetos')}>
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </motion.button>
          <motion.button className="hover:text-gray-400" onClick={() => setSelectedSection('Contato')}>
            {language === 'pt' ? 'Contato' : 'Contact'}
          </motion.button>
        </motion.div>
      )}

      <div className="absolute bottom-4 right-4 space-y-4 flex flex-col items-center">
        <button className="text-white bg-gray-600 p-3 rounded-full" onClick={toggleTheme}>
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <button className="text-white bg-gray-600 p-3 rounded-full" onClick={toggleLanguage}>
          {language === 'pt' ? 'PT' : 'EN'}
        </button>
      </div>
    </header>
  );
}

export default Header;
