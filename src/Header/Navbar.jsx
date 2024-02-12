import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
function Navbar() {


  const [click, setClicked] = useState(true)
  const { total_item } = useCartContext()

  const MenuIcon = () => {
    setClicked(!click)
  }



  useEffect(() => {
    const navbar = document.querySelector(".Navbar");

    if (click == true) {
      navbar.classList.add("display-none")
    }
    else {
      navbar.classList.remove("display-none")
    }
  }, [click])
  return (
    <>
      <i className={click == true ? " menu fa fa-bars" : "cross fa fa-times"} onClick={MenuIcon} id='bar'></i>
      <div className='Navbar '>


        <NavLink className='NavLink' to='/'> <h3 className='nav_btn'>home</h3> </NavLink>
        <NavLink className='NavLink' to='/about'> <h3 className='nav_btn'>about</h3> </NavLink>
        <NavLink className='NavLink' to='/products'> <h3 className='nav_btn'>products</h3> </NavLink>
        <NavLink className='NavLink' to='/contact'> <h3 className='nav_btn'>contact</h3> </NavLink>
        <NavLink className='NavLink' to='/cart'><div><i className="fa-solid fa-cart-shopping"></i><span className='cart_icon'>{total_item}</span></div> </NavLink>


      </div>
    </>
  )
}

export default Navbar
