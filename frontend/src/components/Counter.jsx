import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../reducers/counter';
import { addToCart, removeFromCart, currentStateCart } from '../reducers/cart';

function  Counter() {
  const count = useSelector(state => state.counter.value);
   
  const cart = useSelector(state => state.cart.value);
  const dispatch = useDispatch();
  
  const item = {
    name: 'Tide', 
    price: 10.99
  }

 

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addToCart(item))}>Add to cart</button>
      {/* <button onClick={() => dispatch(currentStateCart(item))}> cart</button> */}

    </div>
  );
}

export default Counter;
