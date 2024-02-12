import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='box Error'>
       <h2>Error</h2>
       <h2>404</h2>
       <p>the page you are founding , that does not exist </p>
       <NavLink className='NavLink' to='/'>
        <button className='sub-button'>got to Home page</button>
       </NavLink>
    </div>
  )
}

export default Error
