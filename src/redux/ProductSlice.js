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
  },
});
export const { addToCart } = productSlice.actions;
export default productSlice.reducer;
