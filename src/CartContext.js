
import {createContext} from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>
<CartContext.Provider
   value ={{
    cartItems: 4,
    logger : console.log("logged In...")
   }}>

</CartContext.Provider>

export {CartContext, CartProvider};
