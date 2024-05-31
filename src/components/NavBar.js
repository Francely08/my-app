import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Página Inicial</Link></li>
        <li><Link to="/sumadora">Sumadora</Link></li>
        <li><Link to="/traductor">Traductor de Números a Letras</Link></li>
        <li><Link to="/tabla">Tabla de Multiplicar</Link></li>
        <li><Link to="/experiencia">Experiencia Personal</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
