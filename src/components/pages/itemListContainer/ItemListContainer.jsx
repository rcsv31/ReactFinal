import ItemList from "./ItemList.jsx";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners"; // Importa el componente de spinner
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection; // el va saber a quien pedirle los documentos si a todos o a una parte

    if (category) {
      let productsCollectionFiltered = query(
        productsCollection,
        where("category", "==", category)
      );
      consulta = productsCollectionFiltered;
    }

    getDocs(consulta)
      .then((res) => {
        let arrayLindo = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setProducts(arrayLindo);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  // Renderiza el spinner mientras se está cargando
  if (isLoading) {
    return (
      <div className="spinner-container">
        <ClipLoader loading={isLoading} />
      </div>
    );
  }

  // Renderiza la lista de productos una vez que la carga haya terminado
  return (
    <div className="cards-container">
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
