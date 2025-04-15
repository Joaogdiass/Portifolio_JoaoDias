import React from 'react';

interface NavbarProps {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar = ({ setSelectedSection }: NavbarProps) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col justify-between">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">João Gabriel</h1>
      </div>
      <div className="flex flex-col space-y-2 p-4">
        <button
          className="hover:bg-gray-700 p-2 rounded"
          onClick={() => setSelectedSection('Sobre')}
        >
          Sobre
        </button>
        <button
          className="hover:bg-gray-700 p-2 rounded"
          onClick={() => setSelectedSection('Projetos')}
        >
          Projetos
        </button>
        <button
          className="hover:bg-gray-700 p-2 rounded"
          onClick={() => setSelectedSection('Contato')}
        >
          Contato
        </button>
      </div>
    </div>
  );
}

export default Navbar;
