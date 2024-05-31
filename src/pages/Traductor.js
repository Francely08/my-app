import React, { useState } from 'react';
import './Traductor.css';

const Traductor = () => {
  const [numero, setNumero] = useState(0);
  const [letras, setLetras] = useState('');

  const unidades = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const decenas = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const centenas = ['', 'cien', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

  const numeroALetras = (num) => {
    if (num === 1000) return 'mil';

    let n = num;
    let str = '';

    if (n >= 100) {
      str += centenas[Math.floor(n / 100)];
      n %= 100;
    }

    if (n >= 20) {
      if (str) str += ' ';
      str += decenas[Math.floor(n / 10)];
      n %= 10;
    }

    if (n > 0) {
      if (str) str += ' y ';
      str += unidades[n];
    }

    return str || 'cero';
  }

  const traducir = () => {
    setLetras(numeroALetras(numero));
  }

  return (
    <div className="card">
      <h1>Traductor de Números a Letras</h1>
      <input
        type="number"
        value={numero}
        onChange={(e) => setNumero(Number(e.target.value))}
        placeholder="Número"
      />
      <button onClick={traducir}>Traducir</button>
      {letras && <h2>{letras}</h2>}
    </div>
  );
}

export default Traductor;

