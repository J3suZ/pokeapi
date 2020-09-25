import React from 'react';
import './App.css';
import './index.css';
import ContainerForm from "./componentes/Formulario"
import Container from "./componentes/Container"
import Hero from "./componentes/Hero"

const App = () => {
  return (
    <div className="wrapper">
      <ContainerForm />
      <Hero />
      <Container />
    </div>
  );
};

export default App;
