import axios from 'axios';
import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

const productsRequest = () => ({
  type: PRODUCT_DETAILS_REQUEST,
});

const productRequestSuccess = (data) => ({
  type: PRODUCT_DETAILS_SUCCESS,
  payload: data,
});

const productRequestFail = (error) => ({
  type: PRODUCT_DETAILS_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch(productsRequest());
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(productRequestSuccess(data));
  } catch (error) {
    dispatch(productRequestFail(error));
  }
};
