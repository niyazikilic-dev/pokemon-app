import { SET_ALERT, CLEAR_ALERT } from "../action/types";

const initialState = {
  alert: {
    text: "",
    status: "",
  },
  isAlertShow: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return {
        ...state,
        alert: payload,
        isAlertShow: true,
      };

    case CLEAR_ALERT:
      return {
        ...state,
        alert: {
          text: "",
          status: "",
        },
        isAlertShow: false,
      };

    default:
      return state;
  }
}
