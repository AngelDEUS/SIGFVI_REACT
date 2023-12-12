import React, { useState } from 'react';
import { Tabla_deudor_item } from './Tabla_deudor_item';
import datos from '../DatosDeudor.json';
import Register_deudor from './Register_deudor';

function Tabla_deudor() {

  const [registerform, setRegisterform] = useState(false)
  
  return (
    <div className='main-container'>
        <div className='main-container'>
      <h1 className='main-title'>Deudores</h1>
      <p className='main-text'>
        Esta pestaña muestra los deudores de la tienda los cuales estaran registrados aqui. Tambien se permite su actualizacion y edicion respectiva
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
            <Register_deudor isOpen={registerform} closeModal={()=> setRegisterform(false)} />
          </form>
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
                    <h2>Dirección</h2>
                </th>
                <th>
                    <h2>Telefono</h2>
                </th>
                <th>
                    <h2>Deuda</h2>
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
                    <Tabla_deudor_item
                      key={datos.id}
                      id={datos.id}
                      name={datos.Nombre}
                      cel={datos.Telefono}
                      direccion={datos.Direccion}
                      deuda={datos.Deuda}
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

export default Tabla_deudor