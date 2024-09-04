import mateImperial from '../../assets/img/mate-imperial.png'
import Count from '../setCount';

const Cards = () => {

    return (
        <>
        <section className='sectionCards'>
            <img className ='imgCards' src={imagenMate} alt="" />
            <h2>{nombre}</h2>
            <div>
                <p>{precio}</p>
                <button>{detalles}</button>
                <Count/>
            </div>
        </section>
        </>
    )
}

export default Cards;  