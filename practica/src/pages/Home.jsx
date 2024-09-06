import React from 'react'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <main>
        <NavBar/>
        <div className='contenido'>
          <div className='lado-izquierdo'>
            <label>So, you want to travel to</label>
            <h1>Space</h1>
            <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
          </div>
          <div className="lado-derecho">
            <div className='explorer'>
              EXPLORER
            </div>
          </div>
        </div>
    </main>
  )
}
