const initialState = {
  items: [],
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};

export default wishlistReducer;
