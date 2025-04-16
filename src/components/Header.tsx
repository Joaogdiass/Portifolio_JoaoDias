import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black p-4 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Joao Dias</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-gray-400">Sobre</a>
          <a href="#projects" className="hover:text-gray-400">Projetos</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contato</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center mt-4 space-y-4">
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-400">Sobre</a>
          <a href="#projects" onClick={toggleMenu} className="hover:text-gray-400">Projetos</a>
          <a href="#skills" onClick={toggleMenu} className="hover:text-gray-400">Skills</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-gray-400">Contato</a>
        </div>
      )}
    </header>
  );
};