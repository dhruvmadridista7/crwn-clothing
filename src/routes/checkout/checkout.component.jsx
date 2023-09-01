import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
// import CartItem from '../../components/cart-item/cart-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

// import './checkout.styles.scss';
import {
    CheckoutContainer,
    CheckoutHeader,
    HeaderBlock,
    Total,
  } from './checkout.styles';

const Checkout = () => {
    const { cartItems, cartTotal, /*addItemToCart, removeItemToCart*/ } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader> 
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>

            
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }
            
            <Total>Total : ${cartTotal}</Total>
        </CheckoutContainer>
    );
};

export default Checkout;




// {
//     cartItems.map((cartItem) => {
//         const { id, name, quantity } = cartItem;
//         return (
//             <HeaderBlock key={id}>
//                 <h2>{name}</h2>
//                 <span>{quantity}</span>
//                 <br />
//                 <span onClick={() => addItemToCart(cartItem)}>increament</span>
//                 <br />
//                 <span onClick={() => removeItemToCart(cartItem)}>decreament</span>
//                 <br />
//                 {/* <span onClick={() => removeItemToCart(cartItem)}>x</span> */}
//             </HeaderBlock>
//         )
//     })
// }