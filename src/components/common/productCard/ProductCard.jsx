import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ img, title, price, id }) => {
  return (
    <div className="product-card">
      <Link className="linkNoStyle" to={`/item/${id}`}>
        <img src={img} alt={title} />
        <div className="product-info">
          <h5>{title}</h5>
          <p>{price}</p>
        </div>
      </Link>
      <div>
        <Link className="button-detalle" to={`/item/${id}`}>
          <button>Ver detalle</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
