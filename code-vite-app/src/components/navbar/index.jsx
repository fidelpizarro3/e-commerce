import React from 'react';
import CartWidget from '../Cart';
import logo from '../../assets/img/logo.jpeg'

const Navbar = () => {
    
    return (
        <>
<header className='header'>
    <nav className='navbar container'>
        <figure>
            <img className='imgHeader' src={logo} alt="" />
        </figure>
        <menu className='navbar__menu'>
            <li className='navbar__list'><a className='navbar__link' href="">inicio</a></li>
            <li className='navbar__list'><a className='navbar__link' href="">productos</a></li>
            <li className='navbar__list'><a className='navbar__link' href="">contacto</a></li>
    </menu>
    <li><a className='navbar__link__carrito' href="">
                <CartWidget/>
                </a>
            </li>
    </nav>
</header>
</>
)
}


export default Navbar;