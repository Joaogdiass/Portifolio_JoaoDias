import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-6 md:p-10">
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sobre Mim
        </motion.h2>

        <motion.p
          className="text-base md:text-lg text-gray-300"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Sou um desenvolvedor apaixonado por transformar ideias em experiências digitais com foco em design, usabilidade e performance.
        </motion.p>
      </motion.div>
    </section>
  );
};