import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAws } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGooglecloud,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const skillsData = {
    [t('skills.categories.frontend')]: [
      { name: 'React', icon: <SiReact size={32} />, description: t('skills.items.react') },
      { name: 'TypeScript', icon: <SiTypescript size={32} />, description: t('skills.items.typescript') },
      { name: 'JavaScript', icon: <SiJavascript size={32} />, description: t('skills.items.javascript') },
    ],
    [t('skills.categories.backend')]: [
      { name: 'Node.js', icon: <SiNodedotjs size={32} />, description: t('skills.items.node') },
      { name: 'Express', icon: <SiExpress size={32} />, description: t('skills.items.express') },
      { name: 'Python', icon: <SiPython size={32} />, description: t('skills.items.python') },
      { name: 'C#', icon: <TbBrandCSharp size={32} />, description: t('skills.items.csharp') },
    ],
    [t('skills.categories.database')]: [
      { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, description: t('skills.items.postgresql') },
      { name: 'MongoDB', icon: <SiMongodb size={32} />, description: t('skills.items.mongodb') },
      { name: 'MySQL', icon: <SiMysql size={32} />, description: t('skills.items.mysql') },
    ],
    [t('skills.categories.tools')]: [
      { name: 'Git', icon: <SiGit size={32} />, description: t('skills.items.git') },
    ],
    [t('skills.categories.cloud')]: [
      { name: 'AWS', icon: <FaAws size={32} />, description: t('skills.items.aws') },
      { name: 'Google Cloud', icon: <SiGooglecloud size={32} />, description: t('skills.items.googlecloud') },
    ],
  };

  return (
    <motion.section
      id="skills"
      className="min-h-screen p-6 md:p-10 flex flex-col justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl mb-6 text-center relative z-10">{t('skills.title')}</h2>

      <div className="flex justify-center mb-8 flex-wrap gap-4 relative z-10">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`skill-button ${activeTab === category ? 'skill-button-active' : ''}`}
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
              <span className="text-sm">{skill.name}</span>
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
