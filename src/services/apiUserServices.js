class apiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new apiUserService();
  }
  signUp = async (data) => {
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
      return data;
    }
  };
  signIn = async (data) => {
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
      return data;
    }
  };
  profileUpdate = async (data) => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "update?key=AIzaSyDUeURtDCSB3tZqgvybvv-GxZuPN1hNF44",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
          displayName: data.displayName,
          photoUrl: data.photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  };

  getUserData = async () => {
    const idToken = localStorage.getItem("idToken");
    console.log('3', idToken)
    const response = await fetch(
      this.BASE_URL + "lookup?key=AIzaSyDUeURtDCSB3tZqgvybvv-GxZuPN1hNF44",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: idToken,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log('4',data)
      return data;
    }
  };
}

export const ApiUserService = apiUserService.getInstance();
