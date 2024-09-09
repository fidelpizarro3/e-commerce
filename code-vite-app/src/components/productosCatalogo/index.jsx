import { useEffect, useState } from "react";
import Count from "../setCount";
const ProductosCatalogo = () => {

    const [items,setItems] = useState([]);

    useEffect(() => {
        fetch('src/data/item.json')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error al cargar los productos:', error));
    }, []);

    return (
        <div className="product-catalog">
        {items.map((item) => (
            <div key={item.id} className="product-card">
            <img src= {item.imagen} className="imagen-producto" alt="imagen del producto" />    
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
            <button className="class-button">agregar al carrito</button>
            </div>
        ))}
        </div>
    );
    };


export default ProductosCatalogo;