import classes from "./MuiCard.module.css";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Reducer/cartSlice";
import ShareIcon from "@mui/icons-material/Share";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-toastify";
export const MuiCard = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state.cart.mealsAvailable);
  const addItemToCartHandler = (id, img, name, price) => {
    if (isLoggedIn) {
      dispatch(cartActions.addItemsToCart({ id, img, name, price }));
    } else {
      toast.warn("Please Signup ,Login and then add to cart");
    }
  };
  return (
    <div className={classes.meals}>
      <div className={classes.availableMeals1}>
        {availableMeals.map((item) => (
          <Card sx={{ maxWidth: 280 }} key={item.id} className={classes.Card}>
            <div className={classes.ImageNshare}>
              <div className={classes.img}>
                <img src={item.img} alt={item.title} loading="lazy" />
              </div>
              <div className={classes.shareIcon}>{<ShareIcon />}</div>
            </div>
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
            <CardActions className={classes.cardActions}>
              <div className={classes.starIcon}>
                <span>
                  <StarIcon fontSize="small" />
                </span>
                <span>{item.rating}</span>
              </div>
              <div>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={() =>
                    addItemToCartHandler(
                      item.id,
                      item.img,
                      item.name,
                      item.price
                    )
                  }
                >
                  Add
                </Button>
              </div>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
