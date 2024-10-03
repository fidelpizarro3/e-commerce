import { useContext } from "react"; 
import { CartContext } from "../cartContext";
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Modal = ({ onClose }) => {
    const { cart, addToCart, removeItem } = useContext(CartContext);
    const navigate = useNavigate(); // Inicializar useNavigate

    // Calcular el total
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
    };

    const handlePayment = () => {
        navigate('/pago'); // Cambia a la ruta de la página de pago
    };

    return (
        <div className="modal" onClick={(e) => { 
            if (e.target.classList.contains('modal')) {
                onClose();
            }
        }}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose}>Cerrar</button>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <>
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className="modal__item">
                                    <img src={item.imagen} alt={item.nombre} className="modal__item-image" />
                                    <div className="modal__item-details">
                                        <h3>{item.nombre}</h3>
                                        <p>Precio: ${item.precio}</p>
                                        <p>Cantidad: {item.quantity}</p>
                                        <button 
                                            className="boton-sumar-restar" 
                                            onClick={(e) => { 
                                                e.preventDefault();  // Prevenir comportamiento predeterminado
                                                e.stopPropagation(); 
                                                removeItem(item.id); 
                                            }}>
                                            -
                                        </button>
                                        <button 
                                            className="boton-sumar-restar" 
                                            onClick={(e) => { 
                                                e.preventDefault();  // Prevenir comportamiento predeterminado
                                                e.stopPropagation(); 
                                                addToCart(item);
                                            }}>
                                            +
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="modal__total">
                            <h2>Total: ${calculateTotal()}</h2>
                            <button className="modal__pay-button" onClick={handlePayment}>Pagar</button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Modal;
