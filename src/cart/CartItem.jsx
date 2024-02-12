import React from 'react';
import PriceFormat from '../priceFormat/PriceFormat';
import './Cart.css'
import { useCartContext } from '../context/CartContext';
import { NavLink } from 'react-router-dom';

function CartItem({ ...item }) {

    const { pageId, id, image, price, name, color, amount } = item;

    const { deleteItem } = useCartContext()





    return (



        <div className="cart_cards" >

            <div className="remove">
                <i className="fa-regular fa-circle-xmark remove_btn"
                    onClick={() => deleteItem(id)} />
            </div>

            <NavLink className="NavLink" to={`/productDetails/${pageId}`} >
                <img src={image} alt={id} />
            </NavLink>
            <div className='cart_card_text_main'>
                <div className="cart_card_text">
                    <div className="price_name">
                        <h4 ><PriceFormat price={price - price / 10} /></h4>
                        <h4>{name}</h4>
                    </div>

                    <div className="color_amount">

                        <div className='same card_color'>
                            color:
                            <div style={{ backgroundColor: color, width: "20px", height: '20px', borderRadius: "50%" }} ></div>
                        </div>

                        <div className="same card_amount">
                            Quantity:{amount}
                        </div>

                    </div>

                </div>
                <div className="subtotal_amount">
                    SubTotal of this item:-<PriceFormat price={(price - price / 10) * amount} />
                </div>
            </div>

        </div>




    )
}

export default CartItem
