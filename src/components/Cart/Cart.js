// import React from "react";
// import Modal from "../UI/Modal";
import { Button, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
// import Card from "./Card";
import classes from "./Cart.module.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const mealItem = useSelector((state) => state.cart.Items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addItemToCartHandler = (id, image, name, price) => {
    dispatch(
      cartActions.addItemsToCart({
        id,
        image,
        name,
        price,
      })
    );
  };
  const removeItemFromCartHandler = (id) => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const backToHomepageHandler = () => {
    navigate("/");
  };
  // const orderedPageHandler = (id) => {
  //   dispatch(cartActions.removeAllItemFromCart())
  //   navigate("/welcomePage");
  // };

  return (
    // <Card>
    <div className={classes.order}>
      {mealItem.map((item) => (
        <ol key={item.id} className={classes.cart}>
          <div className={classes.content}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </div>
          <Typography variant="h6" gutterBottom>
            {item.name}
            <span className={classes.subTotal}>
              ₹{item.totalPrice.toFixed(2)}
            </span>
          </Typography>
          <div>
            ₹{item.price}
            <div className={classes.action}>
              <IconButton
                className={classes.btn}
                onClick={() => removeItemFromCartHandler(item.id)}
              >
                <RemoveIcon fontSize="small" color="success" />
              </IconButton>
              <span>{item.quantity}</span>
              <IconButton
                className={classes.btn}
                onClick={() =>
                  addItemToCartHandler(item.id, item.img, item.name, item.price)
                }
              >
                <AddIcon fontSize="small" color="success" />
              </IconButton>
            </div>
          </div>
        </ol>
      ))}
      <div className={classes.totalContent}>
        <div className={classes.totaTitle}>
          <h3> Total Amount:</h3>
        </div>
        <div className={classes.totalAmount}>
          <h3>₹{totalAmount.toFixed(2)}</h3>{" "}
        </div>
      </div>

      <div className={classes.actions}>
        <Button color="success">Order</Button>
        <Button color="error" onClick={backToHomepageHandler}>
          Cancel
        </Button>
      </div>
    </div>
    // </Card>
  );
};

export default Cart;
