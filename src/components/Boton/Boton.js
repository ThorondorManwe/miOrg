import React from 'react';
import "./Boton.css";

export const Boton = ( {texto} ) => {
  return (
    <>
        <button className="boton">{texto}</button>
    </>
  )
}
