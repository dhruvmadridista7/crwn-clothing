import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
// import CartItem from '../../components/cart-item/cart-item.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, cartTotal, /*addItemToCart, removeItemToCart*/ } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'> 
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>

            
            {
                cartItems.map((cartItem) => {
                    return (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })
            }
            
            <span className='total'>Total : ${cartTotal}</span>
        </div>
    );
};

export default Checkout;




// {
//     cartItems.map((cartItem) => {
//         const { id, name, quantity } = cartItem;
//         return (
//             <div key={id}>
//                 <h2>{name}</h2>
//                 <span>{quantity}</span>
//                 <br />
//                 <span onClick={() => addItemToCart(cartItem)}>increament</span>
//                 <br />
//                 <span onClick={() => removeItemToCart(cartItem)}>decreament</span>
//                 <br />
//                 {/* <span onClick={() => removeItemToCart(cartItem)}>x</span> */}
//             </div>
//         )
//     })
// }