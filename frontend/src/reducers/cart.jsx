 import {createSlice} from "@reduxjs/toolkit"


 const initialState ={
   cartItems : []
 }

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      addToCart: (state, action) =>{
         state.cartItems.push(action.payload)
      },
      removeFromCart: (state,action) =>{
         state.cartItems.filter(item => item.id !== action.payload.id)
      },
     
   }
 })


   export const {addToCart, removeFromCart,currentStateCart} = cartSlice.actions
   export default cartSlice.reducer