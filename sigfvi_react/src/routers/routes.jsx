import { Routes, Route } from 'react-router-dom';
import LoginMain from '../pages-views/Login/LoginMain';
import MainLayout from '../pages-views/mainLayout';
import Erro404 from '../pages-views/Error_Pages/error404';
import Home from '../pages-views/Home/Home';
import Dashboard from '../pages-views/Dashboard/main_Dashboard';
import Usuarios from '../pages-views/mod_Usuarios/mai_Usuarios';
import Inventario from '../pages-views/mod_inventario/mai_Inventario';

import VentasFacturacion from '../pages-views/mod_Ventas-Facturacion/main_VentasFacturacion';
import Ventas from '../pages-views/mod_Ventas-Facturacion/main_ventas'

import Informes from '../pages-views/mod_Informes/main_informes';
import Ayuda from '../pages-views/Ayuda/MainAyuda';

import Tabla_inventario from "../pages-views/mod_inventario/tablaInventario";


export function MyRoutes({ onLogin }) {
    return (
        <Routes>
            <Route path='/Layout/*' element={<MainLayout onLogin={onLogin} />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/Dashboard' element={<Dashboard />} />
            <Route path='/GestionUsuarios' element={<Usuarios />} />
            <Route path='/Inventario' element={<Inventario />} />
            <Route path='/Inventario/TablaInventario' element={<Tabla_inventario />} />

            <Route path='/VentasFacturacion' element={<VentasFacturacion />} />
            <Route path='/VentasFacturacion/ventas' element={<Ventas />} />

            <Route path='/Informes' element={<Informes />} />
            <Route path='/Ayuda' element={<Ayuda />} />
            <Route path='*' element={<Erro404 />} />
            <Route path='/' element={<LoginMain onLogin={onLogin} />} />
            <Route path='/Login' element={<LoginMain onLogin={onLogin} />} />
        </Routes>
    );
}
