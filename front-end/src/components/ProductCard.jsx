import '../css/ProductCard.css'

function ProductCard({product}){
    const {id, title, price, description, category, image} = product;

    return(
        <div className="product-card">
            <h2 className="product-card-title">{title}</h2>
            <img className="product-card-image" src={image} alt={description} />
            <p className="product-card-price">{price}</p>
            <p className="product-card-description">{description}</p>
            <p className="product-card-category">{category}</p>
            
        </div>
    )
}

export default ProductCard;