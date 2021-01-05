import axios from 'axios';
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/userConstants';

const loginRequest = () => ({
  type: USER_LOGIN_REQUEST,
});

const loginRequestSuccess = (data) => ({
  type: USER_LOGIN_SUCCESS,
  payload: data,
});

const loginRequestFail = (error) => ({
  type: USER_LOGIN_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const userRegisterRequest = () => ({
  type: USER_REGISTER_REQUEST,
});

const userRegisterSuccess = (data) => ({
  type: USER_REGISTER_SUCCESS,
  payload: data,
});

const userRegisterFail = (error) => ({
  type: USER_REGISTER_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const userLogout = () => ({
  type: USER_LOGOUT,
});

const userDetailsRequest = () => ({
  type: USER_DETAILS_REQUEST,
});

const userDetailsSuccess = (data) => ({
  type: USER_DETAILS_SUCCESS,
  payload: data,
});

const userDetailsFail = (error) => ({
  type: USER_DETAILS_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

const updateUserProfileRequest = () => ({
  type: USER_UPDATE_PROFILE_REQUEST,
});

const updateUserProfileSuccess = (data) => ({
  type: USER_UPDATE_PROFILE_SUCCESS,
  payload: data,
});

const updateUserProfileFail = (error) => ({
  type: USER_UPDATE_PROFILE_FAIL,
  payload:
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
});

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const payload = {
      method: 'POST',
      data: {
        email,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios('/api/users/login', payload);
    dispatch(loginRequestSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(loginRequestFail(error));
  }
};

export const register = (email, password, name) => async (dispatch) => {
  try {
    dispatch(userRegisterRequest());
    const payload = {
      method: 'POST',
      data: {
        email,
        password,
        name,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios('/api/users/register', payload);
    dispatch(userRegisterSuccess(data));
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch(userRegisterFail(error));
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(userLogout());
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch(userDetailsRequest());
    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await axios.get(`/api/users/${id}`, options);
    dispatch(userDetailsSuccess(data));
  } catch (error) {
    dispatch(userDetailsFail(error));
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch(updateUserProfileRequest());
    const {
      userLogin: {
        userInfo: { token },
      },
    } = getState();
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: user,
    };
    const { data } = await axios.get(`/api/users/profile`, options);
    dispatch(updateUserProfileSuccess(data));
  } catch (error) {
    dispatch(updateUserProfileFail(error));
  }
};
