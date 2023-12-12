import React, {  useState } from 'react';
import datos from './data/DatosUser.json';
import { Tabla_users_item } from './Tabla_users_item';
import './Tabla.css';
import { Register_user } from './Register_user';

function Tabla_users() {

  const [registerform, setRegisterform] = useState(false)
  
  return (
    <div className='main-container'>
      <h1 className='main-title'>Empleados</h1>
      <p className='main-text'>
        Esta parte del modulo muestra los empleados del sistema y permite su respectivo registro y actualizacion.
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
            <Register_user isOpen={registerform} closeModal={()=> setRegisterform(false)}/>

          </form>
        </div>

        <section className="table__body">
          <table className='tabla'>
            <thead>
                <th>
                    <h2>Nombre</h2>
                </th>
                <th>
                    <h2>id</h2>
                </th>
                <th>
                    <h2>Contraseña</h2>
                </th>
                <th>
                    <h2>Telefono</h2>
                </th>
                <th>
                    <h2>Correo</h2>
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
                    <Tabla_users_item 
                      key={datos.id}
                      id={datos.id}
                      name={datos.first_name}
                      last_name={datos.last_name}
                      password={datos.pass}
                      cel={datos.cel}
                      email={datos.email}
                      state={datos.status}
                      />
                  )
                })
              }
            </tbody>
          </table>
        </section>
      </div>
    </div>
  )
}

export default Tabla_users