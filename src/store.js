import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import cart reducer

const store = configureStore({
  reducer: {
    cart: cartReducer, // Add cart slice to store
  },
});

export default store;
