import idGenerator from '../../components/utilities/idgen';

// ---------------- paths --------------------
const APPEND_PRODUCT_TO_CART = 'REDUX/CART/APPEND_PRODUCT_TO_CART';
const SWITCH_SHOPPING_CART = 'REDUX/CART/SWITCH_SHOPPING_CART';
const SWITCH_CART_STORE_PICKER = 'REDUX/CART/SWITCH_CART_STORE_PICKER';
const SWITCH_CART_ITEM_PICKER = 'REDUX/CART/SWITCH_CART_ITEM_PICKER';
const FILL_CART_STORE_PICKER = 'REDUX/CART/FILL_CART_STORE_PICKER';
const MODIFY_PRODUCT_FROM_CART = 'REDUX/CART/MODIFY_PRODUCT_FROM_CART';
const FILL_CART_ITEM_PICKER = 'REDUX/CART/FILL_CART_ITEM_PICKER';
const RESET_CART_SWITCH = 'REDUX/CART/RESET_CART_SWITCH';
const CART_STORE_REPLACEMENT_ACTION = 'REDUX/CART/CART_STORE_REPLACEMENT_ACTION';
const MODIFY_DELIVERY_STATE_AND_VALUE = 'REDUX/CART/MODIFY_DELIVERY_STATE_AND_VALUE';
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
const cartStoreReplacementAction = (payload) => ({
  type: CART_STORE_REPLACEMENT_ACTION,
  payload,
});
const modifiDeliveryStateAndValue = (payload) => ({
  type: MODIFY_DELIVERY_STATE_AND_VALUE,
  payload,
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
const cartReducerInitialState = {
  ordercontent: [],
  customerid: null,
  customername: 'Nombre Prueba',
  customerphone: null,
  code: `order_${idGenerator()}`,
  orderaddress: 'Calle Prueba 615',
  orderaddressref: 'Referencia de prueba',
  orderproductsamount: null,
  orderamounttotal: null,
  orderdeliverystate: false,
  orderdeliveryamount: 0,
  paymentmethod: 'PagoLink VISA',
  orderregisterdate: null,
  orderdeliverdate: false,
  orderregistertime: null,
  orderdelivertime: null,
};
const cartReducer = (state = cartReducerInitialState, action) => {
  const productsArray = state.ordercontent;
  const stateObject = state;
  const sumProducts = (array) => {
    let priceValue = 0;
    for (let i = 0; i < array.length; i += 1) {
      priceValue = parseFloat(priceValue) + parseFloat(array[i].price);
    }
    return priceValue;
  };
  switch (action.type) {
    case APPEND_PRODUCT_TO_CART:
      productsArray.push(action.payload);
      stateObject.ordercontent = productsArray;
      stateObject.orderproductsamount = sumProducts(productsArray);
      stateObject.orderamounttotal = sumProducts(productsArray)
      + parseFloat(stateObject.orderdeliveryamount);
      return stateObject;
    case MODIFY_PRODUCT_FROM_CART:
      stateObject.ordercontent = productsArray.filter((e) => e.code !== action.payload.code);
      stateObject.ordercontent.push(action.payload);
      return stateObject;
    case MODIFY_DELIVERY_STATE_AND_VALUE:
      stateObject.orderdeliverdate = true;
      stateObject.orderdeliveryamount = parseFloat(action.payload);
      stateObject.orderamounttotal = sumProducts(productsArray)
      + parseFloat(stateObject.orderdeliveryamount);
      return stateObject;
    default:
      return state;
  }
};
const cartStorePickerReducer = (state = [], action) => {
  const replaceFunction = () => {
    const stateArray = [...state.content];
    const newArray = [];
    for (let i = 0; i < stateArray.length; i += 1) {
      if (stateArray[i].header === action.payload.header) {
        newArray.push(action.payload);
      } else {
        newArray.push(stateArray[i]);
      }
    }
    return newArray;
  };
  switch (action.type) {
    case FILL_CART_STORE_PICKER:
      return action.payload;
    case CART_STORE_REPLACEMENT_ACTION:
      return {
        header: state.header,
        price: state.price,
        code: state.code,
        content: replaceFunction(),
      };
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
  cartStoreReplacementAction,
  modifiDeliveryStateAndValue,
  // ---- Middlewares -----
};
