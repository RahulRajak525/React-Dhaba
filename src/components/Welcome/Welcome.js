// import { Box } from '@mui/material';
import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";
import classes from "./Welcome.module.css";
import {NavLink } from "react-router-dom";
const Welcome = () => {
  return (
    <div className={classes.primary}>
      <div className={classes.header}>
        <h1>Thanks for ordering...</h1>
      </div>
      <div className={classes.link}>
        <div className={classes.home}>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <h4>Home</h4>
          </NavLink>
        </div>
        <div className={classes.history}>
          <NavLink to="/orderHistory" style={{ textDecoration: "none" }}>
            <h4>Order history</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
