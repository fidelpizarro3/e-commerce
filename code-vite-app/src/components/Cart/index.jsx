import { Icon } from '@iconify-icon/react';

const CartWidget = ({quantity = 0}) => {

    return (
        <div className='cart-widget'>
        <span className='pill'>{quantity}</span>
        <Icon className='cart-widget__cart' icon ="gg:shopping-cart" />
        </div>
);
};

export default CartWidget;