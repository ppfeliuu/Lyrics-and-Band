import React, { useState, useEffect, Fragment } from 'react';

import Formulario from './components/Formulario';

function App() {

  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLetra ] = useState([]);
  const [ info, agregarInfo ] = useState({});


  // Consulta API canciones
  const consultarAPILetra = busqueda => {
    const url = 'https://api.lyrics.ovh/v1'
    console.log(busqueda);
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
