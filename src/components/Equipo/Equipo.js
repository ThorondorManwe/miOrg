import React from 'react';
import "./Equipo.css";
import { Colaborador } from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

export const Equipo = ( props ) => {

  const { titulo, colorPrimario, colorSecundario } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor } = props;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6)
  }


  const estiloH3 = { borderColor: colorPrimario }

  return (
    <>
    { colaboradores.length 
        ?
        <section className='equipo' style={ obj }>
            <input
                 type="color"
                 className='input-color'
                 value={hexToRgba(colorPrimario, 0.6)}
                 onChange={(e) => {
                  actualizarColor(e.target.value, titulo);
                 }}
            />
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
