import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';
import { array } from 'prop-types';

export const ShopContext = createContext(null);

 const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index < all_product.length+1; index++ ){
      cart[index] = 0
    }
    return cart;
  }

const ShopContextProvider = ({ children }) => {

   const [cartItems,setCartItems] = useState(getDefaultCart());

  const addtoCart = (itemId)=>{
setCartItems((prev)=>({
  ...prev,[itemId]:prev[itemId]+1
}))
  }

  
  const removeFromCart = (itemId)=>{
setCartItems((prev)=>({
  ...prev,[itemId]:prev[itemId]-1
}))
  }
  const contextValue = { all_product , cartItems,addtoCart,removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
