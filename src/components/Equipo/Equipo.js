import React from 'react';
import "./Equipo.css";
import { Colaborador } from '../Colaborador/Colaborador';

export const Equipo = ( props ) => {

  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores, eliminarColaborador } = props;


  const estiloH3 = { borderColor: colorPrimario }

  return (
    <>
    { colaboradores.length 
        ?
        <section className='equipo' style={ { backgroundColor: colorSecundario } }>
            <h3 style={estiloH3} >{ titulo }</h3>
            <div className='colaboradores'>
              { colaboradores.map( (colaborador, index) => {
                return (
                    <Colaborador
                        datos={colaborador} 
                        key={colaborador.index} 
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                    />
                )
              }) }
            </div>
        </section>
        : ""
    }
    </>
  )
}
