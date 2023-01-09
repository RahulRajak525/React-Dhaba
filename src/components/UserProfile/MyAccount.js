import React from "react";
import { useSelector } from "react-redux";
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
import {  useNavigate } from "react-router-dom";
const MyAccount = () => {
  const userDetail = useSelector(selectUserDetails);
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const passStyle = { margin: "10px auto ", textAlign: "center", objectFit: "cover" };
  const btnStyle = { margin: "8px 0 " };
const goToUpdateProfile = ()=>{
  navigate("/userProfile");
}

  return (
    
    <div className={classes.account}>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center" >
            {userDetail && (
              <Avatar
                style={{ width: "80%" }}
                alt={PersonIcon}
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
  );
};

export default MyAccount;