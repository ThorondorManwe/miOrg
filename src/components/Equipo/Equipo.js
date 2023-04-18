import React from 'react';
import "./Equipo.css";
import { Colaborador } from '../Colaborador/Colaborador';

export const Equipo = ( props ) => {

  const { titulo, colorPrimario, colorSecundario } = props.datos;


  const estiloH3 = { borderColor: colorPrimario }

  return (
    <>
        <section className='equipo' style={ { backgroundColor: colorSecundario } }>
            <h3 style={estiloH3} >{ titulo }</h3>
            <div className='colaboradores'>
              <Colaborador />
            </div>
        </section>
    </>
  )
}
