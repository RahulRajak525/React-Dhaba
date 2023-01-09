import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiUserService } from "../services/apiUserServices";

export const signUpAction = createAsyncThunk(
  "signUpAction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.signUp(data);
    return response;
  }
);
export const signInAction = createAsyncThunk(
  "signInAction",
  async (data, thunkAPI) => {
    const response1 = await ApiUserService.signIn(data);
    return response1;
  }
);
export const updateProfileaction = createAsyncThunk(
  "updateProfileaction",
  async (data, thunkAPI) => {
    const response = await ApiUserService.profileUpdate(data);
    return response;
  }
);
export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async (thunkAPI) => {
    const response = await ApiUserService.getUserData();
    return response.users[0];
  }
);
