import React, { useState } from 'react';
import './Sumadora.css';

const Sumadora = () => {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(null);

  const sumar = () => {
    setResultado(numero1 + numero2);
  }

  return (
    <div className="card">
      <h1>Sumadora</h1>
      <input
        type="number"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
        placeholder="Número 1"
      />
      <input
        type="number"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        placeholder="Número 2"
      />
      <button onClick={sumar}>Sumar</button>
      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}

export default Sumadora;
