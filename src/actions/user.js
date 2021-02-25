import axios from "axios";
import {
  USER_JOIN_FAILURE,
  USER_JOIN_REQUEST,
  USER_LOGIN_REQUEST,
} from "../reducers/user";

export const addUser = (info) => async (dispatch) => {
  dispatch({ type: USER_JOIN_REQUEST });
  try {
    //   const result = await axios.post();
    setTimeout(() => {
      dispatch(info);
      console.log(info);
    }, 3000);
  } catch (err) {
    console.error(err);
    dispatch({
      type: USER_JOIN_FAILURE,
      error: err,
    });
  }
};

export const login = (info) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    setTimeout(() => dispatch(info), 3000);
  } catch (err) {}
};
