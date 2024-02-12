import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Products from './product/Products'
import Contact from './contact/Contact'
import ProductsDetails from './productDetails/ProductsDetails'
import Cart from './cart/Cart'
import Error from './ErrorPage'
import Header from './Header/Header'
import Footer from './footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/productDetails/:id' element={<ProductsDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
