import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import { ClipLoader } from "react-spinners";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, getTotalQuantityById } = useContext(CartContext);

  const initial = getTotalQuantityById(id);

  useEffect(() => {
    setIsLoading(true);

    let productsCollection = collection(db, "products");
    let refDoc = doc(productsCollection, id);
    getDoc(refDoc)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const onAdd = (cantidad) => {
    let infoProducto = {
      ...item,
      quantity: cantidad,
    };
    addToCart(infoProducto);
  };

  return (
    <div>
      {isLoading ? (
        <ClipLoader loading={isLoading} />
      ) : (
        <ItemDetail item={item} onAdd={onAdd} initial={initial} />
      )}
    </div>
  );
};
