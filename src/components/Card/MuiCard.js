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
import { useNavigate } from "react-router-dom";
export const MuiCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const availableMeals = useSelector((state) => state.cart.mealsAvailable);
  const mealItem = useSelector((state) => state.cart.Items);
  const addItemToCartHandler = (id, img, name, price) => {
    if (isLoggedIn) {
      dispatch(cartActions.addItemsToCart({ id, img, name, price }));
    } else {
      toast.warn("Please Signup ,Login and then add to cart");
    }
  };

  const goToMealItemList = (menu, name) => {
    navigate("/mealItem", { state: { data: menu, restaurantName: name } });
  };

  return (
    <div className={classes.meals}>
      <div className={classes.availableMeals1}>
        {availableMeals.map((item) => (
          <Card
            sx={{ maxWidth: 350 }}
            key={item.uuid}
            className={classes.Card}
            onClick={() => goToMealItemList(item.menu, item.name)}
          >
            <div className={classes.ImageNshare}>
              <div className={classes.img}>
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
              </div>
              {/* <div className={classes.shareIcon}>{<ShareIcon />}</div> */}
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
              {/* <div className={classes.title}>₹{item.price}</div> */}
            </CardContent>
            <CardActions className={classes.cardActions}>
              <span>{item.rating}</span>
              <div className={classes.starIcon}>
                <span>
                  <StarIcon fontSize="medium" />
                </span>
              </div>

              {/* <div>
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
              </div> */}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
};
