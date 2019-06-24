import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Cancion from './components/Cancion';
import Formulario from './components/Formulario';
import Informacion from './components/Informacion';

function App() {

  const [ artista, agregarArtista ] = useState('');
  const [ letra, agregarLetra ] = useState([]);
  const [ info, agregarInfo ] = useState({});


  // Consulta API canciones
  const consultarAPILetra = async busqueda => {
    //console.log(busqueda);
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;  

    

    // consulta api
    const resultado = await axios(url);

    agregarArtista(artista);

    // console.log(resultado.data.lyrics);
    agregarLetra(resultado.data.lyrics);

    
  }

  // Consultar API info grupo
  const consultarAPIInfo = async () => {

    const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

    const resultado = await axios(url);
    
    agregarInfo(resultado.data.artists[0]);

  }

  useEffect(
    () => {
      consultarAPIInfo();
    }, [artista]
  )

  return (
    <Fragment>
      <Formulario 
        consultarAPILetra={consultarAPILetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            
          </div>
          <div className="col-md-6">
          <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
