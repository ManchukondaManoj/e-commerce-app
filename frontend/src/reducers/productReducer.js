import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/productConstants';

const initialState = {
  products: [],
  fetching: false,
  error: false,
};
export const productListReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, fetching: true };

    case PRODUCT_LIST_SUCCESS:
      return { ...state, fetching: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return {
        products: [],
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
