import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "../Card/MuiCard.module.css";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import classes from "../Cart/Cart.module.css";
import "./mealItem.css";

import { IconButton } from "@mui/material";
import { cartActions } from "../../Reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const MealItem = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = location.state?.data;
  const restaurantName = location.state?.restaurantName;
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const [initialItem, setItem] = useState(data);

  const items = useSelector((state) => state.cart.Items);
  const addItemToCartHandler = (item) => {
    console.log(item);
    if (isLoggedIn) {
      dispatch(cartActions.addItemsToCart(item));
      const copyItem = [...initialItem];
      const idX = initialItem.findIndex(
        (foodItem) => foodItem.uuid == item.uuid
      );
      copyItem[idX].quantity++;
      setItem(copyItem);
    } else {
      toast.warn("Please login first and then add to cart");
    }
  };
  const increaseQuantityHandler = (item) => {
    const copyItem = [...initialItem];
    const idX = initialItem.findIndex((foodItem) => foodItem.uuid == item.uuid);
    console.log(idX);
    copyItem[idX].quantity++;
    setItem(copyItem);
    dispatch(cartActions.addItemsToCart(item));
  };
  const decreaseQuantityHandler = (item) => {
    const copyItem = [...initialItem];
    const idX = initialItem.findIndex((foodItem) => foodItem.uuid == item.uuid);
    copyItem[idX].quantity--;
    setItem(copyItem);
    dispatch(cartActions.removeItemFromCart(item));
  };
  return (
    <div className="meal-items">
      <div className="restaurant-name">
        <h3>{restaurantName}</h3>
      </div>
      {initialItem.map((item) => (
        <div className="foodItem-container" key={item.id}>
          <div className="food-item-card">
            <img src={item.imageUrl} alt="Food Item" />
            <div className="food-item-details">
              <h3 className="food-item-name">{item.name}</h3>
              <span className="food-item-description">{item.description}</span>
              <div className="food-item-rating">
                <div className="food-item-price">${item.price}</div>
                <div className="addbutton">
                  {item.quantity == 0 ? (
                    <button onClick={() => addItemToCartHandler(item)}>
                      Add
                    </button>
                  ) : (
                    <div className="action">
                      <div>
                        <IconButton
                          className="btn"
                          onClick={() => decreaseQuantityHandler(item)}
                        >
                          <RemoveIcon fontSize="small" color="success" />
                        </IconButton>
                      </div>
                      <span>{item.quantity}</span>
                      <div>
                        <IconButton
                          className="btn"
                          onClick={() => increaseQuantityHandler(item)}
                        >
                          <AddIcon fontSize="small" color="success" />
                        </IconButton>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className={classes.starIcon}>
                <span>
                  <StarIcon fontSize="small" />
                </span>
                <span>{item.rating}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealItem;
