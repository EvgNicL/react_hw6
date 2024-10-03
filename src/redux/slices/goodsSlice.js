import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {id: 0, name: "Product 1", description: "Description 1", price: "10", available: true},
        {id: 1, name: "Product 2", description: "Description 2", price: "15", available: true},
        {id: 2, name: "Product 3", description: "Description 3", price: "20", available: true},
    ],
}


export const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {

        addItem: (state, action) => { 
            state.items = [...state.items, { ...action.payload, id: crypto.randomUUID() }];
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload); // action.payload - id
        },

        updateItem: (state, action) => {
            const index = state.items.findIndex(
                (item) => item.id === action.payload.id,
              );
              if (index !== -1) {
                state.items[index] = action.payload;
              }
        },

        toggleAvailability: (state, action) => {
            const product = state.items.find(
                (item) => item.id === action.payload,
              );
              if (product) {
                product.available = !product.available;
              }
        },    

    },

});

export const {addItem, removeItem, updateItem, toggleAvailability} = goodsSlice.actions; 
export default goodsSlice.reducer; 
