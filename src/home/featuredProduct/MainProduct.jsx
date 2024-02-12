import React from 'react'
import { NavLink } from 'react-router-dom';
import './FeaturedProduct.css'
import PriceFormat from '../../priceFormat/PriceFormat';

function MainProduct(value) {
  const { id, name, price, image } = value;

  return (
    <NavLink className='NavLink' to={`/productDetails/${id}`} >
      <div className="feature-card">
        <div className="feature-img">
          <img src={image} alt={name} />
        </div>
        <div className="feature-text">
          <h3 className="feature-price">{<PriceFormat price={price} />}</h3>
          <h3 className="feature-name">{name}</h3>

        </div>
      </div>

    </NavLink>
  )
}

export default MainProduct
