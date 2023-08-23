export const addToWishlist = item => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: item
    };
};

export const removeFromWishlist = item => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: item
    };
};