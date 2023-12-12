import React, { useState } from 'react';
import './Tabla.css';
import datos from './data/DatosProveedor.json';
import { Tabla_proveedor_item } from './Tabla_proveedor_item';
import Register_proveedor from './Register_proveedor';

function Tabla_proveedores() {

  const [registerform, setRegisterform] = useState(false)

  return (
    <div className='main-container'>
        <div className='main-container'>
      <h1 className='main-title'>Proveedores</h1>
      <p className='main-text'>
        Muestra los proveedores que hacen parte del sistema y permite su respectivo registro y actualizacion.
      </p><br/>
      <hr/>
      <div className='table-container'>
        <div className="option-container">
          <form className="form">
            <div>
              <input type="search" id="search" name="search" placeholder="buscar" className='barra-buscar' />
              <button className='boton b1'>Buscar</button>
            </div>
            <div className='teush'>
            <button type="button" className="boton b4" id="lanzar-modal" name="agregar" onClick={()=> setRegisterform(true)}>Agregar</button>
            </div>
          </form>
          <Register_proveedor isOpen={registerform} closeModal={()=> setRegisterform(false)} />
        </div>

        <section className="table__body">
          <table className='tabla'>
            <thead>
                <th>
                    <h2>id</h2>
                </th>
                <th>
                    <h2>Nombre</h2>
                </th>
                <th>
                    <h2>Número</h2>
                </th>
                <th>
                    <h2>Frecuencia</h2>
                </th>
                <th>
                    <h2>Estado</h2>
                </th>
                <th>
                    <h2>Acciones</h2>
                </th>
            </thead>
            <tbody>
              {
                datos.map((datos, index) => {
                  return(
                    <Tabla_proveedor_item 
                      key={datos.id}
                      id={datos.id}
                      name={datos.Nombre}
                      cel={datos.Telefono}
                      frecuency={datos.Frecuencia}
                      state={datos.Estado}
                    />
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
    </div>
  )
}

export default Tabla_proveedores