import { createSlice } from "@reduxjs/toolkit";

//  const initialState ={
//    cartItems : []
//  }

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
      if (
        state.find(
          (existingProduct) => existingProduct.id === action.payload.id
        )
      ) {
        state.map((item) => {
          if (item.id === action.payload.id) {
            item.quantity += 1;
          }
          return item;
        });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart, currentStateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
