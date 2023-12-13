import React from 'react'
import TituloyDesc from '../../components/Titles/TituloyDesc'
import './mod_ventas.css'

const main_ventas = () => {

    const descipcion = 'En este panel puede realizar la gestión de ventas y facturación, la búsqueda de productos por nombre y código de producto están activas; Puede dar clic abrir lista para visualizar todos los productos.';

    return (
        <div>
            <div>
                <TituloyDesc titulo='Ventas y Facturación' descripcion={descipcion} />
            </div>
            <div className="container__ventas">
                <div className="busqueda__prod">
                    <div className='buscar_productos'>
                        <div className='right__b'>
                            <div className="buscar">
                                <i class="bi bi-search buscar_i"></i>
                                <div className='sep_vertical_b'></div>
                                <input type="text" placeholder='Buscar productos' />
                            </div>
                            <button className="btn_f abrir">+ Abrir lista</button>
                            <button className="btn_f limpiar">Limpiar</button>
                        </div>
                        <div className='left__b'>
                            <button className="btn_f nuevo">+ Nuevo ticket</button>
                            <button className="btn_f cancelar">Cancelar</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default main_ventas