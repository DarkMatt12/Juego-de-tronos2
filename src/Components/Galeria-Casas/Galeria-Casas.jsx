import React from 'react';


import Casa from '../Casa/Casa';

const GaleriaCasas = ({casas}) => {
   return (
   
     
    <div className='Galeria-Casas'>
        {casas.map((casa) => <Casa key={casa.name} casa={casa}/>)}
    </div>
 
    
  
   )
}

export default GaleriaCasas

