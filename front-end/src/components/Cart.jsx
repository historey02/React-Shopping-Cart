import '../css/Cart.css'
import CartItem from './CartItem'
import {useShoppingCartContext} from '../contexts/ShoppingCart'

function Cart(){
    const {shoppingCart} = useShoppingCartContext();

    function findSubTotal(){
        let subTotal = 0;
        for (let item of shoppingCart){
            subTotal += (item.quantity * item.product.price);
        }
        return subTotal.toFixed(2);
    }

    return(
        <div className="cart-container">
            <div className="cart-header">YOUR CART</div>
            {shoppingCart.map((item) => (
                <CartItem product={item.product} quantity={item.quantity} key={`cart:${item.product.id}`}/>
            ))}
            <div className="subtotal">SUBTOTAL: ${findSubTotal()}</div>
        </div>
    )
}

export default Cart;