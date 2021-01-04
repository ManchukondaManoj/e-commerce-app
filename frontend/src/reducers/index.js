import { combineReducers } from 'redux';
import { productListReducer } from './productReducer';
import { productDetailsReducer } from './productDetailsReducer';
import { cartReducer } from './cartReducers';
import { userLoginReducer, userRegisterReducer } from './userReducers';

const rootReduer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReduer;
