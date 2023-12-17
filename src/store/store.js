import {createStore} from "redux";
// import contact reducer function here
import contacts from "../redux/reducers/contactReducer";
import user from "../redux/reducers/userReducer";
import { combineReducers } from "redux";

// combine the reducer functions here
const result = combineReducers({
  contacts,
  user
})

// add the root reducer function to store here
export const store = createStore(result);
