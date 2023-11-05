import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cart: [],
  products: [],
  orders: [],
};

export const dealMartSlice = createSlice({
  name: "dealMart",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.user = null;
    },
    addProducts: (state, action) => {
      state.products = action.payload;
    },
    addOrders: (state, action) => {
      state.orders = action.payload;
    },
    addToCart: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item) {
        item.quantity++;
      }
    },
    drecreaseQuantity: (state, action) => {
      const item = state.cart.find((item) => item._id === action.payload._id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  saveUser,
  clearUser,
  addProducts,
  addToCart,
  increaseQuantity,
  drecreaseQuantity,
  deleteItem,
  resetCart,
  addOrders,
} = dealMartSlice.actions;
export default dealMartSlice.reducer;
