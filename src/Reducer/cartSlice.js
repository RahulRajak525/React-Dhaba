import { createSlice } from "@reduxjs/toolkit";

const DUMMY_MEALS = [
  {
    id: "m1",
    img: "https://img.freepik.com/free-photo/fresh-sushi-with-red-caviar_140725-1264.jpg?size=338&ext=jpg&ga=GA1.2.950665734.1671050148&semt=sph",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 550.51,
  },
  {
    id: "m2",
    img: "https://img.freepik.com/premium-photo/vegetable-pizza-tomato-pepper-onion-mushroom-corn-fresh-meal-snack-table-copy-space_88242-13909.jpg?w=740",
    name: "Pizza",
    description: "A Italian specialty!",
    price: 399.99,
  },
  {
    id: "m3",
    img: "https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-lettuce_2829-16577.jpg?w=740&t=st=1671471604~exp=1671472204~hmac=b29eafea3797e668e0dd1c19459761be492957b55da4ffdbff7169a0ad9e8805",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 129.59,
  },
  {
    id: "m4",
    img: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg?w=740",
    name: "Paneer Kathi Roll",
    description: "Healthy...and green...",
    price: 131.90,
  },
  {
    id: "m5",
    img: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg?w=740",
    name: "Paneer Kathi Roll",
    description: "Healthy...and green...",
    price: 131.90,
  },
  {
    id: "m6",
    img: "https://img.freepik.com/premium-photo/cottage-cheese-paneer-kathi-roll-wrap-also-known-as-kolkata-style-spring-rolls-vegetarians-indian-food_466689-52302.jpg?w=740",
    name: "Paneer Roll",
    description: "Healthy...and green...",
    price: 131.90,
  },
];
const initialState = {
  mealsAvailable: DUMMY_MEALS,
  Items: [],
  totalQuantity: 0,
  totalAmount: 0,
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
          img:newItem.img,
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
  },
});


export default cartSlice;
export const cartActions = cartSlice.actions;
