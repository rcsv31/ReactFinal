import ItemCountContainer from "../../common/itemCount/ItemCounContainer";
import "./ItemDetail.css";
const ItemDetail = ({ item, onAdd, initial }) => {
  const { title, img, description, price, stock } = item;

  const formattedPrice = price.toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return (
    <div className="detailContainer">
      <div className="cardDetail">
        <div className="detailBody">
          <h1 className="detailTitle">{title}</h1>
          <img src={img} alt={title} />
          <p className="detailDescription">{description}</p>
          <p className="detailPrice">Precio: {formattedPrice}</p>
        </div>
      </div>

      <div>
        <ItemCountContainer stock={stock} onAdd={onAdd} initial={initial} />
      </div>
    </div>
  );
};

export default ItemDetail;
