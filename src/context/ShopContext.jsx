import React, { createContext, useState } from 'react';
import all_product from '../components/assets/all_product';

// Create the context with a default value
export const ShopContext = createContext({ all_product: [] });

const getDefaultCart = (productList) => {
    let cart = {};
    for (let index = 0; index < productList.length; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = ({ children }) => {    
    const [cartItem, setCartItems] = useState(getDefaultCart(all_product));
    
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItem);
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        console.log(cartItem);
    }

    const contextValue = { all_product, cartItem, setCartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
