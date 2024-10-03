import { useSelector, useDispatch } from "react-redux";
import { removeItem, toggleAvailability} from "../redux/slices/goodsSlice";


const ProductList = () => {
  const { items } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const handlerUpdate = () => { 
    
   };

  return (
    <div>
      <h2>Product List</h2>
      {items.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {items.map(({id, name, description, price, available}) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>Price: ${price}</p>
              <p>Available: {available ? "Yes" : "No"}</p>
              <button onClick={() => dispatch(removeItem(id))}>
                Delete
              </button>
              <button onClick={() => dispatch(toggleAvailability(id))}>
                Toggle Availability
              </button>
              <button onClick={handlerUpdate}>
                Update Product
              </button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
