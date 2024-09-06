import React from 'react'
import NavBar from '../components/NavBar'
import { Image } from 'primereact/image';

export default function Technology() {
  return (
    <main>
        <NavBar/>
        <div className='contenido' >
          <div className='lado-izquierdo' style={{textAlign:"right"}}>
            <h2>01 PICK YOUR DESTINATION</h2>
            <Image src="./assets/destination/image-mars.png" alt="Image" width="350" />
          </div>
          <div className="lado-derecho">
            <Image src="./assets/technology/image-launch-vehicle-portrait.jpg" alt="Image" width="350" />
          </div>
        </div>
    </main>
  )
}
