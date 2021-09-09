import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
// ----------- STORE IMPORTS -----------
import {
  // --- Reducers --
  storeSwitchReducer,
  storemainReducer,
  storeSecondaryReducer,
  storePickerReducer,
  itemPickerReducer,
  itemBuildReducer,
  productBuildReducer,
  // --- Middlewares --
  getCategoriesFromAPIMiddleware,
  getProductsFromAPIMiddleware,
  getItemsFromAPIMiddleware,
  addItemToProductMiddleware,
  addFinalProductHeaderMiddleware,
} from './store/store';
// ----------- CART IMPORTS -----------
import {
  // --- Reducers --
  cartReducer,
  cartSwitchReducer,
  cartStorePickerReducer,
  cartItemPickerReducer,
  // --- Middlewares --
} from './cart/cart';

const reducer = combineReducers({
  // ------------ Store Reducers -----
  storeSwitchReducer,
  storemainReducer,
  storeSecondaryReducer,
  storePickerReducer,
  itemPickerReducer,
  itemBuildReducer,
  productBuildReducer,
  // ----------- Cart Reducers ------
  cartReducer,
  cartSwitchReducer,
  cartStorePickerReducer,
  cartItemPickerReducer,
});

const composedEnhancer = compose(
  // ------------ Store Middlewares -----
  applyMiddleware(getCategoriesFromAPIMiddleware),
  applyMiddleware(getProductsFromAPIMiddleware),
  applyMiddleware(getItemsFromAPIMiddleware),
  applyMiddleware(addItemToProductMiddleware),
  applyMiddleware(addFinalProductHeaderMiddleware),
  // ------------ Cart Middlewares -----

  // ------------- Logger --------------
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
