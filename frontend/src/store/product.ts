import { createSlice } from "@reduxjs/toolkit";
import productModel from "./../interfaces/product";
let cart = 0;
const slice = createSlice({
  name: "products",
  initialState: {
    cart: 0,
    productList: [] as productModel[],
  },
  reducers: {
    productAdded: (products, action) => {
      products.productList.push(...action.payload);
    },
    cartAdded: (products) => {
      products.cart = ++cart;
    },
  },
});

export const { productAdded, cartAdded } = slice.actions;

export default slice.reducer;
