import '../css/ProductCard.css'
import { useShoppingCartContext } from '../contexts/ShoppingCart';

function ProductCard({product}){
    const {id, title, price, description, category, image} = product;
    const {addToCart} = useShoppingCartContext();

    function addToCartClick(){
        addToCart(product);
    }

    return(
        <div className="product-card">
            <h2 className="product-card-title">{title}</h2>
            <img className="product-card-image" src={image} alt={description} />
            <p className="product-card-price">{price}</p>
            <p className="product-card-description">{description}</p>
            <p className="product-card-category">{category}</p>
            <button type="button" className="btn btn-primary" onClick={addToCartClick}>Add To Cart</button>
        </div>
    )
}

export default ProductCard;