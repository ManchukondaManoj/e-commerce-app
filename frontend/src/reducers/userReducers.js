import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from '../constants/userConstants';

const initialState = {
  userInfo: null,
  fetching: false,
  error: false,
};
export const userLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, fetching: true };

    case USER_LOGIN_SUCCESS:
      return { ...state, fetching: false, userInfo: action.payload };

    case USER_LOGIN_FAIL:
      return {
        userInfo: null,
        fetching: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const registerIntialState = {
  fetching: false,
  error: false,
  userInfo: null,
};

export const userRegisterReducer = (state = registerIntialState, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, fetching: true };

    case USER_REGISTER_SUCCESS:
      return { ...state, fetching: false, userInfo: action.payload };

    case USER_REGISTER_FAIL:
      return {
        userInfo: null,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
