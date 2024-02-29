import { createContext, useContext, useEffect, useReducer } from "react";
import CartReducer from "../reducers/CartReducer";


const addCartContext = createContext();


const localCartData = () => {
    let CartData = localStorage.getItem("ayazCart");
    //   if (CartData === null || CartData === undefined) {
    //       return [];
    //   } else {
    //       try {
    //           return JSON.parse(CartData);
    //       } catch (error) {
    //           console.error("Error parsing JSON in localCartDAta:", error);
    //           return [];
    //       }
    //   }

    const DataInCart = JSON.parse(CartData);
    if (!Array.isArray(DataInCart)) { return []; }
    else {
        return DataInCart
    }
};


const initialState = {
    // cart:[],
    cart: localCartData(),
    subtotal: '',
    total_item: '',

}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    const addToCart = (tickColor, amount, id, name, price, Product) => {
        dispatch({ type: "ADD_TO_CART", payload: { tickColor, amount, id, name, price, Product } })
    }

    const deleteItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id })
    }

    //add cart data to localStorage

    useEffect(() => {
        dispatch({ type: "CART_AMOUNT" })
        dispatch({ type: 'SUBTOTAL_CART_PRICE' })
        //cart is an array so in local storage by this method we can add string thats why use json.stringify
        localStorage.setItem('ayazCart', JSON.stringify(state.cart))

    }, [state.cart])


    const ClearAllCart = () => {
        dispatch({ type: 'CLEAR_ALL_CART' })
    }




    return (
        <addCartContext.Provider value={{ ...state, addToCart, deleteItem, ClearAllCart }}>
            {children}
        </addCartContext.Provider>
    )

}

export const useCartContext = () => {

    return useContext(addCartContext)
}


export { CartContextProvider }