import { useState } from 'react'
import './css/App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { ShoppingCartProvider } from './contexts/ShoppingCart'

function App() {
    return(
      <div className="app-container">
        <ShoppingCartProvider>
          <ProductList className="product-list"/>
          <Cart classname="cart"/>
        </ShoppingCartProvider>
      </div>

    )
}

export default App
