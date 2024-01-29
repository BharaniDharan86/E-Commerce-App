import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      id: 1,
      productName: "Accent Chair",
      quantity: 2,
      price: 259.88,
      totalPrice: 519,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incQuantity(state, action) {
      const currItem = state.cart.find((item) => item.id === action.payload);
      currItem.quantity++;
      currItem.totalPrice = currItem.quantity * currItem.price;
    },
    decQuantity(state, action) {
      const currItem = state.cart.find((item) => item.id === action.payload);
      currItem.quantity--;
      currItem.totalPrice = currItem.quantity * currItem.price;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addToCart, removeItem, clearCart, incQuantity, decQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
