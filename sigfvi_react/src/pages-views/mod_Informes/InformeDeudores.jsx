import React from 'react';
import { Link } from 'react-router-dom';


function InformeDeudores() {
  return (
    <main>
      <h1>Informe de Deudores</h1>
      <p>
        Este es el módulo encargado de realizar los <s>Informes de los deudores</s> para generar un reporte de quienes están en la lista.
      </p>
      <hr />
      <h2 style={{ textAlign: 'center' }}>Informe Deudores</h2>
      <Link to='/Informes'><button className="b1" id="btn" >Volver</button></Link>
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'center' }}><input type="checkbox" /></th>
            <th>ID</th>
            <th>Nombre y Apellido</th>
            <th>Fecha de Registro</th>
            <th>Total de Deuda</th>
            <th style={{ textAlign: 'center' }}>Estado</th>
          </tr>
        </thead>
        <tbody>
          <FilaDeudor id={1} nombre="Maycol Cardona" fechaRegistro="2023/06/15" totalDeuda="$50.000" estado="ACTIVO" />
          <FilaDeudor id={2} nombre="Santiago Gonzales" fechaRegistro="2023/07/11" totalDeuda="$127.000" estado="ACTIVO" />
          <FilaDeudor id={3} nombre="Maycol Cardona" fechaRegistro="2023/06/15" totalDeuda="$50.000" estado="ACTIVO" />
          <FilaDeudor id={4} nombre="Santiago Gonzales" fechaRegistro="2023/07/11" totalDeuda="$127.000" estado="ACTIVO" />
          <FilaDeudor id={5} nombre="Maycol Cardona" fechaRegistro="2023/06/15" totalDeuda="$50.000" estado="ACTIVO" />
          <FilaDeudor id={6} nombre="Santiago Gonzales" fechaRegistro="2023/07/11" totalDeuda="$127.000" estado="ACTIVO" />
          <FilaDeudor id={7} nombre="Maycol Cardona" fechaRegistro="2023/06/15" totalDeuda="$50.000" estado="ACTIVO" />
          <FilaDeudor id={8} nombre="Santiago Gonzales" fechaRegistro="2023/07/11" totalDeuda="$127.000" estado="ACTIVO" />
          <FilaDeudor id={9} nombre="Maycol Cardona" fechaRegistro="2023/06/15" totalDeuda="$50.000" estado="ACTIVO" />
          <FilaDeudor id={10} nombre="Santiago Gonzales" fechaRegistro="2023/07/11" totalDeuda="$127.000" estado="ACTIVO" />
        </tbody>
      </table>
    </main>
  );
}

function FilaDeudor({ id, nombre, fechaRegistro, totalDeuda, estado }) {
  return (
    <tr>
      <th style={{ textAlign: 'center' }}><input type="checkbox" /></th>
      <td>{id}</td>
      <td>{nombre}</td>
      <td>{fechaRegistro}</td>
      <td>{totalDeuda}</td>
      <td style={{ textAlign: 'center' }}>{estado}</td>
    </tr>
  );
}

export default InformeDeudores;
