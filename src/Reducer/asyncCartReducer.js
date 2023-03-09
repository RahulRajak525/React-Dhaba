import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiCartServices } from "../services/apiCartServices";

export const addToCartAction = createAsyncThunk(
  "addToCartAction",
  async (data, thunkAPI) => {
    const response = await ApiCartServices.addItemToCart(data);
    return response;
  }
);

export const getCartItemAction = createAsyncThunk(
  "getCartItemAction",
  async (data, thunkAPI) => {
    const response = await ApiCartServices.getCartItem(data);
    return response;
  }
);
