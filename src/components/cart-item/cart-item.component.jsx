// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import './cart-item.styles.scss';
import { CartItemContainer, ItemDetails } from './cart-item.styles';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem; 
    // const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    // const addProductToCart = () => addItemToCart(cartItem);

    // const removeProductFromCart = () => removeItemFromCart(cartItem);

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {price}</span>


                {/* <button onClick={addProductToCart}> + </button> */}
                {/* <button onClick={removeProductFromCart}>x</button> */}
                {/* <span onClick={decreamentItem(cartItem)}> - </span> */}
            </ItemDetails>
        </CartItemContainer>
    );
};


export default CartItem;