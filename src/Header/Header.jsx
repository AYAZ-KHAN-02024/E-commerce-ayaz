import React, { useEffect } from 'react'
import './Header.css'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import SearchBar from '../product/SearchBar'
import { useFilterContext } from '../context/FilterContext'


function Header() {

  const {
    filters: {
      search_bar_value },
    updateFilter
  } = useFilterContext()


  return (
    <div className='Header'>
      <NavLink to='/' className="NavLink logoNav" id='Nav' > <h4 className='logo' >
        <pre> A+  Shop</pre>
      </h4></NavLink>
      <NavLink className='NavLink search' to='/products'>
        <SearchBar value={search_bar_value} onChange={updateFilter} />
      </NavLink>
      <Navbar />
    </div>
  )
}

export default Header
