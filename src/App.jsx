import { useState } from 'react'
import './App.css'

function App() {

  const [first, setfirst] = useState(true)
 
  return (
    <div>
        {/* <h1>Marco Antonio Nuñez Cabezas</h1> */}


        <div className='BallPicture'>
          <div className='contenedorImg'>
            {/* <img src="https://picsum.photos/200/300" alt="" /> */}
          </div>
        </div>
    </div>
  )
}

export default App
