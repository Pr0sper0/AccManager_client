import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import transactionReducer from "./transactionReducer";

export default combineReducers({
  errors: errorReducer,
  transaction: transactionReducer
});
