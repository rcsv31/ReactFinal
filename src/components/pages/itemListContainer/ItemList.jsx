import ProductCard from "../../common/productCard/ProductCard";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(({ id, img, title, description, price }) => (
        <ProductCard
          key={id}
          id={id}
          img={img}
          title={title}
          description={description}
          price={price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
          })}
        />
      ))}
    </div>
  );
};

export default ItemList;
