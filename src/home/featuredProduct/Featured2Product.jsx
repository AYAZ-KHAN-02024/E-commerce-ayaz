import React from 'react'
import './FeaturedProduct.css'
import { useProduct } from '../../context/ProductContext'
import Product from './mainProduct';






function Featured2Product() {
  const { isLoading, FeaturedProducts } = useProduct();

  {
    if (isLoading === true) {
      return (
        <div className='f-Head' >
          <i className="fa-solid fa-spinner loading"></i>
        </div>)
    }
  }

  return (
    <>
      <h2 className='f-Head'>Popular-Product</h2>
      <div className='FeaturedProduct'>



        {
          FeaturedProducts.map((value) => {
            return (
              <Product key={value.id} {...value} />
            )
          })
        }



      </div>
    </>
  )
}

export default Featured2Product
