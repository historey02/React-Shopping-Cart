import {createContext, useContext, useState, useEffect} from 'react'
import {getProducts} from "../data/product.js"

const ShoppingCartContext = createContext();

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() =>{
            const loadProductList = async () =>{
                try{
                    const productList = await getProducts();
                    setProducts(productList);
                    console.log("loaded products");
                }
                catch(err){
                    console.log('ERROR: ' + err);
                    setError("Failed to load products");
                }
                finally{
                    setLoading(false);
                }
            }
            loadProductList();
        }, [])

        const value = {
            products,
            shoppingCart
        }

        return(
            <ShoppingCartContext.Provider value={value}>
                {children}
            </ShoppingCartContext.Provider>
        )
}
