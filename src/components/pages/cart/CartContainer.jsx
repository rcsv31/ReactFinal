import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import "./Cart.css";
export const CartContainer = () => {
  const { cart, clearCart, removeById, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const limpiarConAlerta = () => {
    Swal.fire({
      title: "¿Desea limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Sí",
      denyButtonText: "No",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div>
      <div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>
                    {item.price.toLocaleString("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <button onClick={() => removeById(item.id)}>Quitar</button>
              </div>
            );
          })}
        </div>
        <div className="cart-info">
          <h2>Descripcion del carrito:</h2>
          <h3>Cantidad de productos: </h3>
          <h3>Precio total: {total}</h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>
          {cart.length > 0 ? (
            <div className="btn-cart">
              <button onClick={limpiarConAlerta} className="custom-button">
                Vaciar carrito
              </button>
              <Link to="/checkout">
                <button className="custom-button">Finalizar compra</button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <button className="custom-button">Agrega productos</button>
            </Link>
          )}

          <h2>El total de su compra es: {total}</h2>
        </div>
      </div>
    </div>
  );
};
