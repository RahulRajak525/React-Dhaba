import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
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
  return (
    <Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <RestaurantIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            REACT DHABA
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit" onClick={homePageHandler}>
              Home
            </Button>
            <Button color="inherit" onClick={openCartHandler}>
              Pricing
            </Button>
            <Button color="inherit">About</Button>
          </Stack>
          <HeaderCartButton onClick={openCartHandler} />
        </Toolbar>
      </AppBar>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};
export default Navbar;
