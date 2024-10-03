import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from '../redux/slices/goodsSlice';


function Form({iDisplay}) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(true);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(
        addItem({ name, description, price: parseFloat(price), available }),
      );
      setName("");
      setDescription("");
      setPrice("");
      setAvailable(true);
    };
    return ( 
        <div style={{display: iDisplay}}>
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
                <label style={{fontSize: "18px", display: 'block', margin: '20px'}}>
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
}

export default Form;