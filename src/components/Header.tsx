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

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isDark ? 'text-black' : 'bg-black text-white'
      }`}
      style={isDark ? { backgroundColor: '#f9f9f9' } : undefined}
    >
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          João Dias
        </motion.div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group text-sm uppercase tracking-wide"
            >
              {link.label}
              <span
                id="header-hover"
                className="absolute left-0 -bottom-1 h-0.5 w-0 group-hover:w-full transition-all duration-300"
              ></span>
            </a>
          ))}
        </div>

        {/* Menu Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          className="md:hidden flex flex-col items-center py-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-base hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};
