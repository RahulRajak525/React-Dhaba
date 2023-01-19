import React, { useEffect, useState } from "react";
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
import {updateProfileaction } from "../../Reducer/asyncUserReducer";
import { selectUserDetails } from "../../Reducer/userSlice";
import { toast } from "react-toastify";

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
  // const textfield = { width: "140%" };

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
    if (!displayName || !photoUrl.length) {
      toast.warn("All fields are mandatory");
      return;
    } else {
      dispatch(
        updateProfileaction({
          displayName: displayName,
          photoUrl: photoUrl,
        })
      );
    }
    setDisplayName("");
    setPhotoUrl("");
  };
  return (
    <div className={classes.userProfile}>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <FormControl fullWidth>
            <Typography variant="h6">Name</Typography>
            <TextField
              // style={textfield}
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
