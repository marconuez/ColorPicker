import React from 'react'
import "./styles/NosotrosStyle.css";
import { useState } from 'react';
import { Ground } from '../component/Ground';
import { CuadroComponent } from '../component/CuadroComponent';


export const PickerColorPage = () => {

  const [cambiaColor, setCambiaColor] = useState('color2');
  const [hexa, sethexa] = useState('#006edb');

  const cambiaColorpaleta = (obj) => {
    const {color, hexa} = obj.datos;

    setCambiaColor(color);
    sethexa(hexa);
  }

  return (
    <>
      <Ground color={cambiaColor}/>
    
      <div className='container'>
        <div className={`toolsContainer ${cambiaColor}`}>
          <h1>{hexa}</h1>
        </div>
        <div className='contenedorFooter'>
          <div className='contenedorBotones'>
            <CuadroComponent funcion={cambiaColorpaleta}/>
          </div>
        </div>
      </div>
    </>
  )
}
