import React from "react";
import { Provider } from "react-redux";
import Navbar from "./components/Layout/Navbar";
import store from "./Store/store";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import Welcome from "./components/Welcome/Welcome";
import { Routes, Route} from "react-router-dom";
import OrderHistory from "./components/Layout/OrderHistory";
import LgNsPage from "./components/Layout/LgNsPage";
function App() {
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
              <LgNsPage />
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
      </Routes>
    </Provider>
  );
}

export default App;
