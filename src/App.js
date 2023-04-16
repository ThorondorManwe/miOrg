import { useState } from 'react';
import './App.css';
import { Formulario } from './components/Formulario/Formulario';
import { Header } from './components/Header/Header';
import { MiOrg } from './components/MiOrg/MiOrg';

function App() {

  const [ mostrarFormulario, setMostrarFormulario ] = useState(true);

  return (
    <div className="App">
      <Header />

      { mostrarFormulario ? <Formulario /> : " " }
      
      <MiOrg setMostrarFormulario={setMostrarFormulario}/>
    </div>
  );
}

export default App;