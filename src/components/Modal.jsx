import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateItem } from "../redux/slices/goodsSlice";
import { toggleModal } from "../redux/slices/modalSlice";

export const Modal = () => {
  const { modalDisplay } = useSelector((state) => state.modal);

  const [id, setId] = useState()
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = () => {

    // dispatch(
    //   updateItem({ id, name, description, price: parseFloat(price), available })
    // );
    dispatch(toggleModal());
  };

  return (
    <div className="modal" style={modalDisplay}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <label style={{ fontSize: "18px", display: "block", margin: "20px" }}>
          Available:
          <input
            type="checkbox"
            checked={available}
            onChange={(e) => setAvailable(e.target.checked)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
