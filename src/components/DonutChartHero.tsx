// src/components/DonutChartHero.tsx
import { motion } from 'framer-motion';

export const DonutChartHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] z-10"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl animate-pulse" />
      <div className="relative w-full h-full border-4 border-cyan-400 rounded-full" />
    </motion.div>
  );
};
