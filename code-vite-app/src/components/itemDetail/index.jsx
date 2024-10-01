import { Link } from "react-router-dom";
import Count from "../setCount";

const ItemDetail = ({ nombre, detalles, imagen, precio,id }) => {
return (
    <section className="item-detail">
    <picture>
    <img className="imagen-detail" src={imagen} alt={nombre} />
    </picture>
    <div className="descripcion-contenedor">
    <h1>{nombre}</h1>
    <p>{detalles}</p>
    <p>{precio}</p>
    <Count/>
    </div>
</section>
);
};

export default ItemDetail;
