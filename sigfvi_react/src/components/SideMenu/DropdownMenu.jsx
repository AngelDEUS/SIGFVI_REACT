import './DropdownMenu.css'

const DropdownMenu = () => {


    return (
        <div>
            <ul className="DropdawnMenu">
                <li className='liOpcion'>Perfil de Usuario</li>
                <li className='liOpcion'>Configuración</li>
                <div className='separador'></div>
                <li className='liOpcion cerrarS'>Cerrar Sesión<span>.</span></li>
            </ul>
        </div>
    )
}

export default DropdownMenu