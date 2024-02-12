import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/ProductContext.jsx'
import { FilterContextProvider } from './context/FilterContext.jsx'
import { CartContextProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppProvider>
    <FilterContextProvider>
     <CartContextProvider>
      <App />
     </CartContextProvider>
    </FilterContextProvider>
  </AppProvider>
  
)
