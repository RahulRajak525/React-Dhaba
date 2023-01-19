import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { HeaderCartButton } from "./HeaderCartButton";
import classes from "./Navbar.module.css";
import mealsImage from "../../Assets/meals.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetails, userActions } from "../../Reducer/userSlice";
const Navbar = () => {
  const navigate = useNavigate();
  // const [user, setUser] = useState(undefined);
  const [anchorEl, setAnchorEl] = React.useState("");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const userDetail = useSelector(selectUserDetails);
  const dispatch = useDispatch();
  const logOutButtonHandler = () => {
    dispatch(userActions.logOut());
    navigate("/");
  };
  return (
    <div >
      <AppBar position="sticky">
        <Toolbar>
          <Stack direction="row">
            <IconButton size="large" color="inherit" aria-label="logo">
              <RestaurantIcon />
            </IconButton>
            <Link
              to="/"
              variant="h2"
              style={{
                textDecoration: "none",
                color: "white",
                paddingTop: "5px",
                marginLeft: "25px",
                letterSpacing: "0.25rem",
                fontWeight: "700",
              }}
            >
              REACT DHABA
            </Link>
          </Stack>
          <div className={classes.nav}>
            <div>
              <Stack direction="row" spacing={4}>
                {!isLoggedIn ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <Link
                      to="/orderHistory"
                      style={{
                        textDecoration: "none",
                        color: "white",
                        marginRight: "15px",
                        paddingTop: "15px",
                      }}
                    >
                      Your Orders
                    </Link>
                    <Box>
                      <div className={classes.primary}>
                        <div className={classes.avatarButton}>
                          <button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                          >
                            <div className={classes.avatar}>
                              <Avatar
                                style={{
                                  width: "47px",
                                  height: "59px",
                                  marginRight: "15px",
                                }}
                                alt="Remy Sharp"
                                src={userDetail.photoUrl}
                              />
                            </div>
                          </button>
                        </div>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/userProfile"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              Update Profile
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleClose}>
                            <Link
                              to="/myAccount"
                              style={{
                                textDecoration: "none",
                                color: "black",
                              }}
                            >
                              My Account
                            </Link>
                          </MenuItem>

                          <MenuItem onClick={logOutButtonHandler}>
                            Logout
                          </MenuItem>
                        </Menu>
                      </div>
                    </Box>
                  </>
                )}
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
