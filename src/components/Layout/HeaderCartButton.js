import React from 'react'
import classes from './HeaderCartButton.module.css'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from 'react-redux';
export const HeaderCartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <ShoppingCartIcon />
      </span>
      <span className={classes.badge}>{cartQuantity}</span>
      <span className={classes.cart}>Cart</span>
    </button>
  );
}