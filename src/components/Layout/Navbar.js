import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { HeaderCartButton } from "./HeaderCartButton";
import classes from "./Navbar.module.css";
import mealsImage from "../../Assets/meals.jpg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const openCartHandler = () => {
    navigate("/cart");
  };
  const homePageHandler = () => {
    navigate("/");
  };
  const loginPageHandler=()=>{
    navigate('/logInPage');
  }
  const orderHistoryHandler=()=>{
    navigate('/orderHistory');
  }
  return (
    <div position="sticky">
      <AppBar>
        <Toolbar>
          <Stack direction="row">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <RestaurantIcon />
            </IconButton>
            <Button
              variant="h2"
              onClick={homePageHandler}
            >
              REACT DHABA
            </Button>
          </Stack>
          <div className={classes.nav}>
            <div>
              <Stack direction="row" spacing={4} >
                <Button color="inherit" onClick={orderHistoryHandler}>
                  Your Orders
                </Button>
                <Button color="inherit" onClick={loginPageHandler} spacing={4} >Log In</Button>
              </Stack>
            </div>
            <div>
              <HeaderCartButton onClick={openCartHandler} />
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </div>
  );
};
export default Navbar;
