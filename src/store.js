import { createStore } from 'redux';
import wishListReducer from './redux/wishlist/wishlistReducer/WishlistReducer';

const store = createStore(wishListReducer);

export default store;
