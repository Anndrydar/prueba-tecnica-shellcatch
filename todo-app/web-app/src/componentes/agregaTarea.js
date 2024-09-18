import React from 'react';
import FormularioDeTarea from './form/formularioTarea';

const AgregaTarea = () => {
  const handleOnSubmit = (libro) => {
    console.log(libro);
  };

  return (
    <React.Fragment>
      <FormularioDeTarea handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AgregaTarea;