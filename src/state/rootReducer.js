import { combineReducers } from "redux";
import modalReducer from "./modalShop/modalReducers";
import alertReducer from "./alert/alertReducers";

const reducers = combineReducers({
  modal: modalReducer,
  alert: alertReducer,
});
export default reducers;
