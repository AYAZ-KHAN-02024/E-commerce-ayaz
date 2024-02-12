import React from 'react'
import "./Products.css"
import Filter from './Filter'
import Sort from './Sort'
import ProductList from './ProductList'


function Products() {

  return (
    <div className='box Products'>

      <div className="filter-section">
        <Filter />
      </div>

      <div className="main-section">
        <div className="sort">
          <Sort />
        </div>

        <div className="Product-list">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Products
