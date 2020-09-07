import React from 'react';

const HolaMundo = () => {
  const Hello = '¡Hola Mundo';
  const istrue = false;
  return (
    <div className='HolaMundo'>
      <h1>{Hello}</h1>
      <h2>Curso esencial de react</h2>
      <img src='https://arepa.s3.amazonaws.com/react.png' alt='React' />
      {istrue ? <h4>ESto es verdadero</h4> : <h5>Soy falso</h5>}
      {istrue && <h5>Soy verdadero</h5>}
    </div>
  );
};
export default HolaMundo;
