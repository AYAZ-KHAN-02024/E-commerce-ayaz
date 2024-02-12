import { createContext, useContext, useEffect, useReducer } from "react";
import { API } from "./Api";
import axios from "axios";
import reducer from "../reducers/Reducer";

const AppContext = createContext();


// const API = 'https://api.pujakaitem.com/api/products'
//api not work properly thats why i use this functionality like this , its same like real api work 

const initialState = {
    isLoading: false,
    isError: false,
    Product: [],
    FeaturedProducts: [],


    isSingleLoading: false,
    isSingleError: false,
    singleProduct: {},


}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    async function getProducts(url) {
        dispatch({ type: 'LOADING' })
        try {
            const response = await axios.get(url);
            const products = await response.config.url;
            dispatch({ type: "API_DATA", payload: products })

        } catch (error) {
            dispatch({ type: "API_ERROR" })

        }
    }

    useEffect(() => {
        getProducts(API)
    }, [])


    ///this is for single product details
    async function getSingleProduct(url) {
        dispatch({ type: "SINGLE_LOADING" })
        try {
            const response = await axios.get(url);
            const SingleProduct = await response.data;
            dispatch({ type: "API_SINGLE_PRODUCT", payload: SingleProduct })
           

        } catch (error) {
            dispatch({ type: "SINGLE_PRODUCT_ERROR" })
        }
    }



    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )

}


//custom hook for make more simplicity 

const useProduct = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext, useProduct }