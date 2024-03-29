import React from 'react'
import { useFilterContext } from '../context/FilterContext'

function Sort() {
    const { filter_Product, Sorting } = useFilterContext()
    return (
        <>
            <div className="total-products">{filter_Product.length} Total Products </div>
            <div className="sort-div">
              
                        <select name="sort" id="sort" className='sort-select' onClick={Sorting}>
                            
                            <option value="sort">Sort-Price</option>
                            <option disabled></option>
                            <option value="low-high" >Price(Low-High)</option>
                            <option disabled></option>
                            <option value="high-low">Price(High-Low)</option>
                            <option disabled></option>
                            
                        </select>
                   
            </div>
        </>
    )
}

export default Sort
