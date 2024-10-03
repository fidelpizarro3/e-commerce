import { useContext, useState } from "react";
import { CartContext } from "../cartContext/index";
import { Icon } from '@iconify-icon/react';
import Modal from "../modal";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleToggleModal = (event) => {
        event.preventDefault(); 
        setIsModalOpen(!isModalOpen);
        console.log("Modal abierto: ", isModalOpen);
    };

    return (
        <div className='cart-widget'>
            {/* Agrega el manejador de clics al span */}
            <span className='pill' onClick={handleToggleModal} style={{ cursor: 'pointer' }}>
                {getTotalQuantity()}
            </span>
            <Icon 
                className='cart-widget__cart' 
                icon="gg:shopping-cart" 
                onClick={handleToggleModal} 
            />
            {isModalOpen && <Modal onClose={handleToggleModal} />}
        </div>
    );
};

export default CartWidget;
