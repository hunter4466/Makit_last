// ---------------- paths --------------------
const APPEND_PRODUCT_TO_CART = 'REDUX/CART/APPEND_PRODUCT_TO_CART';
const SWITCH_SHOPPING_CART = 'REDUX/CART/SWITCH_SHOPPING_CART';
const SWITCH_CART_STORE_PICKER = 'REDUX/CART/SWITCH_CART_STORE_PICKER';
const SWITCH_CART_ITEM_PICKER = 'REDUX/CART/SWITCH_CART_ITEM_PICKER';
const FILL_CART_STORE_PICKER = 'REDUX/CART/FILL_CART_STORE_PICKER';
const MODIFY_PRODUCT_FROM_CART = 'REDUX/CART/MODIFY_PRODUCT_FROM_CART';
const FILL_CART_ITEM_PICKER = 'REDUX/CART/FILL_CART_ITEM_PICKER';
const RESET_CART_SWITCH = 'REDUX/CART/RESET_CART_SWITCH';
// ---------------- Actions ------------------
const buildProduct = (payload) => ({
  type: APPEND_PRODUCT_TO_CART,
  payload,
});
const switchShoppingCart = (payload) => ({
  type: SWITCH_SHOPPING_CART,
  payload,
});
const switchCartStorePicker = (payload) => ({
  type: SWITCH_CART_STORE_PICKER,
  payload,
});
const switchCartItemPicker = (payload) => ({
  type: SWITCH_CART_ITEM_PICKER,
  payload,
});
const fillCartStorePicker = (payload) => ({
  type: FILL_CART_STORE_PICKER,
  payload,
});
const fillCartItemPicker = (payload) => ({
  type: FILL_CART_ITEM_PICKER,
  payload,
});
const modifyProductFromCart = (payload) => ({
  type: MODIFY_PRODUCT_FROM_CART,
  payload,
});
const resetCartSwitch = () => ({
  type: RESET_CART_SWITCH,
});
// ----------------- Switch Reducers -----------
// ---------------- Reducers ------------------
const cartSwitchInitialState = {
  shoppingcart: true,
  cartstorepicker: false,
  cartitempicker: false,
};
const cartSwitchReducer = (state = cartSwitchInitialState, action) => {
  const activeState = {
    shoppingcart: state.shoppingcart,
    cartstorepicker: state.cartstorepicker,
    cartitempicker: state.cartitempicker,
  };
  switch (action.type) {
    case SWITCH_SHOPPING_CART:
      activeState.shoppingcart = action.payload;
      return activeState;
    case SWITCH_CART_STORE_PICKER:
      activeState.cartstorepicker = action.payload;
      return activeState;
    case SWITCH_CART_ITEM_PICKER:
      activeState.cartitempicker = action.payload;
      return activeState;
    case RESET_CART_SWITCH:
      return cartSwitchInitialState;
    default:
      return state;
  }
};
const cartReducer = (state = [], action) => {
  const productsArray = state;
  switch (action.type) {
    case APPEND_PRODUCT_TO_CART:
      productsArray.push(action.payload);
      return productsArray;
    case MODIFY_PRODUCT_FROM_CART:
      return state;
    default:
      return state;
  }
};
const cartStorePickerReducer = (state = [], action) => {
  switch (action.type) {
    case FILL_CART_STORE_PICKER:
      return action.payload;
    default:
      return state;
  }
};
const cartItemPickerReducer = (state = [], action) => {
  switch (action.type) {
    case FILL_CART_ITEM_PICKER:
      return action.payload;
    default:
      return state;
  }
};

// ---------------- Middlewares and Side Effects --------------
// ---------------- Exports --------------
export {
  // ------ Reducers -------
  cartReducer,
  cartSwitchReducer,
  cartStorePickerReducer,
  cartItemPickerReducer,
  // ------ Actions --------
  buildProduct,
  switchShoppingCart,
  switchCartStorePicker,
  switchCartItemPicker,
  fillCartStorePicker,
  modifyProductFromCart,
  fillCartItemPicker,
  resetCartSwitch,
  // ---- Middlewares -----
};
