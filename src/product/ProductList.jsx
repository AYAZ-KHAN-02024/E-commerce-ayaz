import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import MainProduct from '../home/featuredProduct/mainProduct';

function ProductList() {
  const { filter_Product, isFilterLoading } = useFilterContext();


  if (isFilterLoading === true) {
    return (

      <div className='box '>
        <i className="fa-solid fa-spinner loading"></i>
      </div>

    )
  }


  return (
    <>
      {
        filter_Product.map((val) => {
          return (
            <MainProduct key={val.id} {...val} />
            //be clear this is from home/featured-product , don't confuse
          )
        })
      }
    </>
  )
}

export default ProductList
