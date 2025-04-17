// src/components/Contact.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
      className="min-h-screen p-6 md:p-10 flex flex-col justify-center items-center"
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
        <h2 className="text-2xl md:text-3xl mb-4">Contato</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Seu nome"
            className="p-2 rounded text-white"
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Seu email"
            className="p-2 rounded text-white"
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.textarea
            name="message"
            placeholder="Sua mensagem"
            className="p-2 rounded h-32 text-white"
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
            type="submit"
          >
            Enviar
          </motion.button>
        </form>

        {status === 'success' && (
          <motion.p
            className="text-green-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Mensagem enviada com sucesso!
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p
            className="text-red-400 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Ocorreu um erro. Tente novamente mais tarde.
          </motion.p>
        )}
      </motion.div>
    </motion.section>
  );
};