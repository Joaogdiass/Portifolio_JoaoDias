import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white p-6 text-center">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Olá, eu sou o Joao 👋
      </motion.h1>
    </section>
  );
};