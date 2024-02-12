import './Footer.css'
import React from 'react'
import { NavLink } from "react-router-dom"
function Footer() {
  return (
    <>
      <footer>
        <div className="contact-details">
          <h4>contact-us</h4>
          <h5>mobile-no:- 999999999</h5>
          <h5>email-id:- abcd000@email.com</h5>
          <h5>Address:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi </h5>
          <NavLink className="NavLink" to="/contact" >
            <button className='sub-button'>Contact </button>
          </NavLink>
        </div>
        <div className="contact-details">
          <h4>Sun-Shop</h4>
          <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, minima.</h6>
        </div>


        <div className="contact-details">
          <h4>Follow us</h4>
          <div>
            <i className="fa-brands fa-instagram i"></i>
            <i className="fa-brands fa-facebook i"></i>
            <i className="fa-solid fa-envelope i"></i>
          </div>
        </div>

        <div className="contact-details">
          <h5>&copy; copyright {new Date().getFullYear()}, Build by Ayaz khan, all rights reserved</h5>

        </div>
      </footer>




    </>
  )
}

export default Footer
