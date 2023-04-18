import React, { useState } from 'react';
import './Formulario.css';
import { CampoTexto } from '../CampoTexto/CampoTexto';
import { ListaOpciones } from '../ListaOpciones/ListaOpciones';
import { Boton } from '../Boton/Boton';

export const Formulario = (props) => {

  const [ nombre, setNombre ] = useState("");
  const [ puesto, setPuesto ] = useState("");
  const [ foto, setFoto ] = useState("");
  const [ equipo, setEquipo ] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("manejar el envio", e);
    let datosAEnviar = {
      nombre: nombre,
      puesto: puesto,
      foto: foto,
      equipo: equipo,
    }
    console.log(datosAEnviar);
  }

  return (
    <>
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required={true} valor={nombre} setValor={setNombre} />
                <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required={true} valor={puesto} setValor={setPuesto} />
                <CampoTexto titulo="Foto"   placeholder="Ingresar foto"   required={true} valor={foto}   setValor={setFoto} />
                <ListaOpciones valor={equipo} setEquipo={setEquipo} equipos={props.equipos} />
                <Boton texto="Crear" />
            </form>
        </section>
    </>
  )
}
