// ---------------- paths --------------------
const APPEND_PRODUCT_TO_CART = 'REDUX/CART/APPEND_PRODUCT_TO_CART';
// ---------------- Initial state ------------
const initialState = [];
// ---------------- Actions ------------------
const buildProduct = (payload) => ({
  type: APPEND_PRODUCT_TO_CART,
  payload,
});
// ----------------- Switch Reducers -----------
// ---------------- Reducers ------------------
const cartReducer = (state = initialState, action) => {
  const productsArray = state;
  switch (action.type) {
    case APPEND_PRODUCT_TO_CART:
      productsArray.push(action.payload);
      return productsArray;
    default:
      return state;
  }
};
// ---------------- Middlewares and Side Effects --------------
// ---------------- Exports --------------
export {
  // ------ Reducers -------
  cartReducer,
  // ------ Actions --------
  buildProduct,
  // ---- Middlewares -----
};
