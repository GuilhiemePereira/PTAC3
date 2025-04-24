import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router'


import Home from './Paginas/Home.jsx'
import App from './App.jsx'
import Registro from './Paginas/Cadastro.jsx'
import Cliente from './Paginas/ClienteView.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        
          <Route path="/" element={<Home />} />
          <Route path="/view" element={<Cliente />} />
        <Route path="/login" element={<App />} />
        <Route path="/cadstro" element={<Registro />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
