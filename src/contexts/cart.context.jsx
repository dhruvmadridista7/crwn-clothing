import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    //find if cartItem contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    )

    //If found, increament quantity
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    //return new array with modified cartItems/ new cart Items
    return [ ...cartItems, { ...productToAdd, quantity : 1 }];
}

// const removeCartItem = (cartItems, cartItemToRemove) => {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
// }

// const decreamentItem = (cartItems ,productToDecreament) => {
//     if(productToDecreament.quantity === 1) {
//         return removeCartItem(cartItems, productToDecreament);
//     } 

//     return cartItems.map((cartItem) => 
//         cartItem.id === productToDecreament.id 
//             ? { ...cartItem, quantity: cartItem.quantity - 1 }
//             : cartItem
//     )
// }

const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    // check if quantity is equal to 1, if it is remove that item from cart
    if(existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }

    // return back cartitems with mmatching cart item with reduced quantity
    return cartItems.map((cartItem) => 
        cartItem.id === cartItemToRemove.id 
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart : () => {},
    clearItemFromCart : () => {},
    cartCount : 0,
    cartTotal : 0,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    //other approach
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
        // setCartCount(cartCount + 1);   //diff approach
    }

    // const decreamentItemFromCart = (productToDecreament) => {
    //     setCartItems(decreamentItem(cartItems ,productToDecreament));
    // }

    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemToCart, clearItemFromCart, cartTotal };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};



/*
product
{
    id,
    name,
    price,
    imageUrl
}
Cart Item
{
    id,
    name,
    price,
    imageUrl,
    quantity
}
*/