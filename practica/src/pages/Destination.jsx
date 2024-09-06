import React from 'react'
import NavBar from '../components/NavBar'
import { Image } from 'primereact/image';
import { TabMenu } from 'primereact/tabmenu';

export default function Destination() {
  const items = [
    { label: 'MOON', },
    { label: 'MARS', },
    { label: 'EUROPA', },
    { label: 'TITAN', }
];
  
  return (
    <main>
        <NavBar/>
        <div className='contenido' >
          <div className='lado-izquierdo' style={{textAlign:"right"}}>
            <h2>01 PICK YOUR DESTINATION</h2>
            <Image src="./assets/destination/image-mars.png" alt="Image" width="350" />
          </div>
          <div className="lado-derecho">
            <TabMenu model={items} />
          </div>
        </div>
    </main>
  )
}
