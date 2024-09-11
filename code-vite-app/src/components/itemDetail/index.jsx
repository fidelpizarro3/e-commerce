
import Count from "../setCount";

const ItemDetail = ({nombre, detalles, imagen, precio}) => {


    return (
        <section className="item-detail">
            <picture>
                <img src={imagen} alt="" />
            </picture>
            <div className="descripcion-contenedor">
                <h1>{nombre}</h1>
                <p>{detalles}</p>
                <p>{precio}</p>
                <Count/>
            </div>

        </section>
    )
}


export default ItemDetail;