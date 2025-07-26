import {createContext, useContext, useState, useEffect} from 'react'
import {getProducts} from "../data/product.js"

const ShoppingCartContext = createContext();

export const useShoppingCartContext = () => useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [shoppingCart, setShoppingCart] = useState(() => {
        const stored = localStorage.getItem('shoppingCart');
        return stored ? JSON.parse(stored) : [];
    })

    useEffect(()=>{
        localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
    }, [shoppingCart]);

    //Initializes products state array
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
        }, []);

        function addToCart(product){
            setShoppingCart(prev => {
                const inCart = prev.find(item => item.product.id === product.id);

                if(inCart){
                    return prev.map(item =>
                        item.product.id === product.id ? {...item, quantity: item.quantity +1} : item
                    );
                }

                return [...prev, {product, quantity: 1}];
            });
        }


        function addQuantity(product){
            setShoppingCart((prev) =>
            prev.map((item) => 
            item.product.id === product.id ?
            {...item, quantity: item.quantity + 1}:
            item
        ));
        }

        function removeQuantity(product){
            setShoppingCart((prev) =>
            prev.map((item) =>{
            if(item.product.id === product.id){
                if(item.quantity > 1){
                    return ({...item, quantity: item.quantity - 1})
                }
                else{
                    return null;
                }
            }
            return item;            
        }).filter((item) => item !== null)
    
    );
        }

        //contains the variables and functions that components can use
        const value = {
            products,
            shoppingCart,
            addToCart,
            addQuantity,
            removeQuantity
        }

        return(
            <ShoppingCartContext.Provider value={value}>
                {children}
            </ShoppingCartContext.Provider>
        )
}
