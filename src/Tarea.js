import React from 'react';

const Tarea = ({ datosEstudiante, descripcion, eliminarTarea }) => {
  return (
    <div>
      
      <div>
        Descripción: {descripcion}
      </div>
      <button onClick={eliminarTarea}>Eliminar Tarea</button>
    </div>
  );
};

export default Tarea;