import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from './slices/goodsSlice';  
import modalReduser from './slices/modalSlice';

const store = configureStore({
    reducer: {
        goods: goodsReducer,
        modal: modalReduser,
    }
});

export default store;