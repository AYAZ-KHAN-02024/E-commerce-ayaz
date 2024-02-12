import React from 'react'
import { useFilterContext } from '../context/FilterContext'

function Sort() {
    const { filter_Product, Sorting } = useFilterContext()
    return (
        <>
            <div className="total-products">{filter_Product.length} Total Products </div>
            <div className="sort-div">
                <form action="#" className='sort-form'>
                    <label htmlFor="sort">
                        <select name="sort" id="sort" className='sort-select' onClick={Sorting}>
                            
                            <option value="featured">Sort Price</option>
                            <option disabled></option>
                            <option value="low-high" >Price(Low-High)</option>
                            <option disabled></option>
                            <option value="high-low">Price(High-Low)</option>
                            <option disabled></option>
                            
                        </select>
                    </label>
                </form>
            </div>
        </>
    )
}

export default Sort
