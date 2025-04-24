// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { DonutChartHero } from './DonutChartHero';

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 bg-gradient-to-b from-[#0f172a] via-black to-[#0f172a] text-white relative overflow-hidden">
      {/* Texto principal */}
      <motion.div
        className="md:w-1/2 z-10 text-center md:text-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Oi, meu nome é <span className="text-cyan-400">Joao Dias</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-300 font-medium">
          Transformo complexidade em clareza com <span className="text-cyan-400 font-bold">dados</span>
        </p>
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-md">
        <span className="text-cyan-400 font-bold">Engenheiro de Software</span> com foco em dados, apaixonado por gerar impacto com informações bem visualizadas.
        </p>
      </motion.div>

      {/* Gráfico Donut em vez da bolha */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <DonutChartHero />
      </div>
    </section>
  );
};
