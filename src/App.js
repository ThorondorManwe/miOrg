import { useState } from 'react';
import './App.css';
import { Formulario } from './components/Formulario/Formulario';
import { Header } from './components/Header/Header';
import { MiOrg } from './components/MiOrg/MiOrg';
import { Equipo } from './components/Equipo/Equipo';
import { Footer } from './components/Footer/Footer';

function App() {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(false);
  const [ colaboradores, setColaboradores ] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    },
  ]);

  /* Esta función la manejo en el componente MiOrg

  const cambiarMostrar = () => {
    setMostrarFormulario(!mostrarFormulario)
  }
  */

  // Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador);
    // Spread operator
    setColaboradores([...colaboradores, colaborador] );
  }

  // Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador");
  }



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
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ];

  return (
    <div className="App">
      <Header />

      { mostrarFormulario 
          ? <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} /> 
          : " "  
      }
      
      <MiOrg setMostrarFormulario={setMostrarFormulario}/>
      
      {equipos.map( (equipo) => {
        return( 
            <Equipo 
                datos={equipo} 
                key={equipo.titulo} 
                colaboradores={ colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo ) }
                eliminarColaborador={eliminarColaborador}
            />
          );
      })}

      <Footer />

    </div>
  );
}

export default App;