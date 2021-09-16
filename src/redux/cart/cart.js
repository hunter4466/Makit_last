import idGenerator from '../../components/utilities/idgen';

// ---------------- DUCK'S PATHERN VARIABLES --------------------
// ---- Cart store -----
const [
  REFRESH_CART,
  APPEND_PRODUCT_TO_CART,
  MODIFY_PRODUCT_FROM_CART,
  MODIFY_DELIVERY_STATE_AND_VALUE,
  MODIFY_USER_NAME,
  MODIFY_ORDER_DELIVERY_STATE,
  MODIFY_USER_PHONE,
  MODIFY_USER_ADDRESS_AND_REF,
  MODIFY_PAYMENT_METHOD,
  CLEAR_CART,
  REMOVE_ITEM_FROM_CART,
] = [
  'REDUX/CART/REFRESH_CART',
  'REDUX/CART/APPEND_PRODUCT_TO_CART',
  'REDUX/CART/MODIFY_PRODUCT_FROM_CART',
  'REDUX/CART/MODIFY_DELIVERY_STATE_AND_VALUE',
  'REDUX/CART/MODIFY_USER_NAME',
  'REDUX/CART/MODIFY_ORDER_DELIVERY_STATE',
  'REDUX/CART/MODIFY_USER_PHONE',
  'REDUX/CART/MODIFY_USER_ADDRESS_AND_REF',
  'REDUX/CART/MODIFY_PAYMENT_METHOD',
  'REDUX/CART/CLEAR_CART',
  'REDUX/CART/REMOVE_ITEM_FROM_CART',
];
// ---- Cart switch -----
const [
  SWITCH_SHOPPING_CART,
  SWITCH_CART_STORE_PICKER,
  SWITCH_CART_ITEM_PICKER,
  SWITCH_NAME_PICKER,
  SWITCH_PHONE_PICKER,
  SWITCH_DELIVERY_STATE_PICKER,
  SWITCH_ADDRESS_PICKER,
  SWITCH_PAYMENT_PICKER,
  RESET_CART_SWITCH,
  SWITCH_OVERALL_VIEW,
  START_POINT_SWITCH,
] = [
  'REDUX/CART/SWITCH_SHOPPING_CART',
  'REDUX/CART/SWITCH_CART_STORE_PICKER',
  'REDUX/CART/SWITCH_CART_ITEM_PICKER',
  'REDUX/CART/SWITCH_NAME_PICKER',
  'REDUX/CART/SWITCH_PHONE_PICKER',
  'REDUX/CART/SWITCH_DELIVERY_STATE_PICKER',
  'REDUX/CART/SWITCH_ADDRESS_PICKER',
  'REDUX/CART/SWITCH_PAYMENT_PICKER',
  'REDUX/CART/RESET_CART_SWITCH',
  'REDUX/CART/SWITCH_OVERALL_VIEW',
  'REDUX/CART/START_POINT_SWITCH',
];

