import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Layout/Navbar";
import store from "./Store/store";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import Welcome from "./components/Welcome/Welcome";
import { Routes, Route } from "react-router-dom";
import OrderHistory from "./components/Layout/OrderHistory";
import LogIn from "./components/Layout/LogIn";
import { fetchCartData, sendCartData } from "./Reducer/cart-actions";
import UserProfile from "./components/UserProfile/UserProfile";
let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Meal />
            </div>
          }
        ></Route>
        <Route
          path="cart"
          element={
            <div>
              <Navbar />
              <Cart />
            </div>
          }
        ></Route>
        <Route
          path="welcomePage"
          element={
            <div>
              <Navbar />
              <Welcome />
            </div>
          }
        ></Route>
        <Route
          path="logInPage"
          element={
            <div>
              <Navbar />
              <LogIn />
            </div>
          }
        ></Route>
        <Route
          path="orderHistory"
          element={
            <div>
              <Navbar />
              <OrderHistory />
            </div>
          }
        ></Route>
        <Route
          path="userProfile"
          element={
            <div>
              <Navbar />
              <UserProfile/>
            </div>
          }
        ></Route>
      </Routes>
    </Provider>
  );
}

export default App;
