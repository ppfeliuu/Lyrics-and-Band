import React, { Fragment } from 'react';

function Cancion({letra}) {

    return(
        <Fragment>
            <h2>Lyric</h2>
            <p className="letra">{letra}</p>
        </Fragment>
        
    );
    
}

export default Cancion;