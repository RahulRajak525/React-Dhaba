import React from "react";
import classes from "./MuiCard.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  IconButton,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

export const MuiCard = () => {
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state.cart.mealsAvailable);
  const addItemToCartHandler = (id, img, name, price) => {
    dispatch(cartActions.addItemsToCart({ id, img, name, price }));
  };
  return (
    <div className={classes.availableMeals1}>
      {availableMeals.map((item) => (
        <Card sx={{ maxWidth: 280 }} key={item.id} className={classes.Card}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            className={classes.img}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className={classes.title}
            >
              {item.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className={classes.title}
            >
              {item.description}
            </Typography>
            <div className={classes.title}>₹{item.price}</div>
          </CardContent>
          <CardActions>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <div className={classes.button}>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() =>
                  addItemToCartHandler(item.id, item.img, item.name, item.price)
                }
              >
                Add
              </Button>
            </div>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};
