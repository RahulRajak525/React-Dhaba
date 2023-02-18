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
import { getUserDataAction } from "./Reducer/asyncUserReducer";
import MyAccount from "./components/UserProfile/MyAccount";
import { selectUserDetails } from "./Reducer/userSlice";
import Footer from "./components/Layout/Footer";
import PassReset from "./components/UserProfile/PassReset";

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userDetail = useSelector(selectUserDetails);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn === "true") {
      dispatch(getUserDataAction());
      console.log(isLoggedIn);
    } else {
      return;
    }
  }, [isLoggedIn, dispatch]);

  useEffect(() => {
    if (userDetail) {
      const localId = userDetail.localId;
      dispatch(fetchCartData(localId));
    }
  }, [userDetail, dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      const localId = userDetail.localId;
      dispatch(sendCartData(cart, localId));
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
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="cart"
          element={
            <div>
              <Navbar />
              <Cart />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="welcomePage"
          element={
            <div>
              <Navbar />
              <Welcome />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="logInPage"
          element={
            <div>
              <Navbar />
              <LogIn />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="myAccount"
          element={
            <div>
              <Navbar />
              <MyAccount />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="orderHistory"
          element={
            <div>
              <Navbar />
              <OrderHistory />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="userProfile"
          element={
            <div>
              <Navbar />
              <UserProfile />
              <Footer />
            </div>
          }
        ></Route>
        <Route
          path="passReset"
          element={
            <div>
              <Navbar />
              <PassReset />
              <Footer />
            </div>
          }
        ></Route>
      </Routes>
    </Provider>
  );
}

export default App;
