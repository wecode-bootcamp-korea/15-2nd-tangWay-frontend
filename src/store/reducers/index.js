import { combineReducers } from "redux";
import bookingReducer from "./bookingReducer";
import signupReducer from "./signupReducer";

export default combineReducers({ bookingReducer, signupReducer });
