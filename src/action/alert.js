import { SET_ALERT, CLEAR_ALERT } from "./types";

export const setAlert = (data) => async (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: data,
  });
};

export const clearAlert = (data) => async (dispatch) => {
  dispatch({
    type: CLEAR_ALERT,
  });
};
