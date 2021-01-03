import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReduer from './reducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
};
const middleWare = [thunk];
const store = createStore(
  rootReduer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
