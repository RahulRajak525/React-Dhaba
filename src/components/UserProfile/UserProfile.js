import React from "react";
import { useSelector } from "react-redux";

// import userSlice from "../../Reducer/userSlice";
const UserProfile = () => {
  const userDetail = useSelector((state) => state.user.userDetail);
  return (
    <div>Email</div>
  );
};

export default UserProfile;
