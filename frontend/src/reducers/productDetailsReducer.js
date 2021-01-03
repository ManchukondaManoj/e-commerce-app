import {
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../constants/productConstants';

const initialState = {
  product: {
    reviews: [],
  },
  fetching: false,
  error: false,
};
export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, fetching: true };

    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, fetching: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return {
        product: {
          reviews: [],
        },
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
