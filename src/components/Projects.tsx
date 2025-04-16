// src/components/Projects.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projectData = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição curta do projeto 1.',
    details: 'Aqui vai uma explicação mais longa sobre o projeto, incluindo tecnologias usadas, desafios enfrentados, etc.',
    image: '/images/projetos/teste.png',
    site: 'https://projeto1.com',
    github: 'https://github.com/seuusuario/projeto1',
    images: [
      '/images/projetos/teste.png',
      '/images/projetos/teste.png',
      '/images/projetos/teste.png'
    ]
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição curta do projeto 2.',
    details: 'Detalhes do projeto 2 com mais informações técnicas e objetivos.',
    image: '/images/projetos/projeto2.png',
    site: 'https://projeto2.com',
    github: 'https://github.com/seuusuario/projeto2',
    images: [
      '/images/projetos/projeto2.png',
      '/images/projetos/projeto2-extra1.png'
    ]
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição curta do projeto 3.',
    details: 'Expansão sobre funcionalidades do projeto 3 e como foi desenvolvido.',
    image: '/images/projetos/projeto3.png',
    site: 'https://projeto3.com',
    github: 'https://github.com/seuusuario/projeto3',
    images: ['/images/projetos/projeto3.png']
  },
];


export const Projects = () => {
  const [activeProject, setActiveProject] = useState<typeof projectData[0] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => {
    if (!activeProject) return;
    setImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = () => {
    if (!activeProject) return;
    setImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  return (
    <section id="projects" className="min-h-screen p-6 md:p-10 relative">
      <h2 className="text-2xl md:text-3xl mb-6 text-center">Projetos</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#1f2937] rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
            whileHover={{ scale: 1.02 }}
            layout
            onClick={() => {
              setActiveProject(project);
              setImageIndex(0);
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-[#1f2937] text-white max-w-4xl w-full rounded-lg overflow-hidden relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-64">
                <img
                  src={activeProject.images[imageIndex]}
                  alt={activeProject.title}
                  className="w-full h-64 object-cover"
                />
                {activeProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
                      onClick={prevImage}
                    >
                      ‹
                    </button>
                    <button
                      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black px-2 py-1 rounded"
                      onClick={nextImage}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{activeProject.details}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={activeProject.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                  >
                    Site
                  </a>
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200"
                  >
                    GitHub
                  </a>
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400"
                    onClick={() => setActiveProject(null)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
