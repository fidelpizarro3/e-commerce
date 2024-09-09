import React from 'react';
import CartWidget from '../Cart';
import logo from '../../assets/img/logo.jpeg'
import Menu from '../menu';

const Navbar = () => {
    
    return (
        <>
<header className='header'>
    <nav className='navbar container'>
        <figure>
            <img className='imgHeader' src={logo} alt="" />
        </figure>
    <Menu/>
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