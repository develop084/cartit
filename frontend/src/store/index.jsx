import { configureStore } from '@reduxjs/toolkit';
import counter from '../reducers/counter';
import cart from '../reducers/cart';
const store = configureStore({
  reducer: {
    counter: counter,
    cart: cart,
  },
});

export default store;
