// ---------------- paths --------------------
const TRIGGER_STORE = 'REDUX/STORE/STORE/GET_CATEGORIES';
const TRIGGER_PRODUCTS = 'REDUX/STORE/STORE/TRIGGER_PRODUCTS';
const GET_CATEGORIES = 'REDUX/STORE/STORE/UPD_STORE';
const GET_PRODUCTS = 'REDUX/STORE/STORE/GET_PRODUCTS';
const TRIGGER_PICKER = 'REDUX/STORE/TRIGGER_PICKER';
const GET_PICKER = 'REDUX/STORE/GET_PICKER';
const SEND_ITEM_CONTENT = 'REDUX/STORE/SEND_ITEM_CONTENT';
const APPEND_ITEM_TO_PRODUCT = 'REDUX/STORE/APPEND_ITEM_TO_PRODUCT';
const BUILD_ITEM = 'REDUX/STORE/BUILD_ITEM';
const SET_ITEM_HEADER = 'REDUX/STORE/SET_ITEM_HEADER';
const SET_PRODUCT_HEADER = 'REDUX/STORE/SET_PRODUCT_HEADER';
const SET_FINAL_PRODUCT_HEADER = 'REDUX/STORE/SET_FINAL_PRODUCT_HEADER';
const SWITCH_ITEM_PICKER = 'REDUX/STORE/SWITCH_ITEM_PICKER';
// ---------------- Initial state ------------
let firstLoadState = true;
const initialState = [];
// ---------------- Actions ------------------
const triggerStore = (payload) => ({
  type: TRIGGER_STORE,
  payload,
});
const updateProductsWithAPI = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});
const triggerProducts = (payload) => ({
  type: TRIGGER_PRODUCTS,
  payload,
});
const getProducts = (payload) => ({
  type: GET_PRODUCTS,
  payload,
});
const triggerPicker = (payload) => ({
  type: TRIGGER_PICKER,
  payload,
});
const getPicker = (payload) => ({
  type: GET_PICKER,
  payload,
});
const opentItemPicker = (payload) => ({
  type: SEND_ITEM_CONTENT,
  payload,
});
const setProductHeader = (payload) => ({
  type: SET_PRODUCT_HEADER,
  payload,
});
const setItemHeader = (payload) => ({
  type: SET_ITEM_HEADER,
  payload,
});
const buildItem = (payload) => ({
  type: BUILD_ITEM,
  payload,
});
const appendItemToProduct = (payload) => ({
  type: APPEND_ITEM_TO_PRODUCT,
  payload,
});
const setFinalProductHeader = (payload) => ({
  type: SET_FINAL_PRODUCT_HEADER,
  payload,
});
const swithItemPicker = (payload) => ({
  type: SWITCH_ITEM_PICKER,
  payload,
});
// ----------------- Switch Reducers -----------
const switchReducer = (state = false, action) => {
  switch (action.type) {
    case SWITCH_ITEM_PICKER:
      return action.payload;
    default:
      return state;
  }
};
// ---------------- Reducers ------------------
const storemainReducer = (state = initialState, action) => {
  const actionPayload = action.payload;
  switch (action.type) {
    case TRIGGER_STORE:
      return state;
    case GET_CATEGORIES:
      return actionPayload;
    default:
      return state;
  }
};
const storeSecondaryReducer = (state = initialState, action) => {
  const actionPayload = action.payload;
  switch (action.type) {
    case TRIGGER_PRODUCTS:
      return initialState;
    case GET_PRODUCTS:
      return actionPayload;
    default:
      return state;
  }
};
const storePickerReducer = (state = initialState, action) => {
  const actionPayload = action.payload;
  const activeState = state;
  switch (action.type) {
    case SET_PRODUCT_HEADER:
      return {
        header: actionPayload.header,
        content: [],
      };
    case GET_PICKER:
      activeState.content = actionPayload;
      return {
        header: activeState.header,
        content: activeState.content,
      };
    default:
      return state;
  }
};
const itemPickerReducer = (state = initialState, action) => {
  const actionPayload = action.payload;
  switch (action.type) {
    case SET_ITEM_HEADER:
      return {
        header: actionPayload,
        content: [],
      };
    case SEND_ITEM_CONTENT:
      return {
        header: state.header,
        content: actionPayload,
      };
    default:
      return state;
  }
};
const itemBuildReducer = (state = initialState, action) => {
  const activeState = state;
  const actionPayload = action.payload;
  switch (action.type) {
    case BUILD_ITEM:
      activeState.content = actionPayload;
      return activeState;
    default:
      return state;
  }
};
const productBuildReducer = (state = initialState, action) => {
  const load = action.payload;
  switch (action.type) {
    case SET_FINAL_PRODUCT_HEADER:
      return { header: action.payload, content: [] };
    case APPEND_ITEM_TO_PRODUCT:
      return {
        header: state.header,
        content: [...state.content, load],
      };
    default:
      return state;
  }
};
// ---------------- Middlewares and Side Effects --------------
const getCategoriesFromAPIMiddleware = (store) => (next) => (action) => {
  if (action.type === TRIGGER_STORE) {
    if (firstLoadState) {
      firstLoadState = false;
      fetch('/getCategories', {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json())
        .then((json) => store.dispatch(updateProductsWithAPI(json)));
    }
  }
  next(action);
};
const getProductsFromAPIMiddleware = (store) => (next) => (action) => {
  if (action.type === TRIGGER_PRODUCTS) {
    fetch(`/getProdWithId/${action.payload}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(getProducts(json)));
  }
  next(action);
};
const getItemsFromAPIMiddleware = (store) => (next) => (action) => {
  if (action.type === SET_PRODUCT_HEADER) {
    fetch(`/getItemWithId/${action.payload.id}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
      .then((json) => store.dispatch(getPicker(json)));
  }
  next(action);
};
const addItemToProductMiddleware = (store) => (next) => (action) => {
  if (action.type === BUILD_ITEM) {
    store.dispatch(appendItemToProduct(action.payload));
  }
  next(action);
};
const addFinalProductHeaderMiddleware = (store) => (next) => (action) => {
  if (action.type === SET_PRODUCT_HEADER) {
    store.dispatch(setFinalProductHeader(action.payload.header));
  }
  next(action);
};
// ---------------- Exports --------------
export {
  // ------ Reducers -------
  switchReducer,
  storemainReducer,
  storeSecondaryReducer,
  storePickerReducer,
  itemPickerReducer,
  itemBuildReducer,
  productBuildReducer,
  // ------ Actions --------
  swithItemPicker,
  triggerStore,
  triggerProducts,
  triggerPicker,
  getProducts,
  getPicker,
  updateProductsWithAPI,
  opentItemPicker,
  setProductHeader,
  buildItem,
  setItemHeader,
  // ---- Middlewares -----
  getCategoriesFromAPIMiddleware,
  getProductsFromAPIMiddleware,
  getItemsFromAPIMiddleware,
  addItemToProductMiddleware,
  addFinalProductHeaderMiddleware,
};
