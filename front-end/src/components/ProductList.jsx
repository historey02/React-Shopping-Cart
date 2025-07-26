import '../css/ProductList.css'
import {getProducts} from "../data/product.js"
import ProductCard from './ProductCard.jsx';
import {useState} from 'react'
import {useShoppingCartContext} from '../contexts/ShoppingCart'

function ProductList(){
    const {products} = useShoppingCartContext();

    return(
        <div className="product-list-container">
            {products.map((product) => (
                <ProductCard product={product} key={product.id}>

                </ProductCard>
            ))}
        </div>
    )
}

export default ProductList;