import { useContext } from "react";
import carrito from "../../../images/carrito.svg";
import "./CartWidget.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div className="carrito">
      <Link to="/cart">
        <img src={carrito} alt="Carrito" />
        <p>{total}</p>
      </Link>
    </div>
  );
};

export default CartWidget;
