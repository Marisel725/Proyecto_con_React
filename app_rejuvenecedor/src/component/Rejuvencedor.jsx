import React, { useState } from 'react'

function Rejuvenecedor() {
  
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState(0);
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

      if (nombre.length < 1 || !isNaN(nombre)) {
        setError("el nombre debe contener al menos un caracter del tipo texto")
        
      } else if (edad < 0) {
        setError('La edad debe ser un número entero positivo');
      }
      else {
        const nuevaEdadCalculada = Math.round (edad) - 10;
        setError(nuevaEdadCalculada);

        setError(`Hola ${nombre}, tu nueva y feliz edad es de ${nuevaEdadCalculada} años.`);
      }    
    }

  const mensajeStyle = {
    color: 'blue', 
    fontSize: '20px',
    marginTop: '10px', 
  };

  const botonStyle = {
    backgroundColor: 'orange', 
    color: 'white', 
    padding: '10px 20px', 
    fontSize: '18px', 
    borderRadius: '5px',
    cursor: 'pointer', 
    border: 'none', 
  };

  return (
    <div>
      <h2>Rejuvenecedor</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nombre" style={{ marginRight: '10px' }}>Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="edad" style={{ marginRight: '10px' }}>Edad:</label>
          <input
            type="number"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <button type="submit" style={botonStyle}>Rejuvenecer</button>
      </form>
      {error && <p style={mensajeStyle}>{error}</p>}
    </div>
  );
}
  

export default Rejuvenecedor;
