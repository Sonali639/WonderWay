import { combineReducers } from "redux";
import WishlistReducer from "./wishlist/wishlistReducer/WishlistReducer";
import losiReducer from "./login/losiReducer";

const rootReducer = combineReducers({
  losi: losiReducer,
  wishlist: WishlistReducer,
});

export default rootReducer;
