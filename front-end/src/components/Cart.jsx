import '../css/Cart.css'
import CartItem from './CartItem'
import {useShoppingCartContext} from '../contexts/ShoppingCart'

function Cart(){
    const {shoppingCart} = useShoppingCartContext();

    return(
        <div className="cart-container">
            {shoppingCart.map((item) => (
                <CartItem product={item.product} quantity={item.quantity} key={`cart:${item.product.id}`}/>

            ))}
        </div>
    )
}

export default Cart;