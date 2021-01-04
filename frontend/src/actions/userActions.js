import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
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
