import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    modalDisplay: {
        display: 'none',
    },
    data: {
        id: null,
    },
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggleModal: (state, action) => {
            state.modalDisplay.display = state.modalDisplay.display === 'none' ? 'block' : 'none';
            if (action.payload) {
                state.data.id = action.payload;
            };
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;