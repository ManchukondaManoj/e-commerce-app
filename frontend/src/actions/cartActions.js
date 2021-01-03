import axios from 'axios';

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartAddItem = (data) => ({
  type: CART_ADD_ITEM,
  payload: data,
});

export const removeItemFromCart = (data) => ({
  type: CART_REMOVE_ITEM,
  payload: data,
});

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const obj = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  };
  dispatch(cartAddItem(obj));

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  dispatch(removeItemFromCart(productId));

  localStorage.setItem('cartItems', getState().cart.cartItems);
};
