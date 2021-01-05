import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
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

const userProfileState = {
  fetching: false,
  error: false,
  user: {},
};

export const userDetailsReducer = (state = userProfileState, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, fetching: true };

    case USER_DETAILS_SUCCESS:
      return { ...state, fetching: false, user: action.payload };

    case USER_DETAILS_FAIL:
      return {
        user: null,
        fetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const updateUserObj = {
  fetching: false,
  error: false,
  userInfo: {},
  success: false,
};

export const userProfileUpdateReducer = (state = updateUserObj, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, fetching: true };

    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        success: true,
        userInfo: action.payload,
      };

    case USER_UPDATE_PROFILE_FAIL:
      return {
        user: null,
        fetching: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
