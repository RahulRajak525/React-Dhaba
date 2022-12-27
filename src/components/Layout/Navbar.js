import React from "react";
import { AppBar, Toolbar, IconButton, Stack} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { HeaderCartButton } from "./HeaderCartButton";
import classes from "./Navbar.module.css";
import mealsImage from "../../Assets/meals.jpg";
import { Link} from "react-router-dom";
const Navbar = () => {
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
            <Link
              to="/"
              variant="h2"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "5px",
              }}
            >
              REACT DHABA
            </Link>
          </Stack>
          <div className={classes.nav}>
            <div>
              <Stack direction="row" spacing={4}>
                <Link
                  to="/orderHistory"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "15px",
                    paddingTop: "10px",
                  }}
                >
                  Your Orders
                </Link>
                <Link
                  to="/logInPage"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    marginRight: "15px",
                    paddingTop: "10px",
                  }}
                >
                  Log In
                </Link>
              </Stack>
            </div>
            <Link to="/cart">
              <HeaderCartButton />
            </Link>
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
