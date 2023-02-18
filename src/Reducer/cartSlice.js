import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const DUMMY_MEALS = [
  {
    id: "m1",
    img: "https://img.freepik.com/free-photo/side-view-sushi-set-with-soy-sauce-chopsticks-wooden-serving-board_176474-3234.jpg",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 350,
    rating: 4.8,
  },
  {
    id: "m2",
    img: "https://img.freepik.com/premium-photo/vegetable-pizza-tomato-pepper-onion-mushroom-corn-fresh-meal-snack-table-copy-space_88242-13909.jpg?w=740",
    name: "Pizza",
    description: "A Italian specialty!",
    price: 220,
    rating: 4.6,
  },
  {
    id: "m3",
    img: "https://img.freepik.com/free-photo/front-view-yummy-meat-cheeseburger-with-french-fries-dark-background-dinner-burgers-snack-fast-food-sandwich-salad-dish-toast_140725-159215.jpg",
    name: "Barbeque Burger",
    description: "American, raw, meaty",
    price: 129,
    rating: 4.7,
  },
  {
    id: "m4",
    img: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg",
    name: "Paneer Kathi Roll",
    description: "Healthy...and green...",
    price: 85,
    rating: 4.5,
  },
  {
    id: "m5",
    img: "https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg",
    name: " Schezwan Noodles",
    description: " Indo Chinese Dish",
    price: 80,
    rating: 4.8,
  },
  {
    id: "m6",
    img: "https://img.freepik.com/free-photo/pohe-poha-pohaa-also-known-as-pauwa-sira-chira-aval-bajil-among-many-other-names-is-flattened-rice-originating-from-indian-subcontinent_466689-75423.jpg",
    name: "Poha",
    description: "Special from MP",
    price: 55,
    rating: 4.5,
  },
  {
    id: "m7",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/26/Litti_chokha_dipped_in_Ghee.jpg",
    name: "Litti Chokha",
    description: "Special from Bihar",
    price: 40,
    rating: 4.3,
  },
  {
    id: "m8",
    img: "https://mytastycurry.com/wp-content/uploads/2016/05/quick-and-delicious-hyderabadi-dum-style-chicken-biryani-recipe-with-step-by-step-instructional-video.1024x1024.jpg",
    name: "Dum ki Biryani",
    description: " Flavourful hyderabadi style",
    price: 210,
    rating: 4.5,
  },
  {
    id: "m9",
    img: "https://sapanarestaurant.com/wp-content/uploads/2019/11/idli-sambar.jpg",
    name: "Idli Sambar",
    description: "Special Taste of South",
    price: 80,
    rating: 4.2,
  },
];
const initialState = {
  mealsAvailable: DUMMY_MEALS,
  Items: [],
  visible: false,
  orderedList: [],
  totalQuantity: 0,
  totalAmount: 0,
  OrderAmount: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
      state.Items = action.payload.Items;
      state.orderedList = action.payload.orderedList;
    },
    addItemsToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem.price);
      const existingItem = state.Items.find((item) => item.id === newItem.id);
      state.totalAmount = state.totalAmount + newItem.price;
      console.log(state.totalAmount);
      state.totalQuantity++;
      state.changed = true;
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
      state.changed = true;
      if (existingItem.quantity === 1) {
        state.Items = state.Items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
    orderedItemFromCart(state, action) {
      const neworder = action.payload;
      state.orderedList.push(neworder);
      state.Items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    toggle(state) {
      state.visible = !state.visible;
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
