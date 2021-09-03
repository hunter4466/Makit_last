import {
  createStore, compose, combineReducers, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import {
  switchReducer,
  storemainReducer,
  storeSecondaryReducer,
  storePickerReducer,
  itemPickerReducer,
  itemBuildReducer,
  productBuildReducer,
  getCategoriesFromAPIMiddleware,
  getProductsFromAPIMiddleware,
  getItemsFromAPIMiddleware,
  addItemToProductMiddleware,
  addFinalProductHeaderMiddleware,
} from './store/store';
import { cartReducer } from './cart/cart';

const reducer = combineReducers({
  switchReducer,
  storemainReducer,
  storeSecondaryReducer,
  storePickerReducer,
  itemPickerReducer,
  itemBuildReducer,
  productBuildReducer,
  cartReducer,
});

const composedEnhancer = compose(
  applyMiddleware(getCategoriesFromAPIMiddleware),
  applyMiddleware(getProductsFromAPIMiddleware),
  applyMiddleware(getItemsFromAPIMiddleware),
  applyMiddleware(addItemToProductMiddleware),
  applyMiddleware(addFinalProductHeaderMiddleware),
  applyMiddleware(logger),
);

const store = createStore(
  reducer,
  undefined,
  composedEnhancer,
);

export default store;
