import { cartActions } from "./cartSlice";

export const fetchCartData = (localId) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log("1",localId)
      const response = await fetch(
        "https://food-order-app-bb380-default-rtdb.firebaseio.com/cart/" +
          localId +
          "/.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch cart data");
      }
      const data = await response.json();
      console.log(data)
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          Items: cartData.Items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
          orderedList: cartData.orderedList || [],
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
export const sendCartData = (cart, localId) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://food-order-app-bb380-default-rtdb.firebaseio.com/cart/" +
          localId +
          "/.json",
        {
          method: "PUT",
          body: JSON.stringify({
            Items: cart.Items,
            totalQuantity: cart.totalQuantity,
            totalAmount: cart.totalAmount,
            orderedList: cart.orderedList,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };
};
