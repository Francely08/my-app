import React from 'react';
import './Home.css';
import foto from '../foto.png';

const Home = () => {
  return (
    <div className="card">
      <h1>Página Inicial</h1>
      <img src={foto} alt="Foto" className="avatar" />
      <h2>Francely Mejía</h2>
      <p>Correo: Santosfrancelis3@gmail.com</p>
    </div>
  );
}

export default Home;
