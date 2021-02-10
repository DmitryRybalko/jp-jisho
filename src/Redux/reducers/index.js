import { combineReducers } from "redux";
import { searchReducer } from "./searchForWordR";

export const rootReducer = combineReducers({
  word: searchReducer,
});
