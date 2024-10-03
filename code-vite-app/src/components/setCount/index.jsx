import { useState } from "react";

const Count = ({ item, addToCart }) => {
    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(count + 1);
    };

    const restar = () => {
        if (count > 0) setCount(count - 1);
    };

    const reiniciar = () => {
        setCount(0);
    };

    const handleAddToCart = () => {
        for (let i = 0; i < count; i++) {
            addToCart(item);
        }
        reiniciar();  
    };

    return (
        <>
            <h3>{count}</h3>
            <button className="button-count" onClick={sumar}>+</button>
            <button className="button-count" onClick={handleAddToCart}>Agregar al carrito</button>
            <button className="button-count" onClick={restar}>-</button>
        </>
    );
};

export default Count;



