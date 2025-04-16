import { motion } from 'framer-motion';

export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl mb-4">Contato</h2>
        <form className="flex flex-col gap-4 max-w-md">
          <input type="text" placeholder="Seu nome" className="p-2 rounded text-black" />
          <input type="email" placeholder="Seu email" className="p-2 rounded text-black" />
          <textarea placeholder="Sua mensagem" className="p-2 rounded h-32 text-black" />
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Enviar</button>
        </form>
      </motion.div>
    </section>
  );
};
