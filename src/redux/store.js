import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from './slices/goodsSlice';  

const store = configureStore({
    reducer: {
        goods: goodsReducer,
    }
});

export default store;