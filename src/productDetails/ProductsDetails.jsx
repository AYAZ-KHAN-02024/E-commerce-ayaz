import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../context/ProductContext'
import './ProductsDetails.css'
import PriceFormat from '../priceFormat/PriceFormat'
import Images from './Images'
import Star from './Star'
import AddColorCart from './Add-color-cart/AddColorCart'

const API = 'https://api.pujakaitem.com/api/products'

function ProductsDetails() {
  const { id } = useParams();


  const { getSingleProduct, singleProduct, isSingleLoading } = useProduct()




  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])

  const {
    name,
    price,
    company,
    category,
    description,
    image,
    reviews,
    stars,
    stock,
  } = singleProduct;



  if (isSingleLoading === true) {
    return (
      <div className="load">
        <div className='box '>
          <i className="fa-solid fa-spinner loading"></i>
        </div>
      </div>
    )
  }

  return (
    <>

      <div className='box ProductsDetails'>

        <div className="single-img">
          <Images imgs={image} />
        </div>

        <div className="single-text">
          <div className="details-text">

            <h1>{name}</h1>
            <div className='reviews'><Star stars={stars} reviews={reviews} /></div>

            <h4 style={{ color: 'black', margin: "5px" }}>M.R.P:<s>{<PriceFormat price={price} />}</s></h4>

            <h4 className='deal'>DEAL OF THE DAY: <div className="deal-of-day" >{<PriceFormat price={price - price / 10} />}</div></h4>

            <p className='description'>
              {description}
            </p>

            <div className="brand">
              <h4>Brand:- {company}</h4>
              <h4>Available:- {stock} stock</h4>
            </div>

            {/* add color  */}
            <div className="add_color_cart">
              {stock > 0 && <AddColorCart Product={singleProduct} />}
            </div>




          </div>



          <div className="single-icon">
            <div className="icon-child"><i className="fa-solid fa-truck-fast" />Free Delivery</div>
            <div className="icon-child"><i className="fa-solid fa-shield-halved" />1 year warranty</div>
            <div className="icon-child"><i className="fa-solid fa-hand-holding-dollar" />Cash on delivery</div>
            <div className="icon-child"><i className="fa-solid fa-recycle" />30 Day replacement</div>

          </div>

        </div>
      </div>
    </>
  )
}

export default ProductsDetails
