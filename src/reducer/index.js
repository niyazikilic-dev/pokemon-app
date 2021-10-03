import { combineReducers } from "redux";

import pokemon from "./pokemon";
import alert from "./alert";

export default combineReducers({
  pokemon,
  alert,
});
