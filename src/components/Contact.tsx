import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    try {
      await emailjs.send(
        'service_g30j169',
        'template_9fe1egp',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'f-jGlyLuyqSIct4XD'
      );
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      className="p-6 md:p-10 flex flex-col justify-center items-center"
      style={{
        minHeight: '80vh',
        backgroundColor: isDark ? '#f9f9f9' : 'black',
        color: isDark ? 'black' : 'white',
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="text-center max-w-md w-full"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl mb-4 font">{t('contact.title')}</h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder={t('contact.namePlaceholder')}
            className={`p-2 rounded border ${isDark ? 'bg-[#222] text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder={t('contact.emailPlaceholder')}
            className={`p-2 rounded border ${isDark ? 'bg-[#222] text-white border-gray-600' : 'bg-white text-black border-gray-300'}`}
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.textarea
            name="message"
            placeholder={t('contact.messagePlaceholder')}
            className={`p-2 rounded h-32 border resize-none ${
              isDark
                ? 'bg-[#1e1e1e] text-white placeholder-gray-400 border-gray-600'
                : 'bg-white text-black placeholder-gray-500 border-gray-300'
            }`}
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-2 rounded font-medium ${
              isDark
                ? 'bg-[#f9f9f9] text-black hover:bg-gray-300'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            type="submit"
          >
            {t('contact.button')}
          </motion.button>
        </form>

        {status === 'success' && (
          <motion.p className="mt-4 text-green-500" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t('contact.success')}
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p className="mt-4 text-red-400" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t('contact.error')}
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};
