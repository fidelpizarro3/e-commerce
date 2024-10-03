import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { CartContext } from "../cartContext/index";

const ProductosCatalogo = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fallback, setFallback] = useState({
        visible: false,
        message: ''
    });
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        setLoading(true);

        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection)
            .then((snapshot) => {
                setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            })
            .catch((err) => {
                console.error("Error al consultar productos ", err);
                setFallback({ visible: true, message: "No pudimos cargar los datos" });
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="product-catalog">
            {loading ? (
                <div className="spinner-container">
                    ´<p>cargando productos...</p>
                </div>
            ) : (
                items.map((item) => (
                    <div key={item.id} className="product-card">
                        <Link to={`/detalles/${item.id}`}>
                            <img src={item.imagen} className="imagen-producto" alt="imagen del producto" />
                            <h3 className="item-nombre">{item.nombre}</h3>
                            <p>$ {item.precio}</p>
                        </Link>
                        <button className="agregarCarrito" onClick={() => addToCart(item) }>
                            Agregar al carrito
                            
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default ProductosCatalogo;
