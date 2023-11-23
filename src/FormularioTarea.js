import React, { useState } from 'react';

const FormularioTarea = ({ agregarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [datosEstudiante, setDatosEstudiante] = useState({ paterno: '', materno: '', ci: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTarea({ descripcion: nuevaTarea, datosEstudiante });
    setNuevaTarea('');
    setDatosEstudiante({ paterno: '', materno: '', ci: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
     <input
        type="text"
        placeholder="Escribe tu tarea"
        value={datosEstudiante.paterno}
        onChange={(e) => setDatosEstudiante({ ...datosEstudiante, paterno: e.target.value })}
      />
      <h1></h1>
      <input
        type="text"
        placeholder="Escribe la descripcion de la tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      
      
      <h1></h1>
      
      <button type="submit">Guardar Tarea</button>
    </form>
  );
};

export default FormularioTarea;