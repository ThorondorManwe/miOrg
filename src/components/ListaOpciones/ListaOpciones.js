import React from 'react';
import './ListaOpciones.css';

export const ListaOpciones = (props) => {

    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestion"
    ];

    const manejarCambio = (e) => {
        e.preventDefault();
        console.log("cambio", e.target.value);
        props.setEquipo(e.target.value);
    }


  return (
    <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden >Seleccionar equipo</option>
            { equipos.map( (equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            } ) }

        </select>
    </div>
  )
}
