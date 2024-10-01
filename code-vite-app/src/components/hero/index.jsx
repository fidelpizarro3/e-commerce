import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/img/hero.jpeg';


const Hero = () => {
    const navigate = useNavigate();

    const goToStore = () => {
        navigate('/productos');
    };

    return (
        <div className="hero-container">
            <img src={hero} className='img-hero' alt="hero" />
            <button onClick={goToStore} className="btn-go-to-store">
                Ir a la Tienda
            </button>
        </div>
    );
}

export default Hero;
