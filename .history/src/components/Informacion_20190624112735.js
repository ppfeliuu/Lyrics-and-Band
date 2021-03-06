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
               <h2 className="card-text text-center">Biography</h2>
               <p className="card-text">{info.strBiographyEN}</p>
               <p className="card-text">
                   <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                       <i className="fab fa-facebook"></i>
                   </a>
               </p>
           </div>
       </div>
    )
}

export default Informacion;