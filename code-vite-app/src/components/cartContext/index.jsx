import { createContext, useState } from "react";
import Swal from 'sweetalert2'; // Asegúrate de importar SweetAlert2

// Crea el contexto
export const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const showToast = (message) => {
        Swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: message,
            showConfirmButton: true,
            timer: 1500,
            timerProgressBar: true,
        });
    };

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
        showToast(`${item.nombre} ha sido añadido al carrito!`); 
    };

    const removeItem = (id) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                // Si la cantidad es 1, eliminar el item
                return prevCart.filter(item => item.id !== id);
            }
            // Si hay más de 1, reducir la cantidad
            return prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, getTotalQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