// ---- Cart store picker -----
const [
  FILL_CART_STORE_PICKER,
  CART_STORE_REPLACEMENT_ACTION,
] = [
  'REDUX/CART/FILL_CART_STORE_PICKER',
  'REDUX/CART/CART_STORE_REPLACEMENT_ACTION',
];
// ---- Cart item picker -----
const FILL_CART_ITEM_PICKER = 'REDUX/CART/FILL_CART_ITEM_PICKER';
// ---------------- ACTIONS ------------------
// ---- Cart store -----
const refreshcart = () => ({
  type: REFRESH_CART,
});
const buildProduct = (payload) => ({
  type: APPEND_PRODUCT_TO_CART,
  payload,
});
const modifyProductFromCart = (payload) => ({
  type: MODIFY_PRODUCT_FROM_CART,
  payload,
});
const modifiDeliveryStateAndValue = (payload) => ({
  type: MODIFY_DELIVERY_STATE_AND_VALUE,
  payload,
});
const modifyusername = (payload) => ({
  type: MODIFY_USER_NAME,
  payload,
});
const modifydeliverystate = (payload) => ({
  type: MODIFY_ORDER_DELIVERY_STATE,
  payload,
});
const modifyuserphone = (payload) => ({
  type: MODIFY_USER_PHONE,
  payload,
});
const modifyaddressandref = (payload) => ({
  type: MODIFY_USER_ADDRESS_AND_REF,
  payload,
});
const modifypaymentmethod = (payload) => ({
  type: MODIFY_PAYMENT_METHOD,
  payload,
});
const clearCart = () => ({
  type: CLEAR_CART,
});
const removeItemFromCart = (payload) => ({
  type: REMOVE_ITEM_FROM_CART,
  payload,
});
// ---- Cart switch -----
const switchShoppingCart = (payload) => ({
  type: SWITCH_SHOPPING_CART,
  payload,
});
const switchCartStorePicker = (payload) => ({
  type: SWITCH_CART_STORE_PICKER,
  payload,
});
const switchnamepicker = (payload) => ({
  type: SWITCH_NAME_PICKER,
  payload,
});
const switchphonepicker = (payload) => ({
  type: SWITCH_PHONE_PICKER,
  payload,
});
const switchdeliverystatepicker = (payload) => ({
  type: SWITCH_DELIVERY_STATE_PICKER,
  payload,
});
const switchaddresspicker = (payload) => ({
  type: SWITCH_ADDRESS_PICKER,
  payload,
});
const switchpaymentpicker = (payload) => ({
  type: SWITCH_PAYMENT_PICKER,
  payload,
});
const switchCartItemPicker = (payload) => ({
  type: SWITCH_CART_ITEM_PICKER,
  payload,
});
const resetCartSwitch = () => ({
  type: RESET_CART_SWITCH,
});
const setdeliverystartpointswitch = (payload) => ({
  type: START_POINT_SWITCH,
  payload,
});
const switchoverallview = (payload) => ({
  type: SWITCH_OVERALL_VIEW,
  payload,
});
// ---- Cart store picker -----
const fillCartStorePicker = (payload) => ({
  type: FILL_CART_STORE_PICKER,
  payload,
});
const cartStoreReplacementAction = (payload) => ({
  type: CART_STORE_REPLACEMENT_ACTION,
  payload,
});
// ---- Cart item picker -----
const fillCartItemPicker = (payload) => ({
  type: FILL_CART_ITEM_PICKER,
  payload,
});
// ---------------- REDUCERS ------------------
const cartSwitchInitialState = {
  shoppingcart: true,
  cartstorepicker: false,
  cartitempicker: false,
  namepicker: false,
  phonepicker: false,
  deliverystatepicker: false,
  addresspicker: false,
  paymentpicker: false,
  overallview: false,
  deliverystartpoint: false,
};
const cartSwitchReducer = (state = cartSwitchInitialState, action) => {
  const activeState = {
    shoppingcart: state.shoppingcart,
    cartstorepicker: state.cartstorepicker,
    cartitempicker: state.cartitempicker,
    namepicker: state.namepicker,
    phonepicker: state.phonepicker,
    deliverystatepicker: state.deliverystatepicker,
    addresspicker: state.addresspicker,
    paymentpicker: state.paymentpicker,
    overallview: state.overallview,
    deliverystartpoint: state.deliverystartpoint,
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
    case SWITCH_NAME_PICKER:
      activeState.namepicker = action.payload;
      return activeState;
    case SWITCH_PHONE_PICKER:
      activeState.phonepicker = action.payload;
      return activeState;
    case SWITCH_DELIVERY_STATE_PICKER:
      activeState.deliverystatepicker = action.payload;
      return activeState;
    case SWITCH_ADDRESS_PICKER:
      activeState.addresspicker = action.payload;
      return activeState;
    case SWITCH_PAYMENT_PICKER:
      activeState.paymentpicker = action.payload;
      return activeState;
    case SWITCH_OVERALL_VIEW:
      activeState.overallview = action.payload;
      return activeState;
    case START_POINT_SWITCH:
      activeState.deliverystartpoint = action.payload;
      return activeState;
    case RESET_CART_SWITCH:
      return cartSwitchInitialState;
    default:
      return state;
  }
};
const cartReducerInitialState = () => {
  if (sessionStorage.getItem('cartInfo')) {
    return JSON.parse(sessionStorage.getItem('cartInfo'));
  }
  return {
    ordercontent: [],
    customerid: null,
    customername: 'Not Defined',
    customerphone: null,
    code: `order_${idGenerator()}`,
    orderaddress: 'Not Defined',
    orderinneradress: 'Not Defined',
    orderaddressref: 'Not Defined',
    orderproductsamount: null,
    orderamounttotal: null,
    orderdeliverystate: false,
    orderdeliveryamount: 0,
    paymentmethod: 'Not Defined',
    orderregisterdate: null,
    orderdeliverdate: false,
    orderregistertime: null,
    orderdelivertime: null,
  };
};

