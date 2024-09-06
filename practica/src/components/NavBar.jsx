import React from 'react'
import { Menubar } from 'primereact/menubar';
import { Image } from 'primereact/image';

export default function NavBar() {

    const items = [
        {
            label: '00 HOME',
            url: '/'
        },
        {
            label: '01 DESTINATION',
            url: '/destination'
        },
        {
            label: '02 CREW',
            url: '/crew'
        },
        {
            label: '03 TECHNOLOGY',
            url: '/technology'
        }
    ];

    return (
        <nav>
            <div className='card parte-izquierda'>
                <Image src="./assets/shared/logo.svg" alt="Image" width="50" />
                <div className='linea'></div>
            </div>
            <div className="card parte-derecha">
                <Menubar model={items} />
            </div>
        </nav>
        
    )
}
