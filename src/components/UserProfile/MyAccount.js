import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails } from "../../Reducer/userSlice";
import classes from "./MyAccount.module.css";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getUserDataAction } from "../../Reducer/asyncUserReducer";
const MyAccount = () => {
  const userDetail = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
    backgroundColor:"whitesmoke"
  };
  const passStyle = { margin: "10px auto ", textAlign: "center" };
  const btnStyle = { margin: "8px 0 " };
  const goToUpdateProfile = () => {
    navigate("/userProfile");
  };

  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);

  return (
    <div>
      {userDetail && (
        <div className={classes.account}>
          <Grid>
            <Paper elevation={20} style={paperStyle}>
              <Grid align="center">
                {userDetail && (
                  <Avatar
                    style={{ width: "80%" }}
                    alt="Rahul"
                    src={userDetail.photoUrl}
                    sx={{ width: 230, height: 191 }}
                  />
                )}
              </Grid>

              <FormControl fullWidth style={passStyle}>
                <Typography variant="h6">{userDetail.displayName}</Typography>
              </FormControl>

              <FormControl fullWidth style={passStyle}>
                <Typography variant="h6">{userDetail.email}</Typography>
              </FormControl>

              <Button
                color="primary"
                variant="contained"
                fullWidth
                style={btnStyle}
                onClick={goToUpdateProfile}
              >
                Update Profile
              </Button>
            </Paper>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
