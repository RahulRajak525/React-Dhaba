import { createSlice } from "@reduxjs/toolkit";
import { signInAction, signUpAction, updateProfileaction } from "./asyncCartReducer";

const initialState = {
  userDetails: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      console.log(state.userDetails.email);
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
    });
    builder.addCase(updateProfileaction.fulfilled, (state, action) => {
      
    });
  },
});

export default userSlice;
export const userActions = userSlice.actions;
