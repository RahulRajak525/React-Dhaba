import { StarRateRounded } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

const DUMMY_MEALS = [
  {
    id: "m1",
    img: "https://img.freepik.com/free-photo/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3234.jpg",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 550.51,
    rating: 4.8,
  },
  {
    id: "m2",
    img: "https://img.freepik.com/premium-photo/vegetable-pizza-tomato-pepper-onion-mushroom-corn-fresh-meal-snack-table-copy-space_88242-13909.jpg?w=740",
    name: "Pizza",
    description: "A Italian specialty!",
    price: 399.99,
    rating: 4.6,
  },
  {
    id: "m3",
    img: "https://img.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_140725-159215.jpg",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 129.59,
    rating: 4.7,
  },
  {
    id: "m4",
    img: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg",
    name: "Paneer Kathi Roll",
    description: "Healthy...and green...",
    price: 131.99,
    rating: 4.5,
  },
  {
    id: "m5",
    img: "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg",
    name: " Schezwan Noodles",
    description: " Indo Chinese Dish",
    price: 90.91,
    rating: 4.8,
  },
  {
    id: "m6",
    img: "https://img.freepik.com/free-photo/pohe-poha-pohaa-also-known-as-pauwa-sira-chira-aval-bajil-among-many-other-names-is-flattened-rice-originating-from-indian-subcontinent_466689-75423.jpg",
    name: "Poha",
    description: "Special from MP",
    price: 60.93,
    rating: 4.5,
  },
];
const initialState = {
  mealsAvailable: DUMMY_MEALS,
  Items: [],
  orderedList: [],
  totalQuantity: 0,
  totalAmount: 0,
   OrderAmount : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.Items.find((item) => item.id === newItem.id);
      state.totalAmount = state.totalAmount + newItem.price;
      state.totalQuantity++;
      if (!existingItem) {
        state.Items.push({
          id: newItem.id,
          img: newItem.img,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.Items.find((item) => item.id === id);
      state.totalAmount = state.totalAmount - existingItem.price;
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.Items = state.Items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    orderedItemFromCart(state, action) {
      const neworder = action.payload;
      let keys = Object.values(neworder)
      let newOrder1 = keys[0];
      let newOrder2 = [keys[1]];
      let order = [];
      // console.log(order.push(newOrder2));
      if (neworder.length === 0) {
        alert("Please Add Item to Cart First!");
        return;
      } else {
       state.orderedList.push(newOrder1);
       state.OrderAmount.push({ amount: newOrder2 });
        state.Items = [];
        state.totalQuantity = 0;
        state.totalAmount = 0;
        alert("Your Order is placed!");
        return;
      }
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
