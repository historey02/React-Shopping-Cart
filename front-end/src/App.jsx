import { useState } from 'react'
import './css/App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { ShoppingCartProvider } from './contexts/ShoppingCart'

function App() {
    return(
      <div className="app-container">
        <h1 className="site-title">Storey Stuff</h1>
        <ShoppingCartProvider>
          <div className="content-container">
             <ProductList className="product-list"/>
             <Cart className="cart"/>
          </div>
        </ShoppingCartProvider>
      </div>

    )
}

export default App
