import React from 'react';

function Informacion({info}) {
    return(
       <div className="card border-light">
           <div className="card-header bg-primary text-light font-weight-bold">
               Info Artist
           </div>
           <div className="card-body">
               <img src={info.strArtistThumb} alt="Artist Logo"/>
               <p className="card-text">Genre: {info.strGenre}</p>
           </div>
       </div>
    )
}

export default Informacion;