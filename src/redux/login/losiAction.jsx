import { LOGIN, SIGNUP, LOGOUT } from "./losiType";

const login = (userData) => {
  return {
    type: LOGIN,
    payload: userData,
  };
};

const signup = (userData) => {
  return {
    type: SIGNUP,
    payload: userData,
  };
};

const logout = () => {
  return {
    type: LOGOUT,
    payload: null, // You can set payload to null for logout action
  };
};

export { login, signup, logout };
