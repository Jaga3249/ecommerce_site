import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  user: [
  
  ]
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
    },
    addUser:(state,action)=>{
      const item=state.user;
      const newUser=action.payload;

      const duplicateUser=item.find((item,i)=>{
        return item.email===action.payload.email
      })
      if(duplicateUser) return;
      else{
        item.push(newUser)
      }
      // console.log("item",item.p)
     
    
    //  console.log("newuser",)


    //  console.log(state.productData)

//      state.user=[...state.user,newUser];
// console.log(state)
      

    },
    removeUser:(state,action)=>{
      console.log("action",action)
// let item=state.user;

const removeEmail=action.payload.email;


state.user= state.user.filter((item)=>item.email !==removeEmail);


    }

   
  },

  

});
export const {addUser, addToCart, removeCart, resetCart, increaseQuantity, decreaseQuantity,removeUser } = productSlice.actions;
export default productSlice.reducer;
