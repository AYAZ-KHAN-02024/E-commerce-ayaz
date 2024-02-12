import React from 'react'

function Reducer(state, action) {

    if (action.type === 'LOADING') {
        return {
            ...state,
            isLoading: true,
        }

    }

    if (action.type === 'API_DATA') {

        const featuredProduct = action.payload.filter((element) => {
            return element.featured === true
        });

        return {
            ...state,
            isLoading: false,
            isError: false,
            Product: action.payload,
            FeaturedProducts: featuredProduct,

        }

    }

    if (action.type === 'API_ERROR') {
        return {
            ...state,
            isLoading: true,
            isError: true,
        }
    }


    if (action.type === 'API_SINGLE_PRODUCT') {


        return {
            ...state,
            isSingleLoading: false,
            singleProduct: action.payload,
            isSingleError: false,

        }

    }

    if (action.type === 'SINGLE_LOADING') {
        return {
            ...state,
            isSingleLoading: true,


        }}

        if (action.type === "SINGLE_PRODUCT_ERROR") {
            return {
                ...state,
                isSingleError: true,
                isLoading: true

            }
        }
    
    else {
        return state
    }


}

export default Reducer
