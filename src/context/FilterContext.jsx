import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { useProduct } from "./ProductContext";
import FilterReducer from "../reducers/FilterReducer";


const FilterContext = createContext();

const initialState = {
    filter_Product: [],
    all_Product: [],
    Sorting_value: "sort",
    isFilterLoading: false,
    filters: {
        search_bar_value: "",
        category: 'All',
        company: "All",
        max_price: 0,
        fix_price: 0,
        min_price: 0,
    }
}
export const FilterContextProvider = ({ children }) => {



    const { Product } = useProduct();
    //    console.log(Product);




    //for filter products
    const [state, dispatch] = useReducer(FilterReducer, initialState)
    useEffect(() => {

        state.isFilterLoading = true;
        dispatch({ type: "SET_FILTER_PRODUCT", payload: Product })
        state.isFilterLoading = false;
    }, [Product])


    //for sorting products

    const Sorting = (event) => {
        let sort_val = event.target.value;
        dispatch({ type: "GET_SORT", payload: sort_val })

    }

    //this useEffect use for many function so be focused on this 

    useEffect(() => {

        dispatch({ type: "SORTING_PRODUCT", payload:Product })

    }, [Product, state.Sorting_value,state.filters])


    //for search-bar filter 

    const updateFilter = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        return dispatch({ type: 'SEARCH_VALUE', payload: { name, val } })

    }

    useEffect(() => {
        dispatch({ type: 'SEARCH_PRODUCT' })
    }, [state.filters])



    //clear filter button

    const ClearFilters = () => {
        dispatch({ type: "CLEAR_FILTERS" })
    }

    return (
        <FilterContext.Provider value={{ ...state, Sorting, updateFilter, ClearFilters }}>
            {children}
        </FilterContext.Provider>
    )




};

export const useFilterContext = () => {
    return useContext(FilterContext)
};



