import React from 'react'
import { data } from '../helpers/data';

export const CuadroComponent = ( {funcion}) => {

  return (
    <>
      {
          data.map( datos => (
            <div key={datos.id} className={`Boton ${datos.color}`} onClick={()=>funcion({datos})}></div>
          ))
      }
    </>
  )
}
