import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
// import * as React from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CheckBox, Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
const LogIn = () => {
  const dispatch = useDispatch();
const showPageHandler = ()=>{
dispatch(cartActions.toggle());
}

  const paperStyle = {
    padding: 20,
    width: 350,
    margin: "20px auto",
    top: "-44vh",
    position: "relative",
  };
  const avatarStyle = { backgroundColor: "#06cd83" };
  const passStyle = { margin: "10px auto " };
  const btnStyle = {margin:'8px 0 '}
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //   const handleMouseDownPassword = (
  //     event: React.MouseEvent<HTMLButtonElement>
  //   ) => {
  //     event.preventDefault();
  //   };
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          id="outlined-textarea"
          label="Username"
          placeholder="Enter Your Name"
          fullWidth
          required
        />
        <FormControl fullWidth variant="outlined" style={passStyle}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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
        <FormControlLabel
          control={
            <Checkbox
            // onChange={handleChange1}
            />
          }
          label="Remember me"
        />
        <Button type="submit" color="primary" variant="contained" fullWidth  style={btnStyle} >
          Log In
        </Button>
        <Typography>
          <Link href="#" >Forget Password ?</Link>
        </Typography>
        <Typography fullWidth >Do you have an account ?
          <button onClick={showPageHandler}>Sign up</button>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LogIn;
