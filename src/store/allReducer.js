import { combineReducers } from "redux";

import authReducer from "./auth/authReducer";
import todoReducer from "./todo/todoReducer";

export default combineReducers({
  auth: authReducer,
  todo: todoReducer
});
