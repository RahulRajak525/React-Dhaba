class apiCartServices {
  BASE_URL = "https://react-dhaba-9da05-default-rtdb.firebaseio.com/";
  static getInstance() {
    return new apiCartServices();
  }

  addItemToCart = async (data) => {
    const localId = data.localId;
    const cartItem = data.newCart;
    const response = await fetch(this.BASE_URL + localId + "/cart.json", {
      method: "PUT",
      body: JSON.stringify({
        Items: cartItem.Items,
        orderedList: cartItem.orderedList,
        totalQuantity: cartItem.totalQuantity,
        totalAmount: cartItem.totalAmount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("send", data);
      return data;
    } else {
      const data2 = await response.json();
      alert("Sending Data failed");
    }
  };

  getCartItem = async (localId) => {
    console.log(localId);
    const response = await fetch(this.BASE_URL + localId + "/cart.json", {
      method: "GET",
      headers: {
        "Content-Type": "Apllication/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      const newData = {
        Items: data.Items || [],
        orderedList: data.orderedList || [],
        totalQuantity: data.totalQuantity,
        totalAmount: data.totalAmount,
      };
      console.log("get ", newData);
      return newData;
    } else {
      const data2 = await response.json();
      alert("Getting data failed..");
    }
  };
}
export const ApiCartServices = apiCartServices.getInstance();
