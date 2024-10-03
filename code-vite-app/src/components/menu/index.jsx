import { Link } from 'react-router-dom';

const Menu = () => {
    return(        
        <>
            <menu className='navbar__menu'>
                <li className='navbar__list'><Link className='navbar__link' to="/">INICIO</Link></li>
                <li className='navbar__list'><Link className='navbar__link' to="/productos">TIENDA</Link></li>
                <li className='navbar__list'><Link className='navbar__link' to="/contacto">CONTACTO</Link></li> {/* Cambia aquí a "/contacto" */}
            </menu>
        </>
    );
}

export default Menu;
