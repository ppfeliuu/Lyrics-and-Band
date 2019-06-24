import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';

function App() {

  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLetra ] = useState([]);
  const [ info, agregarInfo ] = useState({});


  // Consulta API canciones
  const consultarAPILetra = busqueda => {
    console.log(busqueda);
    const url = `https://api.lyrics.ovh/v1`;  
  }

  return (
    <Fragment>
      <Formulario 
        consultarAPILetra={consultarAPILetra}
      />
    </Fragment>
  );
}

export default App;
