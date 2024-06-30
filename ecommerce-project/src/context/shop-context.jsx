import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";
export const ShopContext = createContext(null);
//creating array to hold all of our cart items. Each id starts at zero until added to cart
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length; i++) {
        cart[i] = 0;
    }
    return cart;
};
export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    const contextValue = {cartItems,addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
    };
    

