import React, { useState } from 'react';
import './Tabla.css';

const Tabla = () => {
  const [numero, setNumero] = useState(0);
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const nuevaTabla = [];
    for (let i = 1; i <= 13; i++) {
      nuevaTabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    setTabla(nuevaTabla);
  }

  return (
    <div className="card">
      <h1>Tabla de Multiplicar</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Número"
      />
      <button onClick={generarTabla}>Generar Tabla</button>
      {tabla.length > 0 && (
        <ul>
          {tabla.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  );
}

export default Tabla;
