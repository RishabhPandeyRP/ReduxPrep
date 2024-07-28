import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cartslice",
    initialState:[],
    reducers:{
        addItem:(state , action)=>{
            state.push(action.payload);
            
        },
        removeItem:(state , action)=>{
            return state.filter((post) => post.id !== action.payload);
        }
    }
})

export const {addItem,removeItem} = CartSlice.actions;
export default CartSlice.reducer;