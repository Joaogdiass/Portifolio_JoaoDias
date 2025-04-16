import { motion } from 'framer-motion';

export const Skills = () => {
  const skills = ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'];

  return (
    <section id="skills" className="min-h-screen p-6 md:p-10">
      <h2 className="text-2xl md:text-3xl mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="bg-white text-black px-4 py-2 rounded-full"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};