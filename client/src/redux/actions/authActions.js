import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../../constants/actionTypes";
import { BASE_URL } from '../store';

// LOGIN

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response?.data?.message || error.message });
    }
  };

// SIGNUP
export const signup = (formData) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post(`${BASE_URL}/auth/signup`, formData, config);
    dispatch({ type: SIGNUP_SUCCESS, payload: data.data });
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    dispatch({ type: SIGNUP_FAIL, payload: errorMessage });
  }
};