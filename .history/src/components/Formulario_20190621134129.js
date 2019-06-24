import React, { useState, useEffect, Fragment } from 'react';

function Formulario() {


    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    //funcion para actualzar state del input

    const actualizarState = e => {
        agregarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

        console.log(busqueda);
    }

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">React Hooks Lyrics finder</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artist</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Artist, Group, Band " 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Song</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Song name" 
                                        onChange={actualizarState}
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Search</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;