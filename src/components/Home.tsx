import React from 'react';

interface MainContentProps {
  selectedSection: string;
}

const MainContent = ({ selectedSection }: MainContentProps) => {
  const renderSection = () => {
    switch (selectedSection) {
      case 'Sobre':
        return (
          <div className="flex justify-center items-center flex-col p-8">
            <h1 className="text-3xl font-bold mb-4">Sobre</h1>
            <p className="text-lg text-center">
              Sou João Gabriel, um desenvolvedor focado em criar soluções modernas e eficientes.
            </p>
          </div>
        );
      case 'Projetos':
        return (
          <div className="flex justify-center items-center flex-col p-8">
            <h1 className="text-3xl font-bold mb-4">Projetos</h1>
            <p className="text-lg">Aqui estarão os projetos realizados ou em andamento.</p>
          </div>
        );
      case 'Contato':
        return (
          <div className="flex justify-center items-center flex-col p-8">
            <h1 className="text-3xl font-bold mb-4">Contato</h1>
            <p className="text-lg">Informações para entrar em contato comigo.</p>
          </div>
        );
      default:
        return (
          <div className="flex justify-center items-center flex-col p-8">
            <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
          </div>
        );
    }
  };

  return <div className="flex-1 p-8">{renderSection()}</div>;
}

export default MainContent;
