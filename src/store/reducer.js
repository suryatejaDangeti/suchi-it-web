import { combineReducers } from "redux";
import { customerReducer } from "../modules/customer/customer";
export const rootReducer = combineReducers({
    customer : customerReducer,
});