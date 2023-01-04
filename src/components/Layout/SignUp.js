import React, { useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Grid,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signUpAction } from "../../Reducer/asyncCartReducer";
import { cartActions } from "../../Reducer/cartSlice";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    margin: "20px auto",
    width: "350px",
  };
  const avatarStyle = { backgroundColor: "#06cd83" };
  const passStyle = { margin: "10px auto " };
  const btnStyle = { margin: "8px 0 " };
  const textfield = {width:'100%'}
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const userNameChangeHandler = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
    // console.log(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    // console.log(e.target.value);
  };

  const signUpButtonClickHandler = (e) => {
    e.preventDefault();
    if (userEmail.length === 0 && password.length === 0) {
      alert("Please enter Email and password");
      return;
    } else if (password.length === 0) {
      alert("Please Enter Password");
      return;
    } else if (userEmail.length === 0) {
      alert("Please enter Eamil");
      return;
    } else {
      dispatch(
        signUpAction({
          userEmail: userEmail,
          password: password,
        })
      );
    }
    setUserEmail("");
    setPassword("");
  };
  const showPageHandler = () => {
    dispatch(cartActions.toggle());
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <TextField
         style={textfield}
          id="outlined-textarea"
          label="Email"
          placeholder="e.g. elon@gmail.com"
          onChange={userNameChangeHandler}
          value={userEmail}
        />
        <FormControl fullWidth variant="outlined" style={passStyle}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            onChange={passwordChangeHandler}
            value={password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          style={btnStyle}
          onClick={signUpButtonClickHandler}
        >
          SignUp
        </Button>
        <Typography fullWidth>
          Already have an account ?
          <button onClick={showPageHandler}>Sign In</button>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
