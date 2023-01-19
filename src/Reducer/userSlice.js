import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
      localStorage.removeItem("isLoggedIn");
      state.userDetails = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state, action) => {
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      localStorage.setItem("idToken", action.payload.idToken);
      localStorage.setItem("isLoggedIn", "true");
      state.userDetails = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(updateProfileaction.fulfilled, (state, action) => {
      toast.success("Your details are updated");
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      // console.log(state.userDetails)
      state.isLoggedIn = true;
    });
  },
});
export default userSlice;
export const selectUserDetails = (state) => state.user.userDetails;
export const userActions = userSlice.actions;
