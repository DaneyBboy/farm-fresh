import { configureStore } from "@reduxjs/toolkit";
import cartsSlice from "./slice"

const store = configureStore({
    reducer:{
        carts: cartsSlice
    }
})
export default store