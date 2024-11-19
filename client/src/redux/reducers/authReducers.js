// client/src/redux/reducers/authReducers.js
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
  } from "@/constants/actionTypes";
  
  const initialState = {
    loading: false,
    userInfo: null,
    role: null,
    error: null,
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        return { ...state, loading: true };
      case LOGIN_SUCCESS:
        return { ...state, loading: false, userInfo: action.payload.user, role: action.payload.user.role };
      case LOGIN_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };