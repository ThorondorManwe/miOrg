import { useState } from 'react';
import './App.css';
import { Formulario } from './components/Formulario/Formulario';
import { Header } from './components/Header/Header';
import { MiOrg } from './components/MiOrg/MiOrg';
import { Equipo } from './components/Equipo/Equipo';

function App() {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(false);



  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestion",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Header />

      { mostrarFormulario ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} /> : " " }
      
      <MiOrg setMostrarFormulario={setMostrarFormulario}/>
      
      {equipos.map( (equipo) => {
        return( <Equipo datos={equipo} key={equipo.titulo} />);
      })}

    </div>
  );
}

export default App;