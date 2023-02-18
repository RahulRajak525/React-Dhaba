import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

class apiUserService {
  BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";
  static getInstance() {
    return new apiUserService();
  }
  signUp = async (data) => {
    const response = await fetch(
      this.BASE_URL + "signUp?key=AIzaSyAErOrMS-rZF1RibwOBQYSLFnmn5Mg_kKQ",
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
      toast.success("Account created Successfully!");
      return data;
    } else {
      const data2 = await response.json();
      const errorMessage = data2.error.errors[0].message;
      toast.error(errorMessage);
    }
  };

  signIn = async (data) => {
    const response = await fetch(
      this.BASE_URL +
        "signInWithPassword?key=AIzaSyAErOrMS-rZF1RibwOBQYSLFnmn5Mg_kKQ",
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
      toast.success("Welcome to React Dhaba!");
      return data;
    } else {
      const data2 = await response.json();
      const errorMessage = data2.error.errors[0].message;
      toast.error(errorMessage);
    }
  };
  profileUpdate = async (data) => {
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      this.BASE_URL + "update?key=AIzaSyAErOrMS-rZF1RibwOBQYSLFnmn5Mg_kKQ",
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
  resetPassword = async (data) => {
    const response = await fetch(
      this.BASE_URL + "sendOobCode?key=AIzaSyAErOrMS-rZF1RibwOBQYSLFnmn5Mg_kKQ",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: data.userEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("A link is send to your email, please check!");
      return data;
    }
  };

  getUserData = async () => {
    const idToken = localStorage.getItem("idToken");
    // console.log('3', idToken)
    const response = await fetch(
      this.BASE_URL + "lookup?key=AIzaSyAErOrMS-rZF1RibwOBQYSLFnmn5Mg_kKQ",
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
      return data;
    }
  };
}

export const ApiUserService = apiUserService.getInstance();
