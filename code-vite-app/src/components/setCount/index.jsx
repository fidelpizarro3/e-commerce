import { useState } from "react";


const Count = () => {
    const [Count,setCount] = useState(0)

    const sumar = () => {
        setCount (Count + 1)
    }

    const restar = () => {
        if (Count > 0)
        setCount (Count - 1)
    }
    const reiniciar = () => {
        setCount (0)
    }

    return (
        <>
        <h3>{Count}</h3>
        <button onClick={sumar}>agregar</button>
        <button onClick={reiniciar}>reiniciar</button>
        <button onClick={restar}>quitar</button>
        </>
    );
};

export default Count;
