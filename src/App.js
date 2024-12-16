import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Atracoes from './pages/atracoes';
import Escolas from './pages/escolas';
import Gastronomia from './pages/gastronomia';
import Historia from './pages/historia';
import Hospedagem from './pages/hospedagem';
import Hospitais from './pages/hospitais';
import Saude from './pages/saude';
import Servicos from './pages/servicos';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Historia />} />
          <Route path="/atracoes" element={<Atracoes />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/hospedagem" element={<Hospedagem />} />
          <Route path="/saude" element={<Saude />} />
          <Route path="/hospitais" element={<Hospitais />} />
          <Route path="/escolas" element={<Escolas />} />
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;







