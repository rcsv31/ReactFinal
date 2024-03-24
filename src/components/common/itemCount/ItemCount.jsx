import "./ItemCount.css";
const ItemCount = ({ counter, addOne, subOne, onAdd }) => {
  return (
    <div className="itemCounContainer">
      <button className="item-button" onClick={addOne}>
        +
      </button>
      <h2 className="item-counter">{counter}</h2>
      <button
        className="item-button"
        onClick={subOne}
        disabled={counter === 1 ? true : false}
      >
        -
      </button>

      <button className="item-add-button" onClick={() => onAdd(counter)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
