import { createReducer } from '@reduxjs/toolkit';

export const cartReducer = createReducer(
  {
    cartItems: [],
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(i => i.id === item.id);

      if (isItemExist) {
        state.cartItems.forEach(i => {
          if (i.id === item.id) i.qty += 1;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);

      if (item.qty > 1) {
        state.cartItems.forEach(i => {
          if (i.id === item.id) i.qty -= 1;
        });
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload);
    },

    priceCalculation: (state, action) => {
      let sum = 0;

      state.cartItems.forEach(i => (sum += i.price * i.qty));
      state.subtotal = Math.round(sum * 100) / 100;
      state.shipping = sum > 500 ? 0 : 40 * state.cartItems.length;
      state.total = state.subtotal + state.shipping;
    },
  }
);
