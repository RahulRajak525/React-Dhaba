import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiUserService} from "../services/apiUserServices"

export const signUpAction = createAsyncThunk("signUpAction", async(data, thunkAPI) => {
    // console.log('3', data)
    const response = await ApiUserService.signUp(data);
    // console.log("6", response);
    return response;
   
})
export const signInAction = createAsyncThunk(
  "signInAction",
  async (data, thunkAPI) => {
    // console.log("3", data);
    const response = await ApiUserService.signIn(data);
    // console.log("6",response);
    return response
  }
);
export const updateProfileaction = createAsyncThunk(
  "updateProfileaction",
  async (data, thunkAPI) => {
    // console.log("3", data);
    const response = await ApiUserService.profileUpdate(data);
    // console.log("6", response);
    return response;
  }
);