import "./ProductCard.css";

const ProductCard = ({ name, color, price, image }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={image} alt="" />
      <div className="product-footer">
        <div className="product-info">
          <span className="product-name">{name}</span>
          <span className="product-color">{color}</span>
        </div>
        <span className="product-price">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
