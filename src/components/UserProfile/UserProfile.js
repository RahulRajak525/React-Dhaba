import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Avatar,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./UserProfile.module.css";
import { updateProfileaction } from "../../Reducer/asyncUserReducer";
import { selectUserDetails } from "../../Reducer/userSlice";
const UserProfile = () => {
  const userDetail = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const passStyle = { margin: "10px auto " };
  const btnStyle = { margin: "8px 0 " };
  const textfield = { width: "100%" };

  const [displayName, setDisplayName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const nameChangeHandler = (e) => {
    setDisplayName(e.target.value);
  };
  const photoUrlChangeHandler = (e) => {
    setPhotoUrl(e.target.value);
  };

  const updateButtonClickHandler = (e) => {
    e.preventDefault();
    if (displayName.length === 0 && photoUrl.length === 0) {
      alert("All fields are mandatory");
      return;
    } else if (displayName.length === 0) {
      alert("Please Enter Your Name");
      return;
    } else if (photoUrl.length === 0) {
      alert("Please Provide Photo url");
    } else {
      dispatch(
        updateProfileaction({
          displayName: displayName,
          photoUrl: photoUrl,
        })
      );
      alert("Your Deatails are updated");
    }
    setDisplayName("");
    setPhotoUrl("");
  };

  return (
    <div className={classes.userProfile}>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            {userDetail && (
              <Avatar
                style={{ width: "60%" }}
                alt="Remy Sharp"
                src={userDetail.photoUrl}
                sx={{ width: 230, height: 116 }}
              />
            )}
          </Grid>

          <FormControl fullWidth>
            <Typography variant="h6">Name</Typography>
            <TextField
              style={textfield}
              id="outlined-textarea"
              placeholder="Enter Your Name"
              onChange={nameChangeHandler}
              value={displayName}
            />
          </FormControl>

          <FormControl fullWidth style={passStyle}>
            <Typography variant="h6">Photo URL</Typography>
            <TextField
              id="outlined-adornment-password"
              placeholder="photoUrl"
              onChange={photoUrlChangeHandler}
              value={photoUrl}
            />
          </FormControl>

          <Button
            type="submit"
            onClick={updateButtonClickHandler}
            color="primary"
            variant="contained"
            fullWidth
            style={btnStyle}
          >
            Update
          </Button>
        </Paper>
      </Grid>
    </div>
  );
};

export default UserProfile;
