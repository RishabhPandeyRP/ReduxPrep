import { createSlice } from "@reduxjs/toolkit";

const QuantitySlice = createSlice({
    name: "QuantitySlice",
    initialState: {},
    reducers: {
        increase: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                state[productId] += 1;
            } else {
                state[productId] = 1;
            }
        },
        decrease: (state, action) => {
            const productId = action.payload;
            if (state[productId]) {
                state[productId] -= 1;
                if (state[productId] < 1) {
                    delete state[productId];
                }
            }
        }
    }
})

export const { increase, decrease } = QuantitySlice.actions;
export default QuantitySlice.reducer;