const cartReducer = (state = cartReducerInitialState(), action) => {
  const productsArray = state.ordercontent;
  const stateObject = state;
  const sumProducts = (array) => {
    let priceValue = 0;
    for (let i = 0; i < array.length; i += 1) {
      priceValue = parseFloat(priceValue) + parseFloat(array[i].price);
    }
    return priceValue;
  };
  const removeItemFromContent = () => {
    const elements = state.ordercontent;
    const newArray = [];
    elements.forEach((e) => {
      if (e.code !== action.payload) {
        newArray.push(e);
      }
    });
    return newArray;
  };
  switch (action.type) {
    case REFRESH_CART:
      return state;
    case CLEAR_CART:
      return {
        ordercontent: [],
        customerid: state.customerid,
        customername: state.customername,
        customerphone: state.customerphone,
        code: state.code,
        orderaddress: state.orderaddress,
        orderinneradress: state.orderinneradress,
        orderaddressref: state.orderaddressref,
        orderproductsamount: state.orderproductsamount,
        orderamounttotal: state.orderamounttotal,
        orderdeliverystate: state.orderdeliverystate,
        orderdeliveryamount: state.orderdeliveryamount,
        paymentmethod: state.paymentmethod,
        orderregisterdate: state.orderregisterdate,
        orderdeliverdate: state.orderdeliverdate,
        orderregistertime: state.orderregistertime,
        orderdelivertime: state.orderdelivertime,
      };
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
      stateObject.orderdeliverystate = action.payload.state;
      stateObject.orderdeliveryamount = parseFloat(action.payload.value);
      stateObject.orderamounttotal = sumProducts(productsArray)
      + parseFloat(stateObject.orderdeliveryamount);
      return stateObject;
    case MODIFY_USER_NAME:
      stateObject.customername = action.payload;
      return stateObject;
    case MODIFY_ORDER_DELIVERY_STATE:
      stateObject.orderdeliverystate = action.payload;
      return stateObject;
    case MODIFY_USER_PHONE:
      stateObject.customerphone = action.payload;
      return stateObject;
    case MODIFY_USER_ADDRESS_AND_REF:
      stateObject.orderaddress = action.payload.address;
      stateObject.orderinneradress = action.payload.inneradress;
      stateObject.orderaddressref = action.payload.reference;
      return stateObject;
    case MODIFY_PAYMENT_METHOD:
      stateObject.paymentmethod = action.payload;
      return stateObject;
    case REMOVE_ITEM_FROM_CART:
      return {
        ordercontent: removeItemFromContent(),
        customerid: state.customerid,
        customername: state.customername,
        customerphone: state.customerphone,
        code: state.code,
        orderaddress: state.orderaddress,
        orderinneradress: state.orderinneradress,
        orderaddressref: state.orderaddressref,
        orderproductsamount: state.orderproductsamount,
        orderamounttotal: state.orderamounttotal,
        orderdeliverystate: state.orderdeliverystate,
        orderdeliveryamount: state.orderdeliveryamount,
        paymentmethod: state.paymentmethod,
        orderregisterdate: state.orderregisterdate,
        orderdeliverdate: state.orderdeliverdate,
        orderregistertime: state.orderregistertime,
        orderdelivertime: state.orderdelivertime,
      };
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
const saveCartInfoMiddleware = (store) => (next) => (action) => {
  const tester = () => {
    const sample = [
      REFRESH_CART,
      APPEND_PRODUCT_TO_CART,
      MODIFY_PRODUCT_FROM_CART,
      MODIFY_DELIVERY_STATE_AND_VALUE,
      MODIFY_USER_NAME,
      MODIFY_ORDER_DELIVERY_STATE,
      MODIFY_USER_PHONE,
      MODIFY_USER_ADDRESS_AND_REF,
      MODIFY_PAYMENT_METHOD,
      REMOVE_ITEM_FROM_CART,
    ];
    let returnValue = false;
    sample.forEach((e) => {
      if (action.type === e) {
        returnValue = true;
      }
    });
    return returnValue;
  };
  if (tester()) {
    sessionStorage.setItem('cartInfo', JSON.stringify(store.getState().cartReducer));
  }
  next(action);
};
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
  switchnamepicker,
  switchphonepicker,
  modifyusername,
  modifyuserphone,
  switchdeliverystatepicker,
  switchaddresspicker,
  modifydeliverystate,
  modifyaddressandref,
  switchpaymentpicker,
  modifypaymentmethod,
  refreshcart,
  setdeliverystartpointswitch,
  switchoverallview,
  clearCart,
  removeItemFromCart,
  // ---- Middlewares -----
  saveCartInfoMiddleware,
};
