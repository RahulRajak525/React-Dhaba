import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDataAction,
  signInAction,
  signUpAction,
  updateProfileaction,
} from "./asyncUserReducer";

const initialState = {
  userDetails: undefined,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      localStorage.removeItem("idToken");
      state.userDetails = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      localStorage.setItem("idToken", action.payload.idToken);
      state.token = action.payload.idToken;
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(updateProfileaction.fulfilled, (state, action) => {
      alert("Your details are updated");
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    });
  },
});
export default userSlice;
export const selectUserDetails = (state) => state.user.userDetails;
export const userActions = userSlice.actions;
