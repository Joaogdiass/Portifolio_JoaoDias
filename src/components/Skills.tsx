// src/components/Skills.tsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGit, SiFigma, SiVercel, SiFirebase } from 'react-icons/si';

const skillsData = {
  'Front-End': [
    { name: 'Next.js', icon: <SiNextdotjs size={32} />, description: 'Framework React para apps web modernos.' },
    { name: 'React', icon: <SiReact size={32} />, description: 'Biblioteca para interfaces reativas.' },
    { name: 'TypeScript', icon: <SiTypescript size={32} />, description: 'Superset de JavaScript com tipos.' },
    { name: 'JavaScript', icon: <SiJavascript size={32} />, description: 'Linguagem de programação web universal.' },
  ],
  'Back-End': [
    { name: 'Node.js', icon: <SiNodedotjs size={32} />, description: 'Ambiente para executar JS no backend.' },
    { name: 'Express', icon: <SiExpress size={32} />, description: 'Framework minimalista para Node.js.' },
  ],
  'Database': [
    { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, description: 'Banco de dados relacional avançado.' },
    { name: 'MongoDB', icon: <SiMongodb size={32} />, description: 'Banco de dados NoSQL orientado a documentos.' },
  ],
  'Tools': [
    { name: 'Git', icon: <SiGit size={32} />, description: 'Sistema de controle de versão distribuído.' },
    { name: 'Figma', icon: <SiFigma size={32} />, description: 'Ferramenta de design colaborativo.' },
  ],
  'Cloud': [
    { name: 'Vercel', icon: <SiVercel size={32} />, description: 'Plataforma de deploy frontend.' },
    { name: 'Firebase', icon: <SiFirebase size={32} />, description: 'Backend completo do Google para apps.' },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('Front-End');

  return (
    <motion.section
      id="skills"
      className="min-h-screen p-6 md:p-10 text-white flex flex-col justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      

      <h2 className="text-3xl mb-6 text-center relative z-10">Skills</h2>

      <div className="flex justify-center mb-8 flex-wrap gap-4 relative z-10">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded border transition-all duration-300 ${
              activeTab === category ? 'bg-gray-200 text-black' : 'border-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="flex justify-center flex-wrap gap-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {skillsData[activeTab].map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative flex flex-col items-center gap-2 hover:scale-110 transition-transform"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-white rounded-lg shadow-lg text-black">
                {skill.icon}
              </div>
              <span className="text-sm text-white/70">{skill.name}</span>
              <div className="absolute bottom-full mb-2 w-max max-w-xs bg-white text-black text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
                {skill.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
};
