import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import LogoTiendecita from '../../assets/Logo/LogoMid_01.png';
import imagenUsuario from '../../assets/Usuarios/Login-User-1.jpg';
import Navbar from './Navbar/Navbar';
import './SideMenu.css';

function SideMenu({ miniBarraLateral, toggleMiniBarraLateral }) {
    const [isSessionClosed, setSessionClosed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const spans = document.querySelectorAll('.barra-lateral span');
        spans.forEach(span => {
            span.classList.toggle('oculto', miniBarraLateral);
        });
    }, [miniBarraLateral]);
    const handleLogout = () => {
        Swal.fire({
            title: 'Cerrar Sesión',
            text: '¿Desea cerrar sesión?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, cerrar sesión',
            cancelButtonText: 'No, mantener sesión',
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma cerrar sesión
                setSessionClosed(true);

                Swal.fire({
                    title: 'Sesión cerrada con éxito',
                    icon: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Aceptar',
                }).then(() => {
                    // Redirige a la página de inicio de sesión
                    navigate('/Login');
                });
            }
        });
    };


    return (
        <>
            <div className={`barra-lateral ${miniBarraLateral ? 'mini-barra-lateral' : ''}`} id="barraLateral">
                <div className="nom-pagina">
                    <div className="nombre-pagina">
                        <img
                            className="Logo-barralateral"
                            src={LogoTiendecita}
                            alt="Logo Tiendecita alemana"
                            id="LogoSideMenu"
                            onClick={toggleMiniBarraLateral}
                        />
                        <span className=''>Tiendecita Alemana<highlight>.</highlight></span>
                    </div>
                </div>
                <div className='rules'>
                    <div>
                        <button className='boton'>
                            <i className="bi bi-patch-plus-fill svg"></i>
                            <span className=''>Nueva Venta</span>
                        </button>
                        <div className='lineaSeparador'></div>
                    </div>

                    <div className="navegacion">
                        <ul>
                            <li>
                                <Link to="/Dashboard">
                                    <div className='btnList'>
                                        <i className="bi bi-house-fill svg"></i>
                                    </div>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/GestionUsuarios">
                                    <div className='btnList'>
                                        <i className="bi bi-person-fill svg"></i>
                                    </div>
                                    <span>Gestión de Usuarios</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Inventario">
                                    <div className='btnList'>
                                        <i className="bi bi-box-seam-fill svg"></i>
                                    </div>
                                    <span>Inventario</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/VentasFacturacion">
                                    <div className='btnList'>
                                        <i className="bi bi-cart-fill svg"></i>
                                    </div>
                                    <span>Ventas y Facturación</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Informes">
                                    <div className='btnList'>
                                        <i className="bi bi-clipboard-data-fill svg"></i>
                                    </div>
                                    <span>Informes</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Ayuda">
                                    <div className='btnList'>
                                        <i className="bi bi-chat-heart-fill svg"></i>
                                    </div>
                                    <span>Ayuda</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-div'>
                    <div className='rules'>
                        <div className='lineaSeparador'></div>
                        <div className="navegacion ">
                            <ul>
                                <li>
                                    <Link to="/Configuracion">
                                        <div className='btnList'>
                                            <i className="bi bi-gear-fill svg"></i>
                                        </div>
                                        <span>Configuración</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={handleLogout}>
                                        <div className='btnList'>
                                            <i className="bi bi-arrow-bar-left svg"></i>
                                        </div>
                                        <span>Cerrar Sesión</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='usuario-fill'>
                        <div className="usuario">
                            <img src={imagenUsuario} alt="imagen Usuario" />
                            <div className="info-usuario">
                                <div className="nombre-email">
                                    <span className='rol'>Administrador</span>
                                    <span className='nombre'>Angel Ayala</span>
                                </div>
                                <i className="bi bi-chevron-right svg"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar className='Navbar' />
        </>
    );
}

export default SideMenu;
