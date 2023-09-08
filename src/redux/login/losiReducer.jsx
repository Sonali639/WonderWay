import { LOGIN, SIGNUP, LOGOUT } from "./losiType";

const initialState = {
  isauth: false,
  user: [],
};

const losiReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isauth: true,
      };
    case SIGNUP:
      return {
        ...state,
        isauth: true,
        user:[...state.user,action.payload]
      };
    case LOGOUT:
      return {
        ...state,
        isauth: false,
      };
    default:
      return state;
  }
};

export default losiReducer;
