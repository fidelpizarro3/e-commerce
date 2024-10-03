import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext/index";
import Count from "../setCount";

const ItemDetail = ({ nombre, detalles, imagen, precio, id }) => {
    const { addToCart } = useContext(CartContext);

    const item = { id, nombre, detalles, imagen, precio };

    return (
        <section className="item-detail">
            <picture>
                <img className="imagen-detail" src={imagen} alt={nombre} />
            </picture>
            <div className="descripcion-contenedor">
                <h1>{nombre}</h1>
                <p>{detalles}</p>
                <p>{precio}</p>
                <Count item={item} addToCart={addToCart} />
            </div>
        </section>
    );
};

export default ItemDetail;
