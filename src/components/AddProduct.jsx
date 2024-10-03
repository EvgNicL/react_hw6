import { useState } from "react";
import Form from "./Form";

function AddButton() {
    const [value, setValue] = useState('none');
    const handleClick = () => { 
        setValue(value === 'none' ? 'block' : 'none');
     }

    return ( 
        <>
        <button onClick={handleClick} style={{marginTop: '50px'}}>{value === 'none' ? 'Add Product' : 'Close'}</button>
        <Form iDisplay={value} />
        </>
     );
}

export default AddButton;