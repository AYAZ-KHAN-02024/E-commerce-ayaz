import React, { useState } from 'react'
import "./AddColor.css"
import { useCartContext } from '../../context/CartContext';



function AddColorCart({ Product }) {
  const { id, colors, name, stock, price } = Product
  const [tickColor, setTick] = useState(colors[0])

  const [amount, setAmount] = useState(1);

  const SetInc = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }

  const SetDec = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }


  const { addToCart } = useCartContext();
  return (
    <>
      {/* add color  */}


      <div className='colors' >
        Colors:{
          colors.map((currentColor, ind) => {
            return (
              <button key={ind} style={{ backgroundColor: currentColor, }} className='color' value={currentColor} onClick={(e) => setTick(e.target.value)}>

                {
                  tickColor === currentColor ? <i className="fa-solid fa-check"></i> : null
                }

              </button>
            )
          })
        }
      </div>

      {/* add to cart  */}
      <div className="cart">
        <div className="add-rem">
          <button onClick={SetInc}>+</button>
          <h2>{amount}</h2>
          <button onClick={SetDec}>-</button>
        </div>

        <button className='cart-button' onClick={() => {
          stock > 0 && addToCart(tickColor, amount, id, name, price, Product)
          alert('item added')
        }}>Add-to-Cart</button>
      </div>

    </>
  )
}

export default AddColorCart

