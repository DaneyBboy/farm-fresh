import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data";

const cartsSlice = createSlice({
    name: "carts",
    initialState: {
        productData: [],
        badge: 0
    },
    reducers: {
        addToCart: (state, action) => {
            state.productData.push(action.payload); // valid in Redux Toolkit
            state.badge += 1;
        },
        removeFromCart: (state, action) => {
           state.productData = state.productData.filter(
            item => item.id !== action.payload.id
           );
           state.badge = Math.max(0, state.badge -1)
        },
        clearCart:(state)=>{
            state.productData = [],
            state.badge = 0;
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartsSlice.actions
export default cartsSlice.reducer