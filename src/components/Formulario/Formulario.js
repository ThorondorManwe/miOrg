import React, { useState } from 'react';
import './Formulario.css';
import { Campo } from '../Campo/Campo';
import { ListaOpciones } from '../ListaOpciones/ListaOpciones';
import { Boton } from '../Boton/Boton';

export const Formulario = (props) => {

  const [ nombre, setNombre ] = useState("");
  const [ puesto, setPuesto ] = useState("");
  const [ foto, setFoto ] = useState("");
  const [ equipo, setEquipo ] = useState("");

  const [ titulo, setTitulo ] = useState("");
  const [ color, setColor ] = useState("");

  const {registrarColaborador, crearEquipo} = props;

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio", e);
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    }
    registrarColaborador(datosAEnviar);
  }

  const manejarNuevoEnvio = (e) => {
    e.preventDefault();
    crearEquipo( { titulo, colorPrimario: color } );
  }

  return (
    <>
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Campo titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} setValor={setNombre} />
                <Campo titulo="Puesto" placeholder="Ingresar puesto" required={true} valor={puesto} setValor={setPuesto} />
                <Campo titulo="Foto"   placeholder="Ingresar foto"   required={true} valor={foto}   setValor={setFoto} />
                <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
                <Boton texto="Crear" />
            </form>

            <form onSubmit={manejarNuevoEnvio}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Campo titulo="Título" placeholder="Ingresar título" required={true} valor={titulo} setValor={setTitulo} />
                <Campo titulo="Color" placeholder="Ingresar el color en Hex" required={true} valor={color} setValor={setColor} type="color" />
                <Boton texto="Registrar Equipo" />
            </form>

        </section>
    </>
  )
}
