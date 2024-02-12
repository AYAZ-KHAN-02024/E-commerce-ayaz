import React from 'react'
import './Cart.css'
import { useCartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom';

import CartItem from './CartItem';
import PriceFormat from '../priceFormat/PriceFormat';

function Cart() {

  const { cart, ClearAllCart, subtotal } = useCartContext();





  if (cart.length === 0) {
    return (
      <div className='box cart_main empty'>
        <h1>Cart Empty</h1>
      </div>
    )
  }
  return (
    <>
      <div className='box cart_main'>

        <div className="cart_top">
          <div className="subtotal">
            <h4> Subtotal: <PriceFormat price={subtotal} /></h4>

            <NavLink className="NavLink" to='/products'>
              <button style={{ backgroundColor: "darkblue", color: "white" }}>Continuo-Shoping</button>
            </NavLink>


            <button style={{ backgroundColor: "darkred", color: "white" }} onClick={() => { ClearAllCart() }}>Clear-Cart</button>

          </div>
        </div>


        <div className="cart_box">
          {cart && cart.map((item) => {

            return <CartItem key={item.id} {...item} />

          })
          }
        </div>

      </div>
    </>
  )
}

export default Cart
