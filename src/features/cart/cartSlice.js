

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.items[itemId] += 1;
      } else {
        state.items[itemId] = 1;
      }
    },
    increment: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.items[itemId] += 1;
      }
    },
    decrement: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.items[itemId] -= 1;
        if (state.items[itemId] === 0) {
          delete state.items[itemId];
        }
      }
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
