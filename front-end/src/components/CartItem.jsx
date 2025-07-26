import '../css/CartItem.css'


function CartItem({product, quantity}){
    const {title, price, image} = product;

    console.log(title);
    console.log(price);
    console.log(image);
    return(
        <div className="cart-item">
            <h2 className="cart-item-title">{title}</h2>
            <img className="cart-item-image" src={image} alt={title} />
            <p className="cart-item-price">{price}</p>
            <p className="cart-item-quantity">No. in cart: {quantity}</p>
        </div>
    )
}

export default CartItem;