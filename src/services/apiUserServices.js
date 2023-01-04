class apiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new apiUserService();
  }
  signUp = async (data) => {
    // console.log("4", data);
    const response = await fetch(
      this.BASE_URL + "signUp?key=AIzaSyDUeURtDCSB3tZqgvybvv-GxZuPN1hNF44",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.userEmail,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log("5", data);
      return data;
    }
  };
  signIn = async (data) => {
    // console.log("4", data);
    const response = await fetch(
      this.BASE_URL +
        "signInWithPassword?key=AIzaSyDUeURtDCSB3tZqgvybvv-GxZuPN1hNF44",
      {
        method: "POST",
        body: JSON.stringify({
          email: data.userEmail,
          password: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log("5", data);
      return data;
    }
  };
  profileUpdate = async (data) => {
    console.log("4", data);
    const response = await fetch(
      this.BASE_URL + "update?key=AIzaSyDUeURtDCSB3tZqgvybvv-GxZuPN1hNF44",
      {
        method: "POST",
        body: JSON.stringify({
          // idToken: idToken,
          displayName: data.userName,
          photoUrl: data.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log("5", data);
      return data;
    }
  };
}

export const ApiUserService = apiUserService.getInstance();
