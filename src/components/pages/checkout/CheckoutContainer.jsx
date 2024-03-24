import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const totalPrice = getTotalPrice();

  const envioDeFormulario = async (values) => {
    try {
      const order = {
        buyer: values,
        items: cart,
        total: totalPrice,
      };

      const ordersCollection = collection(db, "orders");

      const docRef = await addDoc(ordersCollection, order);

      setOrderId(docRef.id);

      cart.forEach(async (product) => {
        const refDoc = doc(db, "products", product.id);

        await updateDoc(refDoc, { stock: product.stock - product.quantity });
      });

      clearCart();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  const capturar = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <Checkout
      orderId={orderId}
      envioDeFormulario={envioDeFormulario}
      capturar={capturar}
    />
  );
};

export default CheckoutContainer;
