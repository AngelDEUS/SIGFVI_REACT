import React from 'react'
import TituloyDesc from '../../components/Titles/TituloyDesc'

const main_Dashboard = () => {
    const titulo = 'Dashboard';
    const descipcion = 'descipción del dashboard';

    return (
        <div>
            <div className='encabezado__titulos'>
                <TituloyDesc titulo={titulo} descripcion={descipcion} />
            </div>
        </div>
    )
}

export default main_Dashboard