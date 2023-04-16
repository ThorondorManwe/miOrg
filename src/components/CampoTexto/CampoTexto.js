import React, { useState } from 'react';
import './CampoTexto.css';

export const CampoTexto = (props) => {

  //const [valor, setValor] = useState("");

  const placeholderModificado = `${props.placeholder}...`;

  const manejarCambio = (e) => {
    //console.log("Cambio", e.target.value);
    props.setValor(e.target.value);
  }


  return (
    <div className="campo-texto">
        <label>{ props.titulo }</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required}
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
  )
}
