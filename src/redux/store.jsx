import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import QuantitySlice from "./slices/QuantitySlice";

export const store = configureStore({
    reducer:{
        cartslice:CartSlice,
        QuantitySlice : QuantitySlice
    },
})