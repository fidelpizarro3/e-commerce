import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductosCatalogo = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data/item.json') 
            .then(response => response.json())
            .then(data => setItems(data))    
            .catch(error => console.error('Error al cargar los productos:', error));
    }, []);

    return (
        <div className="product-catalog">
            {items.map((item) => (
                <div key={item.id} className="product-card">
                    <Link to={`/detalles/${item.id}`}>
                        <img src={item.imagen} className="imagen-producto" alt="imagen del producto" />
                        <h3>{item.nombre}</h3>
                        <p>{item.precio}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ProductosCatalogo;
