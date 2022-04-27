import { combineReducers } from "redux";
import currencyReducer from "./currencies";

const reducers = combineReducers({
  currencies: currencyReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;