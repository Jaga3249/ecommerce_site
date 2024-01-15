import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  user: null,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    removeCart: (state, action) => {
      console.log("action", action)
      state.productData = state.productData.filter((item) => item.id !== action.payload.id)


    },
    resetCart: (state, action) => {
      state.productData = [];
    },
    increaseQuantity: (state, action) => {

      const item = state.productData.find((item) => (
        item.id === action.payload.id
      ))
      if (item) {
        item.quantity++;
      }
    },

    decreaseQuantity: (state, action) => {
      console.log("action", action)
      const item = state.productData.find((item) => (
        item.id === action.payload.id
      ))
      if (item.quantity === 1) {
        item.quantity = 1;
      }
      else {
        item.quantity--;
      }
    }
  },


});
export const { addToCart, removeCart, resetCart, increaseQuantity, decreaseQuantity } = productSlice.actions;
export default productSlice.reducer;
