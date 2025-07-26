import '../css/CartItem.css'
import { useShoppingCartContext } from '../contexts/ShoppingCart';


function CartItem({product, quantity}){
    const {title, price, image} = product;
    const {addQuantity, removeQuantity} = useShoppingCartContext();

    function add(){
        addQuantity(product);
    }

    function remove(){
        removeQuantity(product);
    }

    console.log(title);
    console.log(price);
    console.log(image);
    return(
        <div className="cart-item">
            <h2 className="cart-item-title">{title}</h2>
            <img className="cart-item-image" src={image} alt={title} />
            <p className="cart-item-price">${price.toFixed(2)} / unit</p>
            <p className="cart-item-subtotal">${(price * quantity).toFixed(2)} for {quantity}</p>
            <p className="cart-item-quantity"><button type="button"     className="btn btn-primary remove-button"
            onClick={(remove)}>-</button> 
            {quantity}
            <button type="button" className="btn btn-primary add-button" 
            onClick={(add)}>+</button></p>
        </div>
    )
}

export default CartItem;