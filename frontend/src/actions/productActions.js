import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

const productsRequest = () => ({
  type: PRODUCT_LIST_REQUEST,
});

const productRequestSuccess = (data) => ({
  type: PRODUCT_LIST_SUCCESS,
  payload: data,
});

const productRequestFail = (error) => ({
  type: PRODUCT_LIST_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const listProducts = () => async (dispatch) => {
  try {
    dispatch(productsRequest());
    const { data } = await axios.get('/api/products');
    dispatch(productRequestSuccess(data));
  } catch (error) {
    dispatch(productRequestFail(error));
  }
};
