import React, { useState } from 'react';
import Header from './components/Header'; // Importe o Header
import MainContent from './components/Home';

const App = () => {
  const [selectedSection, setSelectedSection] = useState('Sobre'); // Seção ativa

  return (
    <div className="flex flex-col min-h-screen">
      <Header setSelectedSection={setSelectedSection} />
      <MainContent selectedSection={selectedSection} />
    </div>
  );
}

export default App;
