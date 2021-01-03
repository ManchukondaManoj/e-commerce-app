import { combineReducers } from 'redux';
import { productListReducer } from './productReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { cartReducer } from './cartReducers';

const rootReduer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
});

export default rootReduer;
