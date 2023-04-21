import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/ThorondorManwe.png",
      nombre: "Carlos Rangel",
      puesto: "Front End Developer",
    },
  ]);

  const [ equipos, setEquipos ] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },
    {
      id: uuidv4(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },
    {
      id: uuidv4(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
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
  const eliminarColaborador = (id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    setEquipos(equiposActualizados);
  };

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    setEquipos([...equipos, { ...nuevoEquipo, id: uuidv4() }]);
  }

  return (
    <div className="App">
      <Header />

      { mostrarFormulario 
          ? <Formulario 
              equipos={equipos.map((equipo) => equipo.titulo)} 
              registrarColaborador={registrarColaborador}
              crearEquipo={crearEquipo}
            /> 
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
                actualizarColor={actualizarColor}
            />
          );
      })}

      <Footer />

    </div>
  );
}

export default App;